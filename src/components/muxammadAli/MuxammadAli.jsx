import React from 'react'
import "./MuxammadAli.css"
import img from "./imager.svg"

import { useTranslation } from 'react-i18next'

const MuxammadAli = () => {
  const [t,i18n] = useTranslation()
  return (
    <div className='muhammadali container'>
        <div className="muhammadali-texts">
                <p className="muhammadali-text-1">{t("muhammadali.bigText")}</p>
                <p className="muhammadali-text-2">{t("muhammadali.smallText")}</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
    </div>
  )
}

export default MuxammadAli
