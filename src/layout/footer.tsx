import { Logo } from '@components/ui/logo'
import { Text } from '@components/ui/paragraph'
import { FaGithub } from 'react-icons/fa'

export const Footer: React.FC = () => {
  return (
    <footer className='border-t border-neutral-900 py-1 px-10 mt-auto'>
      <div className='flex justify-between items-center mx-auto max-w-6xl'>
        <div className='flex items-center gap-8'>
          <Logo />
          <Text>Personal Project - stevenht19 💻</Text>
        </div>
        <div className='flex gap-5'>
          <a href='#'>
            <FaGithub color='#eee' fontSize={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}
