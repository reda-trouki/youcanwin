import { ChevronRight, Gift, Lightbulb, QrCode } from "lucide-react"

const Hero = () => {
    return (
        <section className="hero-section" >
            <div id="hero">
                {/* <!-- LEFT --> */}
                <div className="hero-left">
                    <h1>Transformez chaque <span>produit</span> en expérience de jeu</h1>
                    <p className="hero-desc">
                        YouCanWin connecte vos marques aux fans de football à travers des mécaniques de gamification innovantes.
                        <strong>Codes QR, cartes digitales, défis et récompenses.</strong>
                    </p>
                    
                    <div className="hero-stats">
                        <div className="hero-stat"><strong>500K+</strong><span>Interactions/mois</span></div>
                        <div className="hero-stat"><strong className="text-red-600">50+</strong><span>Marques Actives</span></div>
                        <div className="hero-stat"><strong>x3.5</strong><span>ROI moyen</span></div>
                    </div>
                    <div className="hero-cta-group">
                        <a href="#solution" className="btn-green ctn">Voir la démo <ChevronRight /></a>
                        <a href="#parcours" className="btn-outline ctn"><Lightbulb size={20} /> Comment ça marche</a>
                    </div>
                    <div className="hero-trust">
                        <p className="hero-trust-label">Ils nous font confiance</p>
                        <div className="trust-logos">
                            <span>Maroc Telecom</span>
                            <span>Inwi</span>
                            <span>Orange</span>
                            <span>Carrefour</span>
                        </div>
                    </div>
                </div>

                {/* <!-- RIGHT – Phone mockup --> */}
                <div className="hero-right">
                    <div className="phone-wrap">
                        {/* <!-- QR badge --> */}
                        <div className="qr-badge">
                            <div className="qr-badge-icon"><QrCode /></div>
                            <div>
                                <p>Scan QR Code</p>
                                <p>Débloquer une carte</p>
                            </div>
                        </div>

                        <div className="phone">
                            <div className="phone-header">
                                <p className="album-label">Album Digital 2025</p>
                                <h3>Ma Collection</h3>
                                <div className="phone-stats">
                                    <div className="phone-stat"><strong>127</strong><p>Cartes</p></div>
                                    <div className="phone-stat"><strong>76%</strong><p>Complet</p></div>
                                    <div className="phone-stat"><strong>#12</strong><p>Rang</p></div>
                                </div>
                            </div>
                            <div className="phone-grid">
                                <div className="phone-card filled"></div>
                                <div className="phone-card"></div>
                                <div className="phone-card filled"></div>
                                <div className="phone-card"></div>
                                <div className="phone-card filled"></div>
                                <div className="phone-card"></div>
                                <div className="phone-card filled"></div>
                                <div className="phone-card"></div>
                                <div className="phone-card"></div>
                            </div>
                            <div className="bottom-tabs">
                                <div className="tab-item"><div className="tab-icon"></div><span className="tab-label">Scanner</span></div>
                                <div className="tab-item"><div className="tab-icon"></div><span className="tab-label">Scanner</span></div>
                                <div className="tab-item"><div className="tab-icon"></div><span className="tab-label">Échanges</span></div>
                                <div className="tab-item"><div className="tab-icon"></div><span className="tab-label">Profil</span></div>
                            </div>
                        </div>

                        {/* <!-- Bottom bar --> */}
                        <div className="phone-bottom-bar">
                            <div className="reward-item">
                                <div className="reward-icon"><Gift /></div>
                                <div>
                                    <p>Récompense</p>
                                    <p>Tirage hebdomadaire</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero