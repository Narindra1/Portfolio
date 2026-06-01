<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const isScrolled = ref(false);
const isOpen = ref(false);
const activeSection = ref("#hero");

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#apropos" },
  { label: "Expériences", href: "#experiences" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;

  // Détection section active
  const sections = navLinks
    .map((l) => document.querySelector(l.href))
    .filter(Boolean);
  for (let i = sections.length - 1; i >= 0; i--) {
    if (window.scrollY >= sections[i].offsetTop - 120) {
      activeSection.value = navLinks[i].href;
      break;
    }
  }
};

const scrollTo = (href) => {
  isOpen.value = false;
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// Bloquer le scroll body quand le menu mobile est ouvert
watch(isOpen, (val) => {
  document.body.style.overflow = val ? "hidden" : "";
});

onMounted(() =>
  window.addEventListener("scroll", handleScroll, { passive: true }),
);
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'bg-[#0D0B14]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]'
        : 'bg-transparent',
    ]"
  >
    <nav class="mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
      <!-- ── Logo ── -->
      <a
        href="#hero"
        @click.prevent="scrollTo('#hero')"
        class="group relative flex items-center gap-0.5 select-none"
      >
        <div class="flex items-center justify-center">
          <span
            class="font-bold text-xl tracking-tight"
            style="
              background: linear-gradient(90deg, #00f5a0, #6366f1);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              font-family:
                Space Grotesk,
                sans-serif;
              letter-spacing: -0.03em;
            "
          >
            SAFIDINOMENJANAHARY<span
              style="font-weight: 300; font-style: italic"
            >
              Sahoby
            </span>
          </span>
        </div>

        <!-- micro dot décoratif -->
        <span
          class="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style="
            background: #00f5a0;
            margin-bottom: 0.75rem;
            margin-left: 0.125rem;
          "
        ></span>
      </a>

      <!-- ── Desktop Links ── -->
      <ul class="hidden md:flex items-center gap-1">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            :class="[
              'relative px-3.5 py-2 font-sans text-base font-medium tracking-wide rounded-md transition-all duration-200',
              activeSection === link.href
                ? 'text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/5',
            ]"
          >
            {{ link.label }}
            <!-- indicateur section active : ligne verte sous le lien -->
            <span
              v-if="activeSection === link.href"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
              style="
                background: linear-gradient(90deg, #00f5a0, #6366f1);
                width: 70%;
                box-shadow: 0 0 8px rgba(0, 245, 160, 0.6);
              "
            ></span>
          </a>
        </li>
      </ul>

      <!-- ── CTA Desktop ── -->
      <!-- <a
        href="#contact"
        @click.prevent="scrollTo('#contact')"
        class="hidden md:inline-flex items-center gap-2 cta-btn"
      >
        <span>Me contacter</span>
        <svg
          class="w-3.5 h-3.5 opacity-60"
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
      </a> -->

      <!-- ── Burger Mobile ── -->
      <button
        class="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-200"
        @click="isOpen = !isOpen"
        aria-label="Menu"
      >
        <span class="sr-only">Menu</span>
        <div class="w-4 flex flex-col gap-[5px]">
          <span
            :class="[
              'block h-px bg-white/80 transition-all duration-300 origin-center',
              isOpen ? 'rotate-45 translate-y-[6px]' : '',
            ]"
          ></span>
          <span
            :class="[
              'block h-px bg-white/80 transition-all duration-300',
              isOpen ? 'opacity-0 scale-x-0' : '',
            ]"
          ></span>
          <span
            :class="[
              'block h-px bg-white/80 transition-all duration-300 origin-center',
              isOpen ? '-rotate-45 -translate-y-[6px]' : '',
            ]"
          ></span>
        </div>
      </button>
    </nav>

    <!-- ── Mobile Menu ── -->
    <transition name="menu">
      <div
        v-if="isOpen"
        class="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b border-white/5"
        style="background: rgba(15, 15, 26, 0.95)"
      >
        <ul class="max-w-7xl mx-auto px-6 py-4 flex flex-col">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click.prevent="scrollTo(link.href)"
              :class="[
                'flex items-center gap-3 px-3 py-3.5 rounded-lg font-sans text-sm font-medium transition-all duration-200',
                activeSection === link.href
                  ? 'text-white bg-white/8'
                  : 'text-slate-400 hover:text-white hover:bg-white/5',
              ]"
            >
              <!-- dot actif mobile -->
              <span
                :class="[
                  'w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200',
                  activeSection === link.href ? 'bg-white/10' : 'bg-white/10',
                ]"
                :style="{
                  background:
                    activeSection === link.href
                      ? '#00f5a0'
                      : 'rgba(255,255,255,0.1)',
                }"
              ></span>
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="px-6 pb-5 pt-1 max-w-7xl mx-auto">
          <a
            href="#contact"
            @click.prevent="scrollTo('#contact')"
            class="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold cta-btn"
          >
            Me contacter
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Bouton CTA premium */
.cta-btn {
  font-family: var(--font-sans, sans-serif);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 0.45rem 1.1rem;
  border-radius: 0.5rem;
  color: #ffffff;
  background: linear-gradient(
    135deg,
    rgba(22, 22, 34, 0.9) 0%,
    rgba(15, 15, 26, 0.9) 100%
  );
  border: 1px solid rgba(0, 245, 160, 0.25);
  box-shadow:
    0 0 18px -4px rgba(0, 245, 160, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);
  transition: all 0.25s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.cta-btn:hover {
  background: linear-gradient(
    135deg,
    rgba(30, 30, 45, 0.95) 0%,
    rgba(22, 22, 35, 0.95) 100%
  );
  border-color: rgba(0, 245, 160, 0.5);
  box-shadow:
    0 0 25px rgba(0, 245, 160, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.cta-btn:active {
  transform: translateY(0);
}

/* Animation menu mobile */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
