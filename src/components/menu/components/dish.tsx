import { useContext } from 'react'
import Button from '../../shared/button'
import { RestarauntContext } from '../../../contexts/RestarauntContext'
import type { DishType } from '../../../types'

type DishProps = {
  dish: DishType;
}

function Dish({ dish }: DishProps) {
  const { addOrder } = useContext(RestarauntContext)
  const { title, description, price, type } = dish

  if (type === 'drink') {
    return (
      <div className="menu__dish">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <Button text="Order" onClick={() => addOrder(dish)} />
      </div>
    )
  }

  return (
    <div className="menu__dish">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <Button text="Order" onClick={() => addOrder(dish)} />
    </div>
  )
}

export default Dish
