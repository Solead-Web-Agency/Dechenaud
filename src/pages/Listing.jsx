import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Header, Footer, CartProvider, useCart } from '../components/Layout.jsx'
import { products } from '../data.js'

const FILTERS = ['Tout','Tablettes','Coffrets','Confiseries','Goûter','Éditions']

function PCard({ p }){
  const cart = useCart()
  return (
    <Link className="pcard" to="/maquette/produit">
      <div className="pcard-img">
        {p.badge && <span className="pct"><b>{p.badge.b}</b><span>{p.badge.s}</span></span>}
        {p.tag && <span className="tagn">{p.tag}</span>}
        <img className="main" src={p.img} alt={p.name} loading="lazy" />
        {p.alt && <img className="alt" src={p.alt} alt="" loading="lazy" />}
        <button className="pcard-add" onClick={(e)=>{e.preventDefault();cart.add()}}>Ajouter — {p.price.replace('À partir de ','')}</button>
      </div>
      <div className="org">{p.org}</div>
      <h3>{p.name}</h3>
      <div className="price">{p.price}</div>
    </Link>
  )
}

function ListingInner(){
  const [active, setActive] = useState('Tout')
  return (
    <>
      <Header />
      <section className="cat-hero">
        <div className="wrap">
          <div className="crumb"><Link to="/maquette">Accueil</Link> &nbsp;/&nbsp; Boutique</div>
          <h1>La boutique</h1>
          <p>Tablettes d'origine, coffrets à offrir, confiseries et douceurs de tous les jours — toutes nos créations façonnées à l'atelier.</p>
        </div>
      </section>

      <div className="wrap">
        <div className="toolbar">
          <div className="filters">
            {FILTERS.map(f=>(
              <button key={f} className={'chip'+(active===f?' on':'')} onClick={()=>setActive(f)}>{f}</button>
            ))}
          </div>
          <div className="sort">Trier
            <select><option>Nos préférés</option><option>Prix croissant</option><option>Prix décroissant</option><option>Nouveautés</option></select>
          </div>
        </div>

        <div className="grid">{products.map(p=><PCard key={p.id} p={p} />)}</div>

        <div className="loadmore"><button className="btn btn-line">Charger plus de produits</button></div>
      </div>

      <Footer />
      <Link className="note" to="/">← Retour proposition</Link>
    </>
  )
}

export default function Listing(){
  return <CartProvider><ListingInner /></CartProvider>
}
