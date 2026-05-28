<script setup>
import { ref, computed, onMounted } from "vue";
import { projects, categories } from "./data.js";

const filter = ref("all");

const filtered = computed(() =>
  filter.value === "all"
    ? projects
    : projects.filter((p) => p.category === filter.value),
);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
</script>

<template>
  <section id="projets" class="py-24 bg-nightSurf relative overflow-hidden">
    <!-- Déco -->
    <div
      class="absolute top-0 left-0 w-80 h-80 rounded-full bg-rose/5 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-lavender/5 blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-6">
      <!-- Titre -->
      <div class="text-center mb-12 reveal">
        <p class="font-sans text-xs text-rose tracking-[0.3em] uppercase mb-3">
          Mes réalisations
        </p>
        <h2 class="section-title">Projets</h2>
        <div class="flex justify-center mt-4 mb-5">
          <div class="divider-rose"></div>
        </div>
        <p class="section-subtitle max-w-md mx-auto">
          Une sélection de projets réalisés avec passion et rigueur
        </p>
      </div>

      <!-- Filtres -->
      <div class="flex justify-center gap-3 mb-12 reveal">
        <button
          v-for="cat in categories"
          :key="cat.key"
          @click="filter = cat.key"
          :class="[
            'px-5 py-2 rounded-full font-sans text-sm transition-all duration-300',
            filter === cat.key
              ? 'bg-gradient-to-r from-rose to-roseDark text-white shadow-md'
              : 'border border-blush/50 text-muted hover:border-rose hover:text-rose',
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Grille de projets -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="project in filtered"
          :key="project.id"
          class="card group reveal"
        >
          <!-- Header card avec gradient -->
          <div
            :class="[
              'bg-gradient-to-br p-8 relative overflow-hidden',
              project.gradient,
            ]"
          >
            <!-- Cercle décoratif -->
            <div
              class="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/20"
            ></div>
            <div
              class="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/15"
            ></div>

            <!-- Emoji icône -->
            <div class="relative z-10">
              <div
                class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                {{ project.emoji }}
              </div>
              <div class="flex items-center justify-between">
                <span class="font-sans text-xs text-muted font-medium">{{
                  project.year
                }}</span>
                <span
                  :class="[
                    'text-xs font-sans px-2.5 py-1 rounded-full font-medium',
                    project.status === 'Terminé'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gold/20 text-terracotta',
                  ]"
                >
                  {{ project.status }}
                </span>
              </div>
            </div>
          </div>

          <!-- Contenu -->
          <div class="p-6 space-y-4">
            <h3
              class="font-serif text-xl text-textPrimary group-hover:text-rose transition-colors"
            >
              {{ project.title }}
            </h3>
            <p class="font-sans text-sm text-textMuted leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Features -->
            <ul class="space-y-1.5">
              <li
                v-for="feat in project.features"
                :key="feat"
                class="flex items-center gap-2 font-sans text-xs text-textMuted"
              >
                <span
                  :class="[
                    'w-1.5 h-1.5 rounded-full flex-shrink-0',
                    project.accentColor,
                  ]"
                ></span>
                {{ feat }}
              </li>
            </ul>

            <!-- Tags techno -->
            <div
              class="flex flex-wrap gap-1.5 pt-2 border-t border-nightBorder"
            >
              <span v-for="tag in project.tags" :key="tag" class="tag">{{
                tag
              }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
