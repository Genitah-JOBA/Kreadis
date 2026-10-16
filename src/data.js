// Contenu du site : modifiez ce fichier pour mettre à jour textes, images et coordonnées.

// Images libres de droits (licence Unsplash) — remplacez-les par vos propres réalisations dès que possible.
const img = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const contact = {
  email: 'kreadis.digital@yahoo.com',
  phone: '038 14 611 05',
  phoneLink: '+261381461105', // format international pour le lien d'appel
  location: 'Freelance',
  facebook: 'https://www.facebook.com/profile.php?id=61595156322180',
  linkedin: '', // à renseigner quand la page LinkedIn existera (vide = icône masquée)
}

export const heroImage = img('photo-1551650975-87deedd944c3', 1400)
export const aboutImage = img('photo-1498050108023-c5249f4df085', 1200)
export const aboutImage2 = img('photo-1586717791821-3f44a563fa4c', 800)

export const services = [
  {
    key: 'uiux',
    title: 'Design UI/UX',
    text: "Recherche utilisateur, wireframes, maquettes Figma et prototypes interactifs pour des interfaces belles et intuitives.",
    tags: ['Figma', 'Prototypage', 'Design system'],
    image: img('photo-1581291518857-4e27b48ff24e', 900),
  },
  {
    key: 'web',
    title: 'Développement web',
    text: 'Sites vitrines, e-commerce et applications web rapides, responsives et optimisées pour le référencement.',
    tags: ['React', 'Next.js', 'Node.js'],
    image: img('photo-1555066931-4365d14bab8c', 900),
  },
  {
    key: 'mobile',
    title: 'Développement mobile',
    text: 'Applications Android et iOS performantes, du concept à la publication sur les stores.',
    tags: ['React Native', 'Flutter', 'Android / iOS'],
    image: img('photo-1618761714954-0b8cd0026356', 900),
  },
  {
    key: 'webmaster',
    title: 'Webmastering',
    text: 'Gestion de contenu, SEO, statistiques et mises à jour régulières pour garder votre site vivant et visible.',
    tags: ['SEO', 'Analytics', 'Contenu'],
    image: img('photo-1460925895917-afdab827c52f', 900),
  },
  {
    key: 'maintenance',
    title: 'Maintenance',
    text: 'Sauvegardes, sécurité, hébergement et corrections : votre site reste disponible, sûr et à jour.',
    tags: ['Sécurité', 'Sauvegardes', 'Support'],
    image: img('photo-1573164713988-8665fc963095', 900),
  },
]

