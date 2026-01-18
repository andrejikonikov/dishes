import { useState, useCallback } from 'react'
import './App.css'

import Menu from './components/menu/menu'
import Chef from './components/chef/chef'
import Table from './components/table/table'

import { RestarauntContext } from './contexts/RestarauntContext'

import type { OrderType, DishType, OrderStatus } from './types'
import './card.scss'

function App() {
  const [orders, setOrders] = useState<OrderType[]>([])

  const addOrder = useCallback((dish: DishType) => {
    const newOrder = {
      dish,
      id: Date.now(),
      status: 'new',
    } as OrderType

    setOrders((prev) => [...prev, newOrder])
  }, [])

  const updateOrder = useCallback((orderId: number, status: OrderStatus) => {
    setOrders((prev) => prev.map((order) => {
      if (order.id === orderId) {
        return { ...order, status }
      }
      return order
    }))
  }, [])

  return (
    <RestarauntContext value={{ orders, addOrder, updateOrder }}>
      <Chef />
      <Menu />
      <Table />
    </RestarauntContext>
  )
}

export default App
