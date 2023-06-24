import React, { useEffect, useState } from 'react'
import './scss/app.scss'
import axios from 'axios'
import Header from './components/Header/header'
import Home from './Pages/Home/Home'

const App = () => {
  const [items, setItems] = useState([])
  const brandName = "GT"
  useEffect(() => {
    axios
      .get(`https://6495c034b08e17c91792a14c.mockapi.io/items?page=1&limit=10&bicycle_type=Mountain|City|Carbon`)
      .then((res) => {
        console.log(res.data)
        setItems(res.data)
      })
  }, [])

  return (
    <div className="content">
      <Header />
      {items.map((item) => (
        <div key={item.id}>{item.available}</div>
      ))}
      <Home />
    </div>
  )
}
export default App
