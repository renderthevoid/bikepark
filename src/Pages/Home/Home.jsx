import React from 'react'
import style from './home.module.scss'
import Gifts from './Gifts/gifts'
import Sort from '../../components/Sort/sort'
import BikeSelection from '../../components/BikeSelection/bikeselection'

const Home = () => {
  return (
    <div>
      <div className={style.home}>
        <div className={style.wrapper}>
          <div className={style.hero}>
            <h1 className={style.title}>Аренда велосипедов c доставкой</h1>
            <Gifts />
          </div>
          <Sort />
        </div>
      </div>
      <BikeSelection />
    </div>
  )
}

export default Home
