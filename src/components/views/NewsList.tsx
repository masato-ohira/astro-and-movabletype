import { useEffect, useState } from 'react'
import { MyStack } from '../ui/MyStack'
import axios from 'axios'
import dayjs from 'dayjs'
import { take } from 'lodash-es'

type NewsItemType = {
  id: string
  title: string
  date: string
}

export const NewsList = ({ limit = 20 }: { limit?: number }) => {
  const [news, setNews] = useState([])
  const hasValue = news.length > 0

  const fetchNews = async () => {
    const { data } = await axios.get('/api/news.json')
    setNews(take(data.items, limit))
  }

  useEffect(() => {
    fetchNews()
  }, [])

  if (!hasValue) return <></>
  return (
    <>
      <MyStack>
        {news.map((i: NewsItemType) => {
          return <NewsItem key={i.id} {...i} />
        })}
      </MyStack>
    </>
  )
}

const NewsItem = (props: NewsItemType) => {
  const date = dayjs(props.date).format('YYYY/MM/DD')
  return (
    <dl className={'border-b border-gray-200 py-3 space-x-1'}>
      <dt className={'text-sm'}>{date}</dt>
      <dd className={'font-semibold'}>{props.title}</dd>
    </dl>
  )
}
