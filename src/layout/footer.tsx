import { Logo } from '@components/ui/logo'
import { Text } from '@components/ui/paragraph'
import { FaGithub } from 'react-icons/fa'

export const Footer: React.FC = () => {
  return (
    <footer className='bg-neutral-950 p-3'>
      <div className='max-w-4xl flex justify-between items-center mx-auto'>
        <div className='flex items-center gap-10'>
          <Logo />
          <Text>Personal Project - stevenht19 💻</Text>
        </div>
        <a href='#'>
          <FaGithub color='#eee' fontSize={30} />
        </a>
      </div>
    </footer>
  )
}
