import React from "react";
import "../../styles/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

// i18n
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="site-footer">

      <div className=" footer-dec left"></div>
      <div className="footer-dec right"></div>
      <div className="footer-cloud">
        <img src="/images/bg-components/footer.png" alt="cloud" />
      </div>
      <div className="footer-top custom-container">
        {/* Social (cột trái) */}
        <ul className="social">
          <li>
            <a href="https://x.com/?lang=vi" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>

        {/* Lưới cột nội dung */}
        <div className="footer-cols">
          <div className="fcol">
            <h5>{t("pages.title")}</h5>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} end>
                  {t("pages.home")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/info" className={({ isActive }) => (isActive ? "active" : "")}>
                  {t("pages.info")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
                  {t("pages.shop")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/tos" className={({ isActive }) => (isActive ? "active" : "")}>
                  {t("pages.tos")}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="fcol">
            <h5>{t("platform.title")}</h5>
            <ul>
              <li>{t("platform.android")}</li>
              <li>{t("platform.ios")}</li>
              <li>{t("platform.windows")}</li>
              <li>{t("platform.macos")}</li>
            </ul>
          </div>

          <div className="fcol">
            <h5>{t("support.title")}</h5>
            <ul>
              <li>{t("support.request")}</li>
              <li>{t("support.contact")}</li>
            </ul>
          </div>

          <div className="fcol subscribe">
            <h5>{t("subscribe.title")}</h5>
            <div className="sub-input">
              <input type="email" placeholder={t("subscribe.placeholder")} name="emailInput" />
              <button aria-label="Send">➤</button>
            </div>
            <p className="hint">{t("subscribe.hint")}</p>
          </div>
        </div>
      </div>

      <div className="footer-divider custom-container" />

      <div className="footer-bottom custom-container">
        <div className="brand">JUNIPER</div>
        <button className="getnow">{t("getNow")}</button>
      </div>
    </footer>
  );
};
export default Footer;
