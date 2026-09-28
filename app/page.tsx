import { SiteHero } from "@/components/site-hero"
import { WhatIShare } from "@/components/what-i-share"
import { Languages } from "@/components/languages"
import { Follow } from "@/components/follow"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHero />
      <WhatIShare />
      <Languages />
      <Follow />
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-muted-foreground">
          <span className="font-serif text-base text-foreground">Humayra</span>
          <p>Poetry, essays, and podcasts in English, French, and Wolof.</p>
        </div>
      </footer>
    </main>
  )
}
