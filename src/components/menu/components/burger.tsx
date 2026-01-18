import Button from '../../shared/button'

function Burger() {
  return (
    <div className="menu__dish">
      <h2>Burger</h2>
      <p>Delicious burger with cheese</p>
      <Button text="Order" onClick={() => console.log('Ordering burger')} />
    </div>
  )
}

export default Burger
