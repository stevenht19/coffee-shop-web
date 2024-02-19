import { Logo } from '@components/ui/logo'
import { BsCart3 } from 'react-icons/bs'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex justify-between text-gray-100 items-center max-w-4xl mx-auto'>
      <ul className='flex gap-10'>
        <li>
          <Link href={'/'}>
            HOME
          </Link>
        </li>
        <li>
          <Link href={'/#history'}>
            HISTORIA
          </Link>
        </li>
        <li>
          <Link href={'/#services'}>
            SERVICIOS
          </Link>
        </li>
      </ul>
      <Link href={'/'}>
        <Logo />
      </Link>
      <ul className='flex gap-10 items-center'>
        <li>
          <Link href={'/menu'}>
            MENU
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            CONTACTO
          </Link>
        </li>
        <li>
          <Link href={'/'} className='flex gap-3 items-center'>
            CARRITO
            <BsCart3 color='white' fontSize={15} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
