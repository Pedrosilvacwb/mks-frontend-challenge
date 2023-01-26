import { Card } from './style';
import { BsBagPlus } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { addCart } from '../../redux/productSlice';

interface IProductCardProps {
  product: any;
}
const ProductCard = ({ product }: IProductCardProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <Card>
      <div className="card__info">
        <img src={product.photo} alt={product.name} />
        <div className="card__info__main">
          <h2>{product.name}</h2>
          <span>{product.price}</span>
        </div>
        <p>{product.description}</p>
      </div>
      <button onClick={() => dispatch(addCart(product))}>
        <BsBagPlus />
        Comprar
      </button>
    </Card>
  );
};

export default ProductCard;
