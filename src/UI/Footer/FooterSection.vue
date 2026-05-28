<script setup>
const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
</script>

<template>
  <footer
    class="bg-nightSurf text-textPrimary py-12 relative overflow-hidden border-t border-nightBorder"
  >
    <!-- Déco subtile -->
    <div
      class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent"
    ></div>
    <div
      class="absolute -top-16 right-20 w-32 h-32 rounded-full bg-rose/5 blur-2xl"
    ></div>

    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Logo/Nom -->
        <div class="text-center md:text-left">
          <p class="font-serif text-2xl text-textPrimary">
            Sahoby <span class="text-rose italic">Narindra</span>
          </p>
          <p
            class="font-sans text-xs text-textMuted tracking-widest uppercase mt-1"
          >
            Développeuse Web
          </p>
        </div>

        <!-- Liens rapides -->
        <div class="flex flex-wrap justify-center gap-6">
          <a
            v-for="link in [
              '#hero',
              '#apropos',
              '#experiences',
              '#technologies',
              '#projets',
              '#contact',
            ]"
            :key="link"
            :href="link"
            class="font-sans text-sm text-textMuted hover:text-rose transition-colors"
          >
            {{
              link.replace("#", "").charAt(0).toUpperCase() +
              link.replace("#", "").slice(1)
            }}
          </a>
        </div>

        <!-- Remonter -->
        <button
          @click="scrollTop"
          class="w-10 h-10 rounded-full bg-nightCard border border-nightBorder flex items-center justify-center hover:bg-rose hover:border-rose transition-all duration-300 group"
          aria-label="Retour en haut"
        >
          <svg
            class="w-4 h-4 text-textMuted group-hover:text-white group-hover:-translate-y-0.5 transition-all"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>

      <!-- Séparateur -->
      <div class="h-px bg-nightBorder my-8"></div>

      <div
        class="flex flex-col md:flex-row items-center justify-between gap-3 text-center"
      >
        <p class="font-sans text-xs text-textMuted/50">
          © 2025 Sahoby Narindra. Tous droits réservés.
        </p>
        <p class="font-sans text-xs text-textMuted/50 flex items-center gap-1">
          Conçu avec <span class="text-rose">♥</span> en Vue.js + Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>
