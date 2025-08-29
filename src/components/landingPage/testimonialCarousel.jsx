import { useState } from "react";
import "./testimonialCarousel.css"; // CSS bạn để riêng

const Testimonials = () => {
  // dữ liệu cho từng user
  const priyankaSlides = [
    `Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket.`,
    `The alerts are timely and useful. I plan hikes with confidence now.`,
    `The design is smooth and fast. Highly recommend to my friends.`,
  ];

  const jackSlides = [
    `I was sceptical about Juniper at first, but I'm glad I gave it a try. It's a whole new way of looking at the sky. It uses cloud technology to give me accurate and reliable forecasts, and it also has some fun features like cloud art and trivia. It's a must-have app for anyone who loves nature.`,
    `Forecasts have been reliable for my weekend trips.`,
    `Love the trivia and cloud art—nice touch!`,
  ];

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
                <img src="/images/avatar1.png" alt="Priyanka" className="t-avatar" />
                <div>
                  <h4 className="t-name">Priyanka</h4>
                </div>
              </div>
              <p className="t-role">Happy Customer</p>
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
                <img src="/images/avatar2.png" alt="Jack" className="t-avatar" />
                <div>
                  <h4 className="t-name">Jack</h4>
                </div>
              </div>
              <p className="t-role">Happy Customer</p>
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
}
export default Testimonials;