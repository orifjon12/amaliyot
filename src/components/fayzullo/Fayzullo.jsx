import React from "react";
import image from "../../assets/IMAGE (13).svg";
import icon from "../../assets/Clip path group.svg";
import "./Fayzullo.css";
import { useTranslation } from "react-i18next";
const Fayzullo = () => {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <div>
        <section className="wrapper">
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <h2>{t("fayzullo.title")}</h2>

            <p className="text">{t("fayzullo.description")}</p>
            <div className="">
              <div className="icon1">
                <img src={icon} alt="" />
                <p>Molestie eget non libero viverra vitae nibh.</p>
              </div>
              <div className="icon2">
                <img src={icon} alt="" />
                <p>Aliquam in sollicitudin sem.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Fayzullo;
