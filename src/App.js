import React, { useEffect, useState } from 'react'
import './scss/app.scss'
import axios from 'axios'
import Header from './components/Header/header'
import Home from './Pages/Home/Home'

const App = () => {
  const [items, setItems] = useState([])
  // useEffect(() => {
  //   axios
  //     .get(`https://api.mockaroo.com/api/58168ab0?count=20&key=013fb6a0`, {
  //       // headers: { 'X-Api-Key': 'c4ZZ4xL1DkO5PNlDCojQNQ==fVwiotuuxW7XCxz3' },
  //     })
  //     .then((res) => {
  //       console.log(res.data)
  //       setItems(res.data)
  //     })
  // }, [])

  return (
    <div className="content">
      <Header />
      {items.map((item) => (
        <div key={item.id}>{item.brand}</div>
      ))}
      <Home />
    </div>
  )
}
export default App
