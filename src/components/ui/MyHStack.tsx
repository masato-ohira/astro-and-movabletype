import { twMerge } from 'tailwind-merge'
import { TwUiProps } from './types'

export const MyHStack = (props: TwUiProps) => {
  const classNames = twMerge('flex space-x-4 items-center', props.className)
  return <div className={classNames}>{props.children}</div>
}
