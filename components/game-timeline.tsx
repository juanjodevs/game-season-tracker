'use client'

import { Flex } from '@radix-ui/themes'
import type { Game } from '@/lib/types'
import Image from 'next/image'
import EventCard from '@/components/event-card'
import { getDaysRemaining } from '@/lib/utils'

const GameTimeline = ({ game }: { game: Game }) => (
  <Flex direction='column' gap="2" justify='center' className='mb-10'>
    <Image className='mx-auto mb-5' src={`/${game.id}.webp`} alt={game.name} width={250} height={100} />
    <EventCard event={game.currentSeason} />
    {
      game.nextSeason && <EventCard event={game.nextSeason} />
    }
    {
      // Show only if do not have end date or not ended yet
      game.events?.filter((event) => !event.endDate || getDaysRemaining(event.endDate) > 0).map((event, i) => <EventCard key={i} event={event} type='event' />)
    }
  </Flex>
)

export default GameTimeline
