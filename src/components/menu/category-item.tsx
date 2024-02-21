import { Category } from '@models/Category'
import Link from 'next/link'

export const CategoryItem: React.FC<Category> = ({ name, slug }) => {
  return (
    <li>
      <Link href={`/menu/${slug}`} className='hover:text-primary'>
        {name}
      </Link>
    </li>
  )
}
