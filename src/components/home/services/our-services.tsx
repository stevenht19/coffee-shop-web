import { Subtitle } from '@components/ui/subtitle'
import { Text } from '@components/ui/paragraph'
import { Service } from './service-card'
import { BiCoffeeTogo } from 'react-icons/bi'
import { SiCoffeescript } from 'react-icons/si'
import style from './style.module.css'

export const OurServices: React.FC = () => {
  return (
    <section
      className='p-24 relative bg-cover bg-[url("/services.jpg")] before:bg-black/90 before:absolute before:inset-0 z-1'
    >
      <div className='max-w-4xl mx-auto text-center z-30 relative'>
        <Subtitle>
          BEST OF THE BEST
        </Subtitle>
        <h2 className='text-white text-3xl my-2'>
          Our Services
        </h2>
        <Text>
          Descubre nuestra amplia selección de cafés de origen único y mezclas exclusivas, cuidadosamente elegidos para ofrecer una experiencia de sabor única.
        </Text>
        <div className={`${style.services} grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24`}>
          <Service icon={<BiCoffeeTogo color='white' fontSize={35} />} />
          <Service icon={<SiCoffeescript color='white' fontSize={35} />} />
          <Service icon={<SiCoffeescript color='white' fontSize={35} />} />
        </div>
      </div>
    </section>
  )
}
