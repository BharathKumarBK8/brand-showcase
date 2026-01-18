"use client";
import { useState } from "react";
import Footer from "./Footer/Footer";
import LenisProvider from "../LenisProvider";
import Header from "./Header/Header";
import MobileStickyCTA from "./MobileStickyCTA";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <LenisProvider>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
      <Footer />
      <MobileStickyCTA menuOpen={menuOpen} />
    </LenisProvider>
  );
}
