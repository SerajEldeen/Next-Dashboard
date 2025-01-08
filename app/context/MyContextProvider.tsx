"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface MyContextType {
  rank: string;
  setRank: (rank: string) => void;
  percentile: string;
  setPercentile: (percentile: string) => void;
  score: string;
  setScore: (score: string) => void;
}

const myContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

function MyContextProvider({ children }: MyContextProviderProps) {
  const [rank, setRank] = useState<string>("10");
  const [percentile, setPercentile] = useState<string>("40");
  const [score, setScore] = useState<string>("10");

  return (
    <myContext.Provider
      value={{ rank, setRank, percentile, setPercentile, score, setScore }}
    >
      {children}
    </myContext.Provider>
  );
}

function useMyContext() {
  const context = useContext(myContext);
  if (context === undefined) {
    throw new Error("myContext was used outside of MyContextProvider");
  }
  return context;
}

export { MyContextProvider, useMyContext };
