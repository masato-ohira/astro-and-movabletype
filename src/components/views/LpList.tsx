import { useEffect, useState } from 'react'
import { MyGrid } from '../ui/MyGrid'
import axios from 'axios'
// import { take } from 'lodash-es'

type AssetType = {
  id: string
  filename: string
  mimetype: string
  resizes: {
    medium: string
    small: string
  }
}

type EntryType = {
  id: string
  title: string
  date: string
  permalink: string
  assets: AssetType[]
}

export const LpList = () => {
  const [items, setItems] = useState([])
  const hasValue = items.length > 0

  const fetchData = async () => {
    const { data } = await axios.get('/api/lp.json', {
      params: {
        ts: Date.now(),
      },
    })
    setItems(data.items)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!hasValue) return <></>
  return (
    <MyGrid className={'grid-cols-2 gap-16'}>
      {items.map((i: EntryType) => {
        return <LpItem {...i} />
      })}
    </MyGrid>
  )
}

const LpItem = (props: EntryType) => {
  const thum = props.assets[0].resizes.medium
  return (
    <div>
      <a href={`/lp/detail/${props.id}/`} className={'inline-block'}>
        <div>
          <img src={thum} alt='' />
        </div>
        <div className={'pt-3 text-xl font-semibold'}>{props.title}</div>
      </a>
    </div>
  )
}
