import { Card, Heading } from '@radix-ui/themes'
const News = ({ news }: { news: string[] }) => (
  <section>
    <Card className='bg-yellow-300 border-2 border-yellow-700 text-slate-800'>
      <Heading>Latest news</Heading>
      <ul>
        {
          news.map((item, i) => (<li key={i} className='ml-5 list-disc' >{item}</li>))
        }
      </ul>
    </Card>
  </section>
)

export default News
