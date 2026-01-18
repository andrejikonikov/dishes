import Fish from './components/fish'
import Burger from './components/burger'

import './menu.scss'

function Menu() {
  return (
    <div className="menu">
      <Fish />
      <Burger />
    </div>
  )
}

export default Menu
