import { Caroucel } from '@components/home/banner'
import { History } from '@components/home/history'
import { OurServices } from '@components/home/services'

export default function Home() {
  return (
    <>
      <header>
        <Caroucel />
      </header>
      <History />
      <OurServices />
    </>
  )
}
