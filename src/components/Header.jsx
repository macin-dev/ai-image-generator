function Header({ children }) {
  return (
    <header className="header">
      <img className="header__logo" src="./src/assets/Logo.svg" alt="logo" />
      <nav className="header__nav">{children}</nav>
    </header>
  );
}

export default Header;
