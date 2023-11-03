import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  // window.addEventListener("scroll", function() {
  //   var navbar = document.querySelector(".container__wrap");
  //   navbar.classList.toggle("scrolled", window.scrollY > 0);
  // });
  

  return (
    <>
      <div className='container mx-auto px-4 sm:px-6 md:px-8 items-center justify-center font-mono text-white text-base'>
        <Header />
          <Hero />
          <Features />
          <Contact/>
        <Footer />
      </div>
    </>
  )
}

export default App
