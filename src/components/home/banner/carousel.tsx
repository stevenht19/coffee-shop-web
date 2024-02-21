'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectFade } from 'swiper/modules'
import { CarouselImage } from './carousel-section'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export const Caroucel = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <header>
      {children}
      <Swiper
        loop={true}
        lazyPreloadPrevNext={2}
        style={{
          '--swiper-theme-color': '#fff'
        } as any}
        direction='vertical'
        effect='fade'
        className='w-full h-[45rem] xl:h-[55rem] 2xl:h-[65rem] mySwiper'
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
          <CarouselImage title='Buen Café y Momentos' image="bg-[url('/coffee.webp')]" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage title='Buen Café Y Una Sonrisa' image="bg-[url('/coffeeshop.webp')]" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage title='Calidad y momentos' image="bg-[url('/cafe.webp')]" />
        </SwiperSlide>
      </Swiper>
    </header>
  )
}
