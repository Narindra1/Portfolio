<script setup>
import { onMounted, ref } from "vue";

const text = ref("");
const fullText = "Développeur Fullstack ";
const index = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (index.value < fullText.length) {
      text.value += fullText[index.value];
      index.value++;
    } else {
      clearInterval(interval);
    }
  }, 60);
});

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center px-5 pt-24 pb-16 md:px-6 md:pt-32 md:pb-24 overflow-hidden dot-grid"
    style="
      background: linear-gradient(
        135deg,
        #0f0f1a 0%,
        #161622 50%,
        #0f0f1a 100%
      );
    "
  >
    <!-- Orbes décoratives -->
    <div
      class="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl pointer-events-none"
      style="
        background: radial-gradient(
          circle,
          rgba(0, 245, 160, 0.08),
          transparent 70%
        );
      "
    ></div>
    <div
      class="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
      style="
        background: radial-gradient(
          circle,
          rgba(99, 102, 241, 0.06),
          transparent 70%
        );
      "
    ></div>

    <div class="max-w-6xl mx-auto relative z-10 w-full px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <!-- ── Colonne Texte (gauche) ── -->
        <div class="space-y-6">
          <!-- Titre principal -->
          <div class="reveal flex flex-col gap-1">
            <span
              style="
                font-family:
                  Space Grotesk,
                  sans-serif;
                font-size: clamp(0.95rem, 1.5vw + 0.4rem, 1.25rem);
                font-weight: 500;
                color: var(--muted);
                letter-spacing: 0.08em;
                text-transform: uppercase;
              "
              >Salut, je suis</span
            >
            <h1
              class="section-title"
              style="color: var(--text); margin-bottom: 0"
            >
              <span
                style="
                  background: linear-gradient(90deg, #00f5a0, #6366f1);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                "
                >Sahoby Narindra</span
              >
            </h1>
          </div>

          <!-- Typing animation -->
          <p
            class="text-2xl md:text-3xl font-bold reveal"
            style="
              color: var(--muted);
              font-family:
                Space Grotesk,
                sans-serif;
            "
          >
            {{ text }}<span class="animate-pulse">|</span>
          </p>

          <!-- Sous-titre -->
          <p class="section-subtitle reveal">
            Je développe des solutions web complètes, du design de l'interface à
            la logique métier, pour créer des produits fiables, performants et
            évolutifs.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 reveal">
            <button @click="scrollTo('#projets')" class="btn-primary">
              Voir mes projets
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9H15M15 9L9 3M15 9L9 15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button @click="scrollTo('#contact')" class="btn-outline">
              Me contacter
            </button>
          </div>
        </div>

        <!-- ── Colonne Photo (droite) ── -->
        <div class="flex justify-center lg:justify-end reveal">
          <div class="photo-scene relative">
            <!-- Glow ambiant derrière -->
            <div class="photo-glow-bg"></div>

            <!-- Ring rotatif (layer 1 — lent) -->
            <div class="photo-ring ring-slow"></div>
            <!-- Ring rotatif (layer 2 — rapide, sens inverse) -->
            <div class="photo-ring ring-fast"></div>

            <!-- Cadre photo blob -->
            <div class="photo-blob">
              <!-- Placeholder / photo -->
              <div
                class="w-full h-full flex flex-col items-center justify-center gap-3"
                style="
                  background: linear-gradient(
                    160deg,
                    #161622 0%,
                    #1a1a2e 60%,
                    #0f0f1a 100%
                  );
                "
              >
                <img
                  src="/b.png"
                  alt="Sahoby Narindra"
                  class="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <!-- <div class="mt-12 reveal flex justify-center">
        <div class="animate-bounce" style="color: var(--muted)">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M19 12L12 19L5 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
/* ── Photo Scene ── */
.photo-scene {
  width: 300px;
  height: 360px;
}

@media (max-width: 640px) {
  .photo-scene {
    width: 210px;
    height: 250px;
  }
  .badge-float {
    display: none;
  }
}

/* Glow diffus derrière */
.photo-glow-bg {
  position: absolute;
  inset: -40px;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 245, 160, 0.12) 0%,
    rgba(99, 102, 241, 0.08) 50%,
    transparent 70%
  );
  filter: blur(30px);
  border-radius: 50%;
  z-index: 0;
  animation: glow-pulse 4s ease-in-out infinite;
}

/* Anneaux tournants */
.photo-ring {
  position: absolute;
  inset: -8px;
  border-radius: 62% 38% 55% 45% / 56% 48% 52% 44%;
  overflow: hidden;
  z-index: 1;
}

.photo-ring::after {
  content: "";
  position: absolute;
  inset: -120%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    #00f5a0 18%,
    #6366f1 36%,
    transparent 50%,
    #00f5a0 68%,
    #6366f1 85%,
    transparent 100%
  );
  z-index: 0;
}

.photo-ring::before {
  content: "";
  position: absolute;
  inset: 3px;
  background: #0f0f1a;
  border-radius: inherit;
  z-index: 1;
}

.ring-slow::after {
  animation: spin 5s linear infinite;
}
.ring-fast::after {
  animation: spin 3s linear infinite reverse;
  opacity: 0.5;
}

/* Blob photo principal */
.photo-blob {
  position: absolute;
  inset: 0;
  border-radius: 62% 38% 55% 45% / 56% 48% 52% 44%;
  overflow: hidden;
  z-index: 2;
  animation: blob-morph 8s ease-in-out infinite;
}

/* Badges flottants */
.badge-float {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 14px;
  background: rgba(15, 15, 26, 0.92);
  backdrop-filter: blur(16px);
  z-index: 10;
}

.badge-left {
  bottom: -16px;
  left: -24px;
  border: 1px solid rgba(0, 245, 160, 0.25);
  box-shadow: 0 0 24px rgba(0, 245, 160, 0.1);
}

.badge-right {
  top: -16px;
  right: -24px;
  border: 1px solid rgba(99, 102, 241, 0.25);
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.1);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00f5a0;
  box-shadow: 0 0 8px #00f5a0;
  animation: dot-pulse 2s ease-in-out infinite;
}

/* Keyframes */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes blob-morph {
  0%,
  100% {
    border-radius: 62% 38% 55% 45% / 56% 48% 52% 44%;
  }
  25% {
    border-radius: 50% 50% 38% 62% / 44% 56% 44% 56%;
  }
  50% {
    border-radius: 38% 62% 62% 38% / 52% 44% 56% 48%;
  }
  75% {
    border-radius: 55% 45% 45% 55% / 60% 40% 60% 40%;
  }
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes dot-pulse {
  0%,
  100% {
    box-shadow: 0 0 6px #00f5a0;
  }
  50% {
    box-shadow:
      0 0 16px #00f5a0,
      0 0 30px rgba(0, 245, 160, 0.4);
  }
}
</style>
