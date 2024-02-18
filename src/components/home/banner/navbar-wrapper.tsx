import React from 'react'

export const NavbarWrapper = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='static xl:absolute top-0 z-40 w-full'>
      {children}
    </div>
  )
}
