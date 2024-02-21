import { Products } from '@components/menu/products'
import { GET_PRODUCTS_QUERY } from '@components/menu/querys'
import { performRequest } from '@lib/datocms'
import { Product } from '@models/Product'

export default async function ProductsPage({ params }: {
  params: {
    category: string
  }
}) {
  const { data: { allProducts } } = await performRequest<Product[]>({
    query: GET_PRODUCTS_QUERY(params.category)
  })

  return (
    <Products products={allProducts} />
  )
}
