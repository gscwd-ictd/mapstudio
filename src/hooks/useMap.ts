"use-client";

import { useMapStore } from "@mapstudio/lib/store/useMapStore";
import { ZoomSlider } from "ol/control";
import View from "ol/View";
import { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import { defaults as defaultControls } from "ol/control.js";
import { mapStyles } from "@mapstudio/app/components/map/BaseMapLayers";

const useMap = () => {
  const [map, setMap] = useState<Map | null>(null);

  const mapRef = useRef<HTMLDivElement>(null);

  const { Viewport, SetMapRef } = useMapStore((state) => ({
    Viewport: state.viewport,

    SetMapRef: state.setMapRef,
  }));

  useEffect(() => {
    const olMap = new Map({
      target: "mainMap",
      view: new View({
        center: Viewport.center,
        zoom: Viewport.zoom,
        maxZoom: Viewport.maxZoom,
        minZoom: Viewport.minZoom,
      }),

      keyboardEventTarget: document,
      controls: defaultControls().extend([new ZoomSlider()]),
      layers: [mapStyles],
    });

    // set the map ref in the global store
    // let the map to be used in other components
    SetMapRef(olMap);

    // set the map state
    setMap(map);

    // on component unmount remove the map references to avoid unexpected behavior
    return () => {
      // remove the map when the component is unmounted
      olMap.setTarget(undefined);
    };
  }, [Viewport, map]);

  return { map, mapRef };
};

export default useMap;
