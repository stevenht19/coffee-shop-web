import { DatoImage } from '@shared/dato-image'

export interface Product {
  name: string
  price: number
  slug: string
  text: string
  image: DatoImage
}