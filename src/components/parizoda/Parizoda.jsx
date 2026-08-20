import { useTranslation } from "react-i18next";

const language = [
  { code: "uz", label: "Uzbek" },
  { code: "ru", label: "Russian" },
  { code: "en", label: "English" },
];

import "./Parizoda.css";

const Parizoda = () => {
  const { t, i18n } = useTranslation();
  const translation = useTranslation();

  return (
    <div className="container">
      <div className="say">
        <h2>What people say</h2>
      </div>
      <div className="people-say">
        <div className="people">
          <div className="bryanOne">
            <div className="head">
              <img src="/bryan.png" alt="" />
              <div>
                <h2>Bryan Smith</h2>
                <p>CEO Framer</p>
              </div>
            </div>
            <p className="discription">{t("people.bryanOne")}</p>
          </div>

          <div className="bryanOne">
            <div className="head">
              <img src="/morbi.png" alt="" />
              <div>
                <h2>Bryan Smith</h2>
                <p>CEO Framer</p>
              </div>
            </div>
            <p>{t("people.bryanTwo")}</p>
          </div>

          <div className="bryanOne">
            <div className="head">
              <img src="/mauris.png" alt="" />
              <div>
                <h2>Bryan Smith</h2>
                <p>CEO Framer</p>
              </div>
            </div>
            <p>{t("people.bryanThree")}.</p>
          </div>

          <div className="bryanFour">
            <div className="head">
              <img src="/bryanFour.png" alt="" />
              <div>
                <h2>Bryan Smith</h2>
                <p>CEO Framer</p>
              </div>
            </div>
            <p>{t("people.bryanFour")}</p>
          </div>

          <div className="bryanFive">
            <div className="head">
              <img src="/bryanFive.png" alt="" />
              <div>
                <h2>Bryan Smith</h2>
                <p>CEO Framer</p>
              </div>
            </div>
            <p>{t("people.bryanFive")}</p>
          </div>

          <div className="bryanSix">
            <div className="head">
              <img src="/bryanSix.png" alt="" />
              <div>
                <h2>Bryan Smith</h2>
                <p>CEO Framer</p>
              </div>
            </div>
            <p>{t("people.bryanSix")}</p>
          </div>

          <div className="bryanSeven">
            <div className="head">
              <img src="/bryanSeven.png" alt="" />
              <div>
                <h2>Bryan Smith</h2>
                <p>CEO Framer</p>
              </div>
            </div>
            <p>{t("people.bryanSeven")}</p>
          </div>

          <div className="bryanEight">
            <div className="head">
              <img src="/bryanEight.png" alt="" />
              <div>
                <h2>Bryan Smith</h2>
                <p>CEO Framer</p>
              </div>
            </div>
            <p>{t("people.bryanEight")}</p>
          </div>

          <div className="bryanNine">
            <div className="head">
              <img src="/bryanNine.png" alt="" />
              <div>
                <h2>Bryan Smith</h2>
                <p>CEO Framer</p>
              </div>
            </div>
            <p>{t("people.bryanNine")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parizoda;
