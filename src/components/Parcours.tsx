import { Blocks, Folders, Gift, QrCode, ShoppingCart } from 'lucide-react'

const Parcours = () => {
  return (
    <section id="parcours">
  <div className="container">
    <div className="parcours-header">
      <h2>Un parcours client simple et engageant</h2>
      <p>De l'achat du produit à la récompense, en 5 étapes</p>
    </div>
    <div className="steps-row">
      <div className="step">
        <div className="step-icon-wrap">
          <div className="step-icon"><ShoppingCart /></div>
          
        </div>
        <span className="step-num green">1</span>
        <strong>Achat produit</strong>
        <p>Le client achète votre produit en magasin</p>
      </div>
      <div className="step-connector"></div>
      <div className="step">
        <div className="step-icon-wrap">
          <div className="step-icon"><QrCode /></div>
        </div>
        <span className="step-num green">2</span>
        <strong>Scan QR Code</strong>
        <p>Il scanne le code sur l'emballage</p>
      </div>
      <div className="step-connector"></div>
      <div className="step">
        <div className="step-icon-wrap">
          <div className="step-icon"><Folders /></div>
          
        </div>
        <span className="step-num green">3</span>
        <strong>Déblocage carte</strong>
        <p>Une carte digitale est débloquée</p>
      </div>
      <div className="step-connector"></div>
      <div className="step">
        <div className="step-icon-wrap">
          <div className="step-icon red-step"><Blocks /></div>
          
        </div>
        <span className="step-num red">4</span>
        <strong>Collection</strong>
        <p>Il complète sa collection</p>
      </div>
      <div className="step-connector"></div>
      <div className="step">
        <div className="step-icon-wrap">
          <div className="step-icon red-step"><Gift /></div>
          
        </div>
        <span className="step-num red">5</span>
        <strong>Récompenses</strong>
        <p>Participe aux tirages</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Parcours