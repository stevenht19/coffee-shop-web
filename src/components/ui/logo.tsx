import Image from 'next/image'

export const Logo: React.FC = () => {
  return (
    <div className='opacity-90'>
      <Image src={'/espresso.png'} width={80} height={50} alt='Logo' />
    </div>
  )
}
