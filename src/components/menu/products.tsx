import { ProductCard } from './product-card'

export const Products = () => {
  return (
    <section className='grid grid-cols-2 gap-5 pb-24'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(() => (
        <ProductCard />
      ))}
    </section>
  )
}
