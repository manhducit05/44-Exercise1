import React from "react";
import "../styles/InfoPage.css";
import CloudsCarousel from "../components/infoPage/CloudCarousel";

export default function Info() {

    const PDF_PATH = "/files/INFOPage.pdf";     // đổi thành đường dẫn file của bạn
    const FILE_NAME = "InfoPage.pdf";            // tên gợi ý khi tải về

    const handleDownload = () => {
        const a = document.createElement("a");
        a.href = PDF_PATH;        // cùng origin → trình duyệt cho phép tải trực tiếp
        a.download = FILE_NAME;   // gợi ý tên file
        document.body.appendChild(a);
        a.click();
        a.remove();
    };
    return (
        <main className="info-root">
            {/* ===== Section 1: HERO IMAGE ===== */}
            <section className="info-hero">
                <div className="custom-container">
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
                            <div className="col ok">Other apps use outdated data sources</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Simple Interface</div>
                            <div className="col ok">Simple and intuitive interface</div>
                            <div className="col ok">Other apps have cluttered design</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">10-Day Forecast</div>
                            <div className="col ok">10-day forecast with hourly updates</div>
                            <div className="col ok">Other apps offer 7-day forecast or less</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Weather Alerts</div>
                            <div className="col ok">Severe weather alerts and notifications</div>
                            <div className="col ok">Other apps do not warn of hazards</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Air Quality Data</div>
                            <div className="col ok">Air quality information and maps</div>
                            <div className="col ok">Other apps do not include air quality data</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Weather Maps</div>
                            <div className="col ok">Temperature and precipitation maps</div>
                            <div className="col ok">Other apps do not show global patterns</div>
                        </div>
                        <div className="compare-row">
                            <div className="col key">Affordable Price</div>
                            <div className="col ok">Inexpensive and affordable</div>
                            <div className="col ok">Other apps charge premium prices or fees</div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="compare-cta">
                <button
                    className="btn-download"
                    type="button"
                    onClick={handleDownload}
                    aria-label="Download PDF"
                >
                    DOWNLOAD NOW
                </button>
            </div>
            {/* ===== Section 3: SPECS CLOUDS ===== */}
            <div className="custom-container">
                <div className="specs-title"> Spec’s clouds</div>

            </div>
            <div className="cloud-element">
                <div className="info-cloud">
                    <img alt="wave" src='/images/bg-components/wave-info.png' />
                </div>
                <div className="custom-container">
                    <CloudsCarousel />
                </div>
            </div>
            <div className="info-bottom"></div>

        </main>
    );
}
