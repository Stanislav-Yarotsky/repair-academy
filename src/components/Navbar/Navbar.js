import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.svg" alt="Логотип" />
        <span>АКАДЕМИЯ РЕМОНТА</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#portfolio">ПОРТФОЛИО</a>
        </li>
        <li>
          <a href="#reviews">ОТЗЫВЫ</a>
        </li>
        <li>
          <a href="#contacts">КОНТАКТЫ</a>
        </li>
      </ul>
      <button className="navbar-button">ЗАПОЛНИТЬ ЗАЯВКУ</button>
    </nav>
  );
}

export default Navbar;
