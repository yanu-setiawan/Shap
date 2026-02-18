import { Footer, Navbar } from "@/components";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full mx-auto relative">
      <Navbar />
      <div className="relative -top-14">{children}</div>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
