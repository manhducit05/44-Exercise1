import React from "react";
import "../styles/InfoPage.css";
import CloudsCarousel from "../components/infoPage/CloudCarousel";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation("info");

  // lấy dữ liệu bảng từ file JSON
  const compareData = t("compare.rows", { returnObjects: true });

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
              <div className="col name left">{t("compare.juniper")}</div>
              <div className="col name right">{t("compare.other")}</div>
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
          {t("download")}
        </button>
      </div>

      {/* ===== Section 3: SPECS CLOUDS ===== */}
      <div className="custom-container">
        <div className="specs-title">{t("specsTitle")}</div>
      </div>

      <div className="cloud-element">
        <div className="info-cloud">
          <img alt="wave" src="/images/bg-components/wave-info.png" />
        </div>
        <div className="custom-container">
          <CloudsCarousel />
        </div>
      </div>

      <div className="info-bottom"></div>
    </main>
  );
};

export default Info;
