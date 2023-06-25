import { IconBaseProps, GenIcon } from 'react-icons'
import svgList from './svg-list.json'
import { get } from 'lodash-es'

const keys: Array<keyof typeof svgList> = Object.keys(svgList) as Array<
  keyof typeof svgList
>

type MyIconProps = IconBaseProps & {
  name: (typeof keys)[number]
}

export const MyIcon = (props: MyIconProps) => {
  const svgData = get(svgList, props.name)
  return GenIcon(svgData)(props)
}
