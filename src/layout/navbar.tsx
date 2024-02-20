import { Navigation } from './navigation'

type NavbarProps = {
  as?: React.ElementType
}

export const Navbar = (props: NavbarProps) => {
  const Element = props.as ?? 'div'

  return (
    <Element className='absolute top-0 left-0 w-full bg-transparent h-24 z-50'>
      <Navigation />
    </Element>
  )
}