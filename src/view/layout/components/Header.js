import React, { useEffect, useState } from "react";
import Logo from "media/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const navigate = useNavigate();
  let location = useLocation();
  let pathname = location.pathname;

  const sidebar_data = [
    {
      id: 1,
      link: "/",
      name: "Tableau de bord",
    },
    {
      id: 2,
      link: "/formations",
      name: "Formations",
    },
    {
      id: 3,
      link: "/architects",
      name: "Architecture",
    },
    {
      id: 4,
      link: "/designs",
      name: "Design",
    },
    {
      id: 5,
      link: "/contact",
      name: "Contact",
    },
  ];

  const renderVisibleTab = () => {
    sidebar_data.forEach((item) => {
      if (pathname == item.link) {
        setSelectedMenu(item.id);
      }
    });
  };

  const handleClick = (item) => {
    setSelectedMenu(item.id);
    navigate(item.link);
  };

  useEffect(() => {
    renderVisibleTab();
  }, [selectedMenu]);

  const renderMenus = () => {
    return sidebar_data.map((item) => {
      return (
        <div
          className={
            "menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2 " +
            (item.id == selectedMenu ? "here show" : "")
          }
          onClick={() => handleClick(item)}
        >
          <span className="menu-link py-3">
            <span className="menu-title">{item.name}</span>
            <span className="menu-arrow d-lg-none" />
          </span>
        </div>
      );
    });
  };

  return (
    <div className="header">
      <div className="header-top-container  container-xxl sabi  d-flex flex-grow-1 flex-stack">
        <div className="d-flex align-items-center me-5">
          <div
            className="d-lg-none btn btn-icon btn-active-color-300 w-30px h-30px me-2"
            id="kt_header_menu_toggle"
          >
            <span className="svg-icon svg-icon-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.3"
                  d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <a href="/">
            <img
              alt="Logo"
              src={Logo}
              className="h-100px w-100px mb-10 mt-10"
            />
          </a>
        </div>
      </div>
      <div className="header-menu-container d-flex align-items-stretch flex-stack w-100">
        <div className="header-menu container-xxl flex-column align-items-stretch flex-lg-row">
          <div className="menu menu-column menu-lg-row menu-rounded menu-active-bg menu-title-gray-800 menu-state-primary menu-arrow-gray-500 fw-semibold my-5 my-lg-0 align-items-stretch flex-grow-1 px-2 px-lg-0">
            {renderMenus()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
