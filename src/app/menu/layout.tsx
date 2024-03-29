import { Sidebar } from '@components/menu/sidebar'
import { Navbar } from '@layout/navbar/navbar'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  
  return <>
    <Navbar as='header' static />
    <section className='max-w-6xl mt-12 mx-auto grid gap-10 md:gap-20 sm:grid-cols-auto w-full'>
      <Sidebar />
      {children}
    </section>
  </>
}
