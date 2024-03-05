import { ThemeContext } from "@/contexts/themeContext";
import { useContext } from "react";

export const useContextTheme = () => useContext(ThemeContext);
