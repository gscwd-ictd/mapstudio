"use client";

import { FunctionComponent, useEffect, useState } from "react";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import BingMaps from "ol/source/BingMaps.js";
import { OSM, TileWMS } from "ol/source";
import ZoomSlider from "ol/control/ZoomSlider.js";
import { defaults as defaultControls } from "ol/control.js";

import NavSidebar from "./NavSidebar";
import BaseLayerPicker from "./BaseLayerPicker";
import { useMapStore } from "@mapstudio/store/map.store";

const MapComponent: FunctionComponent = () => {
  const gensanLatLong = [13933982.685607675, 682010.0185691282];

  // zustand initialization
  const { SelectedBaseMap } = useMapStore((state) => ({
    SelectedBaseMap: state.selectedBaseMap,
  }));

  useEffect(() => {
    const maptilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;

    // BASE LAYERS
    const osmStandard = new TileLayer({
      source: new OSM({
        url: `https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=${maptilerKey}`,
      }),
      visible: false,
      preload: Infinity,
      className: "osmStandard",
    });

    const osmV2 = new TileLayer({
      source: new OSM({
        url: `https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${maptilerKey}`,
      }),
      visible: false,
      preload: Infinity,
      className: "osmV2",
    });

    const bingMaps = new TileLayer({
      source: new BingMaps({
        key: `${process.env.NEXT_PUBLIC_BING_KEY}`,
        imagerySet: `AerialWithLabelsOnDemand`,
      }),
      visible: false,
      preload: Infinity,
      className: "bingMaps",
    });

    const map = new Map({
      target: "map",
      layers: [osmStandard, osmV2, bingMaps],
      keyboardEventTarget: document,
      controls: defaultControls().extend([new ZoomSlider()]),
      view: new View({
        center: gensanLatLong,
        zoom: 14,
        maxZoom: 20,
        minZoom: 12,
      }),
    });

    // Water Meters
    const waterMeterLayer = new TileLayer({
      source: new TileWMS({
        attributions: "@geoserver",
        url: "http://172.20.110.69:8080/geoserver/gismapping3/wms?",
        params: {
          LAYERS: "gismapping3:WM2024_22",
        },
      }),
      visible: false,
      preload: Infinity,
      className: "waterMeterLayer",
    });

    // Pipelines
    const pipeLinesLayer = new TileLayer({
      source: new TileWMS({
        attributions: "@geoserver",
        url: "http://172.20.110.69:8080/geoserver/gismapping3/wms?",
        params: {
          LAYERS: "gismapping3:Pipeline2024_28",
        },
      }),
      preload: Infinity,
      className: "pipeLinesLayer",
    });

    // Set Visibility of Selected Base Map
    const mapBaseTileLayers = map.getLayers().getArray();
    mapBaseTileLayers.map((layer: any) => {
      if (SelectedBaseMap === layer.className_) {
        layer.setVisible(true);
      } else {
        layer.setVisible(false);
      }
    });

    // set the map state
    // setOlMap(map);
    map.addLayer(pipeLinesLayer);
    map.addLayer(waterMeterLayer);

    return () => map.setTarget(undefined);
  }, [SelectedBaseMap]);

  return (
    <>
      <NavSidebar />

      <BaseLayerPicker />

      <div id="map"></div>
    </>
  );
};

export default MapComponent;
