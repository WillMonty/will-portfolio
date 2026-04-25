import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="page-wrap px-4 pt-14 pb-16">
      {/* Hero */}
      <section className="
        island-shell rise-in relative overflow-hidden rounded-4xl px-8 py-16
        sm:px-14 sm:py-24
      ">
        <div className="
          pointer-events-none absolute -top-28 -left-24 size-72 rounded-full
          bg-[radial-gradient(circle,rgba(79,184,178,0.28),transparent_66%)]
        " />
        <div className="
          pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full
          bg-[radial-gradient(circle,rgba(47,106,74,0.16),transparent_66%)]
        " />
        <p className="island-kicker mb-4">Staff Software Engineer</p>
        <h1 className="
          display-title mb-6 text-5xl leading-none font-bold tracking-tight
          text-(--sea-ink)
          sm:text-7xl
        ">
          Will Montgomery
        </h1>
        <p className="
          mb-10 max-w-xl text-base text-(--sea-ink-soft)
          sm:text-lg
        ">
          Building thoughtful, high-quality software. Passionate about clean
          architecture, developer experience, and shipping things that matter.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/blog"
            className="
              rounded-full border border-[rgba(50,143,151,0.3)]
              bg-[rgba(79,184,178,0.14)] px-6 py-3 text-sm font-semibold
              text-(--lagoon-deep) no-underline transition
              hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]
            "
          >
            Read the blog
          </Link>
          <a
            href="https://github.com/WillMonty"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-6
              py-3 text-sm font-semibold text-(--sea-ink) no-underline
              transition
              hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]
            "
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About snapshot */}
      <section className="
        mt-8 grid gap-4
        sm:grid-cols-3
      ">
        {[
          {
            label: 'Focus',
            body: 'Full-stack web applications — from API design to polished UIs.',
          },
          {
            label: 'Experience',
            body: 'Staff-level engineering across startups and scale-ups.',
          },
          {
            label: 'Currently exploring',
            body: 'TanStack Start, React 19, and edge-deployed SSR.',
          },
        ].map(({ label, body }, i) => (
          <article
            key={label}
            className="island-shell feature-card rise-in rounded-2xl p-6"
            style={{ animationDelay: `${i * 90 + 80}ms` }}
          >
            <p className="island-kicker mb-2">{label}</p>
            <p className="m-0 text-sm text-(--sea-ink-soft)">{body}</p>
          </article>
        ))}
      </section>

      {/* Writing teaser */}
      <section className="island-shell mt-8 rounded-2xl p-8">
        <p className="island-kicker mb-3">Writing</p>
        <h2 className="display-title mb-2 text-2xl font-bold text-(--sea-ink)">
          Thoughts on software & craft
        </h2>
        <p className="mb-6 text-sm text-(--sea-ink-soft)">
          Occasional posts on engineering practices, tooling, and lessons
          learned the hard way.
        </p>
        <Link
          to="/blog"
          className="
            rounded-full border border-[rgba(50,143,151,0.3)]
            bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold
            text-(--lagoon-deep) no-underline transition
            hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]
          "
        >
          View all posts →
        </Link>
      </section>
    </main>
  )
}
