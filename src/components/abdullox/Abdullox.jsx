import { useTranslation } from "react-i18next";
import "./Abdullox.css";
const language = [
  { code: "uz", label: "Uzbek" },
  { code: "en", label: "English" },
  { code: "ru", label: "Russian" },
];

const Abdullox = () => {
  const { t, i18n } = useTranslation();
  const translation = useTranslation();

  return (
    <div className="plan">
      <div className="container">
        <div className="pln-wr">
          <h2>{t("abdullo.heading")}</h2>
          <p>{t("abdullo.subheading")}</p>
          <select
            className="custom-select"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            {language.map((item) => (
              <option key={item.code} value={item.code}>
                {item.label}
              </option>
            ))}
          </select>
          <div className="cards-wr">
            <div className="card-left-wr">
              <h3>{t("abdullo.personal_title")}</h3>
              <p>{t("abdullo.personal_desc")}</p>
              <div className="divcha">
                <span className="price">$2.99</span>
                <span style={{ color: "gray" }}>
                  {t("abdullo.price_suffix")}
                </span>
              </div>
              <button className="card-btn"> {t("abdullo.button_text")}</button>
              <p> {t("abdullo.feature_unlimited_requests")}</p>
              <p>{t("abdullo.feature_as_you_need")}</p>
              <p>{t("abdullo.feature_no_code")}</p>
            </div>
            <div className="card-right-wr">
              <h3>{t("abdullo.business_title")}</h3>
              <p>{t("abdullo.business_desc")}</p>
              <div className="divcha">
                <span className="price">$8.99</span>
                <span style={{ color: "gray" }}>
                  {t("abdullo.price_suffix")}
                </span>
              </div>
              <button className="card-btn2"> {t("abdullo.button_text")}</button>
              <p> {t("abdullo.feature_unlimited_requests")}</p>
              <p>{t("abdullo.feature_as_you_need")}</p>
              <p>{t("abdullo.feature_no_code")}</p>
              <p>{t("abdullo.feature_help_center")}</p>
              <p>{t("abdullo.feature_personal_mentor")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abdullox;
