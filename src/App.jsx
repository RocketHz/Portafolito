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

  window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".body-wrap");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  });
  

  return (
    <>
      <div className='aqui'>
        <Header />
          <Hero />
          <Features />
        <Footer />
      </div>
    </>
  )
}

export default App
