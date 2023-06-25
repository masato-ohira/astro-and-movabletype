import { twMerge } from 'tailwind-merge'
import { TwUiProps } from './types'

export const MyContainer = (props: TwUiProps) => {
  const classes = twMerge('mx-auto px-4 max-w-7xl', props.className)
  return <div className={classes}>{props.children}</div>
}
