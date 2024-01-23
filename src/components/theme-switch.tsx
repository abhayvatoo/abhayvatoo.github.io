import { BsMoon, BsSun } from "react-icons/bs";
import useTheme from "../hooks/useTheme";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  console.log("theme:", theme);

  return (
    <button
      className="fixed top-5 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur-sm border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.2] active:scale-105 transition-all dark:bg-orange-300"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
