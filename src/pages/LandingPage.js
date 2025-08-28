import React from "react";
import "../styles/LandingPage.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import TestimonialSlider from "../components/landingPage/testimonialCarousel";
export default function LandingPage() {
    const faqs = [
        {
            q: "How can I customize the Juniper app to suit my needs?",
            a: "You can personalize the Juniper app by adjusting the settings in the “Preferences” or “Profile” section. There you’ll find options to choose your preferred units (e.g., Celsius or Fahrenheit), set location-based weather alerts, and organize your dashboard to show only the features most useful to you."
        },
        {
            q: "How can I share my weather updates with my partner?",
            a: "The app allows you to share updates directly through the “Share” button available on most weather reports. You can send updates via email, text, or messaging apps. Alternatively, you can invite your partner to connect their account with yours, so they automatically receive updates from your profile."
        },
        {
            q: "How long is the free trial for the Juniper app?",
            a: "The free trial lasts for 14 days. During this period, you have access to all premium features without restrictions. Once the trial ends, you can either switch to a paid subscription to continue using premium features or revert to the basic free version."
        },
        {
            q: "What happens after the free trial ends?",
            a: "Once your free trial is over, your account will automatically switch to the basic free plan unless you subscribe. You’ll still be able to check standard forecasts, but advanced features such as detailed alerts, extended forecasts, or partner sharing may be restricted until you upgrade to a paid plan."
        },
    ];

    const PDF_PATH = "/files/landingpage.pdf";     // đổi thành đường dẫn file của bạn
    const FILE_NAME = "LandingPage.pdf";            // tên gợi ý khi tải về

    const handleDownload = () => {
        const a = document.createElement("a");
        a.href = PDF_PATH;        // cùng origin → trình duyệt cho phép tải trực tiếp
        a.download = FILE_NAME;   // gợi ý tên file
        document.body.appendChild(a);
        a.click();
        a.remove();
    };
    return (
        <div className="landing-page">
            <section className="hero">
                <div className="hero-container">
                    {/* Left Text */}
                    <div className="hero-text">
                        <div className="title">Your Live <br /> Forecaster</div>
                        <p className="sub">
                            Together We Forecast: Building Dreams,<br /> One Day at a Time!
                        </p>
                        <p className="small">
                            1 million People like you have purchased this product!
                        </p>
                        <div className="hero-cta">
                            <button className="btn btn-black">TRY NOW</button>
                            <button className="btn btn-yellow">FREE TILL 15JUN2023</button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hero-image">
                        <img src="/images/phone.png" alt="App preview" />
                    </div>
                </div>
            </section>
            <section className="fp-section">
                <div className="custom-container">
                    {/* ===== Features row ===== */}
                    <div className="fp-features">
                        <article className="f-item">
                            <div className="d-flex align-items-center">
                                <div className="f-icon"><img src="/images/landingIcon1.png" alt="f-icon" /></div>
                                <div className="f-title">Personalized</div >
                            </div>
                            <div>
                                <p className="f-desc">
                                    A personalized weather report that shows the best time and place for couples
                                    to enjoy outdoor activities based on their preferences and location.
                                </p>
                            </div>
                        </article>

                        <article className="f-item">
                            <div className="d-flex align-items-center ">
                                <div className="f-icon"><img src="/images/landingIcon2.png" alt="f-icon" /></div>
                                <div className="f-title">Gallery</div>

                            </div>

                            <div>
                                <p className="f-desc">
                                    A cloud gallery that allows users to upload and share their photos and videos
                                    of the sky and the weather with other users and get feedback and tips.
                                </p>
                            </div>
                        </article>

                        <article className="f-item">
                            <div className="d-flex align-items-center">
                                <div className="f-icon "><img src="/images/landingIcon1.png" alt="f-icon" /></div>
                                <div className="f-title">Mood Tracker</div>
                            </div>
                            <div>
                                <p className="f-desc">
                                    A mood tracker that analyzes the user's mood based on the weather and suggests
                                    activities, music, or quotes to cheer them up or calm them down.
                                </p>
                            </div>
                        </article>
                    </div>

                    {/* ===== Plan block ===== */}
                    <div className="fp-plan">
                        <div className="plan-media">
                            <div className="phone-frame">
                                <img src="/images/phone2.png" alt="Phone mockup" />
                            </div>
                            <div className="plan-arrow"></div>

                        </div>

                        <div className="plan-text">
                            <div className="fp-plan-title">Plan Your Outdoor<br />Activities with Ease</div>
                            <p className="plan-lead">Get notified before rain stops.<br />Plan your outdoor activities</p>

                            <ul className="plan-bullets">
                                <li className="text-light">
                                    <img alt="check-box" src="/images/icon-checkbox1.png" style={{ marginRight: "4px" }} />
                                    Share your weather stories and photos.
                                </li>
                                <li>
                                    <img alt="check-box" src="/images/icon-checkbox2.png" style={{ marginRight: "4px" }} />
                                    Custom weather alerts and notifications.
                                </li>
                                <li>
                                    <img alt="check-box" src="/images/icon-checkbox2.png" style={{ marginRight: "4px" }} />
                                    Smart weather integrations for your home.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fp-testimonial">
                <div className="fp-testimonials">
                    {/* <div className="testimonial">
                        <p className="t-text">
                            Juniper is a great app for checking the weather. It's easy to use and has a
                            beautiful interface. I love how it shows me the cloud patterns and predicts the
                            weather for the next few days. It's like having a personal meteorologist in my pocket.
                        </p>
                        <div className="t-user">
                            <img src="/images/avatar1.png" alt="Priyanka" className="t-avatar" />
                            <div>
                                <h4 className="t-name">Priyanka</h4>
                                <p className="t-role">Happy Customer</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial hide-mobile">
                        <p className="t-text">
                            I was sceptical about Juniper at first, but I'm glad I gave it a try. It's a whole
                            new way of looking at the sky. It uses cloud technology to give me accurate and
                            reliable forecasts, and it also has some fun features like cloud art and trivia.
                            It's a must-have app for anyone who loves nature.
                        </p>
                        <div className="t-user">
                            <img alt="user-avatar" src="/images/avatar2.png" className="t-avatar" />
                            <div>
                                <h4 className="t-name">Jack</h4>
                                <p className="t-role">Happy Customer</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <TestimonialSlider />

            </section>

            <section className="fp-faq">
                <div className="faq-container" id="faq-accordion">
                    <h2 className="faq-title">The Weather App That Brings You Wonder</h2>
                    <p className="faq-subtitle">
                        We care about your happiness and well-being, no matter the weather
                    </p>

                    <div className="faq-list" role="tablist">
                        {faqs.map((item, i) => (
                            <div className="faq-item" key={i}>
                                {/* Trigger: vẫn giữ class để ăn CSS cũ */}
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
                                {/* Panel: xổ xuống khi click; mở 1 cái mỗi lần */}
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
                        <p className="faq-experience">Experience the weather like never before</p>
                        <h3 className="faq-highlight">
                            The Only Weather App You Need to Stay<br />
                            Connected with Nature and Each Other
                        </h3>
                        <button
                            className="download-btn"
                            type="button"
                            onClick={handleDownload}
                            aria-label="Download PDF"
                        >
                            DOWNLOAD NOW
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}