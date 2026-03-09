import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StatsSection from "./sections/StatsSection"
import InternshipSection from "./sections/InternshipSection"
import Roadmap from "./sections/Roadmap"
import Vision from "./sections/Vision"
import ProductsSection from "./sections/ProductsSection"
import Ecosystem from "./sections/EcosystemSection"
import CTASection from "./sections/CTASection"

import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      
      <Hero />

      <Vision />
      <ProductsSection />
         <Ecosystem />
      <StatsSection />
      <InternshipSection />
      <Roadmap />
      <CTASection />

    </>
  )
}