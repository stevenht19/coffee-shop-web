import { Category } from '@models/Category'
import { CategoryItem } from './category-item'

type CategoryListProps = {
  title: string
  categories: Category[]
}

export const CategoryList: React.FC<CategoryListProps> = ({
  title,
  categories
}) => {
  return <>
    <h4 className='mb-5 font-medium text-lg text-neutral-100'>{title}</h4>
    <ul className='flex flex-col gap-4 text-neutral-400'>
      {categories.map((category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </ul>
  </>
}
