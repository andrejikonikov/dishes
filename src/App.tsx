import { useState, useCallback } from 'react'
import './App.css'

import Menu from './components/menu/menu'
import Chef from './components/chef/chef'

import { RestarauntContext } from './contexts/RestarauntContext'

import type { OrderType, DishType } from './types'
import './card.scss'

function App() {
  const [orders, setOrders] = useState<OrderType[]>([])

  const addOrder = useCallback((dish: DishType) => {
    const newOrder = {
      dish,
      id: Date.now(),
      status: 'started',
    } as OrderType

    setOrders((prev) => [...prev, newOrder])

    if (dish.type === 'drink') {
      return
    }

    console.log('Ordering dish', dish.ingredients)
  }, [])

  return (
    <RestarauntContext value={{ orders, addOrder }}>
      <Chef />
      <Menu />
    </RestarauntContext>
  )
}

export default App
