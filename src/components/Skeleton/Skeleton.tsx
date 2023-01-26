import { ProductDisplay } from '../ProductList/style';
import { ProductSkeleton } from './style';

const Skeleton = () => {
  return (
    <ProductDisplay>
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </ProductDisplay>
  );
};

export default Skeleton;
