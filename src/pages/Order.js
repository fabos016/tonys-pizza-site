import React from 'react';

import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

import OrderContent from '../components/OrderContent';
import NavbarOther from '../components/NavbarOther';

import "bootstrap/dist/css/bootstrap.min.css";

function Order() {
    return (
        <div className="Order">
            <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Mono+One"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Overpass"></link>

                <NavbarOther />
            </header>

            <div style={{marginTop: '5%', marginLeft: '25%', marginRight: '25%'}}>
                <b style={{fontSize: '38px', fontFamily: 'Overpass', color: 'green'}}>Your order has been placed!</b>
                    
                <OrderContent />
                <b style={{fontSize: '18px', fontFamily: 'Overpass'}}>NOTE: Payment is made in-person to the delivery driver upon pizza delivery.</b>
            </div>
        </div>
    );
}
  
export default Order;