<template>
  <section
    id="projets"
    class="py-28 relative overflow-hidden"
    style="background: #161622"
  >
    <!-- Orbes déco -->
    <div class="orb orb-left"></div>
    <div class="orb orb-right"></div>

    <div class="mx-auto px-10">
      <!-- ── Titre ── -->
      <div
        ref="titleRef"
        class="mb-14 reveal"
        :class="{ visible: titleVisible }"
      >
        <h2 class="main-title">
          <span class="gradient-text">Projets</span>
        </h2>
        <div class="title-bar"></div>
      </div>

      <!-- ── Grille de projets ── -->
      <div class="projects-grid">
        <article
          v-for="(project, idx) in projects"
          :key="project.id"
          class="project-card reveal"
          :class="{ visible: titleVisible }"
          :style="{ transitionDelay: idx * 100 + 'ms' }"
        >
          <!-- Emoji / icône -->

          <!-- Contenu -->
          <div class="project-body">
            <div class="project-header">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="project-links">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                  class="link-btn"
                  title="Voir sur GitHub"
                >
                  <!-- GitHub icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 6.803c1.02.005 2.045.138 3.005.404 2.29-1.552 3.295-1.23 3.295-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener"
                  class="link-btn link-btn--demo"
                  title="Voir le site"
                >
                  <!-- External link icon -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <p class="project-desc">{{ project.description }}</p>

            <!-- Features -->
            <ul class="features-list">
              <li
                v-for="feat in project.features"
                :key="feat"
                class="feature-item"
              >
                <span class="feature-dot"></span>
                {{ feat }}
              </li>
            </ul>

            <!-- Tags -->
            <div class="tags-row">
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

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { projects } from "./data.js";

const titleRef = ref(null);
const titleVisible = ref(false);

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
.orb-left {
  top: -80px;
  left: -80px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 200, 150, 0.07), transparent 70%);
}
.orb-right {
  bottom: -80px;
  right: -80px;
  width: 420px;
  height: 420px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.08),
    transparent 70%
  );
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

/* ── Grille ── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: stretch;
}

/* ── Carte projet ── */
.project-card {
  background: rgba(22, 22, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 350ms ease;
}

/* Quand la souris survole la grille, on estompe toutes les cartes... */
.projects-grid:hover .project-card {
  opacity: 0.35;
  filter: blur(1px);
  transform: scale(0.98);
}

/* ...sauf celle directement survolée */
.projects-grid:hover .project-card:hover {
  opacity: 1;
  filter: none;
  transform: translateY(-6px) scale(1.02);
  border-color: #00c896;
  box-shadow: 0 8px 30px rgba(0, 200, 150, 0.15);
}

/* ── Icône ── */
.project-icon {
  font-size: 2rem;
  line-height: 1;
}

/* ── Body ── */
.project-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.project-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
}
.project-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #f1f5f9;
  font-family:
    Space Grotesk,
    sans-serif;
}
.project-year {
  font-size: 0.72rem;
  color: #475569;
  font-family:
    Space Grotesk,
    sans-serif;
  flex-shrink: 0;
}

/* ── Liens ── */
.project-links {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;
}
.link-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}
.link-btn:hover {
  background: rgba(0, 200, 150, 0.12);
  border-color: rgba(0, 200, 150, 0.35);
  color: #00c896;
}
.link-btn--demo:hover {
  background: rgba(99, 102, 241, 0.12);
  border-color: rgba(99, 102, 241, 0.35);
  color: #818cf8;
}
.project-desc {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.65;
  font-family:
    Space Grotesk,
    sans-serif;
}

/* ── Features ── */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0;
  margin: 0;
  list-style: none;
}
.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #64748b;
  font-family:
    Space Grotesk,
    sans-serif;
}
.feature-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #00c896;
  flex-shrink: 0;
}

/* ── Tags ── */
.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.tag {
  font-size: 0.7rem;
  font-family:
    Space Grotesk,
    sans-serif;
  font-weight: 600;
  color: #00c896;
  background: rgba(0, 200, 150, 0.08);
  border: 1px solid rgba(0, 200, 150, 0.2);
  border-radius: 999px;
  padding: 0.2rem 0.65rem;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
