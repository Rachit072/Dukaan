import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './Order.css';
import orderData from '../../constants/OrderData.json';

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    setOrdersData(orderData);
  }, []);

  return (
    <div className="section-container">
      <h2>Orders</h2>
      <ul>
        {ordersData.map(order => (
          <li key={order.id}>
            Order ID: {order.orderId}, Date: {order.orderDate}, {order.productName} - Quantity: {order.quantity}, Total: <FontAwesomeIcon icon={faIndianRupeeSign} /> {order.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
