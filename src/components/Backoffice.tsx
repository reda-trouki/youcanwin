import { Bell, ChartColumnBig, ChevronRight, CloudDownload, Folders, Gift, QrCode, Settings, SlidersVertical, UsersRound } from 'lucide-react'
import Card from './ui/Card'

const Backoffice = () => {
  const cards = [
    {title: "Générateur QR Codes", desc: "Créez et téléchargez vos QR codes uniques en masse", icon: <QrCode />},
    {title: "CRM Participants", desc: "Collectez et gérez vos participants avec segmentation avancée", icon: <UsersRound />},
    {title: "Configuration jeux", desc: "Paramétrez entièrement vos jeux : règles, lots, durée, visuels", icon: <SlidersVertical />},
    {title: "Analytics temps réel", desc: "Suivez vos KPIs : scans, conversions, engagement, ROI", icon: <ChartColumnBig />},
  ]
  const cards2 = [
    {title: "Gestion des lots", desc: "Définissez vos récompenses et gérez les tirages au sort", icon: <Gift />},
    {title: "Notifications", desc: "Envoyez des push, emails et SMS à vos participants", icon: <Bell />},
    {title: "Export données", desc: "Téléchargez vos données en CSV, Excel ou via API", icon: <CloudDownload />},
    {title: "Multi-campagnes", desc: "Gérez plusieurs campagnes simultanément", icon: <Folders />},
  ]
  return (
    <section id="backoffice">
  <div className="container">
    <div className="backoffice-header">
      <span className="section-badge"><Settings /> Backoffice tout-en-un</span>
      <br />
      <h2>Gérez tout depuis une interface unique</h2>
      <p>Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie</p>
    </div>
    <div className="features-grid">
      {cards.map((card) => (
        <Card title={card.title} desc={card.desc} icon={card.icon} />
      ))}
    </div>
    <div className="features-grid">
      {cards2.map((card) => (
        <Card title={card.title} desc={card.desc} icon={card.icon} />
      ))}
    </div>
    <div className="backoffice-cta">
      <a href="#cta-banner" className="btn-green text-base">Demander un accès au backoffice <ChevronRight /></a>
    </div>
  </div>
</section>
  )
}

export default Backoffice