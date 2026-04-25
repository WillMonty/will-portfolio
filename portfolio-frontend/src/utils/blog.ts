import type { MDXProps } from 'mdx/types'

export interface PostFrontmatter {
  title: string
  date: string
  summary: string
}

export interface PostModule {
  frontmatter: PostFrontmatter
  default: (props: MDXProps) => JSX.Element
}

const modules = import.meta.glob<PostModule>('../content/blog/*.mdx', {
  eager: true,
})

function slugFromPath(path: string) {
  return path.split('/').pop()!.replace(/\.mdx$/, '')
}

export interface PostMeta extends PostFrontmatter {
  slug: string
}

export function getAllPosts(): PostMeta[] {
  return Object.entries(modules)
    .map(([path, mod]) => ({ slug: slugFromPath(path), ...mod.frontmatter }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): PostModule | undefined {
  const entry = Object.entries(modules).find(
    ([path]) => slugFromPath(path) === slug,
  )
  return entry?.[1]
}
