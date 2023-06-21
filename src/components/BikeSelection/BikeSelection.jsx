import React from 'react'
import style from './bikeselection.module.scss'
import SelectionItem from './SelectionItem/SelectionItem'
const options = [
  { id: 1, title: 'Алюминий', price: '90', info: 'Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.' },
  { id: 2, title: 'Карбон', price: '180', info: 'Легкие и хорошо заглушают вибрацию неровностей. Хорошо подходят для крупных людей – для мало весящих езда будет жесткой.' },
  { id: 3, title: 'Горный/городской', price: '90', info: 'Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.' },
  { id: 4, title: 'Городской эконом', price: '45', info: 'Легкие и хорошо заглушают вибрацию неровностей. Хорошо подходят для крупных людей – для мало весящих езда будет жесткой.' },
]
const BikeSelection = () => {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <p className={style.title}>Тип велосипеда</p>
        <div className={style.selection_items}>
          {options.map((obj) => (
            <SelectionItem key={obj.id} {...obj} />
          ))}
        </div>
        <button className={style.button}>Найти</button>
      </div>
    </div>
  )
}

export default BikeSelection
