import { Facebook, Instagram, Linkedin, ShieldCheck, Trophy, Twitter, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer>
  <div className="container">
    <div className="footer-grid">
      {/* <!-- Brand --> */}
      <div className="footer-brand">
        <a href="#" className="footer-logo">
          <div className="footer-logo-icon"><Trophy color='white' /></div>
          <span><em>You</em>can<em className='text-green'>win</em></span>
        </a>
        <p>Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d'Agency.Africa.</p>
        <div className="socials">
          <a href="#" className="social-btn"><Facebook /></a>
          <a href="#" className="social-btn"><X /></a>
          <a href="#" className="social-btn"><Instagram /></a>
          <a href="#" className="social-btn"><Linkedin /></a>
        </div>
      </div>
      {/* <!-- Links --> */}
      <div className="footer-col">
        <h4>Liens rapides</h4>
        <ul>
          <li><a href="#solution">Nos offres</a></li>
          <li><a href="#catalog">Nos jeux</a></li>
          <li><a href="#pricing">Album 2025</a></li>
          <li><a href="#backoffice">À propos</a></li>
        </ul>
      </div>
      {/* <!-- Legal --> */}
      <div className="footer-col">
        <h4>Contact &amp; Légal</h4>
        <ul>
          <li><a href="#">games@agency.africa</a></li>
          <li><a href="#">Mentions légales</a></li>
          <li><a href="#">Protection des données (CNDP) ↗</a></li>
          <li><a href="#">Conditions d'utilisation</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2025 Youcanwin. Tous droits réservés.</p>
      <p>Un service de <a href="#">Agency.Africa</a> — games.agency.africa</p>
    </div>
    <div className="cndp-badge">
      <span><ShieldCheck /> Site conforme CNDP Maroc</span>
    </div>
  </div>
</footer>
  )
}

export default Footer