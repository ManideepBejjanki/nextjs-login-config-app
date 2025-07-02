import { createContext, useContext, useState } from "react";

export interface Config {
  logo: File | null;
  appName: string;
  contactEmail: string;
  supportPhone: string;
  language: "en" | "es" | "fr";
  timezone: string;
  dateFormat: "MM/DD/YYYY" | "DD/MM/YYYY";
  maintenanceMode: boolean;
}

interface ConfigContextProps {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
}

const defaultConfig: Config = {
  logo: null,
  appName: "MyApp",
  contactEmail: "support@example.com",
  supportPhone: "+91 1234567890",
  language: "en",
  timezone: "Asia/Kolkata",
  dateFormat: "MM/DD/YYYY",
  maintenanceMode: false,
};

const ConfigContext = createContext<ConfigContextProps | undefined>(undefined);

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [config, setConfig] = useState<Config>(defaultConfig);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useConfig must be used inside ConfigProvider");
  return context;
};
