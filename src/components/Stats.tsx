import { ChartSpline, Star, Target, Users } from 'lucide-react'

const Stats = () => {
  return (
    <section id="stats">
  <div className="container">
    <div className="stats-grid">
      <div className="stat-item">
        <span className="stat-icon"><ChartSpline size={32} /></span>
        <strong>500K+</strong>
        <p>Interactions mensuelles</p>
      </div>
      <div className="stat-item">
        <span className="stat-icon"><Users size={32} /></span>
        <strong>50+</strong>
        <p>Marques partenaires</p>
      </div>
      <div className="stat-item">
        <span className="stat-icon"><Star size={32} /></span>
        <strong>98%</strong>
        <p>Taux de satisfaction</p>
      </div>
      <div className="stat-item">
        <span className="stat-icon"><Target size={32} /></span>
        <strong>24/7</strong>
        <p>Support technique</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Stats