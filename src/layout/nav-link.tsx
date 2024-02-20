import Link, { LinkProps } from 'next/link'

type NavLinkProps = LinkProps & {
  children: React.ReactNode
}

export const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <li>
      <Link {...props} className='p-1 hover:text-gray-200'>
        {props.children}
      </Link>
    </li>
  )
}
