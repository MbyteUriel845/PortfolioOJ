<template>
    <div class="mt-16">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-5">
            <div v-for="(image, index) in images" :key="index"
                class="relative aspect-[9/10] overflow-hidden rounded-xl bg-zinc-800">
                <img :src="image.url" :alt="image.alt" class="absolute inset-0 h-full w-full object-cover" />
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            images: [
                'path-to-cockpit-image',
                'path-to-conference-image',
                'path-to-workspace-image',
                'path-to-mountain-image',
                'path-to-mars-image'
            ]
        }
    }
}
</script>