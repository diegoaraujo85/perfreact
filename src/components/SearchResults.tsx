import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    name: string;
  }>;
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => (
        <ProductItem product={product} />
      ))}
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
