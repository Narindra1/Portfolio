<template>
  <section
    id="apropos"
    class="py-28 relative overflow-hidden"
    style="
      background: linear-gradient(
        180deg,
        #0f0f1a 0%,
        #161622 50%,
        #0f0f1a 100%
      );
    "
  >
    <div class="orb orb-right"></div>
    <div class="orb orb-left"></div>

    <div class="mx-auto px-10">
      <!-- ── Titre ── -->
      <div
        ref="titleRef"
        class="mb-14 reveal"
        :class="{ visible: titleVisible }"
      >
        <h2 class="main-title">
          <span class="gradient-text">À propos</span>
        </h2>
        <div class="title-bar"></div>
      </div>

      <!-- ── 2 colonnes de texte ── -->
      <div
        ref="textRef"
        class="text-grid reveal"
        :class="{ visible: textVisible }"
      >
        <p class="bio-p">
          Diplômée d'un Master 2 en Mathématiques, Informatique et Statistique
          Appliquée (MISA) à l'Université d'Antananarivo, j'ai construit une
          solide base analytique qui guide chaque ligne de code que j'écris.
        </p>
        <p class="bio-p">
          Aujourd'hui développeuse web Full-Stack avec 1 an d'expérience, je
          conçois des applications modernes en maîtrisant aussi bien le frontend
          que le backend. Ce qui me distingue ? Allier rigueur mathématique,
          sens du détail et passion pour les interfaces élégantes et
          performantes.
        </p>
      </div>

      <!-- ── Actions : CV + Socials ── -->
      <h1 class="langs-label text-xl">▶ Langues</h1>
      <div ref="langsRef" class="langs-grid">
        <div
          v-for="lang in languages"
          :key="lang.lang"
          class="lang-item text-xl"
        >
          <div class="lang-info flex justify-between">
            <span class="lang-name">{{ lang.lang }}</span>
            <span class="lang-pct"> {{ lang.level }}% </span>
          </div>
          <div class="lang-track">
            <div
              class="lang-bar"
              :class="lang.lang === 'Anglais' ? 'bar-blue' : 'bar-green'"
              :style="{ width: langsVisible ? lang.level + '%' : '0%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- ── Séparateur + Langues ── -->

      <div
        ref="actionsRef"
        class="actions-row reveal"
        :class="{ visible: actionsVisible }"
      >
        <a href="/CV_Sahoby_Narindra.pdf" download class="cv-btn">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 3v13M5 16l7 7 7-7M3 21h18" />
          </svg>
          Télécharger mon CV
        </a>
        <div class="socials">
          <a
            href="https://github.com/Narindra1"
            target="_blank"
            class="social-icon"
            title="GitHub"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            class="social-icon"
            title="LinkedIn"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="mailto:sahobynomenjanahary2@gmail.com"
            class="social-icon"
            title="Email"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { languages } from "./data.js";

const titleRef = ref(null);
const textRef = ref(null);
const actionsRef = ref(null);
const langsRef = ref(null);

const titleVisible = ref(false);
const textVisible = ref(false);
const actionsVisible = ref(false);
const langsVisible = ref(false);

useIntersectionObserver(
  titleRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) titleVisible.value = true;
  },
  { threshold: 0.2 },
);
useIntersectionObserver(
  textRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) textVisible.value = true;
  },
  { threshold: 0.15 },
);
useIntersectionObserver(
  actionsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) actionsVisible.value = true;
  },
  { threshold: 0.15 },
);
useIntersectionObserver(
  langsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) langsVisible.value = true;
  },
  { threshold: 0.1 },
);
</script>

<style scoped>
/* ── Orbes ── */
.orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(90px);
}
.orb-right {
  top: -60px;
  right: -60px;
  width: 440px;
  height: 440px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
}
.orb-left {
  bottom: -60px;
  left: -60px;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(0, 200, 150, 0.09), transparent 70%);
}

/* ── Reveal ── */
.reveal {
  opacity: 0;
  transform: translateY(26px);
  transition:
    opacity 0.65s ease,
    transform 0.65s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Titre ── */
.main-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #f1f5f9;
  line-height: 1.15;
  font-family:
    Space Grotesk,
    sans-serif;
  margin-bottom: 1rem;
}
.gradient-text {
  color: #e2e8f0;
}
.title-bar {
  width: 48px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #00c896, #6366f1);
}

/* ── Texte 2 colonnes ── */
.text-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 3.5rem;
  margin-bottom: 2.5rem;
}
.bio-p {
  font-size: 1rem;
  line-height: 1.9;
  color: #94a3b8;
  margin: 0;
}

/* ── Actions ── */
.actions-row {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1.25rem;
  flex-wrap: wrap;
}
.cv-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #00c896, #00f5a0);
  color: #0f0f1a;
  font-size: 0.88rem;
  font-weight: 700;
  font-family:
    Space Grotesk,
    sans-serif;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(0, 200, 150, 0.28);
}
.cv-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 200, 150, 0.45);
}
.socials {
  display: flex;
  gap: 0.55rem;
}
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1.5px solid rgba(0, 200, 150, 0.3);
  color: #475569;
  background: rgba(0, 200, 150, 0.04);
  transition: all 0.22s ease;
  text-decoration: none;
}
.social-icon:hover {
  color: #00c896;
  border-color: #00c896;
  background: rgba(0, 200, 150, 0.1);
  transform: scale(1.1);
  box-shadow: 0 0 14px rgba(0, 200, 150, 0.2);
}

/* ── Langues ── */
.langs-section {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.section-sep {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  margin: 0;
}
.langs-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #00c896;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.langs-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.85rem 2rem;
  margin-bottom: 3rem;
}
.lang-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.lang-info {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}
.lang-name {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f1f5f9;
}
.lang-sublabel {
  font-size: 0.68rem;
  color: #475569;
  flex: 1;
}
.lang-pct {
  font-size: 0.72rem;
  font-weight: 700;
  background: linear-gradient(90deg, #00c896, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.lang-track {
  height: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}
.lang-bar {
  height: 100%;
  border-radius: 999px;
  transition: width 1.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.bar-green {
  background: linear-gradient(90deg, #00c896, #6366f1);
}
.bar-blue {
  background: linear-gradient(90deg, #00c896, #6366f1);
}

/* ── Responsive ── */
@media (max-width: 640px) {
  .text-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  .langs-grid {
    grid-template-columns: 1fr;
  }
  .actions-row {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