// Études de cas. Ce sont des projets conceptuels (démonstration) : remplacez-les par
// vos projets clients réels au fur et à mesure. Chaque projet a sa page /projet/<slug>.
// Champs facultatifs : client (nom du client), website (lien vers le site en ligne).
export const projects = [
  {
    slug: 'fintech-dashboard',
    title: 'Fintech Dashboard',
    category: 'UI/UX',
    text: "Interface d'un tableau de bord financier, design system complet.",
    image: img('photo-1559028012-481c04fa702d', 1800),
    tagline: 'Rendre la finance lisible en un coup d’œil',
    slogan: 'Clarté / Confiance / Contrôle',
    year: '2026',
    type: 'Projet conceptuel',
    services: ['Recherche UX', 'Design UI', 'Design system'],
    tools: ['Figma', 'FigJam', 'Maze'],
    context: [
      'Les petites entreprises suivent souvent leurs finances dans des tableurs dispersés : trésorerie, factures et dépenses ne sont jamais au même endroit.',
      "Ce concept imagine un tableau de bord unique, pensé pour des dirigeants qui ne sont pas comptables et qui veulent comprendre leur situation en moins d'une minute.",
    ],
    challenge:
      'Afficher beaucoup de données chiffrées sans submerger l’utilisateur, sur ordinateur comme sur mobile.',
    approach: [
      'Entretiens et personas pour identifier les 5 indicateurs vraiment consultés au quotidien.',
      'Hiérarchie visuelle forte : un chiffre clé par carte, des graphiques simples et une couleur utilisée avec parcimonie.',
      'Design system complet (couleurs, typographie, composants) pour garantir la cohérence de chaque écran.',
      'Prototype interactif testé auprès d’utilisateurs pour valider la compréhension.',
    ],
    goals: [
      { value: '< 1 min', label: 'pour comprendre sa trésorerie' },
      { value: '40+', label: 'composants dans le design system' },
      { value: '3', label: 'formats : desktop, tablette, mobile' },
    ],
    gallery: [
      img('photo-1526628953301-3e589a6a8b74'),
      img('photo-1554224155-6726b3ff858f'),
      img('photo-1559526324-4b87b5e36e44'),
    ],
  },
  {
    slug: 'boutique-en-ligne',
    title: 'Boutique en ligne',
    category: 'Web',
    text: 'E-commerce responsive avec paiement mobile et gestion de stock.',
    image: img('photo-1563986768609-322da13575f3', 1800),
    tagline: 'Vendre en ligne, simplement',
    slogan: 'Proximité / Simplicité / Confiance',
    year: '2026',
    type: 'Projet conceptuel',
    services: ['Design UI/UX', 'Développement web', 'SEO'],
    tools: ['React', 'Node.js', 'Stripe', 'Mobile Money'],
    context: [
      'Une boutique physique souhaite vendre ses produits en ligne, mais ses clients achètent surtout depuis leur téléphone et paient majoritairement par mobile money.',
      'Le concept : un site e-commerce rapide, même avec une connexion lente, et un back-office simple pour gérer le stock au quotidien.',
    ],
    challenge: 'Offrir un parcours d’achat fluide sur mobile et des moyens de paiement adaptés au marché local.',
    approach: [
      'Parcours d’achat réduit à l’essentiel : produit, panier, paiement.',
      'Intégration du paiement par carte et par mobile money.',
      'Images optimisées et chargement progressif pour les connexions lentes.',
      'Back-office pour gérer produits, stock et commandes sans compétence technique.',
    ],
    goals: [
      { value: '3 clics', label: 'du produit au paiement' },
      { value: '< 2 s', label: 'de chargement visé sur mobile' },
      { value: '100%', label: 'responsive' },
    ],
    gallery: [
      img('photo-1607082348824-0a96f2a4b9da'),
      img('photo-1472851294608-062f824d29cc'),
      img('photo-1563013544-824ae1b704d3'),
    ],
  },
  {
    slug: 'app-de-livraison',
    title: 'App de livraison',
    category: 'Mobile',
    text: 'Application mobile de commande et de suivi de livraison en temps réel.',
    image: img('photo-1512941937669-90a1b58e7e9c', 1800),
    tagline: 'Vos plats préférés, livrés et suivis en temps réel',
    slogan: 'Rapide / Fiable / Gourmand',
    year: '2026',
    type: 'Projet conceptuel',
    services: ['Design UI/UX', 'Développement mobile'],
    tools: ['Figma', 'React Native', 'Firebase', 'Google Maps'],
    context: [
      'Les restaurants de quartier reçoivent leurs commandes par téléphone ou par messagerie, sans visibilité pour le client sur l’avancement de sa livraison.',
      "Ce concept d'application relie clients, restaurants et livreurs dans une seule expérience mobile.",
    ],
    challenge: 'Trois profils d’utilisateurs, une seule app : rester simple pour chacun.',
    approach: [
      'Parcours distincts pour le client, le restaurant et le livreur.',
      'Suivi de la commande sur carte en temps réel, avec une notification à chaque étape.',
      'Paiement à la livraison ou en ligne.',
      'Mode hors ligne partiel pour les zones à faible réseau.',
    ],
    goals: [
      { value: '3', label: 'profils : client, restaurant, livreur' },
      { value: 'Temps réel', label: 'suivi de la livraison' },
      { value: 'iOS + Android', label: 'avec une seule base de code' },
    ],
    gallery: [
      img('photo-1565299624946-b28f40a0ae38'),
      img('photo-1504674900247-0877df9cc836'),
      img('photo-1580674285054-bed31e145f59'),
    ],
  },
  {
    slug: 'plateforme-analytics',
    title: 'Plateforme analytics',
    category: 'Web',
    text: 'Application web de visualisation de données pour PME.',
    image: img('photo-1551434678-e076c223a692', 1800),
    tagline: 'Piloter sa logistique grâce aux données',
    slogan: 'Données / Décisions / Croissance',
    year: '2026',
    type: 'Projet conceptuel',
    services: ['Développement web', 'Design UI', 'Maintenance'],
    tools: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    context: [
      "Une PME de distribution dispose de beaucoup de données (stocks, ventes, livraisons) mais n'en tire aucun indicateur exploitable.",
      'Le concept : une application web qui centralise ces données et les transforme en tableaux de bord clairs.',
    ],
    challenge: 'Connecter des sources de données hétérogènes et les rendre compréhensibles par tous.',
    approach: [
      'Import automatique depuis les fichiers Excel existants et l’API du logiciel de caisse.',
      'Tableaux de bord adaptés à chaque rôle (direction, entrepôt, commercial).',
      'Alertes automatiques en cas de rupture de stock.',
      'Hébergement sécurisé, sauvegardes quotidiennes et maintenance continue.',
    ],
    goals: [
      { value: '1', label: 'seul outil au lieu de 5 fichiers' },
      { value: 'Quotidienne', label: 'mise à jour automatique des données' },
      { value: '3', label: 'tableaux de bord par rôle' },
    ],
    gallery: [
      img('photo-1586528116311-ad8dd3c8310d'),
      img('photo-1461749280684-dccba630e2f6'),
      img('photo-1504868584819-f8e8b4b6d7e3'),
    ],
  },
  {
    slug: 'refonte-ux-portail',
    title: 'Refonte UX d’un portail',
    category: 'UI/UX',
    text: 'Audit, wireframes et nouveau parcours utilisateur.',
    image: img('photo-1522542550221-31fd19575a2d', 1800),
    tagline: 'Un portail repensé autour de ses utilisateurs',
    slogan: 'Écouter / Simplifier / Tester',
    year: '2026',
    type: 'Projet conceptuel',
    services: ['Audit UX', 'Wireframes', 'Design UI'],
    tools: ['Figma', 'Hotjar', 'Google Analytics'],
    context: [
      'Un portail de services en ligne vieillissant : menus surchargés, formulaires interminables et beaucoup d’abandons.',
      'Ce concept présente une démarche complète de refonte, de l’audit jusqu’aux maquettes finales.',
    ],
    challenge: 'Réduire la complexité sans retirer de fonctionnalités utiles.',
    approach: [
      'Audit heuristique et analyse des statistiques de navigation.',
      'Tri de cartes avec de vrais utilisateurs pour réorganiser l’arborescence.',
      'Wireframes basse fidélité, puis maquettes haute fidélité accessibles (contrastes, tailles de texte).',
      'Tests utilisateurs avant / après pour mesurer les progrès.',
    ],
    goals: [
      { value: '7 → 4', label: 'entrées dans le menu principal' },
      { value: '-50%', label: 'de champs dans les formulaires' },
      { value: 'WCAG AA', label: 'niveau d’accessibilité visé' },
    ],
    gallery: [
      img('photo-1531403009284-440f080d1e12'),
      img('photo-1581291518857-4e27b48ff24e'),
      img('photo-1558655146-9f40138edfeb'),
    ],
  },
  {
    slug: 'app-bien-etre',
    title: 'App bien-être',
    category: 'Mobile',
    text: 'Application de suivi d’habitudes avec notifications intelligentes.',
    image: img('photo-1544367567-0f2fcb009e0b', 1800),
    tagline: 'Prendre soin de soi, un jour à la fois',
    slogan: 'Respirer / Bouger / Progresser',
    year: '2026',
    type: 'Projet conceptuel',
    services: ['Design UI/UX', 'Développement mobile'],
    tools: ['Figma', 'Flutter', 'Firebase'],
    context: [
      'Beaucoup de personnes veulent adopter de meilleures habitudes (sport, sommeil, méditation) mais abandonnent au bout de quelques jours.',
      'Ce concept d’application mise sur des objectifs très courts et des encouragements bienveillants.',
    ],
    challenge: 'Motiver sans culpabiliser, et donner envie de revenir chaque jour.',
    approach: [
      'Onboarding de 3 écrans pour choisir ses objectifs.',
      'Séances courtes (5 à 15 minutes) et progression visuelle.',
      'Notifications intelligentes envoyées au bon moment de la journée.',
      'Interface douce et apaisante, mode sombre inclus.',
    ],
    goals: [
      { value: '3 écrans', label: 'pour démarrer' },
      { value: '5 min', label: 'la séance la plus courte' },
      { value: 'iOS + Android', label: 'avec Flutter' },
    ],
    gallery: [
      img('photo-1506126613408-eca07ce68773'),
      img('photo-1571019613454-1cb2f99b2d8b'),
      img('photo-1517836357463-d25dfeac3438'),
    ],
  },
]

export const steps = [
  { title: 'Découverte', text: 'J’écoute vos objectifs, votre cible et vos contraintes.' },
  { title: 'Design', text: 'Wireframes puis maquettes validées avec vous, écran par écran.' },
  { title: 'Développement', text: 'Code propre, tests et démos régulières pour suivre l’avancement.' },
  { title: 'Lancement & suivi', text: 'Mise en ligne, formation, puis webmastering et maintenance.' },
]

export const values = [
  { value: '5', label: 'expertises réunies' },
  { value: '100%', label: 'responsive & mobile-first' },
  { value: '48h', label: 'pour recevoir votre devis' },
  { value: '1', label: 'contact unique, sans intermédiaire' },
]
