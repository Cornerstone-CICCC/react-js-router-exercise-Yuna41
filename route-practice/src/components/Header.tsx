import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav>
        <menu>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/contact-us">Contact</NavLink></li>
        </menu>
      </nav>
    </header>
  )
}

export default Header