import { List, ListRowRenderer } from 'react-virtualized';
import { ProductItem } from './ProductItem';

type Product = {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
};

interface SearchResultsProps {
  results: Array<Product>;
  totalPrice: number;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  totalPrice,
  onAddToWishList,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>Valor total: {totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/* {results.map(product => (
        <ProductItem
          key={product.id} // não usar o indice do map pq causa problema de re-render
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))} */}
    </div>
  );
}

// Fluxo de renderização do react
/**
 * 1. Cria uma nova versão do componente
 * 2. Compara com a versão anterior
 * 3. Se houver alterações, atualiza apenas o que mudou
 */

/**
 * Se o componente pai renderizar todos os filhos irão renderizar novamente
 */

/**
 * Quando usar o useMemo?
 * - usado para guardar valores
 * 1. Cálculos pesados
 * 2. Igualdade referencial (quando passa a informação a um componente filho)
 */
