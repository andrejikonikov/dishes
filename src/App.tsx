import { useState } from 'react'
import './App.css'

import Menu from './components/menu/menu'
import Chef from './components/chef/chef'

function App() {
  const [orders, setOrders] = useState<OrderType[]>([])

  const addOrder = (dish: DishType) => {
    setOrders((prev) => [...prev, { dish, id: Date.now() }])

    if (dish.type === 'drink') {
      return
    }

    console.log('Ordering dish', dish.ingredients)
  }

  return (
    <RestarauntContext value={{ orders, addOrder }}>
      <Chef />
      <Menu />
    </RestarauntContext>
  )
}

export default App
