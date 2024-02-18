import { Subtitle } from '@components/ui/subtitle'
import { Text } from '@components/ui/paragraph'
import { Sign } from './sign'
import Image from 'next/image'

export const History = () => {
  return (
    <section className='bg-neutral-950 p-24 flex justify-center relative overflow-hidden'>
      <div className='max-w-3xl mx-auto text-center'>
        <Subtitle>
          ESTD. 2022
        </Subtitle>
        <h2 className='text-white text-3xl my-4'>The History</h2>
        <Text>
          Years ago, in a town surrounded by mountains, Martin Steven, a passionate coffee lover, discovered a remote plantation with exceptional beans. With determination, he perfected roasting and formed "Mountain Coffee," committed to quality and community. Since then, each cup tells the story of high peaks and warm encounters, creating a unique experience of aromas and friendship. Welcome to Mountain Coffee, where coffee turns into unforgettable moments!
        </Text>
        <Sign />
      </div>
      <Image
        src={'/history.png'}
        width={350}
        height={220}
        className='absolute left-[-6rem] bottom-[-7rem]'
        alt='Coffee'
      />
    </section>
  )
}
