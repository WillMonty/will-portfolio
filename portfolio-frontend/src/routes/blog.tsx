import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({ component: Blog })

const PLACEHOLDER_POSTS = [
  {
    slug: 'coming-soon-1',
    title: 'Why I switched from SvelteKit to TanStack Start',
    date: 'Coming soon',
    summary:
      'A look at the trade-offs between file-based SSR frameworks when building a personal site.',
  },
  {
    slug: 'coming-soon-2',
    title: 'Type-safe routing without the ceremony',
    date: 'Coming soon',
    summary:
      'TanStack Router generates route types automatically — here is what that actually feels like day-to-day.',
  },
  {
    slug: 'coming-soon-3',
    title: 'Staff engineering: what the title actually means',
    date: 'Coming soon',
    summary:
      'Lessons from stepping into a staff role and what changed (and what did not).',
  },
]

function Blog() {
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
        <p className="island-kicker mb-4">Blog</p>
        <h1 className="
          display-title mb-4 text-4xl font-bold tracking-tight text-(--sea-ink)
          sm:text-5xl
        ">
          Writing
        </h1>
        <p className="max-w-lg text-base text-(--sea-ink-soft)">
          Posts on engineering, tooling, and whatever I'm currently obsessing
          over. Posts coming soon.
        </p>
      </section>

      <section className="mt-8 flex flex-col gap-4">
        {PLACEHOLDER_POSTS.map(({ slug, title, date, summary }, i) => (
          <article
            key={slug}
            className="
              island-shell rise-in rounded-2xl p-6
              sm:p-8
            "
            style={{ animationDelay: `${i * 80 + 60}ms` }}
          >
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="island-kicker">{date}</span>
            </div>
            <h2 className="
              display-title mb-2 text-xl font-bold text-(--sea-ink)
              sm:text-2xl
            ">
              {title}
            </h2>
            <p className="m-0 text-sm text-(--sea-ink-soft)">{summary}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
