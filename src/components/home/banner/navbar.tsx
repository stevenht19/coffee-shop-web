import { Logo } from '@components/ui/logo'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex justify-between text-white items-center max-w-4xl mx-auto'>
      <ul className='flex gap-10'>
        <li>
          HOME
        </li>
        <li>
          HISTORY
        </li>
        <li>
          SERVICES
        </li>
      </ul>
      <Link href={'/'}>
        <Logo />
      </Link>
      <ul className='flex gap-10'>
        <li>
          DELIVERY
        </li>
        <li>
          <Link href={'/menu'}>
            MENU
          </Link>
        </li>
        <li>
          CONTACT
        </li>
      </ul>
    </nav>
  )
}
