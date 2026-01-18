import Fish from './components/fish'
import Burger from './components/burger'
import Drink from './components/drink'

import './menu.scss'

function Menu() {
  return (
    <div className="menu">
      <Fish />
      <Burger />
      <Drink />
    </div>
  )
}

export default Menu
