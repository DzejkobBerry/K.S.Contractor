"use client";

import React from "react";
import { LanguageProvider } from "@/src/context/LanguageContext";
import { LanguageModal } from "@/src/components/LanguageModal";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { FloatingActions } from "@/src/components/FloatingActions";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <LanguageModal />
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
