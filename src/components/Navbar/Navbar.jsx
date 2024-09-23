import React from "react";
import "./Navbar.css";

const MenuLink = [
  {
    id: 1,
    title: "Catalog",
    Link: "/",
  },
  {
    id: 2,
    title: "How it Works",
    Link: "#",
    hasDropdown: true,
    dropdownLinks: [
      { id: 1, title: "How Printify Works", Link: "#" },
      { id: 2, title: "Print On Demand", Link: "#" },
      { id: 3, title: "Printify Quality Promise", Link: "#" },
      { id: 4, title: "What to Sell", Link: "#" },
    ],
  },
  {
    id: 3,
    title: "Pricing",
    Link: "#",
  },
  {
    id: 4,
    title: "Blog",
    Link: "#",
  },
  {
    id: 5,
    title: "Services",
    Link: "#",
    hasDropdown: true,
    dropdownLinks: [
      { id: 1, title: "Printify Studio", Link: "#" },
      { id: 2, title: "Printify Express Delivery", Link: "#" },
      { id: 3, title: "Transfer Products", Link: "#" },
      { id: 4, title: "Order In Bulk", Link: "#" },
      { id: 5, title: "Experts Program", Link: "#" },
    ],
  },
  {
    id: 6,
    title: "Use-Cases",
    Link: "#",
    hasDropdown: true,
    dropdownLinks: [
      { id: 1, title: "Merch for Fans", Link: "#" },
      { id: 2, title: "Merch For eCommerce", Link: "#" },
      { id: 3, title: "Merch For Enterprises", Link: "#" },
      { id: 4, title: "Grow Your Store", Link: "#" },
    ],
  },
  {
    id: 7,
    title: "Need help?",
    Link: "#",
    hasDropdown: true,
    dropdownLinks: [
      { id: 1, title: "Help Center", Link: "#" },
      { id: 2, title: "Contact", Link: "#" },
      { id: 3, title: "My Requests", Link: "#" },
    ],
  },
];

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img
          src="https://www.prunderground.com/wp-content/uploads/2017/09/Printify-press-logo-1.png"
          alt="Logo"
        />
      </div>
      <div className="Menu">
        <ul>
          {MenuLink.map((link) => (
            <li key={link.id} className={link.hasDropdown ? "dropdown" : ""}>
              <a href={link.Link}>
                {link.title}{" "}
                {link.hasDropdown && <span className="arrow">&#x25BC;</span>}
              </a>
              {link.hasDropdown && (
                <ul className="dropdown-menu">
                  {link.dropdownLinks.map((dropdownLink) => (
                    <li key={dropdownLink.id}>
                      <a href={dropdownLink.Link}>{dropdownLink.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="btns">
        <button className="Login">Log in</button>
        <button className="signup">SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;
