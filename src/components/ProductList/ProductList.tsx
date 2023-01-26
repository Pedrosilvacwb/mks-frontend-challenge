import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';
import { ProductDisplay } from './style';
import { useDispatch } from 'react-redux';
import { setData, setLoading, setError } from '../../redux/productSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.data);
  const loading = useSelector((state: RootState) => state.loading);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetch(
          'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC',
        );
        const json = await data.json();
        dispatch(setData(json.products));
      } catch (error) {
        dispatch(setError(error as string));
      } finally {
        dispatch(setLoading(false));
      }
    };
    getProducts();
  }, [dispatch]);

  if (loading) return <Skeleton />;
  return (
    <ProductDisplay>
      {products &&
        products?.map((product) => <ProductCard product={product} />)}
    </ProductDisplay>
  );
};

export default ProductList;
