import React from "react";
import "../styles/LandingPage.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TestimonialSlider from "../components/landingPage/testimonialCarousel";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t } = useTranslation("landing");

  // Lấy mảng từ JSON đa ngôn ngữ
  const features = t("features", { returnObjects: true }) || [];
  const faqs = t("faqs", { returnObjects: true }) || [];
  const planBullets = t("plan.bullets", { returnObjects: true }) || [];

  const PDF_PATH = "/files/landingpage.pdf";
  const FILE_NAME = "LandingPage.pdf";

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = PDF_PATH;
    a.download = FILE_NAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className="landing-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <div className="title">{t("hero.title")}</div>
            <p className="sub">{t("hero.sub")}</p>
            <p className="small">{t("hero.small")}</p>
            <div className="hero-cta">
              <button className="btn btn-black">{t("hero.tryNow")}</button>
              <button className="btn btn-yellow">{t("hero.free")}</button>
            </div>
          </div>

          <div className="hero-image">
            <img src="/images/phone.png" alt="App preview" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="fp-section">
        <div className="custom-container">
          <div className="fp-features">
            {Array.isArray(features) &&
              features.map((item, index) => (
                <article className="f-item" key={index}>
                  <div className="d-flex align-items-center">
                    <div className="f-icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="f-title">{item.title}</div>
                  </div>
                  <p className="f-desc">{item.desc}</p>
                </article>
              ))}
          </div>

          {/* PLAN */}
          <div className="fp-plan">
            <div className="plan-media">
              <div className="phone-frame">
                <img src="/images/phone2.png" alt="Phone mockup" />
              </div>
              <div className="plan-arrow"></div>
            </div>

            <div className="plan-text">
              <div className="fp-plan-title">{t("plan.title")}</div>
              <p className="plan-lead">{t("plan.lead")}</p>

              <ul className="plan-bullets">
                {Array.isArray(planBullets) &&
                  planBullets.map((b, i) => (
                    <li key={i}>
                      <img
                        alt="check-box"
                        src="/images/icon-checkbox2.png"
                        style={{ marginRight: "4px" }}
                      />
                      {b}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="fp-testimonial">
        <div className="fp-testimonials"></div>
        <TestimonialSlider />
      </section>

      {/* FAQ */}
      <section className="fp-faq">
        <div className="faq-container" id="faq-accordion">
          <h2 className="faq-title">{t("faqTitle")}</h2>
          <p className="faq-subtitle">{t("faqSubtitle")}</p>

          <div className="faq-list" role="tablist">
            {Array.isArray(faqs) &&
              faqs.map((item, i) => (
                <div className="faq-item" key={i}>
                  <a
                    className="faq-trigger d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    href={`#faq-panel-${i}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                  >
                    <span className="faq-question">{item.q}</span>
                    <img
                      src="/images/rightArrow.svg"
                      alt=""
                      aria-hidden="true"
                      className="faq-chevron"
                      width="20"
                      height="20"
                    />
                  </a>
                  <div
                    id={`faq-panel-${i}`}
                    className="faq-answer collapse"
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    data-bs-parent="#faq-accordion"
                  >
                    <p className="mt-2">{item.a}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="faq-footer">
            <p className="faq-experience">{t("faqFooter.experience")}</p>
            <h3 className="faq-highlight">{t("faqFooter.highlight")}</h3>
            <button
              className="download-btn"
              type="button"
              onClick={handleDownload}
              aria-label="Download PDF"
            >
              {t("download")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
