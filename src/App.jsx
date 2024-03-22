import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  // window.addEventListener("scroll", function() {
  //   var navbar = document.querySelector(".container__wrap");
  //   navbar.classList.toggle("scrolled", window.scrollY > 0);
  // });

  return (
    
    <main className="bg-gradient-to-b from-light-bg-100 to-light-bg-300 dark:bg-gradient-to-b dark:from-oscure-bg-100  dark:to-oscure-bg-300">
      <Header />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
