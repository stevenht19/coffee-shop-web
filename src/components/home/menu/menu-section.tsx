import { Subtitle } from '@components/ui/subtitle'
import { ListOfMenu } from './list-of-menu'
import Link from 'next/link'

export const Menu = () => {
  return (
    <section
      className='p-24 relative bg-no-repeat bg-cover bg-[url("/menu.jpg")] before:bg-black/90 before:absolute before:inset-0 z-1'
    >
      <div className='max-w-4xl mx-auto text-center z-30 relative'>
        <Subtitle>
          CARTA
        </Subtitle>
        <h2 className='text-white text-3xl my-2'>
          Menu
        </h2>
        <ListOfMenu />
        <Link href={'/menu'} className='border-primary hover:border-yellow-600 hover:text-white inline-block border-2 mt-24 px-8 py-2 text-neutral-300 font-thin tracking-wider'>
          Ver el menú completo
        </Link>
      </div>
    </section>
  )
}
