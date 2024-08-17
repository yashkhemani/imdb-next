"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div>
      <div>
        {mounted &&
          (currentTheme === "dark" ? (
            <MdLightMode
              onClick={() => setTheme("light")}
              className="text-xl cursor-pointer hover:text-amber-200"
            />
          ) : (
            <MdDarkMode
              onClick={() => setTheme("dark")}
              className="text-xl cursor-pointer hover:text-amber-200"
            />
          ))}
      </div>
    </div>
  );
};

export default DarkModeSwitch;
