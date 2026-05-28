<script setup>
import { ref } from "vue";
import { socials } from "./data.js";

const form = ref({ name: "", email: "", subject: "", message: "" });
const sending = ref(false);
const sent = ref(false);

const handleSubmit = async () => {
  sending.value = true;
  await new Promise((r) => setTimeout(r, 1500));
  sending.value = false;
  sent.value = true;
  form.value = { name: "", email: "", subject: "", message: "" };
  setTimeout(() => (sent.value = false), 4000);
};
</script>

<template>
  <section
    id="contact"
    class="py-24 bg-night relative overflow-hidden dot-grid"
  >
    <!-- Déco -->
    <div
      class="absolute top-0 right-0 w-72 h-72 rounded-full bg-rose/5 blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-lavender/5 blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto px-6">
      <!-- Titre -->
      <div class="text-center mb-16 reveal">
        <p class="font-sans text-xs text-rose tracking-[0.3em] uppercase mb-3">
          Travaillons ensemble
        </p>
        <h2 class="section-title">Me Contacter</h2>
        <div class="flex justify-center mt-4">
          <div class="divider-rose"></div>
        </div>
        <p class="section-subtitle mt-4 max-w-md mx-auto">
          Une idée de projet ? N'hésitez pas à me contacter, je serai ravie
          d'échanger !
        </p>
      </div>

      <div class="grid lg:grid-cols-5 gap-12 items-start">
        <!-- Infos contact -->
        <div class="lg:col-span-2 space-y-6 reveal">
          <div>
            <h3 class="font-serif text-2xl text-textPrimary mb-2">
              Discutons de votre projet
            </h3>
            <p class="font-sans text-textMuted text-sm leading-relaxed">
              Je suis disponible pour des missions freelance, des stages ou des
              opportunités d'emploi. Répondre à vos messages est une priorité.
            </p>
          </div>

          <!-- Coordonnées -->
          <div class="space-y-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              class="flex items-center gap-4 p-4 bg-nightCard rounded-2xl border border-nightBorder hover:border-rose/30 hover:shadow-lg hover:shadow-rose/5 transition-all duration-300 group"
            >
              <div
                class="w-10 h-10 rounded-xl bg-rose/10 flex items-center justify-center text-rose group-hover:scale-110 group-hover:bg-rose/20 transition-all"
              >
                <span v-html="social.icon"></span>
              </div>
              <div>
                <p
                  class="font-sans text-xs text-textMuted uppercase tracking-wider"
                >
                  {{ social.name }}
                </p>
                <p class="font-sans text-sm text-textPrimary font-medium">
                  {{ social.label }}
                </p>
              </div>
            </a>
          </div>

          <!-- Réseaux sociaux décoratifs -->
          <div class="pt-4 border-t border-nightBorder">
            <p
              class="font-sans text-xs text-textMuted uppercase tracking-wider mb-3"
            >
              Retrouvez-moi
            </p>
            <div class="flex gap-3">
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-nightCard border border-nightBorder flex items-center justify-center text-textMuted hover:bg-rose hover:text-white hover:border-rose transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 rounded-full bg-nightCard border border-nightBorder flex items-center justify-center text-textMuted hover:bg-textPrimary hover:text-night hover:border-textPrimary transition-all duration-300"
                aria-label="GitHub"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Formulaire -->
        <div class="lg:col-span-3 reveal">
          <div
            class="bg-nightCard rounded-3xl p-8 border border-nightBorder"
            style="box-shadow: 0 0 60px #f4a8c008"
          >
            <!-- Message succès -->
            <transition name="fade">
              <div
                v-if="sent"
                class="mb-6 p-4 bg-green-950/50 border border-green-500/30 rounded-xl flex items-center gap-3"
              >
                <span class="text-green-400 text-xl">✓</span>
                <p class="font-sans text-sm text-green-300">
                  Message envoyé avec succès ! Je vous répondrai très bientôt.
                </p>
              </div>
            </transition>

            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div class="space-y-1.5">
                  <label
                    class="font-sans text-xs text-textMuted uppercase tracking-wider"
                    >Nom complet</label
                  >
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    class="w-full px-4 py-3 bg-night rounded-xl border border-nightBorder font-sans text-sm text-textPrimary placeholder-textMuted/40 focus:outline-none focus:border-rose/60 focus:ring-2 focus:ring-rose/10 transition-all"
                  />
                </div>
                <div class="space-y-1.5">
                  <label
                    class="font-sans text-xs text-textMuted uppercase tracking-wider"
                    >Email</label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    class="w-full px-4 py-3 bg-night rounded-xl border border-nightBorder font-sans text-sm text-textPrimary placeholder-textMuted/40 focus:outline-none focus:border-rose/60 focus:ring-2 focus:ring-rose/10 transition-all"
                  />
                </div>
              </div>

              <div class="space-y-1.5">
                <label
                  class="font-sans text-xs text-textMuted uppercase tracking-wider"
                  >Sujet</label
                >
                <input
                  v-model="form.subject"
                  type="text"
                  required
                  placeholder="Sujet de votre message"
                  class="w-full px-4 py-3 bg-night rounded-xl border border-nightBorder font-sans text-sm text-textPrimary placeholder-textMuted/40 focus:outline-none focus:border-rose/60 focus:ring-2 focus:ring-rose/10 transition-all"
                />
              </div>

              <div class="space-y-1.5">
                <label
                  class="font-sans text-xs text-textMuted uppercase tracking-wider"
                  >Message</label
                >
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Décrivez votre projet ou votre message..."
                  class="w-full px-4 py-3 bg-night rounded-xl border border-nightBorder font-sans text-sm text-textPrimary placeholder-textMuted/40 focus:outline-none focus:border-rose/60 focus:ring-2 focus:ring-rose/10 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="sending"
                class="w-full btn-primary justify-center py-4 disabled:opacity-70"
              >
                <template v-if="sending">
                  <svg
                    class="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Envoi en cours...
                </template>
                <template v-else>
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Envoyer le message
                </template>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
