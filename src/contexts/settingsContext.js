import { createContext, useState } from "react";

export const SettingContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [filterOn, setFilterOn] = useState(false);
  console.log({ filterOn });
  const toggleFilter = () => setFilterOn(!filterOn);

  const contextValue = { filterOn, toggleFilter };

  return (
    <SettingContext.Provider value={contextValue}>
      {children}
    </SettingContext.Provider>
  );
};
