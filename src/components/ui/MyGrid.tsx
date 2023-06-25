import { twMerge } from 'tailwind-merge'
import { TwUiProps } from './types'

export const MyGrid = (props: TwUiProps) => {
  const classes = twMerge('grid grid-cols-3 gap-4', props.className)
  return <div className={classes}>{props.children}</div>
}
