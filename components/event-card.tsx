import { Card, Flex, Badge } from '@radix-ui/themes'
import { formatDate, getDaysRemaining } from '@/lib/utils'
import type { Event } from '@/lib/types'

const EventCard = ({ event }: { event: Event }) => {
  const startDaysRemaining = getDaysRemaining(event.startDate)

  return (
    <Card className='md:relative'>
      <div className='md:absolute md:top-2 md:right-2 flex flex-row gap-2'>
        {
          startDaysRemaining > 0 ?
            <Badge color="blue">{startDaysRemaining} day{startDaysRemaining !== 1 && 's'} to go Live</Badge>
            :
            startDaysRemaining === 0 ?
              <Badge color="mint">Going live today!</Badge>
              :
              <Badge color="green">Live</Badge>
        }
        {
          startDaysRemaining <= 0 && event.endDate && (
            <Badge color="red">{getDaysRemaining(event.endDate)} days left</Badge>
          )
        }
        {event.type === 'event' && <Badge color="yellow">Event</Badge>}
      </div>
      <h2 className='font-bold'>{event.name}</h2>
      <p>{event.shortDescription}</p>
      <Flex justify='between' className='text-xs md:text-sm'>
        <div>
          {formatDate(event.startDate)}
          {
            event.endDate && ` / ${formatDate(event.endDate)}`
          }
        </div>
      </Flex>
    </Card>
  )
}

export default EventCard
