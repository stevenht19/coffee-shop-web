import { cn } from '@lib/cn'
import { Navigation } from './navigation'

type NavbarProps = {
  as?: React.ElementType
  static?: boolean
}

export const Navbar = (props: NavbarProps) => {
  const Element = props.as ?? 'div'

  return (
    <Element className={cn(
      'w-full bg-transparent h-24 z-50',
      props.static ? 'static' : 'absolute top-0 left-0'
    )}>
      <Navigation />
    </Element>
  )
}