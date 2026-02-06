import { useEffect, useRef, useState } from "react";
import CardImage from "../components/feed/CardImage";
import Search from "../components/feed/Search";

const images = [
  { image: "anime.webp", dominantColor: "#8D2F68", ratio: 1.28 },
  { image: "art.webp", dominantColor: "#FED90D", ratio: 1 },
  { image: "boys.webp", dominantColor: "#E57D17", ratio: 1.98 },
  { image: "cats.webp", dominantColor: "#D5B398", ratio: 1 },
  { image: "dog.webp", dominantColor: "#CEB68A", ratio: 1.25 },
  { image: "girl1.webp", dominantColor: "#CEB68A", ratio: 1.2 },
  { image: "girl2.webp", dominantColor: "#CEB68A", ratio: 1.3 },
  { image: "icecream.webp", dominantColor: "#CEB68A", ratio: 1.3 },
];

const GRID_GAP = 24;
const CARD_INFO_HEIGHT = 36;

function Feed() {
  const [collections, setCollections] = useState(images);
  const [layoutItems, setLayoutItems] = useState([]);
  const containerRef = useRef(null);

  // Asynchronous, it has access to the DOM
  useEffect(() => {
    if (!containerRef.current) return;

    function computeLayout() {
      const containerWidth = containerRef.current.clientWidth;
      const columnCount =
        containerWidth < 520
          ? 1
          : containerWidth < 792
            ? 2
            : containerWidth < 1054
              ? 3
              : 4;

      const columnHeights = Array(columnCount).fill(0);
      const columnWidth =
        (containerWidth - GRID_GAP * (columnCount - 1)) / columnCount;

      const itemsLayout = collections.map((item) => {
        const columnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        const height = columnWidth * item.ratio;
        const coord = {
          x: columnIndex * (columnWidth + GRID_GAP),
          y: columnHeights[columnIndex],
        };

        columnHeights[columnIndex] += height + GRID_GAP + CARD_INFO_HEIGHT;

        return {
          ...item,
          width: columnWidth,
          x: coord.x,
          y: coord.y,
        };
      });

      setLayoutItems(itemsLayout);

      containerRef.current.style.height = `${Math.max(...columnHeights)}px`;
    }

    const observer = new ResizeObserver(() => {
      computeLayout();
    });

    observer.observe(containerRef.current);

    computeLayout();

    return () => {
      observer.disconnect();
    };
  }, [collections]);

  return (
    <section className="feed">
      <div className="feed__container">
        <Search />

        <div className="container-images" ref={containerRef}>
          {layoutItems.map((item) => (
            <CardImage
              key={item.image}
              src={item.image}
              style={{
                width: `${item.width}px`,
                transform: `translate(${item.x}px, ${item.y}px)`,
                backgroundColor: item.dominantColor,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feed;
