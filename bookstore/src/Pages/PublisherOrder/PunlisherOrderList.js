
import React from 'react';
import './PublisherOrderList.css';
import book1 from '../../Images/book-01.png';
import book2 from '../../Images/book-02.png';
import book3 from '../../Images/book.png';
import book4 from '../../Images/book5.jpg';
import book5 from '../../Images/book4.jpeg';
import book6 from '../../Images/book6.jpeg';
import book7 from '../../Images/book8.jpeg';

function PublisherOrderList() {
  const orders = [
    
      {
        id: 1,
        image:book1,
        productName: 'Adventure Book',
        price: 70.0,
        quantity: 3,
        totalPrice: 210.0,
        orderDate: '2024-02-10',
        status: 'Processing',
       
      },
      {
        id: 2,
        image:book5,
        productName: 'Science Fiction Novel',
        price: 50.0,
        quantity: 2,
        totalPrice: 100.0,
        orderDate: '2024-02-15',
        status: 'Delivered',
       
      },
      {
        id: 3,
        image:book2,
        productName: 'Adventure Book',
        price: 150.0,
        quantity: 1,
        totalPrice: 150.0,
        orderDate: '2024-02-20',
        status: 'Shipped',
        
      },
      {
        id: 4,
        image:book4,
        productName: 'Historical Fiction',
        price: 200.0,
        quantity: 4,
        totalPrice: 800.0,
        orderDate: '2024-02-25',
        status: 'Processing',
  
      },
      {
        id: 5,
        image:book3,
        productName: 'Adventure Book',
        price: 80.0,
        quantity: 2,
        totalPrice: 160.0,
        orderDate: '2024-03-01',
        status: 'Shipped',
        
      },
      {
        id: 6,
        image:book6,
        productName: 'Biography',
        price: 150.0,
        quantity: 1,
        totalPrice: 300.0,
        orderDate: '2024-03-05',
        status: 'Delivered',
     
      },
      {
        id: 7,
        image:book5,
        productName: 'Adventure Book',
        price: 120.0,
        quantity: 3,
        totalPrice: 360.0,
        orderDate: '2024-03-10',
        status: 'Processing',
       
      },
      {
        id: 8,
        image:book7,
        productName: 'Adventure Book',
        price: 90.0,
        quantity: 2,
        totalPrice: 170.0,
        orderDate: '2024-03-15',
        status: 'Shipped',
     
      },
      {
        id: 9,
        image:book1,
        productName: 'Cookbook',
        price: 120.0,
        quantity: 1,
        totalPrice: 120.0,
        orderDate: '2024-03-20',
        status: 'Delivered',
     
      },
      {
        id: 10,
        image:book1,
        productName: 'Business and Finance',
        price: 120.0,
        quantity: 2,
        totalPrice: 240.0,
        orderDate: '2024-03-25',
        status: 'Processing',
     
      },
      {
        id: 11,
        image:book1,
        productName: 'Art and Photography',
        price: 70.0,
        quantity: 1,
        totalPrice: 140.0,
        orderDate: '2024-03-30',
        status: 'Shipped',
  
      },
      {
        id: 12,
        image:book1,
        productName: 'Travel Guide',
        price: 180.0,
        quantity: 3,
        totalPrice: 540.0,
        orderDate: '2024-04-01',
        status: 'Processing',
      
      },
      {
        id: 13,
        image:book1,
        productName: 'Science and Nature',
        price: 30.0,
        quantity: 2,
        totalPrice: 60.0,
        orderDate: '2024-04-05',
        status: 'Delivered',
    
      },
      {
        id: 14,
        image:book1,
        productName: 'Children\'s Book',
        price: 18.0,
        quantity: 4,
        totalPrice: 72.0,
        orderDate: '2024-04-10',
        status: 'Shipped',
       
      },
      {
        id: 15,
        image:book1,
        productName: 'Educational Textbook',
        price: 25.0,
        quantity: 1,
        totalPrice: 25.0,
        orderDate: '2024-06-1',
        status: 'Processing',
      
      },
      

  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">Publisher Orders</h2>
      <div>
        <table className="table table-striped table-bordered bg-white">
          <thead className="text-center">
            <tr>
              <th>ID</th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {orders.map((order) => (
              <tr >
                <td>{order.id}</td>
                <td>
                  <img
                    src={order.image}
                    alt={order.productName}
                    className="order-image"
                  />
                </td>
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
     
    </div>
  );
}

export default PublisherOrderList;

