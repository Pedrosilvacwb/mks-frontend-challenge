import React from 'react';
import { AppHeader } from './style';
import { TiShoppingCart } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface IHeaderProps {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ setOpenCart }: IHeaderProps) => {
  const cart = useSelector((state: RootState) => state.cart);

  const amount = cart
    .map((prod) => prod?.amount)
    .reduce((acc, att) => {
      return acc! + att!;
    }, 0);

  return (
    <AppHeader>
      <div className="header__container">
        <div className="header__logo">
          <h1>MKS</h1>
          <span>Sistemas</span>
        </div>
        <button
          onClick={() => setOpenCart((prev: boolean) => !prev)}
          className="header__cart__btn"
        >
          <TiShoppingCart />
          <span>{amount}</span>
        </button>
      </div>
    </AppHeader>
  );
};

export default Header;
