'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade } from 'swiper/modules'
import { CarouselImage } from './carousel-section'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export const Caroucel: React.FC = () => {
  return (
    <header>
      <Swiper
        color='red'
        direction='vertical'
        effect='fade'
        className='w-full h-[45rem] xl:h-[55rem] mySwiper'
        modules={[Pagination, EffectFade]}
        pagination={{
          clickable: true,
          renderBullet(_, className) {
            return (`
              <span class='${className}' style='border:1px solid #fff;margin-right:1rem;width:.65rem;height:0.65rem;'>
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
    </header>
  )
}
