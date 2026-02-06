import { Link } from "react-router";

function MenuList() {
  return (
    <ul className="menu__list--md">
      <li className="menu__list-item--md menu__list-item--active">
        <Link to="/">
          <img src="/src/assets/Magic.svg" alt="two-star icon" />
        </Link>
      </li>

      <li className="menu__list-item--md">
        <Link to="explore">
          <img src="/src/assets/apps.svg" alt="box icon" />
        </Link>
      </li>

      <li className="menu__list-item--md">
        <Link to="history">
          <img
            src="/src/assets/Time_atack_duotone.svg"
            alt="Time atack duotone icon"
          />
        </Link>
      </li>

      <li className="menu__list-item--md">
        <Link to="collections">
          <img src="/src/assets/Folder_duotone_fill.svg" alt="Folder icon" />
        </Link>
      </li>
    </ul>
  );
}

export default MenuList;
