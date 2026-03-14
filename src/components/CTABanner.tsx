import { Calendar, Mail } from 'lucide-react'
import React from 'react'

const CTABanner = () => {
  return (
    <section id="cta-banner">
  <h2>Prêt à transformer votre marketing ?</h2>
  <p>Rejoignez les marques qui engagent leurs fans avec YouCanWin</p>
  <div className="cta-group">
    <a href="#" className="btn-white"><Calendar /> Planifier une démo gratuite</a>
    <a href="#" className="btn-outline-white"><Mail /> Nous contacter</a>
  </div>
</section>
  )
}

export default CTABanner