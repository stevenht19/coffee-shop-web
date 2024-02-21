import { Product } from '@models/Product'
import { PiPlus } from 'react-icons/pi'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard: React.FC<Product> = ({
  name,
  price,
  text,
  image
}) => {
  return (
    <div className='flex bg-neutral-900/60 hover:bg-neutral-900/90 rounded-md relative h-fit shadow-lg'>
      <div className='flex-[1.4]'>
        <Image
          src={image.url}
          width={290}
          height={100}
          alt='Frappuchino'
          className='object-cover rounded-l-md w-full h-full'
        />
      </div>
      <div className='p-5 flex-[2]'>
        <h4 className='text-neutral-200 font-medium leading-3 tracking-wider'>{name}</h4>
        <p className='text-neutral-300 font-thin my-3 text-[0.95rem] min-h-16'>
          {text}
        </p>
        <span className='text-yellow-600 mt-2 block'>
          S/. {price.toFixed(2)}
        </span>
      </div>
      <button className='rounded-full p-3 bg-yellow-600 absolute bottom-0 m-2 hover:scale-105 transition-transform'>
        <PiPlus color='white' />
      </button>
    </div>
  )
}
