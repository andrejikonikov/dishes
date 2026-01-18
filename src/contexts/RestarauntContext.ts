import { createContext } from 'react'

import type { RestarauntContextType } from '../types';

export const RestarauntContext = createContext<RestarauntContextType>({
  orders: [],
  addOrder: () => {},
  updateOrder: () => {},
});
