import { twMerge } from 'tailwind-merge'
import { TwUiProps } from './types'

export const MyButton = (props: TwUiProps) => {
  const setClass = () => {
    switch (true) {
      case props.variant == 'outline':
        return `border border-gray-500 hover:bg-gray-500 hover:text-white font-bold py-2 px-4 rounded-md`
      default:
        return `bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md`
    }
  }

  const classNames = twMerge(setClass(), props.className)
  return <button className={classNames}>{props.children}</button>
}
