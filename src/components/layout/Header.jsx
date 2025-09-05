import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Layout.css";
import { Segmented } from "antd";
const Header = () => {
  // chỉ định namespace "common"
  const { t, i18n } = useTranslation("common");
  const [lang, setLang] = useState(i18n.language || "vi");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // cập nhật khi ngôn ngữ thay đổi
  useEffect(() => {
    const handleLangChange = (lng) => setLang(lng);
    i18n.on("languageChanged", handleLangChange);

    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, [i18n]);


  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar custom-container">
        <div className="container-xxl">
          {/* Logo */}
          <NavLink className="navbar-brand fw-bold text-white" to="/">
            JUNIPER
          </NavLink>

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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNav"
          >
            <ul className="navbar-nav gap-3 align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className="nav-link"
                  style={{ fontSize: "16px" }}
                >
                  {t("home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/info"
                  className="nav-link"
                  style={{ fontSize: "16px" }}
                >
                  {t("info")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/shop"
                  className="nav-link"
                  style={{ fontSize: "16px" }}
                >
                  {t("shop")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/tos"
                  className="nav-link"
                  style={{ fontSize: "16px" }}
                >
                  {t("tos")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/forecaster"
                  className="nav-link"
                  style={{ fontSize: "16px" }}
                >
                  {t("forecaster")}
                </NavLink>
              </li>
              {/* Nút kính lúp */}
              <li className="nav-item">
                <img
                  alt="nav-icon"
                  src="/images/button-search.png"
                  className="searchBtn"
                />
              </li>
              <li className="nav-item">
                <Segmented
                  options={[
                    { label: "EN", value: "en" },
                    { label: "VIE", value: "vi" },
                  ]}
                  value={lang}
                  onChange={(val) => changeLanguage(val)}
                  className="lang-segmented"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
