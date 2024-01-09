import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './Order.css';
import orderData from '../../constants/Order.json';

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    setOrdersData(orderData);
  }, []);

  return (
    <div className="section-container">
      <h1 >Orders</h1>
      <ul>
        {ordersData.map(order => (
          <li key={order.id}>
            <div className="order-details">
              <div>
                <span className="order-id">Order ID: {order.orderId}</span>
                <br />
                <span className="order-date">Date: {order.orderDate}</span>
              </div>
              <div className="total-amount">
                Total: <FontAwesomeIcon icon={faIndianRupeeSign} /> {order.total}
              </div>
            </div>
            {order.productName} - Quantity: {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
