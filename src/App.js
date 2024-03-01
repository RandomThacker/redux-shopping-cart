import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
import Payment from './pages/Payment';
import { Form } from './components/Form';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />
        <Footer />
        <Cart />
      </Provider>
    </>
  );
};

export default App;