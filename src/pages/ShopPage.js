import React from "react";
import "../styles/ShopPage.css";
import { Link } from "react-router-dom";
import ShopCarousel from "../components/shopPage/ShopCarousel";
export default function ShopPage() {
    return (
        <main className="product-page">
            <div className=" ">
                {/* HERO */}
                <section className="pp-hero custom-container">
                    <div className="pp-hero-media">
                        <img src="/images/bigProduct.png" alt="Atmos app preview" />
                    </div>

                    <div className="pp-hero-text">
                        <div className="pp-title">Atmos</div>
                        <div className="pp-lead">
                            A weather app that lets you explore the atmosphere and learn more
                            about the weather phenomena
                        </div>

                        <div className="pp-cta">
                            <button className="btn-custom btn-buy">BUY NOW</button>
                            <button className="btn-custom btn-cart">Add to Cart</button>
                        </div>
                    </div>
                </section>
                {/* GALLERY (thumbs) */}
                <section className="pp-gallery custom-container">
                    <div className="thumb">
                        <img src="/images/list-item1.png" alt="preview 1" />
                    </div>
                    <div className="thumb">
                        <img src="/images/list-item2.png" alt="preview 2" />
                    </div>
                    <div className="thumb third">
                        <img src="/images/list-item3.png" alt="preview 3" />
                    </div>
                    <div className="thumb fourth">
                        <img src="/images/list-item4.png" alt="preview 4" />
                    </div>
                </section>

                <section className="cloud-shop">
                    <img src="/images/bg-components/shop.svg" />
                </section>

                <div className="btn-show text-center">
                    <Link to="/shop" className="pp-more mt-4 mb-4">show all products</Link>
                </div>
                {/* PLAN */}
                <section className="pp-plan">
                    <div className="plan-text text-center">
                        <div className="plan-title">
                            We offer <span className="text-dark">three plans</span> to suit your needs and budget
                        </div>
                        <div className="plan-desc text-dark mt-3 mb-3">
                            You can switch or cancel your plan at any time
                        </div>
                        <div className="text-btn">
                            <div className="btn-desc">YEARLY BILLING</div>
                            <img src="/images/switchBtn.png" />
                            <div className="btn-desc">MONTHLY BILLING</div>
                        </div>
                    </div>
                </section>
                <div className="carousel">
                    <ShopCarousel />
                </div>
            </div>
        </main>
    );
}
