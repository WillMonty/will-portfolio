declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types'

  export const frontmatter: {
    title: string
    date: string
    summary: string
    [key: string]: unknown
  }

  export default function MDXContent(props: MDXProps): JSX.Element
}
