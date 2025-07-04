"use client";

import { AboutUs, ContactForm, HeroSection, Projects } from "@/templates";
import { InfoServices } from "@/templates/infoServices/infoServices";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfoServices />
      <Projects />
      <AboutUs />
      <ContactForm />
    </div>
  );
}
