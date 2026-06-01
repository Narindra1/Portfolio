<template>
  <section
    id="experiences"
    class="py-28 relative overflow-hidden"
    style="background: #161622"
  >
    <div class="orb orb-right"></div>
    <div class="orb orb-left"></div>

    <div class="mx-auto px-10">
      <!-- ── Titre ── -->
      <div
        ref="titleRef"
        class="mb-10 reveal"
        :class="{ visible: titleVisible }"
      >
        <h2 class="main-title">
          <span class="gradient-text">Expériences & Formation</span>
        </h2>
        <div class="title-bar"></div>
      </div>

      <!-- ── Filtres ── -->
      <div
        ref="filterRef"
        class="filters reveal"
        :class="{ visible: filterVisible }"
      >
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'all' }"
          @click="activeFilter = 'all'"
        >
          Tout
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'work' }"
          @click="activeFilter = 'work'"
        >
          <span class="filter-dot dot-work"></span> Professionnel
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'education' }"
          @click="activeFilter = 'education'"
        >
          <span class="filter-dot dot-edu"></span> Formation
        </button>
      </div>

      <!-- ── Timeline ── -->
      <div class="timeline">
        <div class="timeline-line"></div>

        <template v-for="(item, index) in filteredTimeline" :key="index">
          <div
            class="timeline-item reveal"
            :class="{ visible: true, 'item-right': index % 2 !== 0 }"
          >
            <!-- Carte -->
            <div class="tl-card">
              <div class="tl-header">
                <div class="tl-icon">
                  {{ item.icon }}
                </div>
                <div>
                  <span class="tl-year">{{ item.year }}</span>
                  <h3 class="tl-title">{{ item.title }}</h3>
                  <p class="tl-subtitle">{{ item.subtitle }}</p>
                </div>
              </div>
              <p class="tl-desc">{{ item.description }}</p>
              <div class="tl-tags">
                <span v-for="tag in item.tags" :key="tag" class="tl-tag">{{
                  tag
                }}</span>
              </div>
            </div>

            <!-- Point -->
            <div
              class="tl-dot"
              :class="item.type === 'work' ? 'dot-blue' : 'dot-green'"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { timeline } from "./data.js";

const titleRef = ref(null);
const filterRef = ref(null);
const titleVisible = ref(false);
const filterVisible = ref(false);
const activeFilter = ref("all");

useIntersectionObserver(
  titleRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) titleVisible.value = true;
  },
  { threshold: 0.2 },
);
useIntersectionObserver(
  filterRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) filterVisible.value = true;
  },
  { threshold: 0.2 },
);

const filteredTimeline = computed(() =>
  activeFilter.value === "all"
    ? timeline
    : timeline.filter((i) => i.type === activeFilter.value),
);

// function iconBg(type) {
//   return type === "work"
//     ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
//     : "linear-gradient(135deg, #00c896, #00f5a0)";
// }
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
  color: #f1f5f994;
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

/* ── Filtres ── */
.filters {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}
.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  font-family:
    Space Grotesk,
    sans-serif;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  color: #64748b;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter-btn:hover {
  border-color: rgba(0, 200, 150, 0.3);
  color: #94a3b8;
}
.filter-btn.active {
  border-color: #00c896;
  color: #00c896;
  background: rgba(0, 200, 150, 0.07);
}
.filter-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}
.dot-work {
  background: #3b82f6;
}
.dot-edu {
  background: #00c896;
}

/* ── Timeline ── */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #00c896 0%, #6366f1 100%);
  opacity: 0.6;
}

/* ── Item ── */
.timeline-item {
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 2.5rem);
}
.timeline-item.item-right {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: calc(50% + 2.5rem);
}

/* ── Dot ── */
.tl-dot {
  position: absolute;
  left: 50%;
  top: 1.4rem;
  transform: translateX(-50%);
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 2px solid #161622;
  box-shadow: 0 0 8px rgba(0, 200, 150, 0.4);
  z-index: 2;
}
.dot-green {
  background: #00c896;
  box-shadow: 0 0 8px rgba(0, 200, 150, 0.45);
}
.dot-blue {
  background: #3b82f6;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.45);
}

/* ── Carte ── */
.tl-card {
  background: rgba(15, 15, 26, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
  width: 100%;
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
  backdrop-filter: blur(8px);
}
.tl-card:hover {
  border-color: rgba(0, 200, 150, 0.22);
  box-shadow: 0 4px 24px rgba(0, 200, 150, 0.07);
}

.tl-header {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  margin-bottom: 0.7rem;
}
.tl-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
  border: 1.5px solid rgba(0, 200, 150, 0.45);
  box-shadow: 0 0 8px rgba(0, 200, 150, 0.1);
}
.tl-year {
  display: block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #818cf8;
  margin-bottom: 0.1rem;
}
.tl-title {
  font-size: 0.93rem;
  font-weight: 700;
  color: #f1f5f9;
  font-family:
    Space Grotesk,
    sans-serif;
  line-height: 1.3;
}
.tl-subtitle {
  font-size: 0.7rem;
  color: #475569;
  margin-top: 0.1rem;
}
.tl-desc {
  font-size: 0.84rem;
  line-height: 1.75;
  color: #94a3b8;
  margin-bottom: 0.8rem;
}
.tl-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.tl-tag {
  font-size: 0.67rem;
  font-weight: 600;
  padding: 0.18rem 0.6rem;
  border-radius: 999px;
  background: rgba(0, 200, 150, 0.07);
  border: 1px solid rgba(0, 200, 150, 0.16);
  color: #00c896;
  font-family:
    Space Grotesk,
    sans-serif;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .timeline-line {
    left: 18px;
    transform: none;
  }
  .timeline-item,
  .timeline-item.item-right {
    justify-content: flex-start;
    padding-left: 3rem;
    padding-right: 0;
  }
  .tl-dot {
    left: 11px;
    transform: none;
  }
}
</style>
