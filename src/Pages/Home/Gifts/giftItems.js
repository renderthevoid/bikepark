import helmet from '../../../assets/images/helmet.png'
import lantern from '../../../assets/images/lantern.png'
import lock from '../../../assets/images/lock.png'
import lockBg from '../../../assets/images/lock-bg.png'
import helmetBg from '../../../assets/images/helmet-bg.png'
import lanternBg from '../../../assets/images/lantern-bg.png'

export const items = [
  { id: 1, tool: 'Шлем', img: helmet, bgImg: helmetBg, className: 'helmet' },
  {
    id: 2,
    tool: 'Фонарик',
    img: lantern,
    bgImg: lanternBg,
    className: 'lantern',
  },
  { id: 3, tool: 'Замок', img: lock, bgImg: lockBg, className: 'lock' },
]
