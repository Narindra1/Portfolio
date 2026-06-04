<template>
  <section
    id="contact"
    class="py-28 relative overflow-hidden"
    style="background: #0f0f1a"
  >
    <!-- Orbes déco -->
    <div class="orb orb-left"></div>
    <div class="orb orb-right"></div>

    <div class="mx-auto px-5 md:px-10 content-wrap">
      <!-- ── Titre ── -->
      <div
        ref="titleRef"
        class="mb-14 reveal title-center"
        :class="{ visible: titleVisible }"
      >
        <h2 class="main-title">
          <span class="gradient-text">Contact</span>
        </h2>
        <div class="title-bar"></div>
      </div>

      <!-- ── Contenu ── -->
      <div class="contact-layout">
        <!-- ── Colonne gauche : infos ── -->
        <div
          class="info-col reveal"
          :class="{ visible: titleVisible }"
          style="transition-delay: 100ms"
        >
          <h3 class="info-heading">Discutons de votre projet</h3>
          <p class="info-text">
            Je suis disponible pour des missions freelance, des stages ou des
            opportunités d'emploi. Répondre à vos messages est une priorité.
          </p>

          <!-- Coordonnées -->
          <div class="socials-list">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              class="social-card"
            >
              <div class="social-icon">
                <span v-html="social.icon"></span>
              </div>
              <div>
                <p class="social-name">{{ social.name }}</p>
                <p class="social-label">{{ social.label }}</p>
              </div>
            </a>
          </div>

          <!-- Réseaux sociaux -->
          <div class="networks">
            <p class="networks-label">Retrouvez-moi</p>
            <div class="networks-row">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                class="net-btn"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/Narindra1"
                target="_blank"
                rel="noopener"
                class="net-btn"
                aria-label="GitHub"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- ── Colonne droite : formulaire ── -->
        <div
          class="form-col reveal"
          :class="{ visible: titleVisible }"
          style="transition-delay: 200ms"
        >
          <div class="form-card">
            <!-- Succès -->
            <transition name="fade">
              <div v-if="sent" class="success-banner">
                <span class="success-icon">✓</span>
                <p>
                  Message envoyé avec succès ! Je vous répondrai très bientôt.
                </p>
              </div>
            </transition>

            <form @submit.prevent="handleSubmit" class="form-body">
              <div class="form-row">
                <div class="field">
                  <label class="field-label">Nom complet</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Votre nom"
                    class="field-input"
                  />
                </div>
                <div class="field">
                  <label class="field-label">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="votre@email.com"
                    class="field-input"
                  />
                </div>
              </div>

              <div class="field">
                <label class="field-label">Sujet</label>
                <input
                  v-model="form.subject"
                  type="text"
                  required
                  placeholder="Sujet de votre message"
                  class="field-input"
                />
              </div>

              <div class="field">
                <label class="field-label">Message</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Décrivez votre projet ou votre message..."
                  class="field-input field-textarea"
                ></textarea>
              </div>

              <button type="submit" :disabled="sending" class="submit-btn">
                <template v-if="sending">
                  <svg class="spin-icon" fill="none" viewBox="0 0 24 24">
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
                <template v-else> Envoyer le message </template>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { socials } from "./data.js";

const titleRef = ref(null);
const titleVisible = ref(false);

useIntersectionObserver(
  titleRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) titleVisible.value = true;
  },
  { threshold: 0.15 },
);

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
  font-family:
    Space Grotesk,
    sans-serif;
}
.title-center {
  text-align: center;
}
.title-center .title-bar {
  margin-left: auto;
  margin-right: auto;
}
.title-center .section-sub {
  margin-left: auto;
  margin-right: auto;
}

/* ── Layout ── */
.content-wrap {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
.contact-layout {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 3rem;
  align-items: start;
}

/* ── Colonne infos ── */
.info-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.info-heading {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f1f5f9;
  font-family:
    Space Grotesk,
    sans-serif;
}
.info-text {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.7;
  font-family:
    Space Grotesk,
    sans-serif;
}

/* ── Cartes sociales ── */
.socials-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.social-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(22, 22, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 14px;
  backdrop-filter: blur(8px);
  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
  text-decoration: none;
}
.social-card:hover {
  border-color: rgba(0, 200, 150, 0.25);
  box-shadow: 0 4px 24px rgba(0, 200, 150, 0.07);
}
.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(0, 200, 150, 0.1);
  border: 1px solid rgba(0, 200, 150, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00c896;
  flex-shrink: 0;
  transition: background 0.25s ease;
}
.social-card:hover .social-icon {
  background: rgba(0, 200, 150, 0.18);
}
.social-name {
  font-size: 0.7rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family:
    Space Grotesk,
    sans-serif;
}
.social-label {
  font-size: 0.85rem;
  color: #e2e8f0;
  font-weight: 500;
  font-family:
    Space Grotesk,
    sans-serif;
  margin-top: 0.1rem;
}

/* ── Réseaux ── */
.networks {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.networks-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family:
    Space Grotesk,
    sans-serif;
  margin-bottom: 0.75rem;
}
.networks-row {
  display: flex;
  gap: 0.6rem;
}
.net-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(22, 22, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}
.net-btn:hover {
  background: rgba(0, 200, 150, 0.12);
  border-color: rgba(0, 200, 150, 0.35);
  color: #00c896;
}

/* ── Formulaire ── */
.form-col {
  width: 100%;
}
.form-card {
  background: rgba(22, 22, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(8px);
}
.form-body {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.field-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family:
    Space Grotesk,
    sans-serif;
}
.field-input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(15, 15, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  font-size: 0.875rem;
  color: #e2e8f0;
  font-family:
    Space Grotesk,
    sans-serif;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}
.field-input::placeholder {
  color: #475569;
}
.field-input:focus {
  border-color: rgba(0, 200, 150, 0.4);
  box-shadow: 0 0 0 3px rgba(0, 200, 150, 0.08);
}
.field-textarea {
  resize: none;
}

/* ── Bouton ── */
.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.9rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family:
    Space Grotesk,
    sans-serif;
  color: #0f0f1a;
  background: linear-gradient(90deg, #00c896, #6366f1);
  border: none;
  cursor: pointer;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.submit-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.spin-icon {
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ── Succès ── */
.success-banner {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0.875rem 1rem;
  background: rgba(0, 200, 150, 0.08);
  border: 1px solid rgba(0, 200, 150, 0.25);
  border-radius: 10px;
  font-size: 0.85rem;
  color: #00c896;
  font-family:
    Space Grotesk,
    sans-serif;
}
.success-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

/* ── Transition ── */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
