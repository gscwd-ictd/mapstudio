"use client";

import { FunctionComponent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import BingMaps from "ol/source/BingMaps.js";
import { OSM, TileWMS, Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import ZoomSlider from "ol/control/ZoomSlider.js";
import { defaults as defaultControls } from "ol/control.js";

import NavSidebar from "./NavSidebar";
import BaseLayerPicker from "./BaseLayerPicker";
import { useMapStore } from "@mapstudio/lib/store/useMapStore";
import { VectorLayers } from "@mapstudio/app/utils/enums";
import { isEmpty } from "lodash";
import Feature from "ol/Feature";
import { Point } from "ol/geom";
import { fromLonLat, toLonLat } from "ol/proj";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import MarkerIcon from "../../../../public/images/map-pin.png";
import { DataStores, GeoserverLayer } from "@mapstudio/app/utils/types";
import useMap from "@mapstudio/hooks/useMap";

const MapComponent: FunctionComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map | null>(null);

  // Zustand initialization
  const { Viewport } = useMapStore((state) => ({
    SelectedBaseMap: state.selectedBaseMap,

    GeoserverLayers: state.geoserverLayers,
    SetGeoserverLayer: state.setGeoserverLayer,

    Viewport: state.viewport,
  }));

  // fetch layers under workspace->gismapping3
  // const queryClient = useQueryClient();

  // const { status, data, error } = useQuery({
  //   queryKey: ["geoserver-layers"],
  //   refetchOnReconnect: false,
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  //   queryFn: async () => {
  //     const { data } = await axios.get(
  //       // `${geoserverUrl}/rest/workspaces/${geoserverWorkspace}/datastores.json`,
  //       `http://172.20.10.59:3000/api/layers`
  //     );

  //     data.dataStores.dataStore.map((layer: GeoserverLayer) => {
  //       let tileLayer = {
  //         attributions: "@geoserver",
  //         url: `${process.env.NEXT_PUBLIC_GEOSERVER_URL}/${process.env.NEXT_PUBLIC_GEOSERVER_WORKSPACE}/wms?`,
  //         layers: `${process.env.NEXT_PUBLIC_GEOSERVER_WORKSPACE}:${layer.name}`,
  //         visible: false,
  //         preload: Infinity,
  //         className: `${layer.name}`,
  //       };

  //       SetGeoserverLayer(tileLayer);
  //     });

  //     return data;
  //   },
  // });

  // useEffect(() => {
  // BASE LAYERS
  // const osmStandard = new TileLayer({
  //   source: new OSM({
  //     url: `https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
  //   }),
  //   visible: false,
  //   preload: Infinity,
  //   className: "osmStandard",
  // });

  // const osmV2 = new TileLayer({
  //   source: new OSM({
  //     url: `https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
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

  // const olMap = new Map({
  //   target: mapRef.current!,
  //   // layers: [osmStandard, osmV2, bingMaps],
  //   layers: [
  //     new TileLayer({
  //       source: new OSM(),
  //     }),
  //   ],
  //   // keyboardEventTarget: document,
  //   // controls: defaultControls().extend([new ZoomSlider()]),
  //   view: new View({
  //     center: [13933982.685607675, 682010.0185691282],
  //     zoom: 14,
  //     maxZoom: 20,
  //     minZoom: 12,
  //   }),
  // });

  // set the map state
  // setMap(map);

  // on component unmount remove the map references to avoid unexpected behavior
  // return () => {
  //   // remove the map when the component is unmounted
  //   olMap.setTarget(undefined);
  // };

  // // Water Meters
  // const waterMeterLayer = new TileLayer({
  //   source: new TileWMS({
  //     attributions: "@geoserver",
  //     url: "http://172.20.110.69:8080/geoserver/gismapping3/wms?",
  //     params: {
  //       LAYERS: "gismapping3:WM2024_22",
  //     },
  //   }),
  //   visible: false,
  //   preload: Infinity,
  //   className: "waterMeterLayer",
  // });

  // // Pipelines
  // const pipeLinesLayer = new TileLayer({
  //   source: new TileWMS({
  //     attributions: "@geoserver",
  //     url: "http://172.20.110.69:8080/geoserver/gismapping3/wms?",
  //     params: {
  //       LAYERS: "gismapping3:Pipeline2024_28",
  //     },
  //   }),
  //   visible: false,
  //   preload: Infinity,
  //   className: "pipeLinesLayer",
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
  //       visible: false,
  //       preload: layer.preload,
  //       className: layer.className,
  //     });

  //     map.addLayer(newTileLayer);
  //   });
  // }

  // marker
  // const marker = new VectorLayer({
  //   source: new VectorSource({
  //     features: [
  //       new Feature({
  //         geometry: new Point([13933982.685607675, 682010.0185691282]),
  //       }),
  //     ],
  //   }),

  //   style: new Style({
  //     image: new Icon({
  //       anchor: [0.5, 1],
  //       crossOrigin: "anonymous",
  //       src: MarkerIcon.src,
  //     }),
  //   }),
  // });
  // map.addLayer(marker);

  // set the map state
  // setOlMap(map);
  // map.addLayer(pipeLinesLayer);
  // map.addLayer(waterMeterLayer);

  // return () => map.setTarget(undefined);
  // }, [mapRef]);
  // SelectedBaseMap, GeoserverLayers

  useEffect(() => {
    const olMap = new Map({
      target: mapRef.current!,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      keyboardEventTarget: document,
      controls: defaultControls().extend([new ZoomSlider()]),
      view: new View({
        center: Viewport.center,
        zoom: Viewport.zoom,
        maxZoom: Viewport.maxZoom,
        minZoom: Viewport.minZoom,
      }),
    });

    // set the map state
    setMap(map);

    // on component unmount remove the map references to avoid unexpected behavior
    return () => {
      // remove the map when the component is unmounted
      olMap.setTarget(undefined);
    };
  }, [mapRef]);

  return (
    <>
      <NavSidebar />

      <BaseLayerPicker />

      <div ref={mapRef} id="map" />
    </>
  );
};

export default MapComponent;
