import { useState } from "react";
import cx from "classnames";

import { Icon } from "assets";
import "./style.scss";

const Navbar = () => {
  const [currentElement, setCurrentElement] = useState("home");

  return (
    <div className="navbar">
      <div className="logo">D&A Hostel</div>
      <div className="nav-content">
        <div
          className={cx({ current: currentElement === "home" })}
          data-element="home"
          onClick={(e) => setCurrentElement(e.currentTarget.dataset.element!)}
        >
          Home
        </div>
        <div
          className={cx({ current: currentElement === "event" })}
          data-element="event"
          onClick={(e) => setCurrentElement(e.currentTarget.dataset.element!)}
        >
          Event
        </div>
        <div
          className={cx({ current: currentElement === "news" })}
          data-element="news"
          onClick={(e) => setCurrentElement(e.currentTarget.dataset.element!)}
        >
          News & Bulletin
        </div>
        <div
          className={cx({ current: currentElement === "about" })}
          data-element="about"
          onClick={(e) => setCurrentElement(e.currentTarget.dataset.element!)}
        >
          About
        </div>
      </div>
      <div className="avatar">
        <img src={Icon.people} className="" alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
