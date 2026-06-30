import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import Proposition from './pages/Proposition.jsx'
import Home from './pages/Home.jsx'
import Listing from './pages/Listing.jsx'
import Produit from './pages/Produit.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Proposition />} />
        <Route path="/maquette" element={<Home />} />
        <Route path="/maquette/boutique" element={<Listing />} />
        <Route path="/maquette/produit" element={<Produit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
