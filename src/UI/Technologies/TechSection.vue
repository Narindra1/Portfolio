<template>
  <section
    id="technologies"
    class="py-28 relative overflow-hidden"
    style="background: #0f0f1a"
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
          <span class="gradient-text">Technologies</span>
        </h2>
        <div class="title-bar"></div>
        <h2 class="section-sub">
          Les outils et langages que je maîtrise pour construire des
          applications modernes
        </h2>
      </div>

      <!-- ── Grille catégories ── -->
      <div class="tech-grid">
        <div
          v-for="(cat, idx) in categories"
          :key="cat.key"
          class="cat-card reveal"
          :class="{ visible: titleVisible, active: openCategory === cat.key }"
          :style="{ transitionDelay: idx * 80 + 'ms' }"
          @click="toggle(cat.key)"
        >
          <!-- Header -->
          <div class="cat-header">
            <h3 class="cat-label">{{ cat.label }}</h3>
            <span
              class="cat-arrow"
              :class="{ rotated: openCategory === cat.key }"
              >▼</span
            >
          </div>

          <!-- Logos (ouvre/ferme au clic) -->
          <div
            class="techs-wrapper"
            :class="{ open: openCategory === cat.key }"
          >
            <div class="techs-inner">
              <div
                v-for="(tech, tIdx) in cat.techs"
                :key="tech.name"
                class="tech-item"
                :class="{ 'item-visible': openCategory === cat.key }"
                :style="{
                  transitionDelay:
                    openCategory === cat.key ? tIdx * 100 + 'ms' : '0ms',
                }"
              >
                <img
                  :src="tech.icon"
                  :alt="tech.name"
                  class="tech-logo"
                  :style="tech.filter ? { filter: tech.filter } : {}"
                />
                <span class="tech-name">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { techCategories as categories } from "./data.js";

const titleRef = ref(null);
const titleVisible = ref(false);
const openCategory = ref(null);

const toggle = (key) => {
  openCategory.value = openCategory.value === key ? null : key;
};

useIntersectionObserver(
  titleRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) titleVisible.value = true;
  },
  { threshold: 0.15 },
);
</script>

<style scoped>
/* ── Orbes ── */
.orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
}
.orb-right {
  top: -80px;
  right: -80px;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.08),
    transparent 70%
  );
}
.orb-left {
  bottom: -80px;
  left: -80px;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(0, 200, 150, 0.07), transparent 70%);
}

/* ── Reveal ── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── Titre ── */
.main-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  font-family:
    Space Grotesk,
    sans-serif;
  line-height: 1.15;
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
  margin-bottom: 1rem;
}
.section-sub {
  font-size: 0.9rem;
  color: #64748b;
  max-width: 460px;
  line-height: 1.7;
}

/* ── Grille 4 colonnes ── */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  align-items: start;
}

/* ── Carte ── */
.cat-card {
  background: rgba(22, 22, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 1.25rem;
  cursor: pointer;
  user-select: none;
  backdrop-filter: blur(8px);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}
.cat-card:hover {
  border-color: rgba(0, 200, 150, 0.22);
  box-shadow: 0 4px 24px rgba(0, 200, 150, 0.07);
}
.cat-card.active {
  border-color: rgba(0, 200, 150, 0.35);
  box-shadow: 0 6px 32px rgba(0, 200, 150, 0.1);
}

/* ── Header carte ── */
.cat-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}
.cat-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  border: 1.5px solid;
}
.cat-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #00c896;
  font-family:
    Space Grotesk,
    sans-serif;
  flex: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.cat-arrow {
  font-size: 0.6rem;
  color: #00c896;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}
.cat-arrow.rotated {
  transform: rotate(180deg);
}

/* ── Collapse/expand ── */
.techs-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition:
    grid-template-rows 0.4s ease,
    margin-top 0.4s ease;
  margin-top: 0;
}
.techs-wrapper.open {
  grid-template-rows: 1fr;
  margin-top: 1rem;
}
.techs-inner {
  overflow: hidden;
}

/* ── Item tech ── */
.tech-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}
.tech-item:last-child {
  border-bottom: none;
}
.tech-item.item-visible {
  opacity: 1;
  transform: translateY(0);
}
.tech-logo {
  width: 26px;
  height: 26px;
  object-fit: contain;
  flex-shrink: 0;
}
.tech-name {
  font-size: 0.95rem;
  color: #cbd5e1;
  font-family:
    Space Grotesk,
    sans-serif;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
