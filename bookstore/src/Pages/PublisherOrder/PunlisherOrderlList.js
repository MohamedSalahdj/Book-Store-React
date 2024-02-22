

import React from 'react';
import { Link } from 'react-router-dom';

import './PublisherOrderList.css';

const PublisherOrderList = () => {
  const orders = [
    {
      id: 1,
      productName: 'Book 1',
      price: 20.0,
      quantity: 2,
      totalPrice: 40.0,
      orderDate: '2024-03-01',
      status: 'Shipped',
    },
    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },    {
        id: 1,
        productName: 'Book 1',
        price: 20.0,
        quantity: 2,
        totalPrice: 40.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
      },
    {
      id: 2,
      productName: 'Book 2',
      price: 25.0,
      quantity: 1,
      totalPrice: 25.0,
      orderDate: '2024-03-02',
      status: 'Processing',
    },
    
    // Add more orders as needed
  ];

  return (
    <div className="publisher-order-list">
      <div className="container">
        <h2 className="my-4">Publisher Orders</h2>

        {orders.length === 0 ? (
          <div className="empty-list">
            <p>No orders available.</p>
          </div>
        ) : (
          <div className="order-list">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Order Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="order-item">
                    <td>{order.id}</td>
                    <td>{order.productName}</td>
                    <td>${order.price}</td>
                    <td>{order.quantity}</td>
                    <td>${order.totalPrice}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="cta-buttons">
       
          <button className="btn btn-danger">Approve Order</button>
          <button className="btn btn-orange">Disapprove</button>
        </div>
      </div>
    </div>
  );
};

export default PublisherOrderList;