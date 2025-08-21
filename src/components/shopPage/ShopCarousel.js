import React, { useMemo, useState, useEffect } from "react";
import "./ShopCarousel.css";

const PLANS = [
    { id: 1, url: "/images/card1.png" },
    { id: 2, url: "/images/card2.png" },
    { id: 3, url: "/images/card3.png" },
];

export default function ShopCarousel() {
    const [vw, setVw] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1440
    );
    const isCarousel = vw < 744;

    useEffect(() => {
        const onR = () => setVw(window.innerWidth);
        window.addEventListener("resize", onR);
        return () => window.removeEventListener("resize", onR);
    }, []);

    // Carousel state
    const [index, setIndex] = useState(1); // mặc định hiển thị ảnh giữa
    useEffect(() => {
        if (!isCarousel) setIndex(0);
    }, [isCarousel]);

    const maxIndex = useMemo(() => PLANS.length - 1, []);
    const prev = () => setIndex((v) => Math.max(0, v - 1));
    const next = () => setIndex((v) => Math.min(maxIndex, v + 1));

    return (
        <section className="shop-carousel-sec">
            {/* GRID ≥744px */}
            {!isCarousel && (
                <div className="shop-grid">
                    {PLANS.map((p) => (
                        <div key={p.id} className="shop-card">
                            <img src={p.url} alt={`card-${p.id}`} />
                        </div>
                    ))}
                </div>
            )}

            {/* CAROUSEL <744px */}
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
                            style={{ transform: `translateX(calc(-${index} * 100%))` }}
                        >
                            {PLANS.map((p) => (
                                <div key={p.id} className="shop-card slide">
                                    <img src={p.url} alt={`card-${p.id}`} />
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
