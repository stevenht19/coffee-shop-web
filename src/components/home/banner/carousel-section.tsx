import { Subtitle } from '@components/ui/subtitle'
import { IoIosArrowDown } from 'react-icons/io'
import { Navbar } from './navbar'

type CarouselImageProps = {
  image: string
}

export const CarouselImage: React.FC<CarouselImageProps> = ({ image }) => {
  const firstLine = 'before:absolute before:z-30 before:w-[.15rem] before:bg-primary before:h-20 before:left-1/2 before:-translate-x-1/2 before:bottom-[120%]'
  const secondLine = 'after:absolute after:z-30 after:w-[.15rem] after:bg-primary after:h-20 after:left-1/2 after:-translate-x-1/2 after:top-[120%]'

  return (
    <section className={`before:bg-black/70 before:absolute before:inset-0 before:z-10 h-full bg-cover ${image}`}>
      <div className='grid h-full'>
        <Navbar />
        <div className='grid place-content-center w-full h-full xl:pt-20'>
          <div className={`max-w-xs lg:max-w-sm z-20 text-center relative ${firstLine} ${secondLine}`}>
            <Subtitle>
              WELCOME TO THE COFFEE WORLD
            </Subtitle>
            <h1 className='text-5xl lg:text-6xl font-medium text-white mt-1.5'>
              Good Coffee With a Smile
            </h1>
          </div>
          <button className='z-20 mt-40 flex justify-center animate-bounce'>
            <IoIosArrowDown color='white' fontSize={30} />
          </button>
        </div>
      </div>
    </section>
  )
}