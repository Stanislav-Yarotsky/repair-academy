import "./Navbar.css";
import Button from "../Button/Button";

function Navbar() {
  return (
    <div className="container">
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
        <Button variant="white" border="true" arrow="true">
          Заполнить заявку
        </Button>
      </nav>
    </div>
  );
}

export default Navbar;
