import ThemeContextProvider from "../contexts/theme-context";
import Header from "./header";
import Hero from "./hero";

export default function App() {
  return (
    <>
      <ThemeContextProvider>
        <div className="relative flex min-h-screen flex-col bg-background">
          <Header />
          <main className="flex-1">
            <div className="container relative">
              <Hero />
            </div>
          </main>
        </div>
      </ThemeContextProvider>
    </>
  );
}
