import { Link } from 'react-router-dom'

const PAINS = [
  { k:'Performance', h:'Lenteur au chargement', p:"Sliders lourds et scripts empilés ralentissent l'affichage, surtout sur mobile — là où se perdent le plus de ventes." },
  { k:'Conversion', h:"Parcours d'achat daté", p:"Navigation et fiches produits manquent de clarté et de mise en valeur, ce qui pèse sur le panier moyen." },
  { k:'Mobile', h:'Expérience en retrait', p:"Le rendu mobile n'exploite pas le potentiel visuel des produits, alors qu'il concentre la majorité du trafic." },
]
const BENEFITS = [
  { b:'×2', h:'Vitesse perçue', p:'Un socle allégé et un code propre pour un affichage rapide, mobile en tête.' },
  { b:'↑', h:'Conversion', p:'Parcours clarifié, fiches valorisées, ajout au panier immédiat.' },
  { b:'SEO', h:'Référencement gardé', p:"Migration maîtrisée : on conserve l'acquis et on l'améliore." },
  { b:'IA', h:'Développement accéléré', p:'Production assistée par IA : plus vite, sans rogner sur la qualité.' },
]
const STEPS = [
  { n:'Étape 1', h:'Cadrage', p:'Objectifs, arborescence, reprise du catalogue et des contenus.' },
  { n:'Étape 2', h:'Design', p:'Maquettes des pages clés validées avec vous avant le développement.' },
  { n:'Étape 3', h:'Développement IA', p:'Intégration PrestaShop accélérée, tracking, livraison et click & collect.' },
  { n:'Étape 4', h:'Mise en ligne', p:'Recette, migration SEO, formation et accompagnement au lancement.' },
]
const MAQUETTES = [
  { to:'/maquette', title:"Page d'accueil", sub:'Hero, sélection, collections, savoir-faire' },
  { to:'/maquette/boutique', title:'Listing produits', sub:'Filtres, tri, grille, ajout rapide' },
  { to:'/maquette/produit', title:'Fiche produit', sub:'Galerie, formats, panier, réassurance' },
]

