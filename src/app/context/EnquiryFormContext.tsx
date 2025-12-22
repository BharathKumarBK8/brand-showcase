"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface EnquiryFormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const EnquiryFormContext = createContext<EnquiryFormContextType | undefined>(
  undefined
);

export const EnquiryFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <EnquiryFormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </EnquiryFormContext.Provider>
  );
};

export const useEnquiryForm = () => {
  const context = useContext(EnquiryFormContext);
  if (!context) {
    throw new Error("useEnquiryForm must be used within EnquiryFormProvider");
  }
  return context;
};
