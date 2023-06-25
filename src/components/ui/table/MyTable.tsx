import { twMerge } from 'tailwind-merge'
import { TwUiProps } from '@/components/ui/types'

export const MyTable = (props: TwUiProps) => {
  const defaultClass = 'w-full'
  const classNames = twMerge(defaultClass, props.className)
  return <table className={classNames}>{props.children}</table>
}
