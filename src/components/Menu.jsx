function Menu() {
  return (
    <section className="menu" aria-label="Menu window">
      <button type="button" className="menu__close-btn">
        <img src="/src/assets/Close.svg" alt="close icon" />
      </button>

      <ul className="menu__list">
        <li className="menu__list-item menu__list-item--active">
          <a href="#">
            <img src="/src/assets/Magic.svg" alt="two-star icon" />
            Generate Image
          </a>
        </li>

        <li className="menu__list-item">
          <a href="#">
            <img src="/src/assets/apps.svg" alt="app icon" />
            Feed
          </a>
        </li>

        <li className="menu__list-item">
          <a href="#">
            <img
              src="/src/assets/Time_atack_duotone.svg"
              alt="time atack duotone icon"
            />
            History
          </a>
        </li>

        <li className="menu__list-item">
          <a href="#">
            <img
              src="/src/assets/Folder_duotone_fill.svg"
              alt="folder duotone icon"
            />
            Collection
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Menu;
