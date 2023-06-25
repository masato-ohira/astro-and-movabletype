import { twMerge } from 'tailwind-merge'
import { TwUiProps } from './types'

export const MyStack = (props: TwUiProps) => {
  const classNames = twMerge('space-y-4', props.className)
  return <div className={classNames}>{props.children}</div>
}
