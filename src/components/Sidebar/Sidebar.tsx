import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import "./sidebar.css";
import { links } from "./data";
import logo from "./logo.svg";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { showSideBar, openSideBar, closeSideBar } = useGlobalContext();

  // const [showSideBar, setShowSideBar] = useState(false);
    // const [sidebarHeight, setSidebarHeight] = useState(0);
    // const sidebarRef = useRef(null);

    // useEffect(() => {
    //   if (sidebarRef.current) {
    //     const { scrollHeight } = sidebarRef.current;
    //     setSidebarHeight(scrollHeight);
    //   }
    // }, []);

  return (
    <aside className="main-container">
      <button
        className="menu-toggle"
        onClick={openSideBar}
      >
        <RxHamburgerMenu />
      </button>
      <div
        className={`sidebar ${showSideBar ? "sidebar-open" : ""}`}
        // style={{ height: `${sidebarHeight}px` }}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="coding addict" />
          <button
            className="close-btn"
            onClick={closeSideBar}
            // onClick={() => setShowSideBar(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className={`links`}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>
                  {link.icon}
                  <span className="link-text">{link.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
