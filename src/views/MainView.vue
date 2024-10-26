<template>
    <div class="min-h-screen bg-black text-white">
        <NavBar />
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
import NavBar from '../components/MainPage/NavBar.vue'
import ProfileHeader from '../components/MainPage/ProfileHeader.vue'
import ImageGallery from '../components/MainPage/ImageGallery.vue'
import ArticlesList from '../components/MainPage/ArticlesList.vue'
import SidebarInfo from '../components/MainPage/SidebarInfo.vue'
import Footer from '../components/MainPage/Footer.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        ProfileHeader,
        ImageGallery,
        ArticlesList,
        SidebarInfo,
        Footer
    }
}
</script>