import React, { useEffect, useRef, useState } from 'react'
import style from './sort.module.scss'

const Sort = () => {
  const types = ['По дням', '2 часа']
  const delivery = ['По адресу', 'Самовывоз']
  const [activeType, setActiveType] = useState(0)
  const [isHoursDisable, setIsHoursDisable] = useState(true)
  const [activeDelivery, setActiveDelivery] = useState(0)
  const [visible, setVisible] = useState(false)
  
  const deliveryRef = useRef()
  const deliveryClickHanlder = (index) => {
    setVisible(false)
    setActiveDelivery(index)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.composedPath().includes(deliveryRef.current)) {
        setVisible(false)
      }
    }
    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const onChangeType = (i) => {
    setActiveType(i)
    i === 1 ? setIsHoursDisable(false) : setIsHoursDisable(true)
  }

  return (
    <div className={style.sort}>
      <div className="container">
        <div className={style.sort_wrapper}>
          <div className={style.type}>
            <p className={style.title}>Тип аренды</p>
            <ul className={style.type_items}>
              {types.map((type, i) => (
                <li
                  key={type}
                  className={`${
                    activeType === i ? style.type_item_active : style.type_item
                  }`}
                  onClick={() => onChangeType(i)}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <div className={style.date_activity}>
            <div className={style.date_start}>
              <p className={style.title}>Дата и время начала</p>
              <div className={style.datepicker}>
                <input
                  type="input"
                  name="date"
                  placeholder="12.02.12"
                  className={style.input}
                  disabled
                />
                <div className="datepicker_popup"></div>
              </div>
            </div>

            <div className={style.date_end}>
              <p className={style.title}>Дата и время конца</p>
              <div className={style.datepicker}>
                <input
                  type="input"
                  name="date"
                  placeholder="12.02.12"
                  disabled
                />
                <div className="datepicker_popup"></div>
              </div>
            </div>
          </div>

          <div className={style.delivery}>
            <p className={style.title}>Доставка</p>
            <div className={style.delivery_box} ref={deliveryRef}>
              <div
                className={style.delivery_picker}
                onClick={() => setVisible(!visible)}
              >
                {delivery[activeDelivery]}
              </div>
              {visible && (
                <div className={style.delivery_popup}>
                  <ul className={style.delivery_items}>
                    {delivery.map((item, index) => (
                      <li
                        key={item}
                        className={style.delivery_item}
                        onClick={() => deliveryClickHanlder(index)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sort
