import { menus } from './utils'

type MenuProps = {
  name: string
  text: string
  price: number
}

export const ListOfMenu: React.FC = () => {
  return (
    <ul className='grid grid-cols-2 mt-16 gap-16'>
      {menus.map((menu) => (
        <Menu {...menu} />
      ))}
    </ul>
  )
}

const Menu: React.FC<MenuProps> = ({ name, text, price }) => {
  return (
    <li>
      <h4 className='text-neutral-300'>{name}</h4>
      <p className='text-neutral-500 my-3'>
        {text}
      </p>
      <span className='text-primary'>
        S/. {String(price.toFixed(2))}
      </span>
    </li>
  )
}
