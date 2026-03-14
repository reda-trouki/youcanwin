import { ChartSpline, Check, Earth, Zap } from 'lucide-react'

const Pricing = () => {
  return (
    <section id="pricing">
    <div className="container">
        <div className="pricing-header">
      <h2>Des offres adaptées à votre ambition</h2>
      <p>Tarification sur mesure selon vos volumes</p>
        </div>
        <div className="plans-grid">
      {/* <!-- Starter --> */}
      <div className="plan-card">
        <div className="plan-icon"><div className="icon-box"><Zap /></div></div>
        <h3>Starter</h3>
        <p className="plan-type">Campagne locale</p>
        <p className="plan-desc">Idéal pour tester sur un marché</p>
        <p className="plan-pricing">Tarification sur mesure selon vos volumes</p>
        <ul className="plan-features">
          <li><span className="check"><Check /></span> Jusqu'à 1 000 utilisateurs</li>
          <li><span className="check"><Check /></span> Jusqu'à 10K QR codes</li>
          <li><span className="check"><Check /></span> 1 pays / région</li>
          <li><span className="check"><Check /></span> Album standard (équipe nationale)</li>
          <li><span className="check"><Check /></span> Hébergement Cloud sécurisé</li>
          <li><span className="check"><Check /></span> Backoffice simplifié</li>
          <li><span className="check"><Check /></span> Support par email</li>
          <li><span className="check"><Check /></span> 1 marque</li>
        </ul>
        <button className="plan-btn">Demander un devis</button>
      </div>
      {/* <!-- Scale (featured) --> */}
      <div className="plan-card featured">
        <div className="popular-badge">POPULAIRE</div>
        <div className="plan-icon"><div className="icon-box bg-transparent"><ChartSpline color="red" /></div></div>
        
        <h3>Scale</h3>
        <p className="plan-type">Expansion nationale</p>
        <p className="plan-desc">Pour des campagnes d'envergure</p>
        <p className="plan-pricing">Tarification sur mesure selon vos volumes</p>
        <ul className="plan-features">
          <li><span className="check"><Check color='red' /></span> Jusqu'à 50 000 utilisateurs</li>
          <li><span className="check"><Check color='red'/></span> QR codes illimités</li>
          <li><span className="check"><Check color='red'/></span> Multi-pays (jusqu'à 5)</li>
          <li><span className="check"><Check color='red'/></span> Album complet (toutes les équipes)</li>
          <li><span className="check"><Check color='red'/></span> Cloud ou On-Premise</li>
          <li><span className="check"><Check color='red'/></span> Backoffice avancé avec analytics</li>
          <li><span className="check"><Check color='red'/></span> Support prioritaire 24/7</li>
          <li><span className="check "><Check color='red'/></span> Jusqu'à 3 marques</li>
          <li><span className="check "><Check color='red'/></span> API REST disponible</li>
        </ul>
        <button className="plan-btn primary">Planifier une démo</button>
      </div>
      {/* <!-- Enterprise --> */}
      <div className="plan-card">
        <div className="plan-icon"><div className="icon-box"><Earth /></div></div>
        <h3>Enterprise</h3>
        <p className="plan-type">Solution globale</p>
        <p className="plan-desc">Pour les groupes internationaux</p>
        <p className="plan-pricing">Tarification sur mesure selon vos volumes</p>
        <ul className="plan-features">
          <li><span className="check"><Check /></span> Utilisateurs illimités</li>
          <li><span className="check"><Check /></span> QR codes illimités</li>
          <li><span className="check"><Check /></span> Déploiement mondial</li>
          <li><span className="check"><Check /></span> Albums personnalisés par région</li>
          <li><span className="check"><Check /></span> Infrastructure dédiée (On-Premise)</li>
          <li><span className="check"><Check /></span> Multi-marques illimité</li>
          <li><span className="check"><Check /></span> Développements sur-mesure</li>
          <li><span className="check"><Check /></span> Account manager dédié</li>
          <li><span className="check"><Check /></span> SLA garanti 99.9%</li>
          <li><span className="check"><Check /></span> Formation et onboarding complet</li>
        </ul>
        <button className="plan-btn">Demander un devis</button>
      </div>
        </div>
    </div>
</section>
  )
}

export default Pricing