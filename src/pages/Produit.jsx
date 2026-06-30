import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Header, Footer, CartProvider, useCart } from '../components/Layout.jsx'
import { products, CDN } from '../data.js'

const GALLERY = [
  `${CDN}/2025/10/praline-T3-produit.jpg`,
  `${CDN}/2025/10/orangette-2-819x1024.jpg`,
  `${CDN}/2025/10/mendiant-pistache-lait-packshot-819x1024.jpg`,
  `${CDN}/2025/10/barre-packaging.jpg`,
]
const FORMATS = [
  { label:'16 pièces', sub:'240 g · 32 €', price:'32,00 €' },
  { label:'27 pièces', sub:'380 g · 49 €', price:'49,00 €' },
  { label:'44 pièces', sub:'490 g · 75 €', price:'75,00 €' },
]
const ACC = [
  { t:'Description', open:true, body:"Nos pralinés à l'ancienne sont préparés selon une méthode lente : les fruits secs sont torréfiés puis broyés avec le sucre jusqu'à obtenir une pâte fine et parfumée, enrobée de notre chocolat de couverture. Chaque pièce est moulée et garnie à la main dans notre atelier de Vincennes." },
  { t:'Composition & allergènes', list:["Cacao d'origine, sucre, fruits secs (noisettes, amandes, pistaches)","Beurre de cacao, lait en poudre (recettes lactées)","Présence possible de fruits à coque, lait, soja","Sans huile de palme · sans conservateur"] },
  { t:'Conservation', body:"À conserver à l'abri de la chaleur et de l'humidité, entre 16 et 18°C. À déguster idéalement dans les trois semaines suivant la réception pour profiter pleinement des arômes." },
  { t:'Livraison & retrait', body:"Expédition au frais par Chronofresh en France métropolitaine, offerte dès 70€ d'achat. Retrait gratuit le jour même dans nos boutiques de Paris et Vincennes. Commandes préparées sous 48h ouvrées." },
]

function ProduitInner(){
  const cart = useCart()
  const [main, setMain] = useState(GALLERY[0])
  const [fmt, setFmt] = useState(0)
  const [qty, setQty] = useState(1)
  const suggestions = products.filter(p=>['orangettes','mendiant','cigares','barre'].includes(p.id))

  return (
    <>
      <Header />
      <div className="wrap">
        <div className="crumb-top"><Link to="/maquette">Accueil</Link> &nbsp;/&nbsp; <Link to="/maquette/boutique">Boutique</Link> &nbsp;/&nbsp; Pralinés à partager</div>

        <div className="product">
          <div className="gallery">
            <div className="gmain">
              <span className="pct"><b>44</b><span>Pièces</span></span>
              <img src={main} alt="Coffret de pralinés" />
            </div>
            <div className="gthumbs">
              {GALLERY.map(g=>(
                <div key={g} className={'gthumb'+(main===g?' on':'')} onClick={()=>setMain(g)}><img src={g} alt="" loading="lazy" /></div>
              ))}
            </div>
          </div>

          <div className="pinfo">
            <div className="org">Coffret · Assortiment de pralinés</div>
            <h1>Pralinés à partager</h1>
            <div className="rating"><span className="stars">★★★★★</span> 4,9 · 128 avis</div>
            <p className="lede">Un assortiment généreux de pralinés à l'ancienne, façonnés à l'atelier à partir de fruits secs torréfiés et de notre cacao d'origine. Le coffret à poser au centre de la table.</p>

            <div className="price-row"><span className="now">{FORMATS[fmt].price}</span><span className="unit">TTC · {FORMATS[fmt].sub.split(' · ')[0]}</span></div>

            <div className="opt-label">Format du coffret</div>
            <div className="opts">
              {FORMATS.map((f,i)=>(
                <button key={f.label} className={'opt'+(fmt===i?' on':'')} onClick={()=>setFmt(i)}>{f.label}<small>{f.sub}</small></button>
              ))}
            </div>

            <div className="buy">
              <div className="qty"><button onClick={()=>setQty(q=>Math.max(1,q-1))}>–</button><span>{qty}</span><button onClick={()=>setQty(q=>q+1)}>+</button></div>
              <button className="add" onClick={()=>cart.add(qty)}>Ajouter au panier</button>
            </div>

            <div className="reassure">
              <div><b>Livraison au frais</b> — par Chronofresh, offerte dès 70€</div>
              <div><b>Expédié sous 48h</b> — préparé et emballé à l'atelier</div>
              <div><b>Retrait gratuit</b> — en boutique à Paris &amp; Vincennes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="details">
          {ACC.map(a=>(
            <details className="acc" key={a.t} open={a.open}>
              <summary>{a.t}</summary>
              {a.body && <p>{a.body}</p>}
              {a.list && <ul>{a.list.map(li=><li key={li}>{li}</li>)}</ul>}
            </details>
          ))}
        </div>
      </div>

      <section className="also">
        <div className="wrap">
          <h2>Vous aimerez aussi</h2>
          <div className="sgrid">
            {suggestions.map(p=>(
              <Link className="scard2" to="/maquette/produit" key={p.id}>
                <div className="scard-img"><img src={p.img} alt={p.name} loading="lazy" /></div>
                <div className="org">{p.org}</div>
                <h3>{p.name}</h3>
                <div className="price">{p.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Link className="note" to="/">← Retour proposition</Link>
    </>
  )
}

export default function Produit(){
  return <CartProvider><ProduitInner /></CartProvider>
}
