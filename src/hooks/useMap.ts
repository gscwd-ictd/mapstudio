"use-client";

import { useMapStore } from "@mapstudio/lib/store/useMapStore";
import { ZoomSlider } from "ol/control";
import TileLayer from "ol/layer/Tile";
import { BingMaps, OSM } from "ol/source";
import View from "ol/View";
import { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import { defaults as defaultControls } from "ol/control.js";

const useMap = () => {
  const mapDivRef = useRef<HTMLDivElement>(null);

  const [olMap, setOlMap] = useState<Map | null>(null);

  // Zustand initialization
  const { ViewPort } = useMapStore((state) => ({
    ViewPort: state.viewPort,
  }));

  useEffect(() => {
    // const maptilerKey = process.env.NEXT_PUBLIC_MAPTILER_KEY;

    // BASE LAYERS
    // const osmStandard = new TileLayer({
    //   source: new OSM({
    //     url: `https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=${maptilerKey}`,
    //   }),
    //   visible: false,
    //   preload: Infinity,
    //   className: "osmStandard",
    // });

    // const osmV2 = new TileLayer({
    //   source: new OSM({
    //     url: `https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${maptilerKey}`,
    //   }),
    //   visible: false,
    //   preload: Infinity,
    //   className: "osmV2",
    // });

    // const bingMaps = new TileLayer({
    //   source: new BingMaps({
    //     key: `${process.env.NEXT_PUBLIC_BING_KEY}`,
    //     imagerySet: `AerialWithLabelsOnDemand`,
    //   }),
    //   visible: false,
    //   preload: Infinity,
    //   className: "bingMaps",
    // });

    // const map = new Map({
    //   target: mapDivRef as HTMLDivElement,
    //   layers: [osmStandard, osmV2, bingMaps],
    //   keyboardEventTarget: document,
    //   controls: defaultControls().extend([new ZoomSlider()]),
    //   view: new View(ViewPort),
    // });

    // Set Visibility of Selected Base Map
    // const mapBaseTileLayers = map.getLayers().getArray();
    // mapBaseTileLayers.map((layer: any) => {
    //   if (SelectedBaseMap === layer.className_) {
    //     layer.setVisible(true);
    //   } else {
    //     layer.setVisible(false);
    //   }
    // });

    // Add geoserver layers to map
    // if (!isEmpty(GeoserverLayers)) {
    //   GeoserverLayers.map((layer) => {
    //     let newTileLayer = new TileLayer({
    //       source: new TileWMS({
    //         attributions: layer.attributions,
    //         url: layer.url,
    //         params: {
    //           LAYERS: layer.layers,
    //         },
    //       }),
    //       visible: layer.visible,
    //       preload: layer.preload,
    //       className: layer.className,
    //     });

    //     map.addLayer(newTileLayer);
    //   });
    // }

    const osmStandard = new TileLayer({
      source: new OSM({
        url: `https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
      }),
      visible: false,
      preload: Infinity,
      className: "osmStandard",
    });

    const map = new Map({
      target: mapDivRef.current!,
      layers: [osmStandard],
      keyboardEventTarget: document,
      controls: defaultControls().extend([new ZoomSlider()]),
      view: new View(
        { center: [13933982.685607675, 682010.0185691282], zoom: 14, maxZoom: 20, minZoom: 12 }
        // ViewPort
      ),
    });

    // map.setTarget("mapDivRef");
    setOlMap(map);
    return () => {
      map.setTarget(undefined);
    };
    // SelectedBaseMap, GeoserverLayers
  }, [mapDivRef]);

  // return { mapDivRef, olMap };
};

export default useMap;
