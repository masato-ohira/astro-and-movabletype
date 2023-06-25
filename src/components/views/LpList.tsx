import { useEffect, useState } from 'react'
import { MyGrid } from '../ui/MyGrid'
import axios from 'axios'
import { take } from 'lodash-es'

type EntryType = {
  userId: number
  id: number
  title: string
  body: string
}

export const LpList = () => {
  const [items, setItems] = useState([])
  const hasValue = items.length > 0

  const fetchData = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )
    setItems(take(data, 10))
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!hasValue) return <></>
  return (
    <MyGrid className={'grid-cols-4 gap-8'}>
      {items.map((i: EntryType) => {
        return <LpItem {...i} />
      })}
    </MyGrid>
  )
}

const LpItem = (props: EntryType) => {
  return (
    <div>
      <div>
        <img src='https://placehold.jp/eee/ccc/1024x768.png?text=MV' alt='' />
      </div>
      <div className={'pt-3'}>{props.title}</div>
    </div>
  )
}
