import React, { useEffect, useMemo, useState } from "react";
import "./CloudCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faArrowsRotate,
    faTableCells,
    faBell,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Ảnh nền đặt trong public/images/clouds/ hoặc đổi path theo bạn.
 * Ảnh PNG/SVG nền trong suốt hiển thị đẹp nhất.
 */
const CLOUD_ITEMS = [
    {
        img: "/images/cloud.jpg",
        icon: faCircleCheck,
        text:
            "Accurate and reliable weather forecasts powered by cloud computing",
    },
    {
        img: "/images/cloud.jpg",
        icon: faArrowsRotate,
        text:
            "Compatible with various devices and platforms, including smart home systems",
    },
    {
        img: "/images/cloud.jpg",
        icon: faTableCells,
        text:
            "Interactive and user-friendly interface with stunning graphics and animations",
    },
    {
        img: "/images/cloud.jpg",
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
        const onResize = () => setVw(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const isCarousel = vw < 744;
    const perView = vw <= 359 ? 1 : 2;
    const maxIndex = useMemo(
        () => Math.max(0, CLOUD_ITEMS.length - perView),
        [perView]
    );

    useEffect(() => {
        if (!isCarousel) setIndex(0);
        else if (index > maxIndex) setIndex(maxIndex);
    }, [isCarousel, maxIndex]); // giữ chỉ số hợp lệ khi đổi viewport

    const next = () => setIndex((v) => Math.min(maxIndex, v + 1));
    const prev = () => setIndex((v) => Math.max(0, v - 1));

    // >=744px: lưới
    if (!isCarousel) {
        return (
            <div className="clouds-grid">
                {CLOUD_ITEMS.map((it, i) => (
                    <article
                        key={i}
                        className="cloud-item"
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

    // <744px: carousel
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
                        ["--per"]: perView,
                    }}
                >
                    {CLOUD_ITEMS.map((it, i) => (
                        <article
                            key={i}
                            className="cloud-item slide"
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
