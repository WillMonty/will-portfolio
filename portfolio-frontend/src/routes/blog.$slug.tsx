import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { getPost } from '#/utils/blog'

export const Route = createFileRoute('/blog/$slug')({ component: BlogPost })

function BlogPost() {
  const { slug } = Route.useParams()
  const post = getPost(slug)

  if (!post) throw notFound()

  const { frontmatter, default: Content } = post

  return (
    <main className="page-wrap px-4 pt-14 pb-16">
      <section className="
        island-shell rise-in relative overflow-hidden rounded-4xl px-8 py-12
        sm:px-14 sm:py-16
      ">
        <div className="
          pointer-events-none absolute -top-20 -left-20 size-56 rounded-full
          bg-[radial-gradient(circle,rgba(79,184,178,0.24),transparent_66%)]
        " />
        <Link
          to="/blog"
          className="
            island-kicker mb-6 inline-flex items-center gap-1.5 no-underline
            hover:opacity-70
          "
        >
          ← All posts
        </Link>
        <p className="island-kicker mb-3">
          {new Date(frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
          })}
        </p>
        <h1 className="
          display-title mb-4 text-3xl font-bold tracking-tight text-(--sea-ink)
          sm:text-4xl
        ">
          {frontmatter.title}
        </h1>
        <p className="max-w-lg text-base text-(--sea-ink-soft)">
          {frontmatter.summary}
        </p>
      </section>

      <article className="
        island-shell rise-in prose mt-8 max-w-none rounded-2xl px-8 py-10
        prose-neutral
        sm:px-14 sm:py-12
        dark:prose-invert
      ">
        <Content />
      </article>
    </main>
  )
}
