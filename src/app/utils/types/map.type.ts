import { BaseLayerOptions } from "@mapstudio/app/utils/enums";
import TileLayer from "ol/layer/Tile";
import TileSource from "ol/source/Tile";

type ViewPort = {
  center: [number, number];
  zoom: number;
  maxZoom?: number;
  minZoom?: number;
};

type TileLayerType = {
  attributions: string;
  url: string;
  layers: string;
  visible: boolean;
  preload: number;
  className: string;
};

type LayerVisibility = Pick<TileLayerType, "className" | "visible">;

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

type BaseMapConfig = {
  title: BaseLayerOptions;
  layer: TileLayer<TileSource>;
};

export type {
  ViewPort,
  TileLayerType,
  LayerVisibility,
  MapVectorLayers,
  GeoserverLayer,
  DataStore,
  DataStores,
  BaseMapConfig,
};
