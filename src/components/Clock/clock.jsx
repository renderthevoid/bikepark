import React, { useEffect, useState } from 'react'
import style from './clock.module.scss'

const Clock = () => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const hours = time.getHours() - (time.getHours() >= 12 ? 12 : 0)
  const format = time.getHours() >= 12 ? 'PM' : 'AM'
  const minutes = time.getMinutes() >= 10 ? time.getMinutes() : `0${time.getMinutes()}`

  return (
    <div className={style.time_block}>
      <div className={style.time}>{hours}:{minutes} {format}</div>
      <p>Time in Dubai</p>
    </div>
  )
}

export default Clock
