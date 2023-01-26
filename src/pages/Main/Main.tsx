import React from 'react';
import CartList from '../../components/Cart/CartList/CartList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import { MainPage } from './style';

const Main = () => {
  const [openCart, setOpenCart] = React.useState(false);
  return (
    <MainPage>
      <CartList setOpenCart={setOpenCart} openCart={openCart} />
      <Header setOpenCart={setOpenCart} />
      <ProductList />
      <Footer />
    </MainPage>
  );
};

export default Main;
