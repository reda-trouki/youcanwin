import { ChartSpline, Star, Target, Users } from 'lucide-react'
import Stat from './ui/Stat'

const Stats = () => {
  const stats = [
    {title: "500K+" ,desc: "Interactions mensuelles" ,icon: <ChartSpline size={32} /> },
    {title: "50+",desc: "Marques partenaires",icon: <Users size={32} />},
    {title: "98%",desc: "Taux de satisfaction" ,icon: <Star size={32} /> },
    {title: "24/7",desc: "Support technique",icon: <Target size={32} />},
  ]
  return (
    <section id="stats">
  <div className="container">
    <div className="stats-grid">
      {stats.map(stat =>(
        <Stat title={stat.title} desc={stat.desc} icon={stat.icon} />
      ))}
    </div>
  </div>
</section>
  )
}

export default Stats