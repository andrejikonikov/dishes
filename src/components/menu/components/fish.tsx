import Button from '../../shared/button'

function Fish() {
  return (
    <div className="menu__dish">
      <h2>Fish</h2>
      <p>Delicious fish steak</p>
      <Button text="Order" onClick={() => console.log('Ordering fish')} />
    </div>
  )
}

export default Fish
