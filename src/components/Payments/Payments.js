import React from 'react';

const Payments = () => {
  const onlineOrders = [
    { id: 1, amount: 50.00, date: '2024-01-01' },
    { id: 2, amount: 75.50, date: '2024-01-05' },
  ];

  const transactionHistory = [
    { id: 1, type: 'Sale', amount: 30.00, date: '2024-01-02' },
    { id: 2, type: 'Refund', amount: -15.00, date: '2024-01-04' },
  ];

  return (
    <div>
      <h2>Payments</h2>
      <section>
        <h3>Online Orders</h3>
        <ul>
          {onlineOrders.map(order => (
            <li key={order.id}>
              Order ID: {order.id}, Amount: ${order.amount}, Date: {order.date}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Transaction History (This Month)</h3>
        <ul>
          {transactionHistory.map(transaction => (
            <li key={transaction.id}>
              Type: {transaction.type}, Amount: ${transaction.amount}, Date: {transaction.date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Payments;
