function MenuButton({ onMenu }) {
  return (
    <button
      onClick={onMenu}
      className="header__menu"
      type="button"
      aria-label="Open menu"
    >
      <img src="./src/assets/bars.svg" alt="menu icon" />
    </button>
  );
}

export default MenuButton;
