import React from "react";
import "./Muxammedov.css";
import { useTranslation } from "react-i18next";

const language = [
  { code: "uz", label: "Uzbek" },
  { code: "en", label: "English" },
  { code: "ru", label: "Russian" },
];

const Muxammedov = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar">
      <div className="container">
        <div className="site-header">
          <div className="header-logo">
            <h2>Vibrant</h2>
          </div>
          <nav className="nav">
            <ul className="nav-ul">
              <li>
                <a className="nav-link" href="">
                  {t("navbar.home")}
                </a>
              </li>
              <li>
                <a className="nav-link" href="">
                  FAQ
                </a>
              </li>
              <li>
                <a className="nav-link" href="">
                  {t("navbar.Blog")}
                </a>
              </li>
              <button>{t("navbar.button")}</button>
              <select
                className="select"
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                {language.map((item) => {
                  return (
                    <option key={item.code} value={item.code}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </ul>
          </nav>
        </div>
        <div className="banner-box">
          <h2>{t("navbar.title")}</h2>
          <p>{t("navbar.text")}</p>
          <button>{t("navbar.button")}</button>
        </div>
      </div>
    </div>
  );
};

export default Muxammedov;
