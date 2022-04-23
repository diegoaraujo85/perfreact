import { memo } from 'react';

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    name: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.name} - <strong>${product.price}</strong>
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
