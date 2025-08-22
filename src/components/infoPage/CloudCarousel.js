import React, { useEffect, useMemo, useState } from "react";
import "./CloudCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faArrowsRotate,
  faTableCells,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

/* Ảnh đặt trong public/images/... */
const CLOUD_ITEMS = [
  {
    img: "/images/cloud.jpg",
    icon: faCircleCheck,
    text: "Accurate and reliable weather forecasts powered by cloud computing",
  },
  {
    down: true,
    img: "/images/cloud2.png",
    icon: faArrowsRotate,
    text:
      "Compatible with various devices and platforms, including smart home systems",
  },
  {
    img: "/images/cloud3.png",
    icon: faTableCells,
    text:
      "Interactive and user-friendly interface with stunning graphics and animations",
  },
  {
    down: true,
    img: "/images/cloud4.png",
    icon: faBell,
    text:
      "Customizable alerts and notifications for different weather conditions",
  },
];

export default function CloudsCarousel() {
  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onR = () => setVw(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  const isCarousel = vw < 744;

  // Với carousel (<744px): luôn 1 item/khung
  const perView = 1;

  // Khi là grid (>=744px) không dùng index; khi là carousel: maxIndex = length - 1
  const maxIndex = useMemo(
    () => (isCarousel ? CLOUD_ITEMS.length - 1 : 0),
    [isCarousel]
  );

  useEffect(() => {
    if (!isCarousel) setIndex(0);
    else if (index > maxIndex) setIndex(maxIndex);
  }, [isCarousel, maxIndex, index]);

  const next = () => setIndex((v) => Math.min(maxIndex, v + 1));
  const prev = () => setIndex((v) => Math.max(0, v - 1));

  // ===== LƯỚI >= 744px =====
  if (!isCarousel) {
    return (
      <div className="clouds-grid">
        {CLOUD_ITEMS.map((it, i) => (
          <article
            key={i}
            className={`cloud-item ${it.down ? "down" : ""}`}
            style={{ backgroundImage: `url(${it.img})` }}
            aria-label={it.text}
          >
            <FontAwesomeIcon icon={it.icon} className="cloud-icon" />
            <p className="cloud-text">{it.text}</p>
          </article>
        ))}
      </div>
    );
  }

  // ===== CAROUSEL < 744px — 1 item/khung =====
  return (
    <div className="clouds-carousel">
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
          style={{
            transform: `translateX(calc(-${index} * (100% / ${perView})))`,
            "--per": perView,
          }}
        >
          {CLOUD_ITEMS.map((it, i) => (
            <article
              key={i}
              className={`cloud-item slide ${it.down ? "down" : ""}`}
              style={{ backgroundImage: `url(${it.img})` }}
              aria-label={it.text}
            >
              <FontAwesomeIcon icon={it.icon} className="cloud-icon" />
              <p className="cloud-text">{it.text}</p>
            </article>
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
}
