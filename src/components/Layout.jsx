import { Link } from 'react-router-dom'
import { useState, createContext, useContext } from 'react'

const CartCtx = createContext()
export function useCart(){ return useContext(CartCtx) }

export function CartProvider({ children }){
  const [count, setCount] = useState(0)
  const add = (n=1)=> setCount(c=>c+n)
  return <CartCtx.Provider value={{count, add}}>{children}</CartCtx.Provider>
}

export function Header(){
  const cart = useCart()
  return (
    <>
      <div className="topband">Livraison offerte dès 70€ · Click &amp; collect Paris &amp; Vincennes · <b>Cacao transformé à l'atelier</b></div>
      <header className="site-header">
        <div className="wrap">
          <nav className="nav">
            <div className="nav-left">
              <Link to="/maquette/boutique" className="lnk">Chocolat</Link>
              <Link to="/maquette/boutique" className="lnk">Coffrets</Link>
              <Link to="/maquette#origine" className="lnk">La Maison</Link>
              <a href="#" className="lnk">Boutiques</a>
            </div>
            <Link to="/maquette" className="brand">Dechenaud<small>Chef Chocolatier · Paris</small></Link>
            <div className="nav-right">
              <button className="util">Recherche</button>
              <button className="util">Compte</button>
              <button className="util">Panier ({cart?.count ?? 0})</button>
              <button className="burger" aria-label="Menu"><span></span><span></span><span></span></button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export function Footer(){
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">Dechenaud<small>Chocolatier · Paris &amp; Vincennes</small></div>
            <p style={{marginTop:18,maxWidth:'32ch',fontSize:13}}>Cacao 100% fabriqué et transformé dans notre atelier, dans le respect de nos valeurs.</p>
          </div>
          <div><h5>Chocolat</h5><ul><li><Link to="/maquette/boutique">Coffrets</Link></li><li><Link to="/maquette/boutique">Tablettes</Link></li><li><Link to="/maquette/boutique">Confiseries</Link></li><li><Link to="/maquette/boutique">Goûter</Link></li></ul></div>
          <div><h5>La Maison</h5><ul><li><a href="#">Notre histoire</a></li><li><a href="#">Bean to Bar</a></li><li><a href="#">Boutiques</a></li><li><a href="#">Entreprises</a></li></ul></div>
          <div><h5>Aide</h5><ul><li><a href="#">Livraisons</a></li><li><a href="#">Mon compte</a></li><li><a href="#">Contact</a></li><li><a href="#">CGV</a></li></ul></div>
        </div>
        <div className="foot-bottom"><span>© 2026 Julien Dechenaud Chocolatier</span><span>Instagram · Facebook</span></div>
      </div>
    </footer>
  )
}
