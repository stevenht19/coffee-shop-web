import { Navbar } from '@layout/navbar'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return <>
    <Navbar as='header' />
    <section className='max-w-6xl mt-12 mx-auto grid gap-20 grid-cols-auto'>
      {children}
    </section>
  </>
}
