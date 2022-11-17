import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

type Props = {};

function useDarkSide() {
  const [theme, setTheme] = useState("light");
  const colorTheme: string = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}

function DarkModeSwitcher({ }: Props) {
  const [colorTheme, setTheme] = useDarkSide();
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <div className="inline-flex items-center justify-center">
      <DarkModeSwitch
        style={{
          marginLeft: "1rem",
          marginRight: "0.5rem",
        }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
        moonColor="#DCD7C9"
        sunColor="#000000"
      />
      {/* tailwindcss utility works from smallest to largest screensize */}
      {/* hidden -> mobile screen hide the text */}
      {/* uppercase md:inline-flex text-sm -> medium screen size show text in uppercase, small font and gray color */}
      <div id="navbartext" className="cursor-none uppercase hidden md:inline-flex text-sm text-lightinline dark:text-darkinline mx-4">
        Toggle Me for <span className="mx-1">{colorTheme === "light" ? "Light Mode!" : "Dark Mode!"}</span>
      </div>
    </div>
  );
}

export default DarkModeSwitcher;
