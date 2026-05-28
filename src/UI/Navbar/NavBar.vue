<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const isOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#apropos" },
  { label: "Expériences", href: "#experiences" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

const scrollTo = (href) => {
  isOpen.value = false;
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled
        ? 'glass shadow-lg shadow-black/30 border-b border-lavender/10'
        : 'bg-transparent',
    ]"
  >
    <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#hero"
        @click.prevent="scrollTo('#hero')"
        class="font-serif text-2xl text-textPrimary tracking-wide group"
      >
        S<span class="text-rose group-hover:text-roseDark transition-colors"
          >N</span
        >
        <span
          class="text-xs font-sans text-muted ml-1 tracking-widest uppercase"
          >portfolio</span
        >
      </a>

      <!-- Desktop Links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="font-sans text-sm text-textMuted hover:text-rose transition-colors duration-300 relative group"
          >
            {{ link.label }}
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose rounded-full group-hover:w-full transition-all duration-300"
            ></span>
          </a>
        </li>
      </ul>

      <!-- CTA -->
      <a
        href="#contact"
        @click.prevent="scrollTo('#contact')"
        class="hidden md:inline-flex btn-primary text-sm px-5 py-2"
      >
        Me contacter
      </a>

      <!-- Burger Mobile -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="isOpen = !isOpen"
        aria-label="Menu"
      >
        <span
          :class="[
            'block w-6 h-0.5 bg-textPrimary transition-all duration-300',
            isOpen ? 'rotate-45 translate-y-2' : '',
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 bg-textPrimary transition-all duration-300',
            isOpen ? 'opacity-0' : '',
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 bg-textPrimary transition-all duration-300',
            isOpen ? '-rotate-45 -translate-y-2' : '',
          ]"
        ></span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div
        v-if="isOpen"
        class="md:hidden glass border-t border-lavender/10 px-6 py-6"
      >
        <ul class="flex flex-col gap-5">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click.prevent="scrollTo(link.href)"
              class="font-sans text-textSoft hover:text-rose transition-colors text-base"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
