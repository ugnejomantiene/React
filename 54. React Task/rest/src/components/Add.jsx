import React, { useState, useContext } from 'react';
import OrdersContext from '../context';

const Add = () => {
  const [people, setPeople] = useState('');
  const [price, setPrice] = useState('');
  const { addOrder } = useContext(OrdersContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder(people, price);
    setPeople('');
    setPrice('');
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div>
        <label>Number of People:</label>
        <input className="add-input" type="number" value={people} onChange={e => setPeople(e.target.value)}/>
      </div>
      <div>
        <label>Price:</label>
        <input className="add-input" type="number" value={price} onChange={e => setPrice(e.target.value)}/>
      </div>
      <button className="add-button" type="submit">Add Order</button>
    </form>
  );
}
export default Add;