import React from "react";
import { Hero } from "../components/Hero";
import { BrandLogos } from "../components/BrandLogos";
import { About } from "../components/About";
import { Capabilities } from "../components/Capabilities";
import { PortfolioList } from "../components/PortfolioList";
import { Packages } from "../components/Packages";
import { Process } from "../components/Process";
import { CallToAction } from "../components/CallToAction";
import { Contact } from "../components/Contact";
import { Faq } from "../components/Faq";

const Home = () => (
  <>
    <div id="home"><Hero /></div>
    <BrandLogos />
    <About />
    <Capabilities />
    <PortfolioList />
    <Packages />
    <Process />
    <CallToAction />
    <Contact />
    <Faq />
  </>
);

export default Home;
