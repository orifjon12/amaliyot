import { useState } from "react";
import kub from "../../assets/kub.gif";
import vector from "../../assets/vector.png";
import tm from "../../assets/tm.png";
import mailchimp from "../../assets/mailchimp.png";
import "./Abdulatif.css";

const Abdulatif = () => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState("ru");

  const texts = {
    ru: { airtable: "Airtable", framer: "Framer", asana: "asana", mailchimp: "mailchimp" },
    en: { airtable: "Airtable", framer: "Framer", asana: "asana", mailchimp: "mailchimp" }
  };

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
        {isDark ? "☀️ Светлый" : "🌙 Темный"}
      </button>
      <button className="lang-toggle" onClick={() => setLang(lang === "ru" ? "en" : "ru")}>
        {lang === "ru" ? "🇬🇧 English" : "🇷🇺 Русский"}
      </button>
      <div className="Logos">
        <h1><img src={kub} alt="Kub" />{texts[lang].airtable}</h1>
        <h1><img src={vector} alt="Vector" />{texts[lang].framer}</h1>
        <h1><img src={tm} alt="TM" />{texts[lang].asana}</h1>
        <h1><img src={mailchimp} alt="Mailchimp" />{texts[lang].mailchimp}</h1>
      </div>
    </div>
  );
};

export default Abdulatif;
