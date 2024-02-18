import { Text } from '@components/ui/paragraph'

type ServiceCardProps = {
  icon: React.ReactNode
}

export const Service: React.FC<ServiceCardProps> = ({
  icon
}) => {
  return (
    <article className='rounded pt-3 pb-6 px-8 xl:px-4 bg-[#111111] shadow-xl'>
      <figure className='py-4'>
        <figcaption className='flex justify-center'>
          {icon}
        </figcaption>
      </figure>
      <h3 className='text-primary'>WHY CHOOSE US?</h3>
      <p className='mt-2 text-gray-300 font-thin mb-4'>Because we are reliable</p>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam fuga animi repudiandae, dolore blanditiis, iste quaerat neque dicta.
      </Text>
    </article>
  )
}
