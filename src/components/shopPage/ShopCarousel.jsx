import React, { useMemo, useState, useEffect } from "react";
import "./ShopCarousel.css";

const PLANS = [
  { id: 1, url: "/images/card1.png" },
  { id: 2, url: "/images/card2.png" },
  { id: 3, url: "/images/card3.png" },
];

const ShopCarousel = () => {
  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );
  const isCarousel = vw < 1024; // 👈 đổi breakpoint

  useEffect(() => {
    const onR = () => setVw(window.innerWidth);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  // Carousel state
  const [index, setIndex] = useState(1); // mặc định giữa
  useEffect(() => {
    // khi về grid (>=1024) thì reset về 0
    if (!isCarousel) setIndex(0);
    // khi chuyển sang carousel mà index vượt max, cũng clamp
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
            <div key={p.id} className="shop-card">
              <img src={p.url} alt={`card-${p.id}`} />
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
                  <div className="shop-card">
                    <img src={p.url} alt={`card-${p.id}`} />
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
}
export default ShopCarousel;