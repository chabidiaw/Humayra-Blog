export function Follow() {
  return (
    <section id="follow" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-border bg-card px-6 py-14 text-center">
        <div className="h-1 w-12 rounded-full bg-accent" aria-hidden="true" />
        <h2 className="max-w-lg text-balance font-serif text-3xl tracking-tight md:text-4xl">
          Follow along
        </h2>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          The easiest way to stay close to new poetry, essays, and episodes is
          on the podcast. Subscribe and new work will find you.
        </p>
        <a
          href="https://open.spotify.com/show/7onSTjI2KVPGN4IG2LFPHp?si=91378350d31a41b3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Listen & subscribe on Spotify
        </a>
      </div>
    </section>
  )
}
