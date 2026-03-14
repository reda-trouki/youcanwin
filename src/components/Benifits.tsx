import { Eclipse, Heart, Zap } from 'lucide-react'
import React from 'react'

const Benifits = () => {
  return (
    <section id="benefits">
  <div className="benefits-header">
    <h2>Transformez vos ventes en expérience mémorable</h2>
    <p>YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football</p>
  </div>
  <div className="benefits-cards">
    <div className="benefit-card">
      <div className="b-icon"><Zap size={28} color='white' /></div>
      <h3>Engagement immédiat</h3>
      <p>Chaque produit devient une opportunité de jeu</p>
    </div>
    <div className="benefit-card">
      <div className="b-icon"><Heart size={28} color='white' /></div>
      <h3>Fidélisation naturelle</h3>
      <p>Les clients reviennent pour compléter leur collection</p>
    </div>
    <div className="benefit-card">
      <div className="b-icon"><Eclipse size={28} color='white' /></div>
      <h3>Viralité organique</h3>
      <p>Les fans partagent et échangent entre eux</p>
    </div>
  </div>
</section>
  )
}

export default Benifits