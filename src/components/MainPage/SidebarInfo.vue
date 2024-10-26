<template>
    <div class="space-y-10">
        <!-- Newsletter Signup -->
        <div class="rounded-2xl border border-zinc-700/40 p-6">
            <h2 class="flex text-sm font-semibold text-zinc-100">
                <span>Stay up to date</span>
            </h2>

            <p class="mt-2 text-sm text-zinc-400">
                Get notified when I publish something new, and unsubscribe at any time.
            </p>

            <form class="mt-6 flex gap-2">
                <input type="email" placeholder="Email address"
                    class="min-w-0 flex-auto rounded-md border border-zinc-700/40 bg-zinc-800/50 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/10" />
                <button type="submit"
                    class="flex-none rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-400/10">
                    Join
                </button>
            </form>
        </div>

        <!-- Work Experience -->
        <div class="rounded-2xl border border-zinc-700/40 p-6">
            <h2 class="flex text-sm font-semibold text-zinc-100">
                <span>Work</span>
            </h2>

            <ol class="mt-6 space-y-4">
                <li v-for="job in work" :key="job.company" class="flex gap-4">
                    <div
                        class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800">
                        <img :src="job.logo" :alt="job.company" class="h-7 w-7" />
                    </div>
                    <dl class="flex flex-auto flex-wrap gap-x-2">
                        <dt class="sr-only">Company</dt>
                        <dd class="w-full flex-none text-sm font-medium text-zinc-100">
                            {{ job.company }}
                        </dd>
                        <dt class="sr-only">Role</dt>
                        <dd class="text-xs text-zinc-400">{{ job.role }}</dd>
                        <dt class="sr-only">Date</dt>
                        <dd class="ml-auto text-xs text-zinc-500">{{ job.date }}</dd>
                    </dl>
                </li>
            </ol>

            <button
                class="inline-flex items-center gap-2 justify-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-700 w-full mt-6">
                Download CV
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            work: [
                {
                    company: 'Planetaria',
                    position: 'CEO',
                    period: '2019 — Present',
                    logo: 'path-to-planetaria-logo'
                },
                {
                    company: 'Airbnb',
                    position: 'Product Designer',
                    period: '2014 — 2019',
                    logo: 'path-to-airbnb-logo'
                },
                {
                    company: 'Facebook',
                    position: 'iOS Software Engineer',
                    period: '2011 — 2014',
                    logo: 'path-to-facebook-logo'
                },
                {
                    company: 'Starbucks',
                    position: 'Shift Supervisor',
                    period: '2008 — 2011',
                    logo: 'path-to-starbucks-logo'
                }
            ]
        }
    }
}
</script>