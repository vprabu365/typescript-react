import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Shop/ShopContextProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getItemCount } = useContext(ShopContext);
  const cartItemCount: any = getItemCount();

  const [links] = useState([
    {
      id: crypto.randomUUID(),
      route: "/search",
      name: "Search",
    },
    {
      id: crypto.randomUUID(),
      route: "/shop",
      name: "Shop",
    },
    {
      id: crypto.randomUUID(),
      route: "/sidebar",
      name: "Sidebar",
    },
  ]);
  return (
    <nav>
      <Link to="/" className="title" onClick={() => setMenuOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house custom-home"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
        </svg>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.route} onClick={() => setMenuOpen(false)}>
                {link.name}
              </NavLink>
            </li>
          );
        })}
        <NavLink to="/cart" className="cart" onClick={() => setMenuOpen(false)}>
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart custom-cart-icon"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <span>{cartItemCount > 0 && cartItemCount}</span>
          </>
        </NavLink>
        <></>
      </ul>
    </nav>
  );
};

export default Navbar;
