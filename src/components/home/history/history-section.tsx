import { Subtitle } from '@components/ui/subtitle'
import { Text } from '@components/ui/paragraph'
import { Sign } from './sign'
import Image from 'next/image'

export const History = () => {
  return (
    <section id='history' className='bg-neutral-950 p-24 flex justify-center relative overflow-hidden'>
      <div className='max-w-3xl mx-auto text-center'>
        <Subtitle>
          ESTD. 2022
        </Subtitle>
        <h2 className='text-white text-3xl my-4'>La Historia</h2>
        <Text>
          Hace años, en un pueblo rodeado de montañas, Martin Steven, un apasionado amante del café, descubrió una plantación remota con granos excepcionales. Con determinación, perfeccionó el tostado y creó "Espresso", comprometido con la calidad y la comunidad. Desde entonces, cada taza cuenta la historia de altas cumbres y cálidos encuentros, creando una experiencia única de aromas y amistad. ¡Bienvenido a Espresso, donde el café se convierte en momentos inolvidables!
        </Text>
        <Sign />
      </div>
      <Image
        src={'/history.png'}
        width={350}
        height={220}
        loading='lazy'
        className='absolute left-[-6rem] bottom-[-7rem]'
        alt='Coffee'
      />
    </section>
  )
}
