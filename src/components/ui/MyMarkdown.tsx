import MarkdownIt from 'markdown-it'
import { twMerge } from 'tailwind-merge'

const mdOptions: MarkdownIt.Options = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
}
const md = new MarkdownIt(mdOptions)

type MarkdownProps = {
  children?: string
  className?: string
}

export const MyMarkdown = (props: MarkdownProps) => {
  const { children, ...rest } = props
  const html: string = md.render(children || '')

  const classNames = twMerge('', props.className)

  return (
    <>
      <div
        className={classNames}
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </>
  )
}
