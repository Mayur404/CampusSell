import Navbar from '../components/Navbar.tsx'
import Features from '../components/features.tsx'
import Cta from '../components/CTA.tsx'
import Hero from '../components/Hero.tsx'
import Footer from '../components/footer.tsx'

const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Cta/>  
    <Footer/>
    </>
  )
}

export default LandingPage