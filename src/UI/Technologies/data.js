const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

export const techCategories = [
  {
    key: "frontend",
    label: "Frontend",
    icon: "🎨",
    bg: "rgba(0,200,150,0.1)",
    glowColor: "#00c896",
    techs: [
      { name: "Vue.js", icon: BASE + "vuejs/vuejs-original.svg" },
      { name: "Nuxt", icon: BASE + "nuxtjs/nuxtjs-original.svg" },
      {
        name: "Tailwind CSS",
        icon: BASE + "tailwindcss/tailwindcss-original.svg",
      },
      { name: "Figma", icon: BASE + "figma/figma-original.svg" },
      { name: "TypeScript", icon: BASE + "typescript/typescript-original.svg" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    icon: "⚙️",
    bg: "rgba(99,102,241,0.1)",
    glowColor: "#6366f1",
    techs: [
      { name: "PHP", icon: BASE + "php/php-original.svg" },
      { name: "Node.js", icon: BASE + "nodejs/nodejs-original.svg" },
      {
        name: "Prisma",
        icon: BASE + "prisma/prisma-original.svg",
        filter: "invert(1) brightness(2)",
      },
    ],
  },
  {
    key: "database",
    label: "Base de données",
    icon: "🗄️",
    bg: "rgba(0,245,160,0.08)",
    glowColor: "#00f5a0",
    techs: [
      { name: "MySQL", icon: BASE + "mysql/mysql-original.svg" },
      { name: "SQLite", icon: BASE + "sqlite/sqlite-original.svg" },
      { name: "MongoDB", icon: BASE + "mongodb/mongodb-original.svg" },
    ],
  },
  {
    key: "tools",
    label: "Outils & Design",
    icon: "🛠️",
    bg: "rgba(129,140,248,0.1)",
    glowColor: "#818cf8",
    techs: [
      { name: "Git", icon: BASE + "git/git-original.svg" },
      {
        name: "GitHub",
        icon: BASE + "github/github-original.svg",
        filter: "invert(1) brightness(2)",
      },
      { name: "Vite", icon: BASE + "vite/vite-original.svg" },
      { name: "VS Code", icon: BASE + "vscode/vscode-original.svg" },
    ],
  },
];
