import { CategoriesType } from '@consts/categories'
import { Category } from '@models/Category'

export const getCategoriesByType = (categories: Category[], type: CategoriesType) => {
  return categories.filter(category => category.categoryType === type)
}