import { Navbar } from '@components/home/banner'
import { Sidebar } from '@components/menu/sidebar'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return <>
    <header>
      <Navbar />
    </header>
    <section
      className='max-w-6xl mt-10 mx-auto grid gap-16 grid-cols-auto'
    >
      <Sidebar />
      {children}
    </section>
  </>
}
