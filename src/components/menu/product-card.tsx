import Image from 'next/image'
import { PiPlus } from 'react-icons/pi'

export const ProductCard: React.FC = () => {
  return (
    <div className='flex bg-neutral-900/60 rounded-md flex-row-reverse relative'>
      <Image
        src={'/duck2.jpg'}
        width={180}
        height={100}
        alt='Frappuchino'
        className='object-cover rounded-r-md'
      />
      <div className='p-6'>
        <h4 className='text-neutral-200 font-medium leading-3'>Cold Coffee</h4>
        <p className='text-neutral-300 font-thin my-3 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita, fuga eveniet.
        </p>
        <span className='text-yellow-600'>
          S/. 200.00
        </span>
      </div>
      <button className='rounded-full p-3 bg-yellow-600 absolute bottom-0 m-2 hover:scale-105 transition-transform'>
        <PiPlus color='white' />
      </button>
    </div>
  )
}
