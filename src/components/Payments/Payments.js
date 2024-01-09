import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFile, faIndianRupeeSign, faDownload } from '@fortawesome/free-solid-svg-icons';
import orderData from '../../constants/OrderData.json';
import './Payments.css';

const Payments = () => {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [timeRange, setTimeRange] = useState('Last Month');
  const [selectedOption, setSelectedOption] = useState('Sort');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const itemsPerPage = 19;

  const searchTextLower = searchText.toLowerCase();

  const filteredTransactions = orderData.filter(order =>
    order.orderId.toLowerCase().includes(searchTextLower)
  );

  const totalAmount = orderData.reduce((acc, order) => acc + order.total, 0);
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="payments-container">
      <div className="payments-header">
        <h2 style={{ fontWeight: 'normal', fontSize: 'small' }}>
          Payments &nbsp;<span className='circle-how'>?</span> &nbsp;<span style={{ color: 'rgb(120,125,140)'}}>How it works</span>
        </h2>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search features, tutorials, etc"
            onChange={(e) => setSearchText(e.target.value)}
            style={{ outline: 'none' }}
          />
        </div>
        <div style={{color:"grey"}}><span className='arrowdown'><FontAwesomeIcon icon={faFile} style={{color: "grey"}} /></span> <span className='arrowdown'>&#9660;</span></div>
      </div>
      <hr />
      <div className="overview-section">
        <div className='dropdown-container'>
          <div><h3>Overview</h3></div>
          <div>
            <select
              id="timeRange"
              style={{ marginLeft: '10px' }}
            >
              <option value="Last Month">Last Month</option>
              <option value="This Month">This Month</option>
            </select>
          </div>
        </div>
        <table style={{ border: 'none' }}>
          <thead>
            <tr style={{ border: 'none', fontSize: 'small' }}>
              <th style={{ border: 'none', backgroundColor: 'white', textAlign: 'left' }}>Online Orders</th>
              <th style={{ border: 'none', backgroundColor: 'white', textAlign: 'left' }}>Amount Received</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ border: 'none', fontSize: '1.5rem' }}>
              <td style={{ border: 'none', textAlign: 'left' }}>{orderData.length}</td>
              <td style={{ border: 'none', textAlign: 'left' }}><FontAwesomeIcon icon={faIndianRupeeSign} /> {totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="transactions-section">
        <h3>Transactions | This Month</h3>
        <div className='dropdown-container'>
        <div className="search-bar" style={{ backgroundColor: 'white', border: '1px solid rgb(217,217,217)', width: '250px' }}>
          <FontAwesomeIcon icon={faSearch} style={{ color: 'rgb(217,217,217)' }} />
          <input
            type="text"
            placeholder="Search by Order ID"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ backgroundColor: 'white', outline: 'none' }}
          />
        </div>
        <div style={{display:'flex'}}>
          <div className='dropdown-sort'>Sort &#8645;</div>
          <div className='dropdown-sort'><FontAwesomeIcon icon={faDownload} /></div>
        </div>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Order ID</th>
              <th style={{ textAlign: "left" }}>Order Date</th>
              <th>Order Amount</th>
              <th>Transaction Amount</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td style={{ color: 'rgb(20,110,180)', textAlign: "left" }}>#{transaction.orderId}</td>
                <td style={{ textAlign: "left" }}>{transaction.orderDate}</td>
                <td><FontAwesomeIcon icon={faIndianRupeeSign} />{transaction.total}</td>
                <td><FontAwesomeIcon icon={faIndianRupeeSign} />22</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1} style={{ border: '1px solid rgb(217,217,217)' }}>
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages} style={{ border: '1px solid rgb(217,217,217)' }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
