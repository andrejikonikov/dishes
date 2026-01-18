import Button from '../../shared/button'

import type { DishType } from '../menu'

type DishProps = {
  dish: DishType;
}

function Dish({ dish }: DishProps) {
  const { title, description, price, type } = dish

  if (type === 'drink') {
    return (
      <div className="menu__dish">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <Button text="Order" onClick={() => console.log('Ordering drink')} />
      </div>
    )
  }

  const { ingredients } = dish

  return (
    <div className="menu__dish">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <Button text="Order" onClick={() => console.log('Ordering drink', ingredients)} />
    </div>
  )
}

export default Dish
