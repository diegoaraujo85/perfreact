import { memo, useState } from 'react';
// import { AddProductToWishList } from './AddProductToWishList';
import dynamic from 'next/dynamic';
import { AddProductToWishListProps } from './AddProductToWishList';

const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () =>
    import('./AddProductToWishList').then(
      module => module.AddProductToWishList
    ),
  {
    loading: () => <span>Loading...</span>,
  }
);

// lazy load ou code splitting ou dynamic import: https://pt-br.reactjs.org/docs/code-splitting.html
interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    priceFormatted: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);
  return (
    <div>
      {product.name} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Add to Wishlist
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onRequestClose={() => setIsAddingToWishList(false)}
          onAddToWishList={() => onAddToWishList(product.id)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

/**
 * Quando usar o memo?
 * 1. Componentes Puros - Pure Functional Components
 * 2. Componentes que renderizam demais
 * 3. Re-render com mesmas prevProps
 * 4. Tamanho medio pra grande
 */
