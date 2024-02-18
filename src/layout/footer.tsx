import { Logo } from '@components/ui/logo'
import { Text } from '@components/ui/paragraph'
import { FaGithub } from 'react-icons/fa'

export const Footer: React.FC = () => {
  return (
    <footer className='bg-neutral-950 py-3 px-10 mt-auto'>
      <div className='flex justify-between items-center mx-auto max-w-4xl'>
        <div className='flex items-center gap-10'>
          <Logo />
          <Text>Personal Project - stevenht19 💻</Text>
        </div>
        <div className='flex gap-5'>
          <a href='#'>
            <FaGithub color='#eee' fontSize={30} />
          </a>
          <a href='#'>
            <FaGithub color='#eee' fontSize={30} />
          </a>
          <a href='#'>
            <FaGithub color='#eee' fontSize={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}
