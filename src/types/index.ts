export type OrderStatus = 'new' | 'started' | 'completed';

export type OrderType = {
  dish: DishType;
  id: number;
  status: OrderStatus;
}

export type RestarauntContextType = {
  orders: OrderType[];
  addOrder: (dish: DishType) => void;
  updateOrder: (orderId: number, status: OrderStatus) => void;
}

export type IngredientType = {
  name: string;
  quantity: number;
}

export type FoodDishType = {
  type: 'food';
  title: DishesTitles;
  description: string;
  price: number;
  ingredients: IngredientType[];
}

export type DrinkDishType = {
  type: 'drink';
  title: DishesTitles;
  description: string;
  price: number;
}

export type DishType = FoodDishType | DrinkDishType;

export const DishesTitles = {
  Burger: 'Burger',
  Fish: 'Fish',
  Drink: 'Drink',
} as const

export type DishesTitles = typeof DishesTitles[keyof typeof DishesTitles]