export default function Proposition(){
  return (
    <>
      <div className="topbar">
        <div className="wrap-doc"><span><b>SOLEAD</b> · Agence web</span><span>Proposition de refonte — confidentiel</span></div>
      </div>

      <nav className="docnav">
        <div className="wrap-doc">
          <a href="#constat">Constat</a><a href="#vision">Vision</a><a href="#maquettes">Maquettes</a>
          <a href="#benefices">Bénéfices</a><a href="#offre">Offre</a><a href="#seo">SEO / GEO</a>
          <a href="#approche">Approche</a><a href="#contact">Échanger</a>
        </div>
      </nav>

      <section className="cover">
        <div className="wrap-doc">
          <span className="eyebrow">Refonte e-commerce · juliendechenaud.com</span>
          <h1>Un site à la hauteur de vos <em>chocolats d'exception</em></h1>
          <p className="lede">Votre savoir-faire bean-to-bar mérite une vitrine aussi soignée que vos créations. Voici notre vision d'une boutique plus moderne, plus rapide, et un développement nouvelle génération opéré par l'IA.</p>
          <div className="cover-meta">
            <div><b>PrestaShop + IA</b><span>Socle e-commerce</span></div>
            <div><b>Bean to Bar</b><span>Identité préservée</span></div>
            <div><b>SEO / GEO</b><span>Référencement maintenu</span></div>
            <div><b>Mobile-first</b><span>Majorité du trafic</span></div>
          </div>
        </div>
      </section>

      <section className="dsec dsec-alt" id="constat">
        <div className="wrap-doc">
          <div className="dsec-head">
            <span className="eyebrow">Le constat</span>
            <h2 style={{marginTop:14}}>Ce qui freine la boutique aujourd'hui</h2>
            <p>Le site actuel repose sur une base chargée (sliders, plugins multiples) qui pénalise l'expérience et le référencement. Trois points reviennent systématiquement.</p>
          </div>
          <div className="pain-grid">
            {PAINS.map(x=>(<div className="pain" key={x.k}><span className="k">{x.k}</span><h3>{x.h}</h3><p>{x.p}</p></div>))}
          </div>
        </div>
      </section>

      <section className="dsec" id="vision">
        <div className="wrap-doc">
          <div className="dsec-head">
            <span className="eyebrow">La vision</span>
            <h2 style={{marginTop:14}}>La même marque, <em>une autre dimension</em></h2>
            <p>À gauche la page d'accueil actuelle, à droite notre proposition. Même univers, même esprit artisan — mais une lecture, une hiérarchie et une mise en scène repensées.</p>
          </div>
          <div className="ba">
            <div className="ba-col">
              <h3><span className="pill pill-bad">Avant</span> Site actuel</h3>
              <div className="frame">
                <div className="frame-bar"><span className="dot" style={{background:'#cf7a5f'}}></span><span className="dot" style={{background:'#d8b576'}}></span><span className="dot" style={{background:'#9bb178'}}></span><span className="frame-url">juliendechenaud.com</span></div>
                <div className="shot dim"><img src="https://juliendechenaud.com/wp-content/uploads/2024/11/julien-dechenaud-chocolatier-atelier-776x1024.jpg" alt="Site actuel" /></div>
              </div>
              <p className="ba-note">→ Slider plein écran, structure dense, peu de respiration.</p>
            </div>
            <div className="ba-col">
              <h3><span className="pill pill-ok">Après</span> Proposition Solead</h3>
              <div className="frame">
                <div className="frame-bar"><span className="dot" style={{background:'#cf7a5f'}}></span><span className="dot" style={{background:'#d8b576'}}></span><span className="dot" style={{background:'#9bb178'}}></span><span className="frame-url">juliendechenaud.com · refonte</span></div>
                <iframe className="mk-iframe" style={{height:300}} src="/maquette" title="Aperçu home" loading="lazy" scrolling="no"></iframe>
              </div>
              <p className="ba-note">→ <b>Hero éditorial, parcours fluide, fiches produits valorisées.</b></p>
            </div>
          </div>
        </div>
      </section>

      <section className="dsec dsec-alt" id="maquettes">
        <div className="wrap-doc">
          <div className="dsec-head">
            <span className="eyebrow">Les maquettes</span>
            <h2 style={{marginTop:14}}>Un parcours d'achat complet</h2>
            <p>Trois pages clés du futur site, interactives. Survolez, faites défiler, ou ouvrez chaque page en plein écran.</p>
          </div>
          {MAQUETTES.map(m=>(
            <div className="mk" key={m.to}>
              <div className="mk-head"><h3>{m.title}</h3><span className="mk-hint">Aperçu interactif</span></div>
              <div className="mk-frame">
                <iframe className="mk-iframe" src={m.to} title={m.title} loading="lazy"></iframe>
                <div className="mk-cta"><span>{m.sub}</span><Link to={m.to} target="_blank">Ouvrir en plein écran ↗</Link></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dsec" id="benefices">
        <div className="wrap-doc">
          <div className="dsec-head"><span className="eyebrow">Ce que vous y gagnez</span><h2 style={{marginTop:14}}>Une refonte au service des ventes</h2></div>
          <div className="ben-grid">
            {BENEFITS.map(x=>(<div className="ben" key={x.h}><b>{x.b}</b><h4>{x.h}</h4><p>{x.p}</p></div>))}
          </div>
        </div>
      </section>

      <section className="dsec dsec-alt" id="offre">
        <div className="wrap-doc">
          <span className="badge-ia">◆ Site PrestaShop · Développement IA</span>
          <div className="dsec-head">
            <h2>Le détail de l'offre</h2>
            <p>Quatre volets distincts : la création du site, l'accompagnement SEO de la refonte, le suivi SEO récurrent et la TMA optionnelle. Chacun peut être engagé indépendamment.</p>
          </div>

          <div className="block">
            <div className="block-head"><div className="bt"><span className="tag">Volet 1 · One-shot</span><h3>Création du site web</h3></div><div className="block-total"><b>13 500 €</b><small>HT</small></div></div>
            <div className="otrow"><div className="lbl"><b>Chefferie de projet</b><span>Pilotage, coordination, suivi et recette tout au long de la refonte.</span></div><div className="amt">6 000 €<small>HT</small></div></div>
            <div className="otrow"><div className="lbl"><b>Design &amp; adaptation charte graphique</b><span>Maquettes des pages clés, déclinaison de l'univers Dechenaud, design system.</span></div><div className="amt">3 500 €<small>HT</small></div></div>
            <div className="otrow"><div className="lbl"><b>Développement opéré par IA</b><span>Intégration PrestaShop du site, accélérée par une production assistée par IA.</span></div><div className="amt">4 000 €<small>HT</small></div></div>
          </div>

          <div className="block">
            <div className="block-head"><div className="bt"><span className="tag">Volet 2 · One-shot</span><h3>Accompagnement SEO de la refonte</h3></div><div className="block-total"><b>5 000 €</b><small>HT</small></div></div>
            <div className="otrow"><div className="lbl"><b>Conservation du référencement</b><span>Plan de redirections, reprise des balises et de la structure pour ne pas perdre l'acquis lors de la migration.</span></div><div className="amt">inclus</div></div>
            <div className="otrow"><div className="lbl"><b>Audit &amp; étude de mots-clés</b><span>Analyse de l'existant et étude des mots-clés stratégiques pour le catalogue.</span></div><div className="amt">inclus</div></div>
            <div className="otrow"><div className="lbl"><b>Optimisation GEO &amp; recette SEO</b><span>Préparation pour les moteurs de réponse génératifs et contrôle technique avant mise en ligne.</span></div><div className="amt">inclus</div></div>
          </div>

          <div className="block">
            <div className="block-head"><div className="bt"><span className="tag">Volet 3 · Récurrent</span><h3>Suivi SEO mensuel</h3></div><div className="block-total"><b>1 500 €</b><small>HT / mois</small></div></div>
            <div className="otrow"><div className="lbl"><b>Suivi &amp; reporting</b><span>Positions, trafic organique et reporting mensuel.</span></div><div className="amt">mensuel</div></div>
            <div className="otrow"><div className="lbl"><b>Contenu &amp; optimisations</b><span>Production de contenu, recommandations et ajustements continus.</span></div><div className="amt">mensuel</div></div>
          </div>

          <div className="block">
            <div className="block-head"><div className="bt"><span className="tag">Volet 4 · Optionnel</span><h3>Tierce maintenance applicative</h3></div><div className="block-total"><b>1 000 €</b><small>10 h · HT</small></div></div>
            <div className="otrow"><div className="lbl"><b>Crédits temps TMA</b><span>Tierce maintenance applicative — 10 heures d'intervention incluses pour les évolutions et correctifs après lancement.</span></div><div className="amt">1 000 €<small>10 h · HT</small></div></div>
          </div>

          <div className="recap">
            <div className="rc"><div className="t-lbl">Site web</div><div className="t-amt">13 500 € <em>HT</em></div><div className="t-sub">Création complète, livrée clé en main.</div></div>
            <div className="rc"><div className="t-lbl">SEO refonte (one-shot)</div><div className="t-amt">5 000 € <em>HT</em></div><div className="t-sub">Audit, mots-clés, migration sécurisée.</div></div>
            <div className="rc"><div className="t-lbl">SEO mensuel (récurrent)</div><div className="t-amt">1 500 € <em>HT / mois</em></div><div className="t-sub">Suivi continu après lancement.</div></div>
            <div className="rc"><div className="t-lbl">TMA (optionnel)</div><div className="t-amt">1 000 € <em>HT</em></div><div className="t-sub">10 h d'intervention après lancement.</div></div>
          </div>
        </div>
      </section>

      <section className="dsec" id="seo">
        <div className="wrap-doc">
          <div className="dsec-head">
            <span className="eyebrow">Référencement</span>
            <h2 style={{marginTop:14}}>Garder l'acquis, <em>préparer la suite</em></h2>
            <p>Une refonte mal préparée peut faire chuter le référencement. L'accompagnement SEO / GEO de la refonte sécurise la migration via un audit et une étude de mots-clés, tandis que le suivi mensuel installe une dynamique durable, y compris sur les moteurs de réponse IA.</p>
          </div>
          <div className="ben-grid">
            <div className="ben"><b>0</b><h4>Perte de trafic</h4><p>Plan de redirections et reprise des balises pour conserver vos positions.</p></div>
            <div className="ben"><b>★</b><h4>Étude de mots-clés</h4><p>Audit complet et ciblage des requêtes à fort potentiel pour le catalogue.</p></div>
            <div className="ben"><b>AI</b><h4>Optimisation GEO</h4><p>Préparation aux moteurs de réponse génératifs, nouveau terrain de visibilité.</p></div>
            <div className="ben"><b>↗</b><h4>Croissance continue</h4><p>Suivi mensuel, contenu et ajustements pour progresser dans la durée.</p></div>
          </div>
        </div>
      </section>

      <section className="dsec dsec-alt" id="approche">
        <div className="wrap-doc">
          <div className="dsec-head"><span className="eyebrow">Notre approche</span><h2 style={{marginTop:14}}>Un accompagnement en quatre temps</h2></div>
          <div className="steps">
            {STEPS.map(s=>(<div className="step" key={s.h}><div className="n">{s.n}</div><h4>{s.h}</h4><p>{s.p}</p></div>))}
          </div>
        </div>
      </section>

      <section className="dsec final" id="contact">
        <div className="wrap-doc">
          <h2>Donnons à votre boutique <em>l'écrin qu'elle mérite</em></h2>
          <p>Discutons du périmètre, du planning et des modalités de cette refonte.</p>
          <a href="#" className="btn-doc">Planifier un échange</a>
          <p className="disc">Proposition indicative établie par Solead. Montants exprimés en euros hors taxes. Les maquettes présentées sont des concepts de démonstration utilisant des visuels existants ; le design final sera défini en phase de cadrage.</p>
        </div>
      </section>

      <footer className="docfooter">
        <div className="wrap-doc"><span><b>SOLEAD</b> · soleadagency.com</span><span>Refonte juliendechenaud.com — 2026</span></div>
      </footer>
    </>
  )
}
