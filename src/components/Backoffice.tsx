import { Bell, ChartColumnBig, ChevronRight, CloudDownload, Folders, Gift, QrCode, Settings, SlidersVertical, UsersRound } from 'lucide-react'
import React from 'react'

const Backoffice = () => {
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
      <div className="f-card">
        <div className="icon-box"><QrCode /></div>
        <h3>Générateur QR Codes</h3>
        <p>Créez et téléchargez vos QR codes uniques en masse</p>
      </div>
      <div className="f-card">
        <div className="icon-box"><UsersRound /></div>
        <h3>CRM Participants</h3>
        <p>Collectez et gérez vos participants avec segmentation avancée</p>
      </div>
      <div className="f-card">
        <div className="icon-box"><SlidersVertical /></div>
        <h3>Configuration jeux</h3>
        <p>Paramétrez entièrement vos jeux : règles, lots, durée, visuels</p>
      </div>
      <div className="f-card">
        <div className="icon-box"><ChartColumnBig /></div>
        <h3>Analytics temps réel</h3>
        <p>Suivez vos KPIs : scans, conversions, engagement, ROI</p>
      </div>
    </div>
    <div className="features-grid">
      <div className="f-card">
        <div className="icon-box"><Gift /></div>
        <h3>Gestion des lots</h3>
        <p>Définissez vos récompenses et gérez les tirages au sort</p>
      </div>
      <div className="f-card">
        <div className="icon-box"><Bell /></div>
        <h3>Notifications</h3>
        <p>Envoyez des push, emails et SMS à vos participants</p>
      </div>
      <div className="f-card">
        <div className="icon-box"><CloudDownload /></div>
        <h3>Export données</h3>
        <p>Téléchargez vos données en CSV, Excel ou via API</p>
      </div>
      <div className="f-card">
        <div className="icon-box"><Folders /></div>
        <h3>Multi-campagnes</h3>
        <p>Gérez plusieurs campagnes simultanément</p>
      </div>
    </div>
    <div className="backoffice-cta">
      <a href="#cta-banner" className="btn-green text-base">Demander un accès au backoffice <ChevronRight /></a>
    </div>
  </div>
</section>
  )
}

export default Backoffice