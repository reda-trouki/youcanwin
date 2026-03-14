import { ChevronRight } from 'lucide-react'

const Catalog = () => {

  return (
    <section id="catalog">
  <div className="container">
    <div className="catalog-header">
      <h2>Catalogue de jeux</h2>
      <p>Des mécaniques éprouvées pour engager vos audiences</p>
    </div>
    <div className="games-grid">
      <div className="game-card">
        <div className="game-img">
          <img src="/images/catalog-1.jpg" alt="Album" />
          <span className="game-badge star">STAR</span>
        </div>
        <div className="game-info">
          <h3>Album Digital 2025</h3>
          <p>Collection de cartes avec échanges et défis.</p>
          <a href="#">Découvrir <ChevronRight /></a>
        </div>
      </div>
      <div className="game-card">
        <div className="game-img">
          <img src="/images/catalog-2.png" alt="Quiz" />
          <span className="game-badge soon">BIENTÔT</span>
        </div>
        <div className="game-info">
          <h3>Quiz Football</h3>
          <p>Questions sur l'actualité et l'histoire du foot.</p>
        </div>
      </div>
      <div className="game-card">
        <div className="game-img">
            <img src="/images/catalog-3.png" alt="Tombola" />
          </div>
        <div className="game-info">
          <h3>Tombola digitale</h3>
          <p>Tirages au sort avec lots sponsorisés.</p>
        </div>
      </div>
      <div className="game-card">
        <div className="game-img">
          <img src="/images/catalog-4.png" alt="Pronostics" />
          </div>
        <div className="game-info">
          <h3>Pronostics</h3>
          <p>Prédictions de matchs et classNameements.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Catalog