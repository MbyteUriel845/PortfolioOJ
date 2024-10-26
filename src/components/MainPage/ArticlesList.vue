<template>
    <div class="space-y-16">
        <article v-for="article in articles" :key="article.id" class="group relative">
            <time :datetime="article.date" class="relative z-10 text-sm text-zinc-400 mb-3 block">
                <!-- {{ formatDate(article.date) }} -->
                {{ article.date }}

            </time>

            <h2 class="text-xl font-semibold tracking-tight text-zinc-100 mb-4">
                {{ article.title }}
            </h2>

            <p class="relative z-10 text-sm text-zinc-400 mb-4">
                {{ article.excerpt }}
            </p>

            <a :href="article.href" class="flex items-center text-sm font-medium text-teal-500 hover:text-teal-400">
                Read article
                <svg class="ml-1 w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M6.75 5.75L9.25 8l-2.5 2.25" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                {
                    id: 1,
                    date: 'September 5, 2022',
                    title: 'Crafting a design system for a multiplanetary future',
                    excerpt: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire up to 100 years from now when humanity has spread across our entire solar system.'
                },
                {
                    id: 2,
                    date: 'September 2, 2022',
                    title: 'Introducing Animaginary: High performance web animations',
                    excerpt: 'When youre building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.'
                },
                {
                    id: 3,
                    date: 'July 14, 2022',
                    title: 'Rewriting the cosmOS kernel in Rust',
                    excerpt: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but its been a while since I ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.'
                }
            ]
        }
    }
}
</script>