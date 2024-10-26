<template>
  <div class="max-w-2xl">
    <div class="mb-8">
      <!-- <img src="path-to-profile-image" alt="Profile" class="w-16 h-16 rounded-full bg-zinc-100 object-cover" /> -->
    </div>

    <h1 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-6">
      Software designer, founder,
      <br>and amateur astronaut.
    </h1>

    <p class="text-base text-zinc-400 leading-relaxed mb-8">
      I'm Spencer, a software designer and entrepreneur based in New York City.
      I'm the founder and CEO of Planetaria, where we develop technologies
      that empower regular people to explore space on their own terms.
    </p>

    <!-- <div class="flex gap-6">
        <a 
          v-for="social in socials" 
          :key="social.name"
          :href="social.url"
          class="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">{{ social.name }}</span>
          <component 
            :is="social.icon" 
            class="w-6 h-6 text-zinc-500 transition group-hover:text-zinc-300"
          />
        </a>
      </div> -->
  </div>
</template>