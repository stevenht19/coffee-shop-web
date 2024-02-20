import { Category } from '@models/Category'
import { CategoryList } from './category-list'

type SidebarProps = {
  drinks: Category[]
  foods: Category[]
}

export const Sidebar: React.FC<SidebarProps> = ({ drinks, foods }) => {
  return (
    <aside className='sticky pl-4 flex flex-col gap-10'>
      <div>
        <CategoryList title='BEBIDAS' categories={drinks} />
      </div>
      <div>
        <CategoryList title='ALIMENTOS' categories={foods} />
      </div>
    </aside>
  )
}
