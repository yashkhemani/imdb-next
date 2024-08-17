"use client";

// for making light and dark theme

import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="cla">
      <div
        className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 
      min-h-screen select-none transition-none duration-300"
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
