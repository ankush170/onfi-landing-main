import { useState } from "react";

import HeroSection from "@/components/landing/HeroSection";
import Nav from "@/components/landing/Nav";
import WorksWith from "@/components/landing/WorksWith";
import AutomateFinance from "@/components/landing/AutomateFinance";
import BackedBy from "@/components/landing/BackedBy";
import NeoGPTSection from "@/components/landing/NeoGPTSection";
import MediaArticles from "@/components/landing/MediaArticles";
import ReliableSection from "@/components/landing/ReliabeSection";
import DeployedSecurely from "@/components/landing/DeployedSecurely";
import OurBlog from "@/components/landing/OurBlog";
import Footer from "@/components/landing/Footer";
import Certifications from "@/components/landing/Certifications";


export default function Home() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div
      onClick={() => {
        setOpenNav(false);
      }}
      className="w-screen min-h-screen flex flex-col items-center bg-[#FEFDF5]"
    >
      <Nav openNav={openNav} setOpenNav={setOpenNav} />

      {/* Full-width sections with IDs for internal linking */}
      <div id="hero" className="w-full">
        <HeroSection />
      </div>

      <div className="w-full">
        <WorksWith />
        <Certifications />
      </div>

      <div id="features" className="w-full">
        <AutomateFinance />
        <BackedBy />
        {/* <NeoGPTSection /> */}
      </div>

      <div id="neogpt" className="w-full">
        <NeoGPTSection />
      </div>

      <div className="w-full">
        <MediaArticles />
      </div>

      <div id="pricing" className="w-full">
        <DeployedSecurely />
        <ReliableSection />
      </div>

      <div id="blogs" className="w-full">
        <OurBlog />
      </div>

      <div id="contact" className="w-full">
        <Footer />
      </div>
    </div>
  );
}
