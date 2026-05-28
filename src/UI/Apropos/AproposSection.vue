<script setup>
import { onMounted } from "vue";
import { skills, languages, passions } from "./data.js";

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
</script>

<template>
  <section id="apropos" class="py-24 relative overflow-hidden bg-nightSurf">
    <!-- Déco fond -->
    <div
      class="absolute top-0 right-0 w-72 h-72 rounded-full bg-lavender/6 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-rose/6 blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-6">
      <!-- Titre section -->
      <div class="text-center mb-16 reveal">
        <p class="font-sans text-xs text-rose tracking-[0.3em] uppercase mb-3">
          Qui suis-je ?
        </p>
        <h2 class="section-title">À propos de moi</h2>
        <div class="flex justify-center mt-4">
          <div class="divider-rose"></div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Photo + Infos perso -->
        <div class="reveal space-y-6">
          <div class="relative inline-block">
            <!-- Cadre décoratif -->
            <div
              class="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-rose/20"
            ></div>
            <div
              class="relative w-full max-w-sm overflow-hidden rounded-3xl"
              style="box-shadow: 0 0 50px #f4a8c015"
            >
              <img
                src="/cv.png"
                alt="Sahoby Narindra"
                class="w-full object-cover object-top aspect-[4/5]"
                onerror="
                  this.style.display = 'none';
                  this.parentElement.style.minHeight = '300px';
                  this.parentElement.style.background =
                    'linear-gradient(135deg,#F4A8C020,#C4B5F020)';
                "
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 right-4">
                <div
                  class="glass rounded-xl px-4 py-3 flex items-center gap-3 border border-rose/15"
                >
                  <div
                    class="w-3 h-3 rounded-full bg-green-400 animate-pulse"
                  ></div>
                  <p class="font-sans text-sm text-textPrimary font-medium">
                    Disponible pour des opportunités
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Passions -->
          <div class="bg-nightCard rounded-2xl p-5 border border-nightBorder">
            <p
              class="font-sans text-sm font-semibold text-textPrimary mb-3 flex items-center gap-2"
            >
              <span class="text-rose">✦</span> Passions
            </p>
            <div class="flex gap-3 flex-wrap">
              <div
                v-for="p in passions"
                :key="p.label"
                class="flex items-center gap-2 px-3 py-2 glass rounded-full border border-lavender/15 text-sm font-sans text-textSoft"
              >
                <span>{{ p.icon }}</span>
                <span>{{ p.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenu texte -->
        <div class="space-y-8">
          <!-- Bio -->
          <div class="reveal">
            <h3 class="font-serif text-2xl text-textPrimary mb-4">
              Développeuse Web Passionnée
            </h3>
            <p class="font-sans text-textMuted leading-relaxed mb-4">
              Diplômée d'un
              <span class="text-textPrimary font-medium"
                >Master 2 en Mathématiques Informatique et Statistique
                Appliquée</span
              >
              à l'université MISA d'Antananarivo, je conçois des applications
              web modernes alliant performance et esthétique.
            </p>
            <p class="font-sans text-textMuted leading-relaxed">
              Rigoureuse, curieuse et créative, je m'investis pleinement dans
              chaque projet avec une attention particulière à l'expérience
              utilisateur, la qualité du code et la collaboration en équipe.
            </p>

            <!-- Infos contact rapides -->
            <div class="mt-6 space-y-2">
              <div class="flex items-center gap-3 text-sm font-sans">
                <span
                  class="w-7 h-7 rounded-full bg-rose/15 flex items-center justify-center text-rose"
                  >📍</span
                >
                <span class="text-textMuted"
                  >Antananarivo, CU Ankatsiz bloc 60</span
                >
              </div>
              <div class="flex items-center gap-3 text-sm font-sans">
                <span
                  class="w-7 h-7 rounded-full bg-rose/15 flex items-center justify-center text-rose"
                  >📧</span
                >
                <a
                  href="mailto:sahobynaminarihary2@gmail.com"
                  class="text-textMuted hover:text-rose transition-colors"
                >
                  sahobynaminarihary2@gmail.com
                </a>
              </div>
              <div class="flex items-center gap-3 text-sm font-sans">
                <span
                  class="w-7 h-7 rounded-full bg-rose/15 flex items-center justify-center text-rose"
                  >📱</span
                >
                <span class="text-textMuted">+261 34 608 2398</span>
              </div>
            </div>
          </div>

          <!-- Compétences -->
          <div class="reveal space-y-5">
            <h3
              class="font-serif text-xl text-textPrimary flex items-center gap-2"
            >
              <span class="text-gold">✦</span> Compétences
            </h3>
            <div
              v-for="(items, category) in skills"
              :key="category"
              class="space-y-2"
            >
              <p
                class="font-sans text-xs font-semibold text-textMuted uppercase tracking-widest"
              >
                {{ category }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in items" :key="skill" class="tag">{{
                  skill
                }}</span>
              </div>
            </div>
          </div>

          <!-- Langues -->
          <div class="reveal space-y-4">
            <h3
              class="font-serif text-xl text-textPrimary flex items-center gap-2"
            >
              <span class="text-gold">✦</span> Langues
            </h3>
            <div v-for="lang in languages" :key="lang.lang" class="space-y-1">
              <div class="flex justify-between items-center">
                <span class="font-sans text-sm text-textPrimary font-medium">{{
                  lang.lang
                }}</span>
                <span class="font-sans text-xs text-textMuted">{{
                  lang.label
                }}</span>
              </div>
              <div class="h-1.5 bg-nightBorder rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-rose to-gold transition-all duration-1000 delay-300"
                  :style="{ width: lang.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
