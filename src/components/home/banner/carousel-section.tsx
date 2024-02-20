import { Subtitle } from '@components/ui/subtitle'
import { IoIosArrowDown } from 'react-icons/io'
import { useSwiper } from 'swiper/react'
import style from './style.module.css'
import { cn } from '@lib/cn'

type CarouselImageProps = {
  title?: string
  image: string
}

export const CarouselImage: React.FC<CarouselImageProps> = ({
  image,
  title
}) => {
  const swiper = useSwiper()

  const onSlideChange = () => {
    swiper.slideNext()
  }

  return (
    <section className={`before:bg-black/70 before:absolute before:inset-0 before:z-10 h-full bg-cover bg-neutral-950 ${image}`}>
      <div className='grid place-content-center w-full h-full pt-20'>
        <div className={cn(
          'max-w-xs lg:max-w-sm z-20 text-center relative',
          style.welcome
        )}>
          <Subtitle>
            BIENVENIDO A ESPRESSO
          </Subtitle>
          <h1 className='text-5xl lg:text-6xl font-medium text-white mt-1.5'>
            {title ?? 'Good Coffee With a Smile'}
          </h1>
        </div>
        <button
          onClick={onSlideChange}
          className={`z-20 mt-40 flex justify-center animate-bounce`}
        >
          <IoIosArrowDown color='white' fontSize={30} />
        </button>
      </div>
    </section>
  )
}