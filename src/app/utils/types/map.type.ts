type ViewPort = {
  center: [number, number];
  zoom: number;
  maxZoom?: number;
  minZoom?: number;
};

type TileLayer = {
  attributions: string;
  url: string;
  layers: string;
  visible: boolean;
  preload: number;
  className: string;
};

type LayerVisibility = Pick<TileLayer, "className" | "visible">;

type MapVectorLayers = {
  layersVisibility: Array<LayerVisibility>;
};

type GeoserverLayer = {
  name: string;
  href: string;
};

type DataStore = {
  dataStore: Array<GeoserverLayer>;
};

type DataStores = {
  dataStores: DataStore;
};

export type {
  ViewPort,
  TileLayer,
  LayerVisibility,
  MapVectorLayers,
  GeoserverLayer,
  DataStore,
  DataStores,
};
