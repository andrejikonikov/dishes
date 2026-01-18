import { createContext } from 'react'
import type { DishType } from '../components/menu/menu'

export type OrderType = {
  dish: DishType;
  id: number;
}

type RestarauntContextType = {
  orders: OrderType[];
  addOrder: (dish: DishType) => void;
}

export const RestarauntContext = createContext<RestarauntContextType>({
  orders: [],
  addOrder: () => {},
});
