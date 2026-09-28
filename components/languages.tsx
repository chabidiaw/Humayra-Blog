const languages = [
  { name: "English", note: "En" },
  { name: "Français", note: "Fr" },
  { name: "Wolof", note: "Wo" },
]

export function Languages() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="flex max-w-md flex-col gap-3">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Three languages, one voice
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Every piece finds its home in the language it was meant for —
            sometimes all three at once.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {languages.map((language) => (
            <li
              key={language.name}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {language.note}
              </span>
              <span className="font-serif text-lg">{language.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
