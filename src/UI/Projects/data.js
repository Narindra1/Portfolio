export const projects = [
  {
    id: 1,
    title: "MIPS",
    category: "frontend",
    gradient: "from-rose/20 to-blush/30",
    accentColor: "bg-rose",
    description:
      "Plateforme de publicité. Le carrefour numérique malgache pour publier et explorer des annonces de toute nature : emploi, services de proximité, événements et affaires.",
    features: [
      "Publication et consultation d'annonces",
      "Authentification sécurisée (JWT)",
      "Intégration des maquettes Figma",
      "Gestion d'état avec Pinia",
      "Communication avec l'API REST",
    ],
    tags: ["VueJs", "Tailwind CSS", "PrimeVue", "Pinia", "API REST", "Figma"],
    year: "2024",
    status: "Terminé",
    github: "https://github.com/Narindra1/MAHAFAKA",
    demo: "https://mips.mg/",
  },

  {
    id: 2,
    title: "To-Do List",
    category: "frontend",
    emoji: "✅",
    gradient: "from-rose/20 to-blush/30",
    accentColor: "bg-rose",
    description:
      "Application web interactive permettant d'ajouter, modifier et supprimer des tâches avec filtrage dynamique (toutes / actives / terminées).",
    features: [
      "CRUD complet",
      "Filtrage des tâches",
      "Interface réactive",
      "Gestion d'état",
    ],
    tags: ["VueJs", "Tailwind CSS"],
    year: "2024",
    status: "Terminé",
    github: "https://github.com/Narindra1/Gestionnaire-de-t-che",
    demo: null,
  },
  {
    id: 3,
    title: "Réseau Social",
    category: "fullstack",
    emoji: "🌐",
    gradient: "from-lavender/20 to-lavenderDark/20",
    accentColor: "bg-lavenderDark",
    description:
      "Site de réseau social avec inscription/connexion sécurisées, publications, réactions, commentaires et gestion des profils utilisateurs.",
    features: [
      "Authentification PHP",
      "Publications & réactions",
      "Gestion commentaires",
      "Base de données MySQL",
    ],
    tags: ["PHP", "JavaScript", "MySQL"],
    year: "2024",
    status: "Terminé",
    github: "https://github.com/Narindra1/reseaux_sociaux",
    demo: null,
  },
  {
    id: 4,
    title: "LocalDeploy",
    category: "fullstack",
    emoji: "🚀",
    gradient: "from-gold/15 to-terracotta/20",
    accentColor: "bg-gold",
    description:
      "Application permettant de déployer des projets localement avec gestion du routage client/serveur, intégration ORM Prisma et authentification JWT.",
    features: [
      "Déploiement local",
      "Routage client/serveur",
      "Prisma ORM + SQLite",
      "JWT + Session Token",
    ],
    tags: ["Nuxt", "TypeScript", "Prisma ORM", "Vue3", "Tailwind"],
    year: "2025",
    status: "En cours",
    github: "https://github.com/Narindra1/localdeploy",
    demo: null,
  },
];

export const categories = [
  { key: "all", label: "Tous" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full-Stack" },
];
