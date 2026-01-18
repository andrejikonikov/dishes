import './menu.scss'

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
