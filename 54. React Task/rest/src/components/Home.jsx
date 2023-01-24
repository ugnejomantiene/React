import React, { useContext } from 'react';
import OrdersContext from '../context';

const Home = () => {
  const { orders, deleteOrder } = useContext(OrdersContext);

  if (!orders) {
    return <p>Loading...</p>
  }

  const orderRows = orders.length > 0 ? 
    orders.map(order => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.people}</td>
        <td>{order.price}</td>
        <td><button className="delete" onClick={() => deleteOrder(order.id)}>Delete</button></td>
      </tr>
    )) : <tr><td colSpan={4}>Take your order...</td></tr>;

    return (
      <div className="home-container">
        <h1 className="home-title">Orders</h1>
        <table className="home-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Number of People</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orderRows}
          </tbody>
        </table>
      </div>
    );
  };

export default Home;