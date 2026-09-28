export function PoemsArchive() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
      <div className="flex flex-col gap-6 rounded-[2rem] border border-border bg-secondary/40 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12">
        <div className="flex max-w-md flex-col gap-3">
          <div className="h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Poems from the archive
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            My earlier poetry lives on my original blog. Wander through the
            older verses whenever you&apos;d like to read more.
          </p>
        </div>
        <a
          href="https://humayra23.wordpress.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Read poems on WordPress
        </a>
      </div>
    </section>
  )
}
