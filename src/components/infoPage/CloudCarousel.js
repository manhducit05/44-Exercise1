import React, { useEffect, useMemo, useState } from "react";
import "./CloudCarousel.css";

/* data */
const CLOUD_ITEMS = [
    {
        img: "/images/cloud.jpg", icon: "/images/icon.svg",
        text: "Accurate and reliable weather forecasts powered by cloud computing"
    },
    {
        down: true, img: "/images/cloud2.png", icon: "/images/icon2.svg",
        text: "Compatible with various devices and platforms, including smart home systems"
    },
    {
        img: "/images/cloud3.png", icon: "/images/icon3.svg",
        text: "Interactive and user-friendly interface with stunning graphics and animations"
    },
    {
        down: true, img: "/images/cloud4.png", icon: "/images/icon4.svg",
        text: "Customizable alerts and notifications for different weather conditions"
    },
];

function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

export default function CloudsCarousel() {
    const [vw, setVw] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1440
    );
    const [index, setIndex] = useState(0);

    // luôn ở top-level
    useEffect(() => {
        const onR = () => setVw(window.innerWidth);
        window.addEventListener("resize", onR);
        return () => window.removeEventListener("resize", onR);
    }, []);

    // derive chế độ hiển thị từ vw
    const isMobile = vw < 744;
    const isTablet = vw >= 744 && vw < 1024;
    const isGrid = vw >= 1024;
    const isCarousel = !isGrid;

    // số item/slide (tablet = 2, mobile = 1)
    const perSlideItems = isTablet ? 2 : 1;

    // tạo mảng slides cho carousel (grid không dùng, nhưng vẫn tạo để hooks không conditional)
    const slides = useMemo(() => {
        if (!isCarousel) return [CLOUD_ITEMS];   // placeholder
        return chunk(CLOUD_ITEMS, perSlideItems);
    }, [isCarousel, perSlideItems]);

    // maxIndex phụ thuộc vào chế độ
    const maxIndex = isCarousel ? slides.length - 1 : 0;

    // luôn clamp index khi chế độ/slide thay đổi
    useEffect(() => {
        setIndex((v) => Math.max(0, Math.min(v, maxIndex)));
    }, [maxIndex]);

    const next = () => setIndex((v) => Math.min(maxIndex, v + 1));
    const prev = () => setIndex((v) => Math.max(0, v - 1));

    // ===== render grid (>=1024) =====
    if (isGrid) {
        return (
            <div className="clouds-grid">
                {CLOUD_ITEMS.map((it, i) => (
                    <article
                        key={i}
                        className={`cloud-item ${it.down ? "down" : ""}`}
                        style={{ backgroundImage: `url(${it.img})` }}
                        aria-label={it.text}
                    >
                        <img src={it.icon} alt="icon" className="cloud-icon" />
                        <p className="cloud-text">{it.text}</p>
                    </article>
                ))}
            </div>
        );
    }

    // ===== render carousel (<1024) =====
    const tabletLayout = isTablet; // chỉ để đọc dễ hơn

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
                                    className={`cloud-item ${it.down ? "down" : ""}`}
                                    style={{ backgroundImage: `url(${it.img})` }}
                                    aria-label={it.text}
                                >
                                    <img src={it.icon} alt="icon" className="cloud-icon" />
                                    <p className="cloud-text">{it.text}</p>
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
}
