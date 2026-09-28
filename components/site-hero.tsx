import Image from "next/image"

export function SiteHero() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground">
            Poetry · Essays · Podcast
          </span>
          <h1 className="text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Humayra
          </h1>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            A quiet corner for words that travel across languages. I share
            poetry, essays, and podcast conversations in{" "}
            <span className="font-medium text-foreground">English</span>,{" "}
            <span className="font-medium text-foreground">French</span>, and{" "}
            <span className="font-medium text-foreground">Wolof</span>.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://open.spotify.com/show/7onSTjI2KVPGN4IG2LFPHp?si=91378350d31a41b3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Listen to the podcast
            </a>
            <a
              href="#follow"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              How to follow
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary/60 blur-2xl" aria-hidden="true" />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <Image
              src="/humayra-botanical.png"
              alt="Soft watercolor illustration of sage green leaves and pastel pink blossoms"
              width={640}
              height={640}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}
