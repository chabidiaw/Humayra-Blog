import Link from "next/link"
import { posts } from "@/data/posts"

export default async function WordsPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string; lang?: string }>
}) {
    const { category, lang } = await searchParams

    const filteredPosts = posts.filter((post) => {
        const matchesCategory = category
            ? post.category.toLowerCase() === category.toLowerCase()
            : true
        const matchesLang = lang
            ? post.language.toLowerCase() === lang.toLowerCase()
            : true
        return matchesCategory && matchesLang
    })

    return (
        <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <div className="mb-12">
                <Link
                    href="/"
                    className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition"
                >
                    ← Home
                </Link>
                <h1 className="text-4xl font-serif mt-4 mb-2">
                    {category ? category : "All Writings"}
                </h1>
                <p className="text-muted-foreground font-serif italic text-sm">
                    Words that travel across English, Français, and Wolof.
                </p>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-6 border-b border-border pb-4 mb-10 text-xs uppercase tracking-wider">
                <Link
                    href="/words"
                    className={`transition ${!category ? "text-primary font-bold border-b-2 border-primary pb-4 -mb-[18px]" : "text-muted-foreground hover:text-foreground"}`}
                >
                    All
                </Link>
                <Link
                    href="/words?category=Poetry"
                    className={`transition ${category?.toLowerCase() === "poetry" ? "text-primary font-bold border-b-2 border-primary pb-4 -mb-[18px]" : "text-muted-foreground hover:text-foreground"}`}
                >
                    Poetry
                </Link>
                <Link
                    href="/words?category=Essays"
                    className={`transition ${category?.toLowerCase() === "essays" ? "text-primary font-bold border-b-2 border-primary pb-4 -mb-[18px]" : "text-muted-foreground hover:text-foreground"}`}
                >
                    Essays
                </Link>
            </div>

            {/* Posts List */}
            <div className="divide-y divide-border">
                {filteredPosts.map((post) => (
                    <article key={post.slug} className="py-8 first:pt-0">
                        <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground mb-2">
                            <time>{post.date}</time>
                            <span>•</span>
                            <span className="text-primary font-medium">{post.language}</span>
                            <span>•</span>
                            <span>{post.category}</span>
                        </div>

                        <h2 className="text-2xl font-serif hover:text-primary transition">
                            <Link href={`/words/${post.slug}`}>{post.title}</Link>
                        </h2>

                        <p className="mt-3 text-muted-foreground font-serif leading-relaxed line-clamp-2">
                            {post.content}
                        </p>

                        <Link
                            href={`/words/${post.slug}`}
                            className="inline-block mt-4 text-xs uppercase tracking-wider text-foreground underline underline-offset-4 hover:text-primary transition"
                        >
                            Read full piece →
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    )
}