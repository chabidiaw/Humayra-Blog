const items = [
  {
    title: "Poetry",
    description:
      "Verses written and read aloud — small moments, longing, and the in-between.",
  },
  {
    title: "Essays",
    description:
      "Longer reflections on culture, identity, and the things worth slowing down for.",
  },
  {
    title: "Podcast",
    description:
      "Conversations and readings you can carry with you, wherever you are.",
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
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
          >
            <div className="h-1 w-10 rounded-full bg-primary" aria-hidden="true" />
            <h3 className="font-serif text-xl">{item.title}</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
