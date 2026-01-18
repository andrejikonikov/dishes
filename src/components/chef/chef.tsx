import { useContext, useEffect } from 'react'
import { RestarauntContext } from '../../contexts/RestarauntContext'
import type { DishType, OrderType } from '../../types'

function Chef() {
  const { orders, updateOrder } = useContext(RestarauntContext)
  const newOrders = orders.filter(order => order.status === 'new')
  const startedOrders = orders.filter(order => order.status === 'started')

  function startCooking(dish: DishType) {
    console.log('Chef started cooking ', dish.type)

    const { type } = dish

    return new Promise<string>((resolve) => {
      if (type === 'drink') {
        return resolve('success')
      }

      const { ingredients } = dish
      const preparationTime = ingredients
        .reduce((acc, ingredient) => acc + ingredient.quantity * 1000, 0)

      setTimeout(() => {
        console.log('Chef finished cooking ', dish.type, dish.ingredients)
        resolve('success')
      }, preparationTime)
    })
  }

  async function startPreparing(order: OrderType) {
    const { dish } = order

    updateOrder(order.id, 'started')
    const result = await startCooking(dish)

    if (result === 'success') {
      updateOrder(order.id, 'completed')
    }
  }

  useEffect(() => {
    if (newOrders.length > 0) {
      console.log('Chef useEffect ', newOrders)

      newOrders.forEach(order => {
        startPreparing(order)
      })
    }
  }, [newOrders])

  return (
    <div className="chef">
      <h2>Chef</h2>
      <p>New Orders: {newOrders.length}</p>
      <p>Started Orders: {startedOrders.length}</p>
    </div>
  )
}

export default Chef
