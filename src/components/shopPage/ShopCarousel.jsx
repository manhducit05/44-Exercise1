import React, { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ShopCarousel.css";

const PLANS = [
  {
    id: 1,
    titleKey: "plans.free.title",
    priceKey: "plans.free.price",
    featuresKey: [
      "plans.free.f1",
      "plans.free.f2",
      "plans.free.f3",
      "plans.free.f4",
    ],
    bg: "/images/left.png",
  },
  {
    id: 2,
    titleKey: "plans.couple.title",
    priceKey: "plans.couple.price",
    featuresKey: [
      "plans.couple.f1",
      "plans.couple.f2",
      "plans.couple.f3",
      "plans.couple.f4",
      "plans.couple.f5",
      "plans.couple.f6",
    ],
    bg: "/images/centre.png",
  },
  {
    id: 3,
    titleKey: "plans.pro.title",
    priceKey: "plans.pro.price",
    featuresKey: [
      "plans.pro.f1",
      "plans.pro.f2",
      "plans.pro.f3",
      "plans.pro.f4",
      "plans.pro.f5",
    ],
    bg: "/images/left.png",
  },
];

const ShopCarousel = () => {
  const { t } = useTranslation("shopCarousel");

  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  const isCarousel = vw < 1024;

  useEffect(() => {
    const onR = () => setVw(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  const [index, setIndex] = useState(1);
  useEffect(() => {
    if (!isCarousel) setIndex(0);
    else setIndex((v) => Math.min(v, PLANS.length - 1));
  }, [isCarousel]);

  const maxIndex = useMemo(() => PLANS.length - 1, []);
  const prev = () => setIndex((v) => Math.max(0, v - 1));
  const next = () => setIndex((v) => Math.min(maxIndex, v + 1));

  return (
    <section className="shop-carousel-sec">
      {/* GRID ≥1024px */}
      {!isCarousel && (
        <div className="shop-grid">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={`shop-card plan-${p.id}`}   // 👈 thêm class riêng
              style={{ backgroundImage: `url(${p.bg})` }}
            >
              <div className="head">
                <div className="plan-title">{t(p.titleKey)}</div>
                <p className="plan-price">{t(p.priceKey)}</p>
              </div>
              <div className="main">
                <ul className="plan-features">
                  {p.featuresKey.map((f, i) => (
                    <li key={i}>{t(f)}</li>
                  ))}
                </ul>
              </div>
              <div className="button">
                <button className="subscribe-btn">{t("plans.button")}</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CAROUSEL <1024px */}
      {isCarousel && (
        <div className="shop-carousel">
          <button
            className="nav prev"
            aria-label="Previous"
            onClick={prev}
            disabled={index === 0}
          >
            ‹
          </button>

          <div className="viewport">
            <div
              className="track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {PLANS.map((p) => (
                <div key={p.id} className="slide">
                  <div
                    className={`shop-card plan-${p.id}`}
                    style={{ backgroundImage: `url(${p.bg})` }}
                  >
                    <div className="head">
                      <div className="plan-title">{t(p.titleKey)}</div>
                      <p className="plan-price">{t(p.priceKey)}</p>
                    </div>
                    <div className="main">
                      <ul className="plan-features">
                        {p.featuresKey.map((f, i) => (
                          <li key={i}>{t(f)}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="button">
                      <button className="subscribe-btn">{t("plans.button")}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="nav next"
            aria-label="Next"
            onClick={next}
            disabled={index === maxIndex}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default ShopCarousel;
