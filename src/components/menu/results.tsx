import { cn } from '@lib/cn'

type ResultsProps = {
  columns?: string
  children: React.ReactNode
}

export const Results = ({
  columns,
  children
}: ResultsProps) => {
  return (
    <section
      className={cn(
        'grid grid-cols-1 gap-5 pb-24 px-5 animate-fadeIn',
        columns ?? `lg:grid-cols-2`
      )}
    >
      {children}
    </section>
  )
}
