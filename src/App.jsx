import './App.css'
import './css/header.css'
import './css/hero.css'
import './css/features.css'
import './css/footer.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
