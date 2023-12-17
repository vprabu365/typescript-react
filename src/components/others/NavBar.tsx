import React, { useState } from "react";

type Props = {
  items: string[];
  style: string;
  // onSelectItem: (item: string) => void;
};

const NavBar = ({ items, style }: Props) => {
  const [isHoverIndex, setIsHoverIndex] = useState(-1);

  const handleChange = () => {
    setIsHoverIndex(-1);
  };

  return (
    <nav className="navbar--container">
      {items.map((item, index) => (
        <li
          key={item}
          onMouseEnter={() => {
            setIsHoverIndex(index);
          }}
          onMouseLeave={() => {
            handleChange();
            // onSelectItem(item);
          }}
          style={{ color: isHoverIndex === index ? style : "" }}
        >
          {item}
        </li>
      ))}
    </nav>
  );
};

export default NavBar;
