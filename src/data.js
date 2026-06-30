// Données produits — images servies depuis le CDN juliendechenaud.com
export const CDN = 'https://juliendechenaud.com/wp-content/uploads'

export const products = [
  { id:'pralines', org:'Coffret · Assortiment', name:'Pralinés à partager', price:'À partir de 32,00 €', badge:{type:'pct',b:'44',s:'Pièces'},
    img:`${CDN}/2025/10/praline-T3-produit.jpg` },
  { id:'mendiant', org:'Sicile · Lait', name:'Mendiant pistache', price:'9,50 €', tag:'Vegan', badge:{type:'pct',b:'48',s:'Cacao'},
    img:`${CDN}/2025/10/mendiant-pistache-lait-packshot-819x1024.jpg` },
  { id:'orangettes', org:'Calabre · Noir', name:'Orangettes confites', price:'12,00 €', badge:{type:'pct',b:'70',s:'Cacao'},
    img:`${CDN}/2025/10/orangette-2-819x1024.jpg` },
  { id:'barre', org:'Tous les jours', name:'La Barre à croquer', price:'4,50 €', tag:'Goûter',
    img:`${CDN}/2025/10/barre-packaging.jpg` },
  { id:'voiture-rouge', org:'Pièce moulée', name:'Voiture Rouge', price:'18,00 €', tag:'Édition',
    img:'https://www.juliendechenaud.com/wp-content/uploads/2026/06/voiture-chocolat-fete-des-peres-2026-10-600x750.jpg',
    alt:'https://www.juliendechenaud.com/wp-content/uploads/2026/06/voiture-chocolat-fete-des-peres-2026-3-600x750.jpg' },
  { id:'cigares', org:'Coffret cadeau', name:'Coffret Cigares', price:'29,00 €', tag:'Cadeau',
    img:'https://www.juliendechenaud.com/wp-content/uploads/2026/06/cigares-fete-des-peres-2026-3-600x750.jpg',
    alt:'https://www.juliendechenaud.com/wp-content/uploads/2026/06/cigares-fete-des-peres-2026-5-600x750.jpg' },
  { id:'tablette-dessin', org:'Tablette · Noir', name:'Tablette à dessiner', price:'15,00 €', tag:'Nouveau', badge:{type:'pct',b:'75',s:'Cacao'},
    img:'https://www.juliendechenaud.com/wp-content/uploads/2026/06/tablette-dessin-fete-des-peres-2026-14-600x750.jpg',
    alt:'https://www.juliendechenaud.com/wp-content/uploads/2026/06/tablette-dessin-fete-des-peres-2026-17-600x750.jpg' },
  { id:'voiture-noire', org:'Pièce moulée', name:'Voiture Noire', price:'18,00 €',
    img:'https://www.juliendechenaud.com/wp-content/uploads/2026/06/voiture-chocolat-fete-des-peres-2026-12-600x750.jpg',
    alt:'https://www.juliendechenaud.com/wp-content/uploads/2026/06/voiture-chocolat-fete-des-peres-2026-6-600x750.jpg' },
]

export const collections = [
  { span:'Cadeau', name:'Coffrets', img:`${CDN}/2025/10/praline-T3-produit.jpg` },
  { span:'Origines', name:'Tablettes', img:`${CDN}/2025/10/mendiant-pistache-lait-packshot-819x1024.jpg` },
  { span:'Gourmand', name:'Confiseries', img:`${CDN}/2025/10/orangette-2-819x1024.jpg` },
  { span:'Tous les jours', name:'Goûter', img:`${CDN}/2025/10/barre-packaging.jpg` },
]
