<script setup>
import { onMounted } from "vue";
import { timeline } from "./data.js";

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
  <section
    id="experiences"
    class="py-24 bg-night relative overflow-hidden dot-grid"
  >
    <!-- Déco -->
    <div
      class="absolute top-10 right-0 w-64 h-64 rounded-full bg-rose/5 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-10 left-0 w-48 h-48 rounded-full bg-lavender/5 blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-4xl mx-auto px-6">
      <!-- Titre -->
      <div class="text-center mb-16 reveal">
        <p class="font-sans text-xs text-rose tracking-[0.3em] uppercase mb-3">
          Parcours
        </p>
        <h2 class="section-title">Expériences & Formation</h2>
        <div class="flex justify-center mt-4">
          <div class="divider-rose"></div>
        </div>
        <p class="section-subtitle mt-4 max-w-md mx-auto">
          Ma chronologie professionnelle et académique
        </p>
      </div>

      <!-- Légende -->
      <div class="flex justify-center gap-6 mb-12 reveal">
        <div class="flex items-center gap-2">
          <div
            class="w-3 h-3 rounded-full bg-gradient-to-br from-rose to-roseDark"
          ></div>
          <span class="font-sans text-xs text-muted uppercase tracking-wider"
            >Professionnel</span
          >
        </div>
        <div class="flex items-center gap-2">
          <div
            class="w-3 h-3 rounded-full bg-gradient-to-br from-gold to-lavenderDark"
          ></div>
          <span class="font-sans text-xs text-muted uppercase tracking-wider"
            >Formation</span
          >
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Ligne verticale centrale -->
        <div
          class="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose/30 via-lavender/40 to-gold/30 -translate-x-1/2 hidden md:block"
        ></div>

        <!-- Ligne mobile -->
        <div
          class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-rose/30 via-lavender/40 to-gold/30 md:hidden"
        ></div>

        <div class="space-y-8">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            :class="[
              'reveal relative flex items-start gap-4',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
              'flex-row',
            ]"
          >
            <!-- Carte (desktop: moitié gauche ou droite) -->
            <div
              :class="[
                'w-full md:w-5/12 group',
                index % 2 === 0 ? 'md:text-right' : 'md:text-left',
              ]"
            >
              <div class="card p-5 group-hover:border-rose/40 ml-12 md:ml-0">
                <!-- Header -->
                <div
                  :class="[
                    'flex items-start gap-3 mb-3',
                    index % 2 === 0 ? 'md:flex-row-reverse' : '',
                  ]"
                >
                  <div
                    :class="[
                      'w-10 h-10 rounded-xl bg-gradient-to-br ' +
                        item.color +
                        ' flex items-center justify-center text-lg shadow-md flex-shrink-0',
                    ]"
                  >
                    {{ item.icon }}
                  </div>
                  <div :class="[index % 2 === 0 ? 'md:text-right' : '']">
                    <span
                      class="font-sans text-xs font-bold text-rose tracking-widest uppercase"
                      >{{ item.year }}</span
                    >
                    <h3
                      class="font-serif text-lg text-textPrimary leading-tight"
                    >
                      {{ item.title }}
                    </h3>
                    <p class="font-sans text-xs text-textMuted font-medium">
                      {{ item.subtitle }}
                    </p>
                  </div>
                </div>

                <!-- Description -->
                <p
                  class="font-sans text-sm text-textMuted leading-relaxed mb-3"
                >
                  {{ item.description }}
                </p>

                <!-- Tags -->
                <div
                  :class="[
                    'flex flex-wrap gap-1.5',
                    index % 2 === 0 ? 'md:justify-end' : '',
                  ]"
                >
                  <span
                    v-for="tag in item.tags"
                    :key="tag"
                    class="tag text-xs"
                    >{{ tag }}</span
                  >
                </div>
              </div>
            </div>

            <!-- Point central (visible desktop) -->
            <div class="hidden md:flex w-2/12 justify-center items-start pt-5">
              <div
                :class="[
                  'w-5 h-5 rounded-full bg-gradient-to-br border-2 border-white shadow-md z-10 ' +
                    item.color,
                ]"
              ></div>
            </div>

            <!-- Spacer opposé (desktop) -->
            <div class="hidden md:block w-5/12"></div>

            <!-- Point mobile -->
            <div
              :class="[
                'absolute left-4 top-5 w-4 h-4 rounded-full bg-gradient-to-br border-2 border-white shadow-md z-10 md:hidden ' +
                  item.color,
              ]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
