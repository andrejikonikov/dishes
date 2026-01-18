export type OrderType = {
  dish: DishType;
  id: number;
}

export type RestarauntContextType = {
  orders: OrderType[];
  addOrder: (dish: DishType) => void;
}

export type IngredientType = {
  name: string;
  quantity: number;
}

export type FoodDishType = {
  type: 'food';
  title: string;
  description: string;
  price: number;
  ingredients?: IngredientType[];
}

export type DrinkDishType = {
  type: 'drink';
  title: string;
  description: string;
  price: number;
}

export type DishType = FoodDishType | DrinkDishType;
