import Image from 'next/image'

export const Header = () => {
  return (
    <header className='absolute top-0 z-20 py-2.5 w-full'>
      <nav className='flex justify-between text-white max-w-lg mx-auto items-center'>
        <ul className='flex gap-10 font-medium'>
          <li>HOME</li>
          <li>HISTORY</li>
        </ul>
        <div className='mt-2 opacity-90'>
          <Image src={'/espresso.png'} width={70} height={50} alt='Logo' />
        </div>
        <ul className='flex gap-4'>
          <li>DELIVERY</li>
          <li>MENU</li>
        </ul>
      </nav>
    </header>
  )
}
