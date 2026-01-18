import './menu.scss'
import Dish from './components/dish'

export type IngredientType = {
  name: string;
  quantity: number;
}

type FoodDishType = {
  type: 'food';
  title: string;
  description: string;
  price: number;
  ingredients?: IngredientType[];
}

type DrinkDishType = {
  type: 'drink';
  title: string;
  description: string;
  price: number;
}

export type DishType = FoodDishType | DrinkDishType;

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
    <div className="menu">
      {dishes.map((dish) => (
        <Dish key={dish.title} dish={dish} />
      ))}
    </div>
  )
}

export default Menu
