import { Cloud, Earth, Folders, QrCode, Users } from 'lucide-react'
import ScaleItem from './ui/ScaleItem'

const Scale = () => {

  const items =[
    {title: "Utilisateurs", desc: "De 1K à illimité" ,icon: <Users /> },
    {title: "QR Codes", desc: "Volume adapté" ,icon: <QrCode /> },
    {title: "Couverture", desc: "Local à mondial" ,icon: <Earth /> },
    {title: "Albums", desc: "Standard ou custom",icon: <Folders /> },
    {title: "Infrastructure" , desc: "Cloud ou On-Premise",icon: <Cloud /> },
  ]
  return (
    <section id="scale">
  <div className="container">
    <div className="scale-row">
      {items.map((item) =>(
        <ScaleItem title={item.title} desc={item.desc} icon={item.icon} />
      ))}
    </div>
  </div>
</section>
  )
}

export default Scale