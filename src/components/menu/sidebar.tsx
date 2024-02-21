import { Category } from '@models/Category'
import { CategoryList } from './category-list'
import { performRequest } from '@lib/datocms'
import { getCategoriesByType } from '@app/menu/utils'
import { CategoriesType } from '@consts/categories'
import { MENU_CATEGORY_QUERY } from './querys'

export async function Sidebar () {
  const { data: { allCategories } } = await performRequest<Category[]>({ query: MENU_CATEGORY_QUERY })
  const drinks = getCategoriesByType(allCategories, CategoriesType.DRINKS)
  const foods = getCategoriesByType(allCategories, CategoriesType.FOOD)

  return (
    <aside className='hidden sticky px-6 md:flex flex-col gap-10'>
      <div>
        <CategoryList title='BEBIDAS' categories={drinks} />
      </div>
      <div>
        <CategoryList title='ALIMENTOS' categories={foods} />
      </div>
    </aside>
  )
}
