"use client";
import { useState } from "react";
import Footer from "./Footer/Footer";
import { EnquiryFormProvider } from "../context/EnquiryFormContext";
import LenisProvider from "../LenisProvider";
import PremiumResponsiveHeader from "./PremiumResponsiveHeader";
import MobileStickyCTA from "./MobileStickyCTA";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <LenisProvider>
      <EnquiryFormProvider>
        <PremiumResponsiveHeader
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        {children}
        <Footer />
        <MobileStickyCTA menuOpen={menuOpen} />
      </EnquiryFormProvider>
    </LenisProvider>
  );
}
