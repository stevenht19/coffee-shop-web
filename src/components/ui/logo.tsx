import Image from 'next/image'

export const Logo: React.FC = () => {
  return (
    <div className='opacity-90 mt-3'>
      <Image src={'/espresso.png'} width={65} height={50} alt='Logo' />
    </div>
  )
}
