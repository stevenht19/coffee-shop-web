import { Category } from '@models/Category'

export const CategoryItem: React.FC<Category> = ({ name }) => {
  return (
    <li>
      {name}
    </li>
  )
}
