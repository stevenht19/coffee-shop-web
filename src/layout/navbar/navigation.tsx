'use client'

import { IoClose } from 'react-icons/io5'
import { RiMenuFill } from 'react-icons/ri'
import { Logo } from '@components/ui/logo'
import { useBoolean } from '@hooks/use-boolean'
import { NavLink } from './nav-link'
import Link from 'next/link'
import { cn } from '@lib/cn'

export const Navigation = () => {
  const [open, setOpen] = useBoolean()

  return (
    <nav>
      <div className='flex justify-between px-4 md:hidden'>
        <Link href={'/'} className='z-40'>
          <Logo />
        </Link>
        <button className='p-2 z-40' onClick={setOpen.toggle}>
          {open ? (
            <IoClose color='white' fontSize={26} />
          ) : (
            <RiMenuFill color='white' fontSize={26} />
          )}
        </button>
      </div>
      <div className={cn(
        'md:flex flex-col px-5 md:gap-0 md:flex-row justify-between md:items-center max-w-4xl mx-auto w-full text-gray-100 md:uppercase',
        open ? 'flex flex-col gap-10 md:before:hidden before:fixed before:inset-0 before:backdrop-blur-xl' : 'hidden'
      )}>
        <ul className='flex flex-col md:flex-row gap-10 order-2 mt-12 md:order-none md:mt-0 z-40'>
          <NavLink href={'/'}>
            Home
          </NavLink>
          <NavLink href={'/#history'}>
            Historia
          </NavLink>
          <NavLink href={'/#services'}>
            Servicios
          </NavLink>
        </ul>
        <Link href={'/'} className='hidden md:block'>
          <Logo />
        </Link>
        <ul className='flex flex-col md:flex-row gap-10 order-3 md:mt-0 z-40'>
          <NavLink href={'/menu'}>
            Menu
          </NavLink>
          <NavLink href={'/'}>
            Delivery
          </NavLink>
          <NavLink href={'/'}>
            Carrito
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}
