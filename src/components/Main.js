import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalogue from '../pages/Catalogue';
import Checkout from '../pages/Checkout';
import CheckoutDetails from '../pages/CheckoutDetails';
import CheckoutPlaceOrder from '../pages/CheckoutPlaceOrder';
import Order from '../pages/Order';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/catalogue' element={<Catalogue />} />
      <Route exact path='/checkout' element={<Checkout />} />
      <Route exact path='/checkoutdetails' element={<CheckoutDetails />} />
      <Route exact path='/checkoutplaceorder' element={<CheckoutPlaceOrder />} />
      <Route exact path='/order' element={<Order />} />
    </Routes>
  );
}

export default Main;