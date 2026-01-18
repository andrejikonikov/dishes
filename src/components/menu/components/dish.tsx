import Button from '../../shared/button'
import type { DishType } from '../../../types'
import { withAddOrder } from '../../../hocs/withAddOrder'

type DishProps = {
  dish: DishType;
  addOrder: (dish: DishType) => void;
}

function Dish({ dish, addOrder }: DishProps) {
  console.log('Dish rendered ', dish.title)
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

const DishWithAddOrder = withAddOrder(Dish)
export default DishWithAddOrder
