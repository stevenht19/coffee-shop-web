'use client'

import { NavLink } from './nav-link'
import { Logo } from '@components/ui/logo'
import { IoClose } from 'react-icons/io5'
import { RiMenuFill } from 'react-icons/ri'
import { useState } from 'react'
import Link from 'next/link'

export const Navigation = () => {
  const [open, setOpen] = useState(false)

  const onToggle = () => {
    setOpen(b => !b)
  }


  return (
    <nav>
      <div className='flex justify-between px-4 md:hidden'>
        <Link href={'/'} className='z-40'>
          <Logo />
        </Link>
        <button className='p-2 z-40' onClick={onToggle}>
          {open ? (
            <IoClose color='white' fontSize={26} />
          ) : (
            <RiMenuFill color='white' fontSize={26} />
          )}
        </button>
      </div>
      <div className={`${open ? 'flex flex-col gap-10 md:before:hidden before:fixed before:inset-0 before:backdrop-blur-xl' : 'hidden'} md:flex flex-col px-5 md:gap-0 md:flex-row justify-between md:items-center max-w-4xl mx-auto w-full text-gray-100 md:uppercase`}>
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
