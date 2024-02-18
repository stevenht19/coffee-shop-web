export const Text = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <p className='text-gray-300 py-2 font-light tracking-wider'>
      {children}
    </p>
  )
}
