import { BaseMapConfig } from "@mapstudio/app/utils/types";
import LayerGroup from "ol/layer/Group";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import BingMaps from "ol/source/BingMaps.js";
import { BaseLayerOptions } from "@mapstudio/app/utils/enums";

export const BaseMapLayers: BaseMapConfig[] = [
  // Set to true to set as default base map layer
  {
    title: BaseLayerOptions.OSM,
    layer: new TileLayer({
      source: new OSM(),
      visible: true,
      preload: Infinity,
      className: BaseLayerOptions.OSM,
    }),
  },

  {
    title: BaseLayerOptions.OSM_V2,
    layer: new TileLayer({
      source: new OSM({
        url: `https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      }),
      visible: false,
      preload: Infinity,
      className: BaseLayerOptions.OSM_V2,
    }),
  },

  {
    title: BaseLayerOptions.BING_AERIAL,
    layer: new TileLayer({
      source: new BingMaps({
        key: `${process.env.NEXT_PUBLIC_BING_KEY}`,
        imagerySet: `AerialWithLabelsOnDemand`,
      }),
      visible: false,
      preload: Infinity,
      className: BaseLayerOptions.BING_AERIAL,
    }),
  },
];

// get the layers from the layerList
// to be used in the layer group
const layers = BaseMapLayers.map((layer) => layer.layer);

// create the layer group
export const mapStyles = new LayerGroup({
  layers,
});
