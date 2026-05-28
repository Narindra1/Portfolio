<script setup>
import { onMounted } from "vue";
import NavBar from "./UI/Navbar/NavBar.vue";
import HeroSection from "./UI/Hero/HeroSection.vue";
import AproposSection from "./UI/Apropos/AproposSection.vue";
import ExperiencesSection from "./UI/Experiences/ExperiencesSection.vue";
import TechSection from "./UI/Technologies/TechSection.vue";
import ProjectsSection from "./UI/Projects/ProjectsSection.vue";
import ContactSection from "./UI/Contacts/ContactSection.vue";
import FooterSection from "./UI/Footer/FooterSection.vue";

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
</script>

<template>
  <div class="min-h-screen bg-night">
    <NavBar />
    <main>
      <HeroSection />
      <AproposSection />
      <ExperiencesSection />
      <TechSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
