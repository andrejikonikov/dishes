import Button from '../../shared/button'

function Drink() {
  return (
    <div className="menu__dish">
      <h2>Drink</h2>
      <p>Crispy soda drink</p>
      <Button text="Order" onClick={() => console.log('Ordering drink')} />
    </div>
  )
}

export default Drink
