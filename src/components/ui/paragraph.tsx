export const Text = ({
  type,
  children
}: {
  type?: 'sm'
  children: React.ReactNode
}) => {

  if (type === 'sm') {
    return (
      <p className='text-neutral-200 py-2 font-light tracking-wider leading-8 text-sm'>
        {children}
      </p>
    )
  }

  return (
    <p className='text-neutral-200 py-2 font-light tracking-wider leading-8'>
      {children}
    </p>
  )
}
