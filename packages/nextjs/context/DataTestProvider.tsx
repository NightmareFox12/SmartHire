"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

interface DataContextProps {
  isDaoExist: boolean;
  setIsDaoExist: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataTestContext = createContext<DataContextProps | undefined>(undefined);

export const useData = (): DataContextProps => {
  const context = useContext(DataTestContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataTestProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [isDaoExist, setIsDaoExist] = useState<boolean>(false);

  return (
    <DataTestContext.Provider value={{ isDaoExist, setIsDaoExist }}>
      {children}
    </DataTestContext.Provider>
  );
};
