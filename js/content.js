
/* ==========================================================
   ✏️  TOUS LES TITRES ET TEXTES DU SITE SONT ICI
   Modifiez uniquement ce fichier (Ctrl+F pour chercher).
   {name} est remplacé automatiquement par le prénom choisi.
   ========================================================== */

var CONTENT = {

  /* ---------- Général ---------- */
  pageTitle: "un-don.gouv – Effectuer un don",       // onglet du navigateur
  republique: "République<br>Française",
  devise: "Liberté · Égalité · Fraternité",
  serviceName: "un-don.gouv",
  serviceBaseline: "Le service officiel pour donner (mais vraiment)",
  breadcrumb: "Accueil &gt; Démarches &gt; Argent &gt; <b>Effectuer un don</b>",
  h1: "Faire un don en toute simplicité",
  lead: "Démarche n° DON-2026-0001 · Durée estimée : 3 minutes (ou 3 heures)",
  stepLabel: "Étape {n} sur 4",
  footer: "Site parodique sans aucun lien avec l’administration. Les dons vont bien à Erwan ou Andréa sous forme de cadeaux... Dommage.",

  /* ---------- Étape 1 ---------- */
  s1: {
    h2: "Avant de commencer",
    text: "Munissez-vous de votre bonne volonté, d’un moyen de paiement et d’un minimum de patience. Aucune pièce justificative n’est demandée.",
    who: "Qui souhaitez-vous soutenir ?"
  },

  /* ---------- Étape 2 ---------- */
  s2: {
    h2: "Appréciez-vous {name} ?",
    text: "Question obligatoire. Une seule réponse n’est recevable.",
    yes: "Oui",
    no: "Non",
    photoStamp: "Pièce n° {i} / {total}",
    refusals: [
      "Réponse non recevable. Merci de vérifier votre saisie.",
      "Erreur 403 : cette émotion n’est pas autorisée.",
      "Le formulaire a détecté de la mauvaise foi.",
      "Dernier avertissement avant transmission aux personnes en charge.",
      "Ok, on a compris, mais on a quand même inversé les boutons.",
      "Pfffff, c’est nous qui avons le dernier mot !"
    ]
  },

  /* ---------- Étape 3 ---------- */
  s3: {
    h2: "Souhaitez-vous faire un don ?",
    text: "Votre réponse sera transmise au Bureau de la Générosité Déclarée.",
    yes: ["Oui"], 
    no: "Non",
    counter: "Tentatives de refus : {n}",
    dodges: ["Non", "Non ?", "Vraiment non ?", "Raté", "Trop lent", "Presque", "Hé !", "Bon…", "Finalement oui"]
  },

  /* ---------- Étape finale ---------- */
  s5: {
    h2: "Choisissez le bénéficiaire",
    success: "Démarche terminée. Vous êtes officiellement généreux·se.",
    note: "Vous pouvez aussi donner aux deux. L’administration ne vous en voudra pas.",
    redo: "Refaire la démarche",
    alsoTitle: "Et aussi {name} ?",
    alsoText: "Les deux cagnottes sont séparées, vous pouvez donner à l’une, à l’autre ou aux deux.",
    giveButton: "Donner à {name}"
  },

  /* ---------- Fenêtre « C’est qui Erwan et Andréa ? » ---------- */
  who: {
    close: "Fermer",
    erwan: {
      button: "C’est qui Erwan ?",
      h2: "C’est qui Erwan ?",
      name: "Erwan",
      role: "Product owner",
      pole: "Pôle info.gouv",
      text: "C’est celui qui, comme il le dit lui-même, arrive toujours en retard, il est drôle et adore tout ce qui est gratuit. Signe distinctif : un fauteuil bleu.",
      link: "C’est quoi un product owner ?",
      linkUrl: "https://www.atlassian.com/fr/agile/product-management/product-owner",
      img: "img/erwan-profil.jpg",
      alt: "Le fauteuil bleu d’Erwan, vu de dos",
      where: "Où le trouver : à son fauteuil bleu"
    },
    andrea: {
      button: "C’est qui Andréa ?",
      h2: "C’est qui Andréa ?",
      name: "Andréa",
      pole: "Pôle communication.gouv",
      role: "Stagiaire au pôle communication.gouv (et plus encore)",
      text: "Notre stagiaire du pôle communication.gouv, qui sait tout faire. Serviable, elle voue une adoration imposée par nos soins à la conception d’agents IA, avec lesquels vous avez sûrement déjà échangé.",
      img: "img/andrea.jpg",
      alt: "Andréa, souriante, avec des lunettes, dans une salle de spectacle",
      where: "Où la trouver : au pôle communication.gouv."
    }
  },

  /* ---------- Fenêtre « tirage au sort » ---------- */
  contest: {
    h2: "Tirage au sort des goodies d’{name}",
    text: "Merci pour votre don ! Vous participez automatiquement au tirage au sort des goodies récoltés par {name}. Lots en jeu : un mug douteux, un chapeau, des autocollants VivaTech… Franchement, venez voir, je ne sais plus...",
    checking: "Vérification de votre numéro de ticket…",
    resultLabel: "Résultat du tirage :",
    lostTitle: "Perdu…",
    lostAgain: "Perdu à nouveau. ",
    lostText: "Peut-être une autre fois ! Merci infiniment pour votre don : {name} vous en sera très reconnaissant.",
    retry: "Retenter ma chance",
    retryMore: "Retenter encore",
    wheelSpin: "Dernière chance : la roue tourne…",
    wheelAlmost: "Presque… ah.",
    // La roue : « lose: true » = le segment sur lequel elle s’arrête TOUJOURS. Ajoutez/retirez des segments librement.
    wheel: [
      { label: "Gagné", color: "#18753c" },
      { label: "Gagné", color: "#2e8b57" },
      { label: "Perdu", color: "#e1000f", lose: true }
    ],
    close: "Fermer"
  }
};

/* ---------- Bénéficiaires : prénoms, liens des cagnottes, photos ---------- */
var PEOPLE = [
  {
    name: "Erwan",
    url: "https://pots.lydia.me/collect/pots?id=53476-cagnotte-pour-erwan-blanchard",
    contest: true,                   // true = affiche le tirage au sort après le clic sur « Donner »
    txt: "Une cagnotte sérieuse pour une cause sérieuse.",
    photos: [                        // pos = position du recadrage (x y)
      { src: "img/erwan-1.jpg", pos: "50% 35%", caption: "Photo d’identité, fond neutre conforme." },
      { src: "img/erwan-2.jpg", pos: "50% 50%", caption: "Sujet observé en situation de café." },
      { src: "img/erwan-3.jpg", pos: "50% 60%", caption: "Le sujet avant l’arrivée du public." }
    ]
  },
  {
  name: "Andréa",
  url: "https://pots.lydia.me/collect/pots?id=90267-cagnotte-pour-andrea-terroso",
  txt: "Une cagnotte tout aussi sérieuse, mais séparée.",
  photos: [
    {
      src: "img/andrea-1.jpg",
      pos: "50% 50%",
      caption: "Andréa, photo 1."
    }
    
  ]
}
];
