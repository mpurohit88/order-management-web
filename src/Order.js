import React, {useState, useEffect } from 'react';

import order from './httpClient.js';
import CustomizedTables from './CustomizedTables';

import './Order.css';

export default function Order() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const orders = await order.getOrders();
            setOrders(orders);
            setLoading(false);
        }
        fetchData();
      }, []);
  
    async function updateStatus (id, status){
        setLoading(true);

        const orders = await order.updateOrderStatus(id, status);

        setOrders(orders);
        setLoading(false);
    }

      return (
            <div className="App">
                <h2 style={{'display': 'flex'}}>List of Orders  {loading ? <div class="spinner">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                </div> : ''}</h2>
               
                <CustomizedTables orders={orders} updateStatus={updateStatus}/>
                 
            </div>
        );
}
