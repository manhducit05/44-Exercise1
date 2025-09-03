import React, { useEffect, useMemo, useState } from "react";
import "./CloudCarousel.css";
import { useTranslation } from "react-i18next";

const CLOUD_ITEMS = [
  { img: "/images/cloud.png", textKey: "items.0.text" },
  { down: true, img: "/images/cloud2.png", textKey: "items.1.text" },
  { img: "/images/cloud3.png", textKey: "items.2.text" },
  { down: true, img: "/images/cloud4.png", textKey: "items.3.text" }
];

const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const CloudsCarousel = () => {
  const { t } = useTranslation("clouds");

  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onR = () => setVw(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  const isTablet = vw >= 744 && vw < 1024;
  const isGrid = vw >= 1024;
  const isCarousel = !isGrid;

  const perSlideItems = isTablet ? 2 : 1;

  const slides = useMemo(() => {
    if (!isCarousel) return [CLOUD_ITEMS];
    return chunk(CLOUD_ITEMS, perSlideItems);
  }, [isCarousel, perSlideItems]);

  const maxIndex = isCarousel ? slides.length - 1 : 0;

  useEffect(() => {
    setIndex((v) => Math.max(0, Math.min(v, maxIndex)));
  }, [maxIndex]);

  const next = () => setIndex((v) => Math.min(maxIndex, v + 1));
  const prev = () => setIndex((v) => Math.max(0, v - 1));

  // Grid mode
  if (isGrid) {
    return (
      <div className="clouds-grid">
        {CLOUD_ITEMS.map((it, i) => (
          <article
            key={i}
            className={`cloud-item ${it.down ? "down" : ""}`}
            style={{ backgroundImage: `url(${it.img})` }}
            aria-label={t(it.textKey)}
          >
            <div className="cloud-content">
              {t(it.textKey)}
            </div>
          </article>
        ))}
      </div>
    );
  }

  // Carousel mode
  const tabletLayout = isTablet;

  return (
    <div className={`clouds-carousel ${tabletLayout ? "tablet" : ""}`}>
      <button
        className="cloud-nav prev"
        onClick={prev}
        aria-label="Previous"
        disabled={index === 0}
      >
        ‹
      </button>

      <div className="cloud-viewport">
        <div
          className="cloud-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((group, sIdx) => (
            <div className={`slide ${tabletLayout ? "slide-2col" : ""}`} key={sIdx}>
              {group.map((it, i) => (
                <article
                  key={i}
                  className={`cloud-item item-${sIdx}-${i} ${it.down ? "down" : ""}`}
                  style={{ backgroundImage: `url(${it.img})` }}
                  aria-label={t(it.textKey)}
                >
                  <div className="cloud-content">
                    {t(it.textKey)}
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        className="cloud-nav next"
        onClick={next}
        aria-label="Next"
        disabled={index === maxIndex}
      >
        ›
      </button>
    </div>
  );
};

export default CloudsCarousel;
