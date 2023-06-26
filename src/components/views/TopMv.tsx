import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { find, map } from 'lodash-es'

type AssetType = {
  id: string
  url: string
  filename: string
  mimetype: string
}

type ItemType = {
  name: string
  asset_id: string
}

type SwiterItemType = ItemType & {
  asset: AssetType
}

export const TopMv = () => {
  const [items, setItems] = useState<SwiterItemType[]>([])
  const hasValue = items.length > 0

  const fetchData = async () => {
    const { data } = await axios.get('/api/main-images.json', {
      params: {
        ts: Date.now(),
      },
    })

    const images: SwiterItemType[] = map(data.items, (i: ItemType) => {
      return {
        ...i,
        asset: find(data.assets, (a) => a.id == i.asset_id),
      }
    })

    setItems(images)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // effect={'fade'}
        // centeredSlides={true}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        loop={true}
      >
        {items.map((i) => {
          return (
            <SwiperSlide key={i.asset_id}>
              <img
                src={i.asset.url}
                alt={i.name}
                className={'aspect-banner object-cover select-none'}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
