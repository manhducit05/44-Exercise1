import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Layout.css";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "vi");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // cập nhật khi ngôn ngữ thay đổi
  useEffect(() => {
    i18n.on("languageChanged", (lng) => setLang(lng));
  }, [i18n]);

  const items = [
    {
      key: "en",
      label: <span onClick={() => changeLanguage("en")}>English</span>,
    },
    {
      key: "vi",
      label: <span onClick={() => changeLanguage("vi")}>Tiếng Việt</span>,
    },
  ];

  // map tên hiển thị
  const displayLang = lang === "en" ? "EN" : "VI";

  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar custom-container">
        <div className="container-xxl">
          {/* Logo */}
          <NavLink className="navbar-brand fw-bold text-white" to="/">JUNIPER</NavLink>

          {/* Toggle cho mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className="navbar-nav gap-3 align-items-center">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link" style={{ fontSize: "16px" }}>
                  {t("home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/info" className="nav-link" style={{ fontSize: "16px" }}>
                  {t("info")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link" style={{ fontSize: "16px" }}>
                  {t("shop")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tos" className="nav-link" style={{ fontSize: "16px" }}>
                  {t("tos")}
                </NavLink>
              </li>
              {/* Nút kính lúp */}
              <li className="nav-item">
                <img alt="nav-icon" src="/images/button-search.png" className="searchBtn" />
              </li>
              {/* Dropdown chọn ngôn ngữ */}
              <li className="nav-item">
                <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  trigger={["click"]}
                  getPopupContainer={(triggerNode) => triggerNode.parentNode}
                  overlayClassName="custom-dropdown"
                >
                  <Button className="lang-btn" type="text">
                    {displayLang} <DownOutlined style={{ fontSize: "12px", marginLeft: "4px" }} />
                  </Button>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
