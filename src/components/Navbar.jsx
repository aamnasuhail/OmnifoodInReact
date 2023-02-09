import LinkItem from "./LinkItem";
import logo from "./img/omnifood-logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItem = [
    {
      link: "/",
      value: "Home",
    },
    {
      link: "/about",
      value: "About",
    },
    {
      link: "/product",
      value: "Product",
    },
    {
      link: "/contact",
      value: "Contact",
    },
  ];
  return (
    <header className="header">
      <Link to="/">
        {" "}
        <img src={logo} alt="Omnifood logo" class="logo" />
      </Link>

      <nav className="main-nav">
        <ul className="main-nav-list">
          {navItem.map((item, idx) => {
            return <LinkItem key={idx} value={item.value} link={item.link} />;
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
