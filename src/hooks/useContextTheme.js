import { SettingContext } from "@/contexts/settingsContext";
import { ThemeContext } from "@/contexts/themeContext";
import { useContext } from "react";

export const useContextTheme = () => useContext(ThemeContext);

export const useContextSetting = () => useContext(SettingContext);
