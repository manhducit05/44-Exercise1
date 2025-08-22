import React from "react";
import "../styles/LandingPage.css";
export default function LandingPage() {
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
                                <div className="f-icon"><img src="/images/landingIcon1.png" /></div>
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
                                <div className="f-icon"><img src="/images/landingIcon2.png" /></div>
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
                                <div className="f-icon "><img src="/images/landingIcon1.png" /></div>
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
                        </div>

                        <div className="plan-text">
                            <div className="fp-plan-title">Plan Your Outdoor<br />Activities with Ease</div>
                            <p className="plan-lead">Get notified before rain stops.<br />Plan your outdoor activities</p>

                            <ul className="plan-bullets">
                                <li className="text-light">
                                    <img src="/images/icon-checkbox1.png" style={{ marginRight: "4px" }} />
                                    Share your weather stories and photos.
                                </li>
                                <li>
                                    <img src="/images/icon-checkbox2.png" style={{ marginRight: "4px" }} />
                                    Custom weather alerts and notifications.
                                </li>
                                <li>
                                    <img src="/images/icon-checkbox2.png" style={{ marginRight: "4px" }} />
                                    Smart weather integrations for your home.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fp-testimonial">
                <div className="fp-testimonials">
                    <div className="testimonial">
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
                            <img src="/images/avatar2.png" alt="Jack" className="t-avatar" />
                            <div>
                                <h4 className="t-name">Jack</h4>
                                <p className="t-role">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="fp-faq">
                <div className="faq-container">
                    <h2 className="faq-title">The Weather App That Brings You Wonder</h2>
                    <p className="faq-subtitle">
                        We care about your happiness and well-being, no matter the weather
                    </p>

                    <div className="faq-list">
                        <div className="faq-item">
                            <span>How can I customize the Juniper app to suit my needs?</span>
                            <i className="fas fa-chevron-right">
                                <img src="/images/rightArrow.png" />
                            </i>
                        </div>
                        <div className="faq-item">
                            <span>How can I share my weather updates with my partner?</span>
                            <i className="fas fa-chevron-right">
                                <img src="/images/rightArrow.png" />

                            </i>
                        </div>
                        <div className="faq-item">
                            <span>How long is the free trial for the Juniper app?</span>
                            <i className="fas fa-chevron-right">
                                <img src="/images/rightArrow.png" />

                            </i>
                        </div>
                        <div className="faq-item">
                            <span>What happens after the free trial ends?</span>
                            <i className="fas fa-chevron-right">
                                <img src="/images/rightArrow.png" />

                            </i>
                        </div>
                    </div>

                    <div className="faq-footer">
                        <p className="faq-experience">Experience the weather like never before</p>
                        <h3 className="faq-highlight">
                            The Only Weather App You Need to Stay<br />
                            Connected with Nature and Each Other
                        </h3>
                        <button className="download-btn">DOWNLOAD NOW</button>
                    </div>
                </div>
            </section>
        </div>
    );
}