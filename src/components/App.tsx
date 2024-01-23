import ThemeContextProvider from "../contexts/theme-context";
import ThemeSwitch from "./theme-switch";

export default function App() {
  return (
    <>
      <ThemeContextProvider>
        <div className="dark:bg-slate-500"></div>
        <ThemeSwitch />
      </ThemeContextProvider>
    </>
  );
}
