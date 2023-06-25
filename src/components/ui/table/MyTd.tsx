import { twMerge } from 'tailwind-merge'
import { TwUiProps } from '@/components/ui/types'

export const MyTd = (props: TwUiProps) => {
  const defaultClass = 'p-4 border-b border-gray-200'
  const classNames = twMerge(defaultClass, props.className)
  return (
    <td className={classNames}>
      <>{props.children}</>
    </td>
  )
}
