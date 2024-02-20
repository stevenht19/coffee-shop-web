import { Products } from '@components/menu/products'
import { Sidebar } from '@components/menu/sidebar'
import { performRequest } from '@lib/datocms'
import { Category } from '@models/Category'
import { getCategoriesByType } from './utils'
import { CategoriesType } from '@consts/categories'

const MENU_CATEGORY_QUERY = `
{
  allCategories {
    id
    name
    slug
    categoryType
  }
}`

export default async function MenuPage() {
  //const { data: { allCategories } } = await performRequest<Category[]>({ query: MENU_CATEGORY_QUERY })
  //const drinks = getCategoriesByType(allCategories, CategoriesType.DRINKS)
  //const foods = getCategoriesByType(allCategories, CategoriesType.FOOD)

  return (
    <>
      <Sidebar drinks={[]} foods={[]} />
      <Products />
    </>
  )
}
