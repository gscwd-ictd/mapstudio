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
import { VectorLayers } from "@mapstudio/app/utils/enums";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { DataStores, LayerVisibility, MapVectorLayers } from "@mapstudio/app/utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMapStore } from "@mapstudio/lib/store/useMapStore";
import { isEmpty } from "lodash";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const NavSidebar: FunctionComponent = () => {
  // zustand initialization
  const { GeoserverLayers, SetLayerVisibility } = useMapStore((state) => ({
    GeoserverLayers: state.geoserverLayers,
    SetLayerVisibility: state.setLayerVisibility,
  }));

  const { register, setValue, watch, control } = useForm<MapVectorLayers>({
    mode: "onChange",
    defaultValues: {
      layersVisibility: [],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "layersVisibility",
  });

  const layerVisib = watch("layersVisibility");

  useEffect(() => {
    if (!isEmpty(GeoserverLayers)) {
      setValue("layersVisibility", GeoserverLayers);
    }
  }, [GeoserverLayers]);

  useEffect(() => {
    console.log(layerVisib);
  }, [layerVisib]);

  // const geoserverUrl = process.env.NEXT_PUBLIC_GEOSERVER_URL;
  // const geoserverWorkspace = process.env.NEXT_PUBLIC_GEOSERVER_WORKSPACE;

  // const query =
  // const { data, isLoading, isFetching, isError, isFetched } = useQuery({
  //   queryKey: ["geoserver-layers"],
  //   queryFn: async () => {
  //     const { data } = await axios.get(
  //       // `${geoserverUrl}/rest/workspaces/${geoserverWorkspace}/datastores.json`,
  //       `http://172.20.10.59:3000/api/layers`
  //     );

  //     return data;
  //   },
  //   onSuccess: (data: DataStores) => {
  //     console.log(data);

  //     // Mutate the result. Added each module object with hasAccess
  //     data.map((module: Module) => {
  //       const newUserRole = {
  //         _id: module._id,
  //         hasAccess: false,
  //         module: module.module,
  //         slug: module.slug,
  //       };
  //       setUserRoles((userRole) => [...userRole, newUserRole]);
  //     });

  //     // setParticipantsPool(data);
  //     // setFilteredParticipantsPool(data);
  //     // setHasFetchedParticipants(true);
  //   },
  //   onError: () => {
  //     // setParticipantsPool([]);
  //     // setFilteredParticipantsPool([]);
  //   },
  //   refetchOnReconnect: false,
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false,
  // });

  // const fetchUserRoles = async (employeeId: string) => {
  //   const { error, result } = await getEmpMonitoring(`/user-roles/${employeeId}`);

  //   if (error) {
  //     SetErrorGetUserRoles(result);
  //   } else {
  //     SetGetUserRolesForPatch(result);

  //     // Mutate the result. Added each module object with hasAccess
  //     result.map((module: Module) => {
  //       const newUserRole = {
  //         _id: module._id,
  //         hasAccess: false,
  //         module: module.module,
  //         slug: module.slug,
  //       };
  //       setUserRoles((userRole) => [...userRole, newUserRole]);
  //     });

  //     setIsDoneModuleToUserRole(true);
  //   }
  // };

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
              // </DropdownMenuCheckboxItem>
              return (
                <div className="flex" key={idx}>
                  <input
                    id={layer.className}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    {...register(`layersVisibility.${idx}.visible`)}
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
