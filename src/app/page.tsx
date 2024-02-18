import { Caroucel } from '@components/home/banner'
import { History } from '@components/home/history'
import { Menu } from '@components/home/menu/menu-section'
import { OurServices } from '@components/home/services'

export default function Home() {
  return (
    <>
      <Caroucel />
      <History />
      <OurServices />
      <Menu />
    </>
  )
}
