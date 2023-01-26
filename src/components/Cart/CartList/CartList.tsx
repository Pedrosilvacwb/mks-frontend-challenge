import { SideBar } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import CartCard from '../CartCard/CartCard';

interface ICartListProps {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartList = ({ openCart, setOpenCart }: ICartListProps) => {
  const cart = useSelector((state: RootState) => state.cart);
  const total = cart
    .map((prod) => prod.price * prod.amount!)
    .reduce((acc, att) => {
      return acc + att;
    }, 0);
  return (
    <SideBar openCart={openCart}>
      <div>
        <div className="cart__header">
          <h3>
            Carrinho
            <br /> de compras
          </h3>
          <button onClick={() => setOpenCart((prev: boolean) => !prev)}>
            X
          </button>
        </div>
        <ul className="cart__main">
          {cart?.map((prod) => (
            <CartCard prod={prod} />
          ))}
        </ul>
      </div>
      <div className="cart__footer">
        <div className="cart__footer__total">
          <span>Total</span>
          <span>R${total}</span>
        </div>
        <button>Finalizar Compra</button>
      </div>
    </SideBar>
  );
};

export default CartList;
