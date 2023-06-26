import { useScrollEffect } from '@/hooks/useScrollEffect'
import { MyIcon } from '../icons/MyIcon'
import { twMerge } from 'tailwind-merge'

export const MyPagetop = () => {
  const { scrolled } = useScrollEffect()
  const wrapClass = twMerge(
    `fixed right-4 bottom-4 transition-all`,
    scrolled ? 'opacity-100 z-50' : 'opacity-0 -z-10',
  )

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={wrapClass}>
      <div
        onClick={scrollTop}
        className={
          'w-12 h-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-90 cursor-pointer transition-all flex flex-wrap justify-center items-center'
        }
      >
        <div className={'-mt-1'}>
          <MyIcon name={'arrow_up'} size={'32px'} color='#fff' />
        </div>
      </div>
    </div>
  )
}
