import React from 'react';
import {Button} from "react-bootstrap";

import cheesefrenzy from '../img/catalogue/cheesefrenzy.png';
import porkcuts from '../img/catalogue/porkcuts.png';
import newyorkstyle from '../img/catalogue/newyorkstyle.png';
import greenieflatbreads from '../img/catalogue/greenieflatbreads.png';
import stuffedcrust from '../img/catalogue/stuffedcrust.png';
import balancio from '../img/catalogue/balancio.png';

const pizzas = [{
    id: '0', name: 'Cheese Frenzy', price: '29.99', picture: cheesefrenzy, meatanddairytopping: ['cheese'], veggietopping: [], crustthickness: 'thin', typeofcrust: 'newyorkstyle', crusttexture: 'chewy'
  },
  {
    id: '1', name: 'Pork Cuts', price: '15', picture: porkcuts, meatanddairytopping: ['pepperoni (pork)'], veggietopping: ['red pepper'], crustthickness: 'medium', typeofcrust: 'detroitstyle', crusttexture: 'crispy'
  },
  {
    id: '2', name: 'New York Style', price: '9.99', picture: newyorkstyle, meatanddairytopping: ['cheese, chicken'], veggietopping: ['onion'], crustthickness: 'thick', typeofcrust: 'newyorkstyle', crusttexture: 'thick'
  },
  {
    id: '3', name: 'Greenie Flatbreads', price: '7', picture: greenieflatbreads, meatanddairytopping: [], veggietopping: ['basil', 'tomato'], crustthickness: 'thin', typeofcrust: 'flatbread', crusttexture: 'chewy'
  },
  {
    id: '4', name: 'Stuffed Crust', price: '13', picture: stuffedcrust, meatanddairytopping: ['cheese', 'pepperoni (beef)'], veggietopping: [], crustthickness: 'thick', typeofcrust: 'stuffedcrust', crusttexture: 'thick'
  },
  {
    id: '5', name: 'Balancio', price: '24', picture: balancio, meatanddairytopping: ['cheese, chicken'], veggietopping: ['green pepper', 'black olive'], crustthickness: 'medium', typeofcrust: 'newyorkstyle', crusttexture: 'crispy'
  },
];


function addToCart(nameItem) {
  var pizzaConverted = JSON.stringify(nameItem);

  var fullCart;

  if (sessionStorage.getItem('cart')) {
    //Cumulative
    fullCart = JSON.parse(sessionStorage.getItem('cart'));
  } else {
    fullCart = [];
  }

  fullCart.push(pizzaConverted);

  var cartConverted = JSON.stringify(fullCart);

  sessionStorage.setItem('cart', cartConverted);

  document.getElementById("checkoutButton").disabled = (fullCart === undefined || fullCart.length === 0);
}

function removeFromCart(nameItem) {
  var pizzaConverted = JSON.stringify(nameItem);

  var fullCart;

  if (sessionStorage.getItem('cart')) {
    //Cumulative
    fullCart = JSON.parse(sessionStorage.getItem('cart'));
  } else {
    fullCart = [];
  }

  if (fullCart.length >= 1) {
    fullCart.splice(fullCart.indexOf(pizzaConverted), 1);
  }

  var cartConverted = JSON.stringify(fullCart);

  sessionStorage.setItem('cart', cartConverted);

  document.getElementById("checkoutButton").disabled = (fullCart === undefined || fullCart.length === 0);
}

function swap (e, pizzaname, i) {
  e.target.disabled = true;
  e.target.parentElement.children[i].disabled = false;
  if (i === 1) {
    e.target.parentElement.children[i].onclick = function click(q) {removeFromCart(pizzaname); swap(q, pizzaname, 0);}
  }
}

function CatalogueItems () {
    sessionStorage.setItem('cart', []);

    return pizzas.map((pizza) => (

      <div className="card shadow" style={{width: "20rem", flexBasis: '40%', flexGrow: '1'}} key={pizza.id}>
          <img className="card-img-top" src={pizza.picture} alt="Pizza" style={{height: '70%'}}></img>
          <div className="card-body">
              <h5 className="card-title" style={{fontWeight: 'bold', fontSize: '1.5rem'}}>{pizza.name}</h5>
              <p className="card-text">${pizza.price}</p>
              <div className="d-flex justify-content-between">
              <Button className='bg-dark' onClick={(e) => {addToCart(pizza.name); swap(e, pizza.name, 1);}}>Add to Cart</Button>
              <Button disabled={true} className='bg-dark'>Remove from Cart</Button>
              </div>
          </div>
      </div>
    
    ))
}


export default CatalogueItems;