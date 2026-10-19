import { notFound } from "next/navigation"
import Link from "next/link"
import { posts } from "@/data/posts"

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function SinglePostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <main className="mx-auto max-w-2xl px-6 py-16 md:py-24 font-serif">
            <nav className="mb-10 font-sans">
                <Link
                    href={`/words?category=${post.category}`}
                    className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition"
                >
                    ← Back to {post.category}
                </Link>
            </nav>

            <header className="mb-12 text-center border-b border-border pb-8">
                <div className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    <span className="text-primary font-semibold">{post.language}</span> ·{" "}
                    {post.category}
                </div>
                <h1 className="text-4xl text-foreground mb-4">{post.title}</h1>
                <time className="font-sans text-xs text-muted-foreground">{post.date}</time>
            </header>

            <article className="text-lg leading-loose text-foreground/90 whitespace-pre-line">
                {post.content}
            </article>
        </main>
    )
}