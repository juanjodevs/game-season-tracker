import Hero from '@/components/hero'
import GameTimeline from '@/components/game-timeline'
import { games } from '@/lib/games-data'

export default function Home() {
  return (
    <main>
      <Hero />
      {
        games.map((game) => <GameTimeline key={game.id} game={game} />)
      }
    </main>
  )
}
