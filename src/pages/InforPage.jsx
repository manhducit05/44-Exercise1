import React from "react";
import "../styles/InfoPage.css";
import CloudsCarousel from "../components/infoPage/CloudCarousel";

const Info = () => {

  // table array
  const compareData = [
    {
      key: "Cloud Technology",
      left: "Cloud technology for reliable forecasts",
      right: "Other apps use outdated data sources",
    },
    {
      key: "Simple Interface",
      left: "Simple and intuitive interface",
      right: "Other apps have cluttered design",
    },
    {
      key: "10-Day Forecast",
      left: "10-day forecast with hourly updates",
      right: "Other apps offer 7-day forecast or less",
    },
    {
      key: "Weather Alerts",
      left: "Severe weather alerts and notifications",
      right: "Other apps do not warn of hazards",
    },
    {
      key: "Air Quality Data",
      left: "Air quality information and maps",
      right: "Other apps do not include air quality data",
    },
    {
      key: "Weather Maps",
      left: "Temperature and precipitation maps",
      right: "Other apps do not show global patterns",
    },
    {
      key: "Affordable Price",
      left: "Inexpensive and affordable",
      right: "Other apps charge premium prices or fees",
    },
  ];

  // download 
  const PDF_PATH = "/files/INFOPage.pdf";
  const FILE_NAME = "InfoPage.pdf";

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = PDF_PATH;
    a.download = FILE_NAME;
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
            src="/images/pc1.jpg"
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
            {compareData.map((item, index) => (
              <div className="compare-row" key={index}>
                <div className="col key">{item.key}</div>
                <div className="col ok">{item.left}</div>
                <div className="col ok">{item.right}</div>
              </div>
            ))}
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
export default Info;