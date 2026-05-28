<script setup>
import { onMounted } from "vue";
import { techCategories, allTechs } from "./data.js";

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
</script>

<template>
  <section
    id="technologies"
    class="py-24 bg-nightSurf relative overflow-hidden"
  >
    <!-- Déco fond -->
    <div
      class="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-lavender/5 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-rose/5 blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-6">
      <!-- Titre -->
      <div class="text-center mb-16 reveal">
        <p class="font-sans text-xs text-rose tracking-[0.3em] uppercase mb-3">
          Mon arsenal
        </p>
        <h2 class="section-title">Technologies</h2>
        <div class="flex justify-center mt-4 mb-5">
          <div class="divider-rose"></div>
        </div>
        <p class="section-subtitle max-w-md mx-auto">
          Les outils et langages que je maîtrise pour construire des
          applications modernes
        </p>
      </div>

      <!-- Grille des catégories -->
      <div class="grid md:grid-cols-2 gap-6 mb-16">
        <div
          v-for="(cat, idx) in techCategories"
          :key="cat.label"
          :class="['reveal card p-6 border ' + cat.borderColor]"
          :style="{ transitionDelay: idx * 100 + 'ms' }"
        >
          <!-- Header catégorie -->
          <div class="flex items-center gap-3 mb-6">
            <div
              :class="[
                'w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-xl ' +
                  cat.color,
              ]"
              :style="{ boxShadow: `0 0 16px ${cat.glowColor}25` }"
            >
              {{ cat.icon }}
            </div>
            <h3 class="font-serif text-lg text-textPrimary">{{ cat.label }}</h3>
          </div>

          <!-- Barres de progression -->
          <div class="space-y-4">
            <div v-for="tech in cat.techs" :key="tech.name" class="group">
              <div class="flex justify-between items-center mb-1.5">
                <div class="flex items-center gap-2">
                  <span class="text-sm">{{ tech.icon }}</span>
                  <span
                    class="font-sans text-sm text-textSoft font-medium group-hover:text-textPrimary transition-colors"
                  >
                    {{ tech.name }}
                  </span>
                </div>
                <span class="font-sans text-xs text-textMuted"
                  >{{ tech.level }}%</span
                >
              </div>
              <div class="h-1.5 bg-nightBorder rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 delay-500"
                  :style="{
                    width: tech.level + '%',
                    background: `linear-gradient(to right, ${cat.glowColor}, ${cat.glowColor}99)`,
                    boxShadow: `0 0 8px ${cat.glowColor}50`,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cloud de technologies (défilant) -->
      <div class="reveal">
        <p
          class="text-center font-sans text-xs text-textMuted uppercase tracking-widest mb-6"
        >
          ✦ Toutes mes technologies ✦
        </p>
        <div class="relative overflow-hidden py-4">
          <!-- Dégradé masque gauche/droite -->
          <div
            class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-nightSurf to-transparent z-10 pointer-events-none"
          ></div>
          <div
            class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-nightSurf to-transparent z-10 pointer-events-none"
          ></div>

          <!-- Défilement infini -->
          <div class="flex gap-3 marquee-track">
            <span
              v-for="tech in [...allTechs, ...allTechs]"
              :key="tech.name + Math.random()"
              class="inline-flex items-center gap-1.5 px-4 py-2 glass rounded-full border border-nightBorder text-xs font-sans text-textSoft whitespace-nowrap hover:border-rose/30 hover:text-rose transition-all cursor-default flex-shrink-0"
            >
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  animation: marquee 30s linear infinite;
  width: max-content;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
