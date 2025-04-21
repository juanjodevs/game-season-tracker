import { formatDate } from '@/lib/utils'
import { Card, Heading } from '@radix-ui/themes'

const News = ({ news }: { news: string[] }) => {
  const formatNewDate = (item: string) => {
    const reg = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g
    const match = item.match(reg)
    if (match) {
      return item.replace(reg, formatDate(match[0]))
    }
    return item
  }

  if (news.length === 0) return null

  return (
    <section className='pb-5'>
      <Card className='bg-yellow-300 border-2 border-yellow-700 text-slate-800'>
        <Heading>Latest news</Heading>
        <ul>
          {
            news.map((item, i) => (<li key={i} className='ml-5 list-disc' >{formatNewDate(item)}</li>))
          }
        </ul>
      </Card>
    </section>
  )
}

export default News
