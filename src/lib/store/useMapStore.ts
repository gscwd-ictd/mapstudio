/* eslint-disable no-unused-vars */
import { TileLayer, ViewPort } from "@mapstudio/app/utils/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Map, View } from "ol";

export type MapState = {
  // Map View configuration
  viewport: ViewPort;
  setViewport: (viewport: MapState["viewport"]) => void;

  // Reference to the OpenLayers Map instance
  mapRef: Map | null;
  setMapRef: (map: Map | null) => void;

  selectedBaseMap: string;
  setSelectedBaseMap: (selectedBaseMap: string) => void;

  geoserverLayers: Array<TileLayer>;
  setGeoserverLayer: (geoserverLayer: TileLayer) => void;

  setLayerVisibility: (index: number, visibility: boolean) => void;

  // errorTardinessChartData: string;
  // setErrorTardinessChartData: (errorTardinessChartData: string) => void;

  // emptyResponse: () => void;
};

export const useMapStore = create<MapState>()(
  devtools((set) => ({
    // default map view options
    viewport: {
      center: [13933982.685607675, 682010.0185691282],
      zoom: 14,
      maxZoom: 20,
      minZoom: 12,
    },
    setViewport: (viewport) => set({ viewport }),

    // Map reference
    mapRef: null,
    setMapRef: (map) => set({ mapRef: map }),

    selectedBaseMap: "",
    setSelectedBaseMap: (selectedBaseMap) => set({ selectedBaseMap }),

    geoserverLayers: [],
    setGeoserverLayer: (geoserverLayer: TileLayer) =>
      set((state) => ({ geoserverLayers: [...state.geoserverLayers, geoserverLayer] })),

    setLayerVisibility: (index: number, visibility: boolean) => set((state) => ({})),

    // errorTardinessChartData: '',
    // setErrorTardinessChartData: (errorTardinessChartData) => set({ errorTardinessChartData }),

    // emptyResponse: () =>
    //   set({
    //     errorTardinessChartData: '',
    //   }),
  }))
);
