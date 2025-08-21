import React from "react";
import "../styles/TosPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function TosPage() {
    return (
        <main className="tos-page">
            <div className="tos-container">
                <section className="tos-card">
                    <div className="tos-lock" aria-hidden>
                        <img src="/images/lock.png" alt="lock-icon" />
                    </div>

                    <h1>Terms Of Service</h1>
                    <p className="intro">
                        Welcome to Juniper, the app that lets you check the weather with
                        innovative software and an easy to use interface. By using our app,
                        you agree to these terms of service. Please read them carefully.
                    </p>

                    <div className="tos-scroll">
                        <h2>License</h2>
                        <p>
                            We grant you a limited, non-exclusive, non-transferable, and
                            revocable license to use our app for your personal, non-commercial
                            use only. You may not copy, modify, distribute, sell, or lease any
                            part of our app or its content, nor may you reverse engineer or
                            attempt to extract the source code of our app, unless you have our
                            written permission.
                        </p>

                        <h2>Privacy</h2>
                        <p>
                            We respect your privacy and are committed to protecting it. Our
                            privacy policy explains how we collect, use, and share your
                            personal information when you use our app. By using our app, you
                            consent to our privacy policy.
                        </p>

                        <h2>Content</h2>
                        <p>
                            You are responsible for any content that you upload, post, or
                            share on or through our app, such as photos, videos, comments, or
                            ratings. You must have the right to use such content and not
                            infringe, violate, or misappropriate the rights of any third party.
                            We may remove or disable access to any content that we deem
                            unlawful or inappropriate.
                        </p>

                        <h2>Acceptable Use</h2>
                        <ul>
                            <li>No unlawful, harmful, or fraudulent activities.</li>
                            <li>No attempts to gain unauthorized access or disrupt service.</li>
                            <li>No misuse of our trademarks, branding, or UI elements.</li>
                        </ul>

                        <h2>Subscriptions & Billing</h2>
                        <p>
                            Some features may require a paid plan. Payments are processed by
                            our authorized provider. Subscriptions auto-renew unless canceled
                            at least 24 hours before the end of the current period in your app
                            store account settings.
                        </p>

                        <h2>Disclaimers</h2>
                        <p>
                            The app is provided “as is” without warranties of any kind. We do
                            not guarantee that the service will be uninterrupted, secure, or
                            error-free, or that weather data will be accurate at all times.
                        </p>

                        <h2>Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Juniper and its affiliates
                            will not be liable for any indirect, incidental, special, or
                            consequential damages arising from your use of the app.
                        </p>

                        <h2>Termination</h2>
                        <p>
                            We may suspend or terminate access to the app at any time if you
                            violate these terms. Upon termination, your license to use the app
                            ends immediately.
                        </p>

                        <h2>Changes to the Terms</h2>
                        <p>
                            We may update these terms from time to time. Continued use of the
                            app after changes indicates your acceptance of the updated terms.
                        </p>

                        <h2>Contact</h2>
                        <p>
                            If you have questions about these terms, please contact support via
                            the Info page.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
