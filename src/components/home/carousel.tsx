'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { CarouselImage } from './carousel-section'

export const Caroucel: React.FC = () => {
  return (
    <Swiper
      color='red'
      direction='vertical'
      effect='fade'
      className='w-full h-[40rem] lg:h-[65rem] mySwiper'
      modules={[Pagination, EffectFade]}
      pagination={{
        clickable: true,
        renderBullet(_, className) {
          return (`
            <span class='${className}' style='border:1px solid #fff;'>
            </span>
          `)
        }
      }}
    >
      <SwiperSlide>
        <CarouselImage image="bg-[url('/coffee.webp')]" />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselImage image="bg-[url('/cafe.webp')]" />
      </SwiperSlide>
    </Swiper>
  )
}
