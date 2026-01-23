function Header({ onMenu }) {
  return (
    <header className="header">
      <img className="header__logo" src="./src/assets/Logo.svg" alt="logo" />

      <button
        onClick={onMenu}
        className="header__menu"
        type="button"
        aria-label="Open menu"
      >
        <img src="./src/assets/bars.svg" alt="menu icon" />
      </button>
    </header>
  );
}

export default Header;
