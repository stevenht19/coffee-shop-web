import { Subtitle } from '@components/ui/subtitle'
import { Text } from '@components/ui/paragraph'
import { Service } from './service-card'
import { BiCoffeeTogo } from 'react-icons/bi'
import { SiCoffeescript } from 'react-icons/si'
import style from './style.module.css'

export const OurServices: React.FC = () => {
  return (
    <section
      id='services'
      className='p-24 relative bg-cover bg-[url("/services.webp")] before:bg-black/90 before:absolute before:inset-0 z-1'
    >
      <div className='max-w-4xl mx-auto text-center z-30 relative'>
        <Subtitle>
          BEST OF THE BEST
        </Subtitle>
        <h2 className='text-white text-3xl my-2'>
          Nuestros Servicios
        </h2>
        <Text>
          Descubre nuestra amplia selección de cafés de origen único y mezclas exclusivas, cuidadosamente elegidos para ofrecer una experiencia de sabor única.
        </Text>
        <div className={`${style.services} grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-24`}>
          <Service
            title='Por qué elegirnos?'
            reason='Porque somos confiables'
            icon={<BiCoffeeTogo color='white' fontSize={35} />}
            text=' Cada taza de nuestro café es el resultado de una cuidadosa selección de los mejores granos de origen único lo que resalta sus sabores más ricos y complejos.'
          />
          <Service
            title='Cual es nuestra misión?'
            reason='Para redefinir tu marca'
            icon={<SiCoffeescript color='white' fontSize={35} />}
            text='En Espresso, nuestra misión es transformar cada taza de café en una experiencia excepcional que inspire, conecte y deleite a nuestros clientes.'
          />
          <Service
            title='Lo que hacemos'
            reason='Brindar momentos'
            text='Exploramos constantemente nuevas fronteras en la industria del café. Desde nuevas mezclas hasta métodos de preparación innovadores'
            icon={<SiCoffeescript color='white' fontSize={35} />}
          />
        </div>
      </div>
    </section>
  )
}
