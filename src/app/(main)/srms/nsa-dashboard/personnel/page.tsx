"use client";

import NewServiceApplicationTab from "@mapstudio/app/(main)/components/NewServiceApplicationTab";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import XYZ from "ol/source/XYZ";
import { useEffect, useState } from "react";
import { Group, Search, UserRound, X } from "lucide-react";
import { SurveyorCard } from "@mapstudio/app/(main)/components/SurveyorCard";
import SurveyorDetails from "@mapstudio/app/(main)/components/SurveyorDetails";
import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent } from "@mapstudio/lib/components/ui";
import { GroupDropdown } from "@mapstudio/app/(main)/components/GroupDropdown";

export default function PersonnelPage() {
  useEffect(() => {
    const map = new Map({
      target: "sampleMap",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([125.1716, 6.1128]),
        zoom: 14,
      }),
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCardIndex, setClickedCardIndex] = useState<number | null>(null);

  const handleOpenModal = (index: number) => {
    setIsModalOpen(true);
    setClickedCardIndex(index);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setClickedCardIndex(null);
  };

  const sampleArrayOfPersonnel = [
    {
      name: "Virgilio A. Pastoril Jr.",
      department: "Commercial Services Department",
      address: "Calumpang",
      status: "Onsite",
    },
    {
      name: "Test User",
      department: "Commercial Services Department",
      address: "Fatima",
      status: "Leave",
    },
  ];

  const groupMembers = [
    {
      groupName: "Group 1",
      members: [
        { id: 1, name: "1", avatar: "/avatars/person1.png" },
        { id: 2, name: "2", avatar: "/avatars/person2.png" },
        { id: 3, name: "3", avatar: "/avatars/person3.png" },
        { id: 4, name: "4", avatar: "/avatars/person4.png" },
        { id: 5, name: "5", avatar: "/avatars/person5.png" },
        { id: 6, name: "6", avatar: "/avatars/person6.png" },
        { id: 7, name: "7", avatar: "/avatars/person7.png" },
      ],
    },
    {
      groupName: "Group 2",
      members: [
        { id: 1, name: "1", avatar: "/avatars/person1.png" },
        { id: 2, name: "2", avatar: "/avatars/person2.png" },
        { id: 3, name: "3", avatar: "/avatars/person3.png" },
        { id: 4, name: "4", avatar: "/avatars/person4.png" },
        { id: 5, name: "5", avatar: "/avatars/person5.png" },
        { id: 6, name: "6", avatar: "/avatars/person6.png" },
        { id: 7, name: "7", avatar: "/avatars/person7.png" },
      ],
    },
  ];

  return (
    <>
      <h1 className="text-xl font-bold mb-6">Personnel</h1>

      <div className="flex flex-row " style={{}}>
        <NewServiceApplicationTab
          firstTabName="Surveyor"
          firstTabValue="surveyor"
          secondTabName="Installer"
          secondTabValue="installer"
        >
          <SurveyorDetails isOpen={isModalOpen} onClose={handleCloseModal} />

          <TabsContent value="surveyor">
            <div style={{ backgroundColor: "#EBEFF0" }}>
              {/* */}
              <div className="flex flex-row gap-1">
                <div className="w-[400px] p-8 h-[100vh]">
                  <div className="flex flex-col gap-5">
                    {/* Search */}
                    <div className="relative flex items-center w-full" style={{}}>
                      <span className="absolute right-2">
                        <Search
                          className="text-gray-500"
                          strokeWidth={2}
                          style={{ height: "14px" }}
                        />
                      </span>
                      <input
                        type="text"
                        className="h-[30px] pr-8 outline outline-1 outline-gray-400 rounded-md text-right placeholder-gray-400 w-full"
                        placeholder="Search"
                      />
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <span className=" text-gray-800" style={{ fontSize: "14px" }}>
                        Total: 2
                      </span>
                      <div className="flex flex-row gap-3">
                        <button
                          className="flex flex-row gap-1 items-center"
                          style={{ color: "#2981C6" }}
                        >
                          <UserRound size={16} />
                          <span style={{ fontSize: "14px" }}>Manage</span>
                        </button>
                        <button
                          className="flex flex-row gap-1 items-center"
                          style={{ color: "#FA0808" }}
                        >
                          <X size={16} />
                          <span style={{ fontSize: "14px" }}>Delete</span>
                        </button>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="flex flex-col gap-6">
                      {sampleArrayOfPersonnel.map((personnel, index) => (
                        <button
                          key={index}
                          onClick={() => handleOpenModal(index)}
                          className=""
                          style={
                            clickedCardIndex === index
                              ? { outline: "2px solid #2078C3", borderRadius: "5px" }
                              : {}
                          }
                        >
                          <SurveyorCard
                            name={personnel.name}
                            department={personnel.department}
                            address={personnel.address}
                            status={personnel.status}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="installer">
            <div style={{ backgroundColor: "#EBEFF0" }}>
              <div className="flex flex-row gap-1">
                <div className="w-[400px] p-8 h-[100vh]">
                  <div className="flex flex-col gap-5">
                    {/* Search */}
                    <div className="relative flex items-center w-full" style={{}}>
                      <span className="absolute right-2">
                        <Search
                          className="text-gray-500"
                          strokeWidth={2}
                          style={{ height: "14px" }}
                        />
                      </span>
                      <input
                        type="text"
                        className="h-[30px] pr-8 outline outline-1 outline-gray-400 rounded-md text-right placeholder-gray-400 w-full"
                        placeholder="Search"
                      />
                    </div>
                    <div className="flex flex-row justify-between items-center">
                      <span className=" text-gray-800" style={{ fontSize: "14px" }}>
                        Total: 7
                      </span>
                      <div className="flex flex-row gap-3">
                        <button
                          className="flex flex-row gap-1 items-center"
                          style={{ color: "#2981C6" }}
                        >
                          <UserRound size={16} />
                          <span style={{ fontSize: "14px" }}>Manage</span>
                        </button>
                        <button
                          className="flex flex-row gap-1 items-center"
                          style={{ color: "#FA0808" }}
                        >
                          <X size={16} />
                          <span style={{ fontSize: "14px" }}>Delete</span>
                        </button>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="flex flex-col gap-6">
                      {groupMembers.map((group, index) => (
                        <GroupDropdown
                          key={index}
                          groupMembers={group.members}
                          groupName={group.groupName}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </NewServiceApplicationTab>

        <div className="bg-white w-full h-[100vh] shadow-lg rounded-lg">
          <div id="sampleMap" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}
