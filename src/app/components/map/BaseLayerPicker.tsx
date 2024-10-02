"use client";

import { BaseLayerOptions } from "@mapstudio/app/utils/enums";
import { useMapStore } from "@mapstudio/lib/store/useMapStore";
import { isEmpty } from "lodash";
import { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";

type BaseMap = {
  baseMap: BaseLayerOptions;
};

const BaseLayerPicker: FunctionComponent = ({}) => {
  // zustand initialization
  const { SetSelectedBaseMap, MapRef } = useMapStore((state) => ({
    SetSelectedBaseMap: state.setSelectedBaseMap,

    MapRef: state.mapRef,
  }));

  // React hook form
  const { register, watch } = useForm<BaseMap>({
    mode: "onChange",
    defaultValues: {
      baseMap: BaseLayerOptions.OSM,
    },
  });
  const watchBaseMap = watch("baseMap");

  useEffect(() => {
    if (!isEmpty(watchBaseMap)) {
      const mapBaseTileLayers = MapRef?.getAllLayers();

      mapBaseTileLayers?.map((layer: any) => {
        if (watchBaseMap === layer.className_) {
          layer.setVisible(true);
        } else {
          layer.setVisible(false);
        }
      });
    }
  }, [MapRef, SetSelectedBaseMap, watchBaseMap]);

  return (
    <div className="base-layers bg-white p-3 rounded-lg absolute bottom-[10px] left-[110px] z-20">
      <p>Base Layers</p>
      <form className="">
        {/* OSM */}
        <label htmlFor="field-osm" className="mr-2">
          <input
            {...register("baseMap")}
            name="baseMap"
            type="radio"
            value={BaseLayerOptions.OSM}
            id="field-osm"
            className="mr-1"
          />
          OpenStreetMap
        </label>

        {/* OSM V2 */}
        <label htmlFor="field-osm2" className="mr-2">
          <input
            {...register("baseMap")}
            name="baseMap"
            type="radio"
            value={BaseLayerOptions.OSM_V2}
            id="field-osm2"
            className="mr-1"
          />
          OSM v2
        </label>

        {/* Bing Maps */}
        <label htmlFor="field-bing-maps" className="mr-2">
          <input
            {...register("baseMap")}
            name="baseMap"
            type="radio"
            value={BaseLayerOptions.BING_AERIAL}
            id="field-bing-maps"
            className="mr-1"
          />
          Bing Aerial
        </label>
      </form>
    </div>
  );
};

export default BaseLayerPicker;
