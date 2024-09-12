"use client";

import { useMapStore } from "@mapstudio/lib/store/useMapStore";
import { isEmpty } from "lodash";
import { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type BaseMap = {
  baseMap: string;
};

const BaseLayerPicker: FunctionComponent = ({}) => {
  // zustand initialization
  const { SetSelectedBaseMap } = useMapStore((state) => ({
    SetSelectedBaseMap: state.setSelectedBaseMap,
  }));

  // React hook form
  const { register, watch } = useForm<BaseMap>({
    mode: "onChange",
    defaultValues: {
      baseMap: "osmStandard",
    },
  });
  const watchBaseMap = watch("baseMap");

  useEffect(() => {
    if (!isEmpty(watchBaseMap)) {
      SetSelectedBaseMap(watchBaseMap);
    } else {
      // set default base map
      SetSelectedBaseMap("osmStandard");
    }
  }, [watchBaseMap]);

  return (
    <div className="base-layers bg-white p-3 rounded-lg">
      <p>Base Layers</p>
      <form className="">
        {/* OSM */}
        <label htmlFor="field-osm" className="mr-2">
          <input
            {...register("baseMap")}
            name="baseMap"
            type="radio"
            value="osmStandard"
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
            value="osmV2"
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
            value="bingMaps"
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
