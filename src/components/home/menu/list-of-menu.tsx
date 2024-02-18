export const ListOfMenu: React.FC = () => {
  return (
    <ul className='grid grid-cols-2 mt-16 gap-16'>
      <Menu />
      <Menu />
      <Menu />
      <Menu />
    </ul>
  )
}

const Menu = () => {
  return (
    <li>
      <h4 className='text-neutral-300'>Cold Coffee</h4>
      <p className='text-neutral-500 my-3'>
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <span className='text-primary'>
        S/. 20.00
      </span>
    </li>
  )
}
