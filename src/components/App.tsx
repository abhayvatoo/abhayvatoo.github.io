import { Separator } from "@/components/ui/separator";

import ThemeContextProvider from "../contexts/ThemeContext";

import Header from "./Header";
import Hero from "./Hero";
import Experience from "./Experience";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <main>
          <Hero />
          <Separator />
          <Experience />
          <Separator />
        </main>
        <Footer />
      </ThemeContextProvider>
    </>
  );
}
