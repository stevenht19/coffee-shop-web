import { Logo } from '@components/ui/logo'

export const Navbar = () => {
  return (
    <div className='static xl:absolute top-0 z-40 mt-3 w-full'>
      <nav className='flex justify-between text-white items-center max-w-3xl mx-auto font-thin'>
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
        <Logo />
        <ul className='flex gap-10'>
          <li>
            DELIVERY
          </li>
          <li>
            MENU
          </li>
          <li>
            CONTACT
          </li>
        </ul>
      </nav>
    </div>
  )
}
