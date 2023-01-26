import { IProducts } from '../../../redux/store';
import { Card } from './style';
import { useDispatch } from 'react-redux';
import { addCart, removeCart } from '../../../redux/productSlice';

interface ICartCardProps {
  prod: IProducts;
}
const CartCard = ({ prod }: ICartCardProps) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <div className="cart__card__info">
        <img src={prod.photo} alt={prod.name} />
        <h4>{prod.name}</h4>
      </div>
      <div className="cart__card__numbers">
        <div className="cart__card__amount">
          <button onClick={() => dispatch(removeCart(prod))}>-</button>
          <span>{prod.amount}</span>
          <button onClick={() => dispatch(addCart(prod))}>+</button>
        </div>
        <span className="cart__card__price">R${prod.price}</span>
      </div>
    </Card>
  );
};

export default CartCard;
