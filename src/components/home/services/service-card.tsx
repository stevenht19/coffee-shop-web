import { Text } from '@components/ui/paragraph'

type ServiceCardProps = {
  icon: React.ReactNode
  text: string
  title: string
  reason: string
}

export const Service: React.FC<ServiceCardProps> = ({
  icon,
  text,
  title,
  reason
}) => {
  return (
    <article className='rounded pt-3 pb-6 px-8 xl:px-4 bg-[#111111] shadow-xl'>
      <figure className='py-4'>
        <figcaption className='flex justify-center'>
          {icon}
        </figcaption>
      </figure>
      <h3 className='text-primary'>{title}</h3>
      <p className='mt-2 text-neutral-300 font-thin mb-4'>{reason}</p>
      <Text>
        {text}
      </Text>
    </article>
  )
}
