import Link from "next/link"

const items = [
  {
    title: "Poetry",
    description:
      "Verses written and read aloud — small moments, longing, and the in-between.",
    href: "/words?category=Poetry",
    isExternal: false,
  },
  {
    title: "Essays",
    description:
      "Longer reflections on culture, identity, and the things worth slowing down for.",
    href: "/words?category=Essays",
    isExternal: false,
  },
  {
    title: "Podcast",
    description:
      "Conversations and readings you can carry with you, wherever you are.",
    href: "https://open.spotify.com/show/7onSTjI2KVPGN4IG2LFPHp",
    isExternal: true,
  },
]

export function WhatIShare() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <div className="mb-10 flex flex-col gap-3">
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          What I share
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          Three ways to sit with a story — read it, think it through, or listen.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) =>
          item.isExternal ? (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/30 hover:bg-card/80"
            >
              <div
                className="h-1 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-14"
                aria-hidden="true"
              />
              <h3 className="font-serif text-xl group-hover:text-primary transition-colors">
                {item.title} ↗
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </a>
          ) : (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-foreground/30 hover:bg-card/80"
            >
              <div
                className="h-1 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-14"
                aria-hidden="true"
              />
              <h3 className="font-serif text-xl group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Link>
          )
        )}
      </div>
    </section>
  )
}