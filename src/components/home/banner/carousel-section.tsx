import { Subtitle } from '@components/ui/subtitle'
import { IoIosArrowDown } from 'react-icons/io'
import { Navbar } from './navbar'
import { NavbarWrapper } from './navbar-wrapper'
import style from './style.module.css'

type CarouselImageProps = {
  image: string
}

export const CarouselImage: React.FC<CarouselImageProps> = ({ image }) => {
  return (
    <section className={`before:bg-black/70 before:absolute before:inset-0 before:z-10 h-full bg-cover bg-neutral-950 ${image}`}>
      <div className='grid h-full'>
        <NavbarWrapper>
          <Navbar />
        </NavbarWrapper>
        <div className='grid place-content-center w-full h-full xl:pt-20'>
          <div className={`${style.welcome} max-w-xs lg:max-w-sm z-20 text-center relative`}>
            <Subtitle>
              WELCOME TO THE COFFEE WORLD
            </Subtitle>
            <h1 className='text-5xl lg:text-6xl font-medium text-white mt-1.5'>
              Good Coffee With a Smile
            </h1>
          </div>
          <button className={`z-20 mt-40 flex justify-center animate-bounce`}>
            <IoIosArrowDown color='white' fontSize={30} />
          </button>
        </div>
      </div>
    </section>
  )
}