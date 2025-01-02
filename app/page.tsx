import Home from "@/components/Home"
import HowItWorks from "@/components/HowItWorks"
import FeaturedProducts from "@/components/FeaturedProducts"
import ImpactMetrics from "@/components/ImpactMetrics"
import React from "react"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import AboutUs from "@/components/AboutUs"
import Footer from "@/components/Footer"



const page = () => {
  return (
    <div>
      <Home />
      <HowItWorks id="how-it-works" />
      <FeaturedProducts id="featured-products" />
      <ImpactMetrics id="impact-metrics" />
      <Testimonials />
      <Pricing id="pricing" />
      <AboutUs id="about-us" />
      <Footer />
    </div>
  )
}

export default page
