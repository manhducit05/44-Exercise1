import React from "react";
import "../styles/InfoPage.css";
import CloudsCarousel from "../components/infoPage/CloudCarousel";

export default function Info() {
    return (
        <main className="info-root">
            {/* ===== Section 1: HERO IMAGE ===== */}
            <section className="info-hero">
                <div className="info-container">
                    <img
                        src="/images/pc1.jpg"  /* Đặt ảnh tại public/images/info-hero.png */
                        alt="Juniper laptop preview"
                        className="info-hero-img"
                    />
                </div>
            </section>

            {/* ===== Section 2: COMPARISON ===== */}
            <section className="info-compare">
                <div className="info-container">
                    <div className="compare-card">
                        <div className="compare-head">
                            <div className="col name blank" />
                            <div className="col name left">JUNIPER</div>
                            <div className="col name right">OTHER COMPANY</div>
                        </div>

                        <div className="compare-row">
                            <div className="col key">Cloud Technology</div>
                            <div className="col ok">Cloud technology for reliable forecasts</div>
                            <div className="col no">Other apps use outdated data sources</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Simple Interface</div>
                            <div className="col ok">Simple and intuitive interface</div>
                            <div className="col no">Other apps have cluttered design</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">10-Day Forecast</div>
                            <div className="col ok">10-day forecast with hourly updates</div>
                            <div className="col no">Other apps offer 7-day forecast or less</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Weather Alerts</div>
                            <div className="col ok">Severe weather alerts and notifications</div>
                            <div className="col no">Other apps do not warn of hazards</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Air Quality Data</div>
                            <div className="col ok">Air quality information and maps</div>
                            <div className="col no">Other apps do not include air quality data</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Weather Maps</div>
                            <div className="col ok">Temperature and precipitation maps</div>
                            <div className="col no">Other apps do not show global patterns</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Affordable Price</div>
                            <div className="col ok">Inexpensive and affordable</div>
                            <div className="col no">Other apps charge premium prices or fees</div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="compare-cta">
                <a href="/download" className="btn-download">DOWNLOAD NOW</a>
            </div>
            {/* ===== Section 3: SPECS CLOUDS ===== */}
            {/* <section className="info-specs v2">
                <div className="info-container">
                    <h4 className="specs-title">
                        <span>Spec’s clouds</span>
                    </h4>

                    <div className="cloud-wrap">
                        <article className="cloud">
                            <div className="spec-icon"><i className="fa-solid fa-cloud-check"></i></div>
                            <p className="spec-copy">
                                Accurate and reliable weather forecasts powered by cloud computing
                            </p>
                        </article>

                        <article className="cloud">
                            <div className="spec-icon"><i className="fa-solid fa-arrows-rotate"></i></div>
                            <p className="spec-copy">
                                Compatible with various devices and platforms, including smart home systems
                            </p>
                        </article>

                        <article className="cloud">
                            <div className="spec-icon"><i className="fa-solid fa-grid-2"></i></div>
                            <p className="spec-copy">
                                Interactive and user-friendly interface with stunning graphics and animations
                            </p>
                        </article>

                        <article className="cloud">
                            <div className="spec-icon"><i className="fa-solid fa-bell"></i></div>
                            <p className="spec-copy">
                                Customizable alerts and notifications for different weather conditions
                            </p>
                        </article>
                    </div>
                </div>
            </section> */}
            <CloudsCarousel />

        </main>
    );
}
