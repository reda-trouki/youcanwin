import Backoffice from "./components/Backoffice"
import Benifits from "./components/Benifits"
import Catalog from "./components/Catalog"
import CTABanner from "./components/CTABanner"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Parcours from "./components/Parcours"
import Pricing from "./components/Pricing"
import Scale from "./components/Scale"
import Solution from "./components/Solution"
import Stats from "./components/Stats"


function App() {

  return (
    <main>
      <Nav />
      <Hero />
      <Solution />

      <Parcours />
      <Benifits />
      <Backoffice />
      <Scale />
      <Pricing />
      <Catalog />
      <Stats />
      <CTABanner />
      <Footer />
    </main>
  )
}

export default App
