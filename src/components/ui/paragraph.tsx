import { cn } from '@lib/cn'

export const Text = ({
  type,
  children
}: {
  type?: 'sm'
  children: React.ReactNode
}) => {
  return (
    <p className={cn(
      'text-neutral-200 py-2 font-light tracking-wider leading-8',
      type === 'sm' && 'text-sm'
    )}>
      {children}
    </p>
  )
}
