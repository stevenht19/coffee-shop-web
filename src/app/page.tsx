import { Caroucel } from '@components/home/banner'
import { History } from '@components/home/history'
import { Menu } from '@components/home/menu/menu-section'
import { OurServices } from '@components/home/services'
import { Navbar } from '@layout/navbar'

export default function Home() {
  return (
    <>
      <Caroucel>
        <Navbar />
      </Caroucel>
      <Menu />
      <History />
      <OurServices />
    </>
  )
}
