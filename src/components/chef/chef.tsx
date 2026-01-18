import { useContext } from 'react'
import { RestarauntContext } from '../../contexts/RestarauntContext'

function Chef() {
  const { orders } = useContext(RestarauntContext)

  return (
    <div className="chef">
      <h2>Chef</h2>
      <p>Orders: {orders.length}</p>
    </div>
  )
}

export default Chef
