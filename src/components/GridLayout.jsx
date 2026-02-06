import { Outlet } from "react-router";
import Header from "./Header";
import MenuList from "./MenuList";
import MenuButton from "./MenuButton";
import BlurLayout from "./BlurLayout";
import Menu from "./Menu";

function GridLayout({ handleMenu, openMenu }) {
  return (
    <section className="grid-layout">
      <Header>
        <MenuButton onMenu={handleMenu} />
        <MenuList />
      </Header>
      <Outlet />

      {openMenu && (
        <BlurLayout>
          <Menu onMenu={handleMenu} />
        </BlurLayout>
      )}
    </section>
  );
}

export default GridLayout;
