import ThemeContextProvider from "../contexts/theme-context";
import Header from "./header";

export default function App() {
  return (
    <>
      <ThemeContextProvider>
        <div className="dark:bg-slate-500"></div>
        <Header />
      </ThemeContextProvider>
    </>
  );
}
