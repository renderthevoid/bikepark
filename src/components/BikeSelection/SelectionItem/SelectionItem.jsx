import React, { useState } from 'react'
import style from './SelectionItem.module.scss'
import bycicle from '../../../assets/images/bycicle.png'

const SelectionItem = ({ id, title, price, info }) => {
  const [added, setAdded] = useState(false)
  const [visible, setVisible] = useState(false)
  return (
    <div className={style.selection_item}>
      <div className={style.selection_image}>
        <img src={bycicle} alt="" />
      </div>
      <div className={style.selection_wrapper}>
        <h1 className={style.selection_title}>{title}</h1>
        <div className={style.selection_options}>
          <p className={style.selection_price}>{price} AED</p>
          <div className={style.selection_actions}>
            <div className={style.selection_info}>
              <div
                className={style.icon}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
              >
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.625C1 2.17525 2.34315 1 4 1C5.65685 1 7 2.17525 7 3.625C7 4.5333 6.47277 5.33385 5.67149 5.80513C4.8384 6.29512 4 7.0335 4 8V8"
                    stroke="#297FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="4" cy="11" r="1" fill="#297FFF" />
                </svg>
              </div>
              {visible && <p className={style.info_text}>{info}</p>}
            </div>
            <div
              className={added ? style.add_active : style.add}
              onClick={() => setAdded(!added)}
            >
              {added ? (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3L3.99951 6L8.99951 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6H11M6 1V11"
                    stroke="#297FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectionItem
