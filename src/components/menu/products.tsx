import { Product } from '@models/Product'
import { ProductCard } from './product-card'
import { Results } from './results'

type ProductProps = {
  products: Product[]
}

export const Products: React.FC<ProductProps> = ({ products }) => {
  return (
    <Results>
      {products
        .map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
    </Results>
  )
}
