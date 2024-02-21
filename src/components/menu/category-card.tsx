import Link from 'next/link'
import Image from 'next/image'
import { Category } from '@models/Category'

export const CategoryCard: React.FC<Category> = ({
  name,
  image,
  slug,
  categoryDescription
}) => {
  return (
    <Link
      href={`/menu/${slug}`}
      className='flex bg-neutral-900/60 hover:bg-neutral-900/90 rounded-md flex-col relative'
    >
      <div className='md:h-40'>
        <Image
          src={image.url}
          width={200}
          height={100}
          alt='Frappuchino'
          className='object-cover rounded-t-md w-full h-full'
        />
      </div>
      <div className='p-5'>
        <h4 className='text-neutral-100 font-medium leading-3 tracking-wider'>{name}</h4>
        <p className='text-neutral-300 font-thin my-3 text-[0.95rem]'>
          {categoryDescription}
        </p>
      </div>
    </Link>
  )
}
