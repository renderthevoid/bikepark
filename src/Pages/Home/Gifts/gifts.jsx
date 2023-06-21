import React from 'react'
import style from '../home.module.scss'
import { items } from './giftItems'

const Gifts = () => {
  return (
    <div className={style.gifts}>
      {items.map((item) => (
        <div key={item.id} className={`tool_wrapper ${item.className || ''}`}>
          <div className={style.bg}>
            <img src={item.bgImg} alt="" />
          </div>
          <div className="tool_box">
            <img src={item.img} alt="" className={style.gift_img} />
            <div className={style.text_block}>
              <p className={style.gift_item}>{item.tool}</p>
              <p className={style.gift_free}>Бесплатно</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gifts
