import { Eclipse, Heart, Zap } from 'lucide-react'
import BenifitCard from './ui/BenifitCard'

const Benifits = () => {

  const benifits = [
    { title: "Engagement immédiat", desc: "Chaque produit devient une opportunité de jeu", icon: <Zap size={28} color='white' /> },
    { title: "Les clients reviennent pour compléter leur collection", desc: "Fidélisation naturelle", icon: <Heart size={28} color='white' /> },
    { title: "Viralité organique", desc: "Les fans partagent et échangent entre eux", icon: <Eclipse size={28} color='white' /> },
  ]

  return (
    <section id="benefits">
      <div className="benefits-header">
        <h2>Transformez vos ventes en expérience mémorable</h2>
        <p>YouCanWin offre à vos clients plus qu'un produit : une expérience interactive complète autour du football</p>
      </div>
      <div className="benefits-cards">
        {benifits.map((benifit) => (
          <BenifitCard title={benifit.title} desc={benifit.desc} icon={benifit.icon} />
        ))}
      </div>
    </section>
  )
}

export default Benifits