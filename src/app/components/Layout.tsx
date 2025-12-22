"use client";
import { usePathname } from "next/navigation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { EnquiryFormProvider } from "../context/EnquiryFormContext";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <EnquiryFormProvider>
      {isHomePage && <Header onNavigate={scrollToSection} />}
      {children}
      <Footer />
    </EnquiryFormProvider>
  );
}
