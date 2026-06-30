import { Link } from 'react-router-dom'
import { Header, Footer, CartProvider, useCart } from '../components/Layout.jsx'
import { products, collections } from '../data.js'

function FCard({ p }){
  const cart = useCart()
  return (
    <Link className="fcard" to="/maquette/produit">
      <div className="fcard-img">
        {p.badge && <span className="pct"><b>{p.badge.b}</b><span>{p.badge.s}</span></span>}
        <img src={p.img} alt={p.name} loading="lazy" />
        <button className="fcard-add" onClick={(e)=>{e.preventDefault();cart.add()}}>Ajouter — {p.price.replace('À partir de ','')}</button>
      </div>
      <div className="org">{p.org}</div>
      <h3>{p.name}</h3>
      <div className="price">{p.price}</div>
    </Link>
  )
}

function HomeInner(){
  const featured = products.filter(p=>['orangettes','mendiant','pralines'].includes(p.id))
  return (
    <>
      <Header />

      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">Manufacture · Vincennes</span>
          <h1>Le goût juste<br/>du <em>grand cacao</em></h1>
          <p>Des fèves d'origine sélectionnées une à une, torréfiées et travaillées dans notre atelier. Le chocolat dans sa forme la plus sincère.</p>
          <div className="hero-cta">
            <Link to="/maquette/boutique" className="btn btn-solid">Découvrir la boutique</Link>
            <a href="#origine" className="btn btn-line">Notre savoir-faire</a>
          </div>
        </div>
        <div className="hero-media">
          <img src={products[0].img} alt="Pralinés Julien Dechenaud" />
          <div className="hero-badge"><b>100%</b><span>Bean to Bar</span></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">La sélection</span><h2>Créations du moment</h2></div>
            <Link to="/maquette/boutique" className="more">Toute la boutique →</Link>
          </div>
          <div className="feat">{featured.map(p=><FCard key={p.id} p={p} />)}</div>
        </div>
      </section>

      <section className="sec collections" id="collections">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">L'atelier</span><h2>Explorer par envie</h2></div>
            <Link to="/maquette/boutique" className="more">Voir tout →</Link>
          </div>
          <div className="strip">
            {collections.map(c=>(
              <Link key={c.name} className="scard" to="/maquette/boutique">
                <img src={c.img} alt={c.name} loading="lazy" />
                <div className="cap"><span>{c.span}</span><h3>{c.name}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="origine">
        <div className="wrap origin">
          <div className="origin-media"><img src="https://juliendechenaud.com/wp-content/uploads/2024/11/julien-dechenaud-chocolatier-atelier-776x1024.jpg" alt="Julien Dechenaud à l'atelier" /></div>
          <div>
            <span className="eyebrow">Bean to Bar</span>
            <h2 style={{marginTop:14}}>Du cabosse à la tablette, <em>rien ne nous échappe</em></h2>
            <p>Sélection des fèves, torréfaction, conchage, façonnage : chaque étape se déroule dans notre atelier de Vincennes. C'est ce contrôle de bout en bout qui donne à nos chocolats leur signature.</p>
            <div className="origin-steps">
              <div className="ostep"><b>Sélection</b><span>Fèves d'origine</span></div>
              <div className="ostep"><b>Torréfaction</b><span>Maison</span></div>
              <div className="ostep"><b>Façonnage</b><span>À la main</span></div>
            </div>
            <div className="hero-cta"><a href="#" className="btn btn-line">Visiter la manufacture</a></div>
          </div>
        </div>
      </section>

      <section className="promesses">
        <div className="wrap">
          <div className="promesse"><h4>Livraison au frais</h4><p>Par Chronofresh en France métropolitaine, offerte dès 70€.</p></div>
          <div className="promesse"><h4>Expédié sous 48h</h4><p>Préparé à l'atelier et expédié au plus vite, fraîcheur garantie.</p></div>
          <div className="promesse"><h4>Retrait boutique</h4><p>Gratuit dans nos comptoirs de Paris et Vincennes.</p></div>
        </div>
      </section>

      <section className="sec news">
        <div className="wrap">
          <span className="eyebrow">La lettre de l'atelier</span>
          <h2 style={{marginTop:14}}>Les <em>nouveautés</em> avant tout le monde</h2>
          <p>Créations de saison, éditions limitées et coulisses de l'atelier.</p>
          <form onSubmit={(e)=>e.preventDefault()}>
            <input type="email" placeholder="Votre adresse e-mail" aria-label="E-mail" />
            <button>S'inscrire</button>
          </form>
        </div>
      </section>

      <Footer />
      <Link className="note" to="/">← Retour proposition</Link>
    </>
  )
}

export default function Home(){
  return <CartProvider><HomeInner /></CartProvider>
}
