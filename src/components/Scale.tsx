import { Cloud, Earth, Folders, QrCode, Users } from 'lucide-react'
import React from 'react'

const Scale = () => {
  return (
    <section id="scale">
  <div className="container">
    <div className="scale-row">
      <div className="scale-item">
        <div className="icon-box"><Users /></div>
        <strong>Utilisateurs</strong>
        <p>De 1K à illimité</p>
      </div>
      <div className="scale-item">
        <div className="icon-box"><QrCode /></div>
        <strong>QR Codes</strong>
        <p>Volume adapté</p>
      </div>
      <div className="scale-item">
        <div className="icon-box"><Earth /></div>
        <strong>Couverture</strong>
        <p>Local à mondial</p>
      </div>
      <div className="scale-item">
        <div className="icon-box"><Folders /></div>
        <strong>Albums</strong>
        <p>Standard ou custom</p>
      </div>
      <div className="scale-item">
        <div className="icon-box"><Cloud /></div>
        <strong>Infrastructure</strong>
        <p>Cloud ou On-Premise</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Scale