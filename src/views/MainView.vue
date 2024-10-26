<template>
    <div :class="themeClass" class="min-h-screen">
        <NavBar @toggle-theme="handleToggleTheme" />
        <main class="max-w-6xl mx-auto px-6 py-24">
            <ProfileHeader />
            <ImageGallery />
            <div class="mt-24 grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12">
                <ArticlesList />
                <SidebarInfo />
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/MainPage/NavBar.vue'
import ProfileHeader from '@/components/MainPage/ProfileHeader.vue'
import ImageGallery from '@/components/MainPage/ImageGallery.vue'
import ArticlesList from '@/components/MainPage/ArticlesList.vue'
import SidebarInfo from '@/components/MainPage/SidebarInfo.vue'
import Footer from '@/components/MainPage/Footer.vue'
import { toggleTheme, getCurrentTheme, applyStoredTheme } from '@/composables/switchTheme';

export default {
    name: 'MainView',
    components: {
        NavBar,
        ProfileHeader,
        ImageGallery,
        ArticlesList,
        SidebarInfo,
        Footer
    },
    data() {
        return {
            theme: getCurrentTheme()
        }
    },
    computed: {
        themeClass() {
            return this.theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
        }
    },
    methods: {
        handleToggleTheme() {
            toggleTheme();
            this.theme = getCurrentTheme();
        }
    },
    mounted() {
        applyStoredTheme();
        this.theme = getCurrentTheme();
    }
}
</script>
