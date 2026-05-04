import Navbar from "./components/Navbar"
import MBAHero from "./components/MBAhero"

import WhyNextgraad from "./sections/WhyNextgraad"
import CoreOfferings from "./sections/CoreOfferings"
import PlacementEcosystem from "./sections/PlacementEcosystem"
import MBAStats from "./sections/MBAStats.tsx"
import InternshipHub from "./sections/InternshipHub"
import MBAAdmissionRoadmap from "./sections/MBAAdmissionRoadmap"
import MBAApplyCTA from "./sections/MBAApplyCTA.tsx"

import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>


      <MBAHero />
      <WhyNextgraad />
      <CoreOfferings />
      <PlacementEcosystem />
      <MBAStats />
      <MBAAdmissionRoadmap />
       <InternshipHub />
      <MBAApplyCTA />


    </div>
  )
}