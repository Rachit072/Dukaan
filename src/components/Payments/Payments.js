import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRight, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import orderData from '../../constants/OrderData.json';
import './Payments.css';

const Payments = () => {
  const [searchText, setSearchText] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const searchTextLower = searchText.toLowerCase();
    const filteredTransactions = orderData.filter(order =>
      order.orderId.toLowerCase().includes(searchTextLower)
    );
    setTransactions(filteredTransactions);
  }, [searchText]);
  

  const totalAmount = orderData.reduce((acc, order) => acc + order.total, 0);

  return (
    <div className="payments-container">
      <div className="payments-header">
        <h2 style={{fontWeight:'normal',fontSize:'small'}}>Payments</h2>
        <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search features, tutorials, etc"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
      </div>
        <hr/>
      <div className="overview-section">
        <h3>Overview</h3>
        <p>Total Orders: {orderData.length}</p>
        <p>Total Amount: {totalAmount}</p>
      </div>

      <div className="transactions-section">
        <h3>Transactions</h3>
        <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search by Order ID"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th style={{textAlign:"left"}}>Order ID</th>
              <th style={{textAlign:"left"}}>Order Date</th>
              <th>Order Amount</th>
              <th>Transaction Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td style={{color:'rgb(20,110,180)',textAlign:"left"}}>#{transaction.orderId}</td>
                <td style={{textAlign:"left"}}>{transaction.orderDate}</td>
                <td><FontAwesomeIcon icon={faIndianRupeeSign}/>1278.23</td>
                <td><FontAwesomeIcon icon={faIndianRupeeSign}/>22</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
