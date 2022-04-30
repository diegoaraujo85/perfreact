import { memo } from 'react';

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
  console.log({ product });
  return (
    <div>
      {product.name} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddToWishList(product.id)}>
        Add to Wishlist
      </button>
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
