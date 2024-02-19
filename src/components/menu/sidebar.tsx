import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='mt-4 sticky top-0 pl-4'>
      <h4 className='mb-5 font-medium text-lg text-neutral-100'>BEBIDAS</h4>
      <ul className='flex flex-col gap-4 text-neutral-400'>
        <li>
          Frappuchines
        </li>
        <li>
          Espresso Frio
        </li>
        <li>
          Shaken Espresso
        </li>
        <li>
          Otras bebidas
        </li>
      </ul>
      <h4 className='mb-5 font-medium text-lg text-neutral-100 mt-12'>ALIMENTOS</h4>
      <ul className='flex flex-col gap-4 text-neutral-400'>
        <li>
          Postres
        </li>
        <li>
          Sandwiches
        </li>
      </ul>
    </aside>
  )
}
