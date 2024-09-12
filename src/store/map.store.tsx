import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type MapState = {
  selectedBaseMap: string;
  setSelectedBaseMap: (selectedBaseMap: string) => void;

  // errorTardinessChartData: string;
  // setErrorTardinessChartData: (errorTardinessChartData: string) => void;

  // emptyResponse: () => void;
};

export const useMapStore = create<MapState>()(
  devtools((set) => ({
    selectedBaseMap: "",
    setSelectedBaseMap: (selectedBaseMap) => set({ selectedBaseMap }),

    // errorTardinessChartData: '',
    // setErrorTardinessChartData: (errorTardinessChartData) => set({ errorTardinessChartData }),

    // emptyResponse: () =>
    //   set({
    //     errorTardinessChartData: '',
    //   }),
  }))
);
