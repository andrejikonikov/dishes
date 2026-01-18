import { memo, useContext } from 'react'
import { RestarauntContext } from '../contexts/RestarauntContext'
import type { DishType } from '../types'

type WithAddOrderProps = {
  addOrder: (dish: DishType) => void;
}

export const withAddOrder = <P extends WithAddOrderProps>(Component: React.ComponentType<P>) => {
  const MemoComponent = memo(Component)

  return (props: Omit<P, keyof WithAddOrderProps>) => {
    const { addOrder } = useContext(RestarauntContext)

    return (
      <MemoComponent {...props as P} addOrder={addOrder} />
    )
  }
}
