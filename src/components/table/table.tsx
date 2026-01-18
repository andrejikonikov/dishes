import { memo, useContext, useMemo } from 'react'
import { RestarauntContext } from '../../contexts/RestarauntContext'

import './table.scss'

import Plate from './components/plate'

function Table() {
  const { orders } = useContext(RestarauntContext)

  const plates = useMemo(() => {
    return orders.filter(order => order.status === 'completed')
  }, [orders])

  return (
    <section className="card card--brown table">
      <h3 className="card__title">Table</h3>
      {plates.map(({ id, dish: { title } }) => (
        <Plate
          key={id}
          title={title}
        />
      ))}
    </section>
  )
}

export default memo(Table)
