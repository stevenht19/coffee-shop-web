import { Navbar } from '@components/home/banner'
import { Products } from '@components/menu/products'
import { Sidebar } from '@components/menu/sidebar'

export default function Menu() {
  return <>
    <header>
      <Navbar />
    </header>
    <section
      className='max-w-6xl mx-auto grid mt-10 gap-16'
      style={{
        gridTemplateColumns: 'auto 1fr'
      }}
    >
      <Sidebar />
      <Products />
    </section>
  </>
}
