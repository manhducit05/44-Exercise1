import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./testimonialCarousel.css"; // CSS bạn để riêng

const Testimonials = () => {
  const { t } = useTranslation("testimonials");

  // dữ liệu cho từng user lấy từ i18n
  const priyankaSlides = t("priyanka.slides", { returnObjects: true });
  const jackSlides = t("jack.slides", { returnObjects: true });

  // state riêng cho từng card
  const [idxPriyanka, setIdxPriyanka] = useState(0);
  const [idxJack, setIdxJack] = useState(0);

  // helper
  const prev = (idx, setIdx, length) =>
    setIdx(idx === 0 ? length - 1 : idx - 1);
  const next = (idx, setIdx, length) =>
    setIdx(idx === length - 1 ? 0 : idx + 1);

  return (
    <section className="">
      <div className="two-col">
        {/* Priyanka */}
        <div className="testimonial-card">
          <button
            className="t-arrow t-prev"
            onClick={() => prev(idxPriyanka, setIdxPriyanka, priyankaSlides.length)}
          >
            ‹
          </button>

          <div className="t-slide">
            <p className="t-text">{priyankaSlides[idxPriyanka]}</p>
            <div className="t-user">
              <div className="avt-name">
                <img src="/images/avatar1.png" alt={t("priyanka.name")} className="t-avatar" />
                <div>
                  <h4 className="t-name">{t("priyanka.name")}</h4>
                </div>
              </div>
              <p className="t-role">{t("priyanka.role")}</p>
            </div>
          </div>

          <button
            className="t-arrow t-next"
            onClick={() => next(idxPriyanka, setIdxPriyanka, priyankaSlides.length)}
          >
            ›
          </button>

          <div className="t-dots">
            {priyankaSlides.map((_, i) => (
              <span key={i} className={`t-dot ${i === idxPriyanka ? "is-active" : ""}`} />
            ))}
          </div>
        </div>

        {/* Jack */}
        <div className="testimonial-card hide">
          <button
            className="t-arrow t-prev"
            onClick={() => prev(idxJack, setIdxJack, jackSlides.length)}
          >
            ‹
          </button>

          <div className="t-slide">
            <p className="t-text">{jackSlides[idxJack]}</p>
            <div className="t-user">
              <div className="avt-name">
                <img src="/images/avatar2.png" alt={t("jack.name")} className="t-avatar" />
                <div>
                  <h4 className="t-name">{t("jack.name")}</h4>
                </div>
              </div>
              <p className="t-role">{t("jack.role")}</p>
            </div>
          </div>

          <button
            className="t-arrow t-next"
            onClick={() => next(idxJack, setIdxJack, jackSlides.length)}
          >
            ›
          </button>

          <div className="t-dots">
            {jackSlides.map((_, i) => (
              <span key={i} className={`t-dot ${i === idxJack ? "is-active" : ""}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
