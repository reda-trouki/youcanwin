import { Calendar, ChartColumnBig, CheckCircle2Icon, Folders, Gift, Smartphone } from 'lucide-react'

const Solution = () => {
  return (
    <section id="solution">
  <div className="container">
    <div className="solution-inner">
      <div className="solution-img">
        <img src='/images/solution.jpg' alt='solution' />
      </div>
      <div className="solution-text">
        <span className="section-badge"><CheckCircle2Icon /> Solution complète</span>
        <h2>Le terrain de jeu digital de votre marque</h2>
        <p>YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité d'engagement avec vos consommateurs.</p>
        <ul className="feature-list">
          <li className="feature-item">
            <div className="icon-box"><Smartphone /></div>
            <div>
              <strong>Activation instantanée</strong>
              <span>QR codes uniques sur chaque produit</span>
            </div>
          </li>
          <li className="feature-item">
            <div className="icon-box"><Folders /></div>
            <div>
              <strong>Collection digitale</strong>
              <span>Cartes de joueurs, raretés, échanges</span>
            </div>
          </li>
          <li className="feature-item">
            <div className="icon-box"><Gift /></div>
            <div>
              <strong>Récompenses exclusives</strong>
              <span>Tirages au sort, lots partenaires, expériences VIP</span>
            </div>
          </li>
          <li className="feature-item">
            <div className="icon-box"><ChartColumnBig /></div>
            <div>
              <strong>Analytics avancés</strong>
              <span>Dashboard temps réel, insights consommateurs</span>
            </div>
          </li>
        </ul>
        <div>
          <a href="#cta-banner" className="btn-red">Planifier une démo <Calendar size={18} /></a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Solution