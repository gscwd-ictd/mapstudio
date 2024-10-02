/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FunctionComponent, useEffect, useState } from "react";
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@mapstudio/lib/components/ui";
import { ChevronsRight, Navigation, Home, Layers, CarFront, Settings } from "lucide-react";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import {
  DataStores,
  LayerVisibility,
  MapVectorLayers,
  GeoserverLayer,
} from "@mapstudio/app/utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMapStore } from "@mapstudio/lib/store/useMapStore";
import { isEmpty } from "lodash";
import TileLayer from "ol/layer/Tile";
import { TileWMS } from "ol/source";
import useMap from "@mapstudio/hooks/useMap";
import Layer from "ol/layer/Layer";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const NavSidebar: FunctionComponent = () => {
  // zustand initialization
  const { GeoserverLayers, SetLayerVisibility, SetGeoserverLayer, MapRef } = useMapStore(
    (state) => ({
      GeoserverLayers: state.geoserverLayers,
      SetGeoserverLayer: state.setGeoserverLayer,

      SetLayerVisibility: state.setLayerVisibility,
      MapRef: state.mapRef,
    })
  );

  const { register, setValue, watch, control } = useForm<MapVectorLayers>({
    mode: "onChange",
    defaultValues: {
      layersVisibility: [],
      // { className: "", visible: false }
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "layersVisibility",
  });

  const layerValues = watch();

  // env values
  const geoserverUrl = process.env.NEXT_PUBLIC_GEOSERVER_URL;
  const geoserverWorkspace = process.env.NEXT_PUBLIC_GEOSERVER_WORKSPACE;

  const { status, data, error } = useQuery({
    queryKey: ["geoserver-layers"],
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      const { data } = await axios.get(
        // `${geoserverUrl}/rest/workspaces/${geoserverWorkspace}/datastores.json`,
        `http://172.20.10.59:3000/api/layers`
      );

      data.dataStores.dataStore.map((layer: GeoserverLayer) => {
        let tileLayer = {
          attributions: "@geoserver",
          url: `${geoserverUrl}/${geoserverWorkspace}/wms?`,
          layers: `${geoserverWorkspace}:${layer.name}`,
          visible: false,
          preload: Infinity,
          className: `${layer.name}`,
        };

        // set each layer to zustand store
        SetGeoserverLayer(tileLayer);
      });

      return data;
    },
  });

  useEffect(() => {
    if (!isEmpty(GeoserverLayers)) {
      // populate form fields
      setValue("layersVisibility", GeoserverLayers);

      // add layers to map with visibility to false
      GeoserverLayers.map((layer) => {
        let newTileLayer = new TileLayer({
          source: new TileWMS({
            attributions: layer.attributions,
            url: layer.url,
            params: {
              LAYERS: layer.layers,
            },
          }),
          visible: layer.visible,
          preload: layer.preload,
          className: layer.className,
        });

        MapRef?.addLayer(newTileLayer);
      });
    }
  }, [GeoserverLayers]);

  useEffect(() => {
    if (!isEmpty(layerValues.layersVisibility)) {
      const vectorLayers = MapRef?.getAllLayers();

      console.log(layerValues.layersVisibility);
      console.log(vectorLayers);

      // layerValues.layersVisibility.map(layerFromForm => {
      //   const layerFromMap = vectorLayers?.find(lfm => lfm._classname)
      // })

      // console.log(vectorLayers);

      // vectorLayers?.map((layer: any) => {
      //   if (vectorLayers === layer.className_) {
      //     layer.setVisible(true);
      // } else {
      //     layer.setVisible(false);
      // }
      // });

      // const waterMeterLayer = new TileLayer({
      //   source: new TileWMS({
      //     attributions: "@geoserver",
      //     url: "http://172.20.110.69:8080/geoserver/gismapping3/wms?",
      //     params: {
      //       LAYERS: "gismapping3:WM2024_22",
      //     },
      //   }),
      //   visible: true,
      //   preload: Infinity,
      //   className: "waterMeterLayer",
      // });
      // MapRef?.addLayer(waterMeterLayer);
    }
  }, [layerValues]);

  return (
    <div className="sidebar bg-white py-8 px-4 h-screen">
      <div className="grid grid-cols-1 gap-10 px-2">
        <button>
          <Navigation
            className="text-slate-500 active:text-blue-600 hover:text-blue-600"
            size={28}
          />
        </button>

        <button>
          <Home className="text-slate-500 active:text-blue-600 hover:text-blue-600" size={28} />
        </button>

        {/* Layers Button */}
        {/* <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              role="combobox"
              aria-expanded={open}
              className="justify-between p-0 bg-white hover:bg-white text-slate-500 active:text-blue-600 hover:text-blue-600 "
            >
              <Layers className="" size={28} />

              <ChevronsRight className="ml-2 h-4 w-4 shrink-0 opacity-100 " />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
         
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {VectorLayers.map((vectorLayer) => (
                    <CommandItem
                      key={vectorLayer.value}
                      value={vectorLayer.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === vectorLayer.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {vectorLayer.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="justify-between p-0 bg-white hover:bg-white text-slate-500 active:text-blue-600 hover:text-blue-600 focus:border-white  focus-visible:ring-0 focus-visible:ring-offset-0">
              <Layers className="" size={28} />

              <ChevronsRight className="ml-2 h-4 w-4 shrink-0 opacity-100 " />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-60 mt-10"
            side={"right"}
            sideOffset={30}
            sticky={"always"}
          >
            <DropdownMenuLabel>Layers</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <form className="">
              {fields.map((layer: LayerVisibility, idx: number) => {
                // SHADCN Component | checked={showStatusBar} onCheckedChange={setShowStatusBar}
                // <DropdownMenuCheckboxItem
                //   key={idx}
                //   id={layer.className}
                //   // checked={layer.visible}
                //   // onCheckedChange={SetLayerVisibility}
                //   onSelect={(e) => {
                //     e.preventDefault();
                //   }}
                //   {...register(`layersVisibility.${idx}.visible`)}
                // >
                //   {layer.className}
                // </DropdownMenuCheckboxItem>;

                return (
                  <div className="flex" key={idx}>
                    <input
                      id={layer.className}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      {...register(`layersVisibility.${idx}.visible` as const)}
                    />
                    <label
                      htmlFor={layer.className}
                      className="ml-2 flex justify-between gap-2 mb-1 text-xs font-medium text-gray-900"
                    >
                      {layer.className}
                    </label>
                  </div>
                );
              })}
            </form>
          </DropdownMenuContent>
        </DropdownMenu>

        <button>
          <CarFront className="text-slate-500 active:text-blue-600 hover:text-blue-600" size={28} />
        </button>

        <button>
          <Settings className="text-slate-500 active:text-blue-600 hover:text-blue-600" size={28} />
        </button>
      </div>
    </div>
  );
};

export default NavSidebar;
