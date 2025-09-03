import React, { useState } from "react";
import "../styles/ShopPage.css";
import { Link } from "react-router-dom";
import ShopCarousel from "../components/shopPage/ShopCarousel";
import { useTranslation, Trans } from "react-i18next";

const ShopPage = () => {
  const { t } = useTranslation("shop"); // namespace "shop"

  // gallery array
  const galleryItems = [
    { src: "/images/list-item1.png", alt: "preview 1", extraClass: "" },
    { src: "/images/list-item2.png", alt: "preview 2", extraClass: "" },
    { src: "/images/list-item3.png", alt: "preview 3", extraClass: "third" },
    { src: "/images/list-item4.png", alt: "preview 4", extraClass: "fourth" },
  ];

  // button state
  const [flipped, setFlipped] = useState(false);
  const flip = () => setFlipped(!flipped);

  return (
    <main className="product-page">
      <div className=" ">
        {/* HERO */}
        <section className="pp-hero custom-container">
          <div className="pp-hero-media">
            <img src="/images/bigProduct.png" alt="Atmos app preview" />
          </div>

          <div className="pp-hero-text">
            <div className="pp-title">{t("title")}</div>
            <div className="pp-lead">{t("lead")}</div>

            <div className="pp-cta">
              <button className="btn-custom btn-buy">{t("buyNow")}</button>
              <button className="btn-custom btn-cart">{t("addToCart")}</button>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="pp-gallery custom-container">
          {galleryItems.map((item, index) => (
            <div className={`thumb ${item.extraClass}`} key={index}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </section>

        <section className="cloud-shop">
          <img alt="cloud" src="/images/bg-components/shop.svg" />
        </section>

        {/* SHOW MORE */}
        <div className="btn-show text-center">
          <Link to="/shop" className="pp-more mt-4 mb-4">
            {t("showAll")}
          </Link>
        </div>

        {/* PLAN */}
        <section className="pp-plan">
          <div className="plan-text text-center">
            <div className="plan-title">
              <Trans i18nKey="plansTitle" ns="shop">
                We offer <span className="text-dark">three plans</span> to suit your needs and budget
              </Trans>
            </div>
            <div className="plan-desc text-dark mt-3 mb-3">{t("plansDesc")}</div>
            <div className="text-btn">
              <div className="btn-desc">{t("yearly")}</div>
              <img
                alt="button select"
                src="/images/switchBtn.png"
                onClick={flip}
                style={{ transform: flipped ? "scaleX(-1)" : "scaleX(1)" }}
              />
              <div className="btn-desc">{t("monthly")}</div>
            </div>
          </div>
        </section>

        <div className="carousel">
          <ShopCarousel />
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
