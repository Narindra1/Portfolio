<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Typed text effect
  const text = "Développeuse Web";
  let i = 0;
  const el = document.getElementById("typed-text");
  if (!el) return;
  el.textContent = "";
  const type = () => {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 80);
    }
  };
  setTimeout(type, 800);
});

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden bg-night dot-grid"
  >
    <!-- Orbes lumineux -->
    <div
      class="absolute top-[-80px] right-[-100px] w-[500px] h-[500px] rounded-full bg-rose/8 blur-[120px] pointer-events-none"
    ></div>
    <div
      class="absolute bottom-[-60px] left-[-80px] w-[400px] h-[400px] rounded-full bg-lavender/8 blur-[100px] pointer-events-none"
    ></div>
    <div
      class="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[80px] pointer-events-none"
    ></div>

    <!-- Lignes fines décoratives -->
    <div
      class="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-rose/30 to-transparent hidden lg:block"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block"
    ></div>

    <div
      class="max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full"
    >
      <!-- Contenu texte -->
      <div class="animate-fade-up space-y-6">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-rose/20 shadow-sm glow-rose"
        >
          <span class="w-2 h-2 rounded-full bg-rose animate-pulse"></span>
          <span
            class="text-xs font-sans text-textMuted tracking-widest uppercase"
            >Disponible pour missions</span
          >
        </div>

        <!-- Nom -->
        <div>
          <p
            class="font-sans text-textMuted text-sm tracking-[0.3em] uppercase mb-2"
          >
            Bonjour, je suis
          </p>
          <h1
            class="font-serif text-5xl md:text-6xl lg:text-7xl text-textPrimary leading-[1.1] mb-3"
          >
            Sahoby<br />
            <span
              class="italic text-rose"
              style="text-shadow: 0 0 40px #f4a8c050"
              >Narindra</span
            >
          </h1>
          <!-- Ligne décorative -->
          <div class="flex items-center gap-3 mb-4">
            <div class="divider-rose"></div>
            <div
              class="w-2 h-2 rounded-full bg-gold"
              style="box-shadow: 0 0 8px #e0c070"
            ></div>
          </div>
        </div>

        <!-- Titre animé -->
        <div class="flex items-center gap-2">
          <span
            class="font-sans text-xl md:text-2xl text-textPrimary font-light"
          >
            <span id="typed-text" class="text-rose font-medium"></span>
            <span class="animate-pulse text-gold">|</span>
          </span>
        </div>

        <!-- Phrase d'accroche -->
        <p
          class="font-sans text-textMuted leading-relaxed text-base md:text-lg max-w-md"
        >
          Je conçois et développe des applications web
          <span class="text-textPrimary font-medium"
            >modernes et performantes</span
          >, avec une attention particulière à l'expérience utilisateur et au
          design.
        </p>

        <!-- CTA Boutons -->
        <div class="flex flex-wrap gap-4 pt-2">
          <button @click="scrollTo('#projets')" class="btn-primary group">
            <span>Voir mes projets</span>
            <svg
              class="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <button @click="scrollTo('#contact')" class="btn-outline">
            Me contacter
          </button>
        </div>

        <!-- Stats rapides -->
        <div class="flex gap-8 pt-4 border-t border-lavender/15">
          <div>
            <p class="font-serif text-2xl text-textPrimary">3+</p>
            <p
              class="font-sans text-xs text-textMuted uppercase tracking-wider"
            >
              Projets réalisés
            </p>
          </div>
          <div class="w-px bg-lavender/20"></div>
          <div>
            <p class="font-serif text-2xl text-textPrimary">2+</p>
            <p
              class="font-sans text-xs text-textMuted uppercase tracking-wider"
            >
              Ans d'études
            </p>
          </div>
          <div class="w-px bg-lavender/20"></div>
          <div>
            <p class="font-serif text-2xl text-textPrimary">5+</p>
            <p
              class="font-sans text-xs text-textMuted uppercase tracking-wider"
            >
              Technologies
            </p>
          </div>
        </div>
      </div>

      <!-- Photo / Illustration -->
      <div class="flex justify-center lg:justify-end animate-fade-in">
        <div class="relative">
          <!-- Blob décoratif derrière la photo -->
          <div
            class="absolute inset-0 blob bg-gradient-to-br from-rose/20 to-lavender/15 scale-110 animate-float"
          ></div>

          <!-- Cadre photo -->
          <div
            class="relative z-10 w-64 h-64 md:w-80 md:h-80 blob overflow-hidden border-2 border-rose/20 shadow-2xl"
            style="
              box-shadow:
                0 0 60px #f4a8c020,
                0 0 120px #c4b5f010;
            "
          >
            <img
              src="/cv.png"
              alt="Sahoby Narindra"
              class="w-full h-full object-cover object-top"
              onerror="
                this.style.display = 'none';
                this.parentElement.style.background =
                  'linear-gradient(135deg,#F4A8C030,#C4B5F030)';
              "
            />
            <div
              class="absolute inset-0 bg-gradient-to-br from-rose/10 to-lavender/10"
            ></div>
          </div>

          <!-- Badge flottant -->
          <div
            class="absolute -bottom-4 -left-6 glass rounded-xl shadow-lg px-4 py-2 border border-rose/20 z-20 glow-rose"
          >
            <div class="flex items-center gap-2">
              <div
                class="w-8 h-8 rounded-full bg-gradient-to-br from-rose to-lavender flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-xs font-sans font-semibold text-textPrimary">
                  Full-Stack
                </p>
                <p class="text-xs font-sans text-textMuted">Vue.js & PHP</p>
              </div>
            </div>
          </div>

          <!-- Badge tech flottant -->
          <div
            class="absolute -top-4 -right-4 glass rounded-xl shadow-lg px-3 py-2 border border-lavender/20 z-20 glow-lav"
          >
            <div class="flex items-center gap-1.5">
              <span class="text-sm">⚡</span>
              <p class="text-xs font-sans font-medium text-textPrimary">
                Tailwind + VueJs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
    >
      <span class="font-sans text-xs text-muted tracking-widest uppercase"
        >Défiler</span
      >
      <div class="w-px h-10 bg-gradient-to-b from-rose/60 to-transparent"></div>
    </div>
  </section>
</template>
