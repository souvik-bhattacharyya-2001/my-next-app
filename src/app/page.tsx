"use client";

import Navbar from "@/component/shared/navbar";
import Banner from "@/component/sections/banner";
import Footer from "@/component/shared/footer";

export default function Page() {
  return (
    <main className="bg-white">
      <Navbar />
      <Banner />
      <Footer />
    </main>
  );
}
