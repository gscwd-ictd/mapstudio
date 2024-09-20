import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    dataStores: {
      dataStore: [
        {
          name: "CONTOUR_AMADEO",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/CONTOUR_AMADEO.json",
        },
        {
          name: "CONTOUR_LEYSON",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/CONTOUR_LEYSON.json",
        },
        {
          name: "ELEV_AMADEO_LEYSON",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/ELEV_AMADEO_LEYSON.json",
        },
        {
          name: "PSBOUNDARY2024_4",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/PSBOUNDARY2024_4.json",
        },
        {
          name: "Hydrants2024_3",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/Hydrants2024_3.json",
        },
        {
          name: "Valves2024_5",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/Valves2024_5.json",
        },
        {
          name: "ZoneBook2024",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/ZoneBook2024.json",
        },
        {
          name: "Loggers2024",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/Loggers2024.json",
        },
        {
          name: "PumpingStation2024_1",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/PumpingStation2024_1.json",
        },
        {
          name: "WM2024_22",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/WM2024_22.json",
        },
        {
          name: "WMMainlineDisc2024_11",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/WMMainlineDisc2024_11.json",
        },
        {
          name: "Pipeline2024_28",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/Pipeline2024_28.json",
        },
        {
          name: "Barangays2024",
          href: "http://172.20.110.69:8080/geoserver/rest/workspaces/gismapping3/datastores/Barangays2024.json",
        },
      ],
    },
  });
}
