import { Category } from '@models/Category'

export const MENU_CATEGORY_QUERY = `
{
  allCategories {
    id
    name
    slug
    categoryType
    categoryDescription
    image {
      url
    }
  }
}`

export const GET_PRODUCTS_QUERY = (slug: Category['slug']) => `
{
  allProducts(filter: {slug: {eq: "${slug}"}}) {
    name
    price
    slug
    text
    image {
      url
    }
  }
}
`