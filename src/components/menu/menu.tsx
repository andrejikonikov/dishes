import { memo } from 'react'
import './menu.scss'
import Dish from './components/dish'

import type { FoodDishType, DrinkDishType, DishType } from '../../types'

const dishes: DishType[] = [
  {
    type: 'food',
    title: 'Burger',
    description: 'Delicious burger',
    price: 10,
    ingredients: [
      { name: 'Bun', quantity: 2 },
      { name: 'Beef', quantity: 1 },
      { name: 'Cheese', quantity: 1 },
      { name: 'Lettuce', quantity: 1 },
      { name: 'Tomato', quantity: 1 },
      { name: 'Onion', quantity: 1 },
    ],
  } satisfies FoodDishType,
  {
    type: 'food',
    title: 'Fish',
    description: 'Fresh fish',
    price: 15,
    ingredients: [
      { name: 'Bread', quantity: 1 },
      { name: 'Fish', quantity: 1 },
      { name: 'Mayonnaise', quantity: 1 },
      { name: 'Lettuce', quantity: 1 },
      { name: 'Tomato', quantity: 1 },
      { name: 'Onion', quantity: 1 },
    ],
  } satisfies FoodDishType,
  {
    type: 'drink',
    title: 'Drink',
    description: 'Refreshing drink',
    price: 0,
  } satisfies DrinkDishType,
] satisfies DishType[];

function Menu() {
  return (
    <section className="card menu">
      <h3 className="card__title">Menu</h3>
      {dishes.map((dish) => (
        <Dish key={dish.title} dish={dish} />
      ))}
    </section>
  )
}

export default memo(Menu)
