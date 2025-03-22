import Hero from '@/components/hero'
import News from '@/components/news'
import GameTimeline from '@/components/game-timeline'
import { news, games } from '@/lib/games-data'
import Disclaimer from '@/components/disclaimer'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <News news={news} />
      {
        games.map((game) => <GameTimeline key={game.id} game={game} />)
      }
      <Disclaimer />
      <Footer />
    </main>
  )
}
