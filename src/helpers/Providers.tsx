"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="light" themes={["light", "dark1", "dark2"]}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
