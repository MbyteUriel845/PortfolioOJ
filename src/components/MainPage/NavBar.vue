<template>
    <header class="relative">
        <nav class="fixed w-full z-50 backdrop-blur-sm">
            <div class="max-w-6xl mx-auto">
                <div class="flex justify-center py-4 px-6">
                    <div class="rounded-full bg-zinc-800/50 px-3 py-1.5 flex items-center gap-6">
                        <a v-for="item in navItems" :key="item" :href="`#${item.toLowerCase()}`"
                            class="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200">
                            {{ item }}
                        </a>
                    </div>
                    <button
                        class="absolute right-6 top-1/2 -translate-y-1/2 rounded-full w-8 h-8 flex items-center justify-center border border-zinc-700/50 bg-zinc-800/50 hover:border-zinc-600 transition-colors duration-200"
                        @click="handleToggleTheme">
                        <span class="sr-only">Toggle theme</span>
                        <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-zinc-400"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-zinc-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        toggleTheme: Function
    },
    data() {
        return {
            navItems: ['About', 'Articles', 'Projects', 'Speaking', 'Uses'],
        }
    },
    methods: {
        handleToggleTheme() {
            this.$emit('toggle-theme');
        }
    },
}
</script>
