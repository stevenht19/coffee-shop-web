import { DatoImage } from '@shared/dato-image'

export interface Category {
  id: number
  name: string
  slug: string
  categoryType: string
  categoryDescription: string
  image: DatoImage
}