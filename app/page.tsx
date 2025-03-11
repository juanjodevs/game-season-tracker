import Hero from '@/components/hero'
import GameTimeline from '@/components/game-timeline'
import { games } from '@/lib/games-data'
import Disclaimer from '@/components/disclaimer'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      {
        games.map((game) => <GameTimeline key={game.id} game={game} />)
      }
      <Disclaimer />
      <Footer />
    </main>
  )
}
