import { Category } from '@models/Category'
import { performRequest } from '@lib/datocms'
import { CategoryCard } from './category-card'
import { Results } from './results'
import { MENU_CATEGORY_QUERY } from './querys'

export const Categories = async () => {  
  const { data: { allCategories } } = await performRequest<Category[]>({ query: MENU_CATEGORY_QUERY })

  return (
    <Results columns={'lg:grid-cols-3'}>
      {allCategories.map((category) => (
        <CategoryCard {...category} />
      ))}
    </Results>
  )
}
