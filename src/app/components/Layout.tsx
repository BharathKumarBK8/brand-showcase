"use client";
import Footer from "./Footer/Footer";
import { EnquiryFormProvider } from "../context/EnquiryFormContext";
import LenisProvider from "../LenisProvider";
import PremiumResponsiveHeader from "./PremiumResponsiveHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <EnquiryFormProvider>
        <PremiumResponsiveHeader />
        {children}
        <Footer />
      </EnquiryFormProvider>
    </LenisProvider>
  );
}
