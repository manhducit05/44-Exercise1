import React from "react";
import "../styles/TosPage.css";
import { useTranslation } from "react-i18next";

const TosPage = () => {
  const { t } = useTranslation("tos"); // namespace tos

  return (
    <main className="tos-page">
      <div className="tos-container">
        <section className="tos-card">
          <div className="tos-lock" aria-hidden>
            <img src="/images/lock.png" alt="lock-icon" />
          </div>

          <h1>{t("title")}</h1>
          <p className="intro">{t("intro")}</p>

          <div className="tos-scroll">
            <h2>{t("license.title")}</h2>
            <p>{t("license.content")}</p>

            <h2>{t("privacy.title")}</h2>
            <p>{t("privacy.content")}</p>

            <h2>{t("content.title")}</h2>
            <p>{t("content.content")}</p>

            <h2>{t("acceptableUse.title")}</h2>
            <ul>
              <li>{t("acceptableUse.rules.0")}</li>
              <li>{t("acceptableUse.rules.1")}</li>
              <li>{t("acceptableUse.rules.2")}</li>
            </ul>

            <h2>{t("billing.title")}</h2>
            <p>{t("billing.content")}</p>

            <h2>{t("disclaimers.title")}</h2>
            <p>{t("disclaimers.content")}</p>

            <h2>{t("liability.title")}</h2>
            <p>{t("liability.content")}</p>

            <h2>{t("termination.title")}</h2>
            <p>{t("termination.content")}</p>

            <h2>{t("changes.title")}</h2>
            <p>{t("changes.content")}</p>

            <h2>{t("contact.title")}</h2>
            <p>{t("contact.content")}</p>
          </div>
        </section>
      </div>
    </main>
  );
};
export default TosPage;
