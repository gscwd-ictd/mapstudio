"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, FilePenLine, Save, SendHorizontal } from "lucide-react";
import images from "../../../../public/images";
import ConfirmDispatchModal from "./ConfirmDispatchModal";

export function ForDispatchApplicantForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // const [visible, setVisible] = useState(isOpen);
  // const [animate, setAnimate] = useState(isOpen);

  // useEffect(() => {
  //   if (isOpen) {
  //     setVisible(true);
  //     setTimeout(() => setAnimate(true), 10);
  //   } else {
  //     setAnimate(false);
  //     const timer = setTimeout(() => setVisible(false), 300);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isOpen]);

  // if (!visible) return null;

  return (
    <div
      className="bg-gray-200 rounded-xl text-gray-800 pb-60 h-screen overflow-y-auto shadow-xl border-2 border-blue-300"
      style={{
        boxShadow: "inset 0px 6px 5px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <ConfirmDispatchModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className="flex flex-row justify-between items-center px-10 py-7 mb-12">
        {/* Applicant Header */}
        <div className="bg-gray-200 p-3 rounded-2xl flex flex-row gap-10 items-center text-gray-800 ">
          <Image src={images.sample_avatar} alt={"Image"} width={100} />
          <div className="flex flex-col items-start gap-2">
            <p style={{ fontSize: "0.75rem" }}>2024-000123</p>
            <p className="text-2xl">Tipay, Marilyn A.</p>
            <p style={{ fontSize: "0.75rem" }}>B-26 L-11 Prk-18, Employees Village, Fatima</p>
          </div>
        </div>
        {/* Edit/Save Details */}
        <div className="flex flex-row gap-5 tracking-widest">
          <button className="flex flex-row gap-1 p-1 border-2 border-gray-400 rounded-2xl w-24 items-center justify-center">
            <FilePenLine />
            <p>Edit</p>
          </button>
          <button className="flex flex-row gap-1 p-1 border-2 border-gray-400 rounded-2xl w-24 items-center justify-center">
            <Save />
            <p>Save</p>
          </button>
        </div>
      </div>
      {/* Form */}
      <div className="relative">
        <p
          className="absolute top-[-25px] inline-block text-white py-1 px-10 rounded-full ml-10 font-bold"
          style={{ backgroundColor: "#0162B3" }}
        >
          DETAILS
        </p>

        {/* GRID */}
        <div className="flex flex-col gap-4 bg-white px-10 py-5 ml-10 mr-10 rounded-2xl">
          <div className="grid grid-cols-3 gap-4 ">
            {/* First Name */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                First Name
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">Marilyn</p>
            </div>
            {/* Middle Name */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Middle Name
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">Abad</p>
            </div>
            {/* Last Name */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Last Name
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">Tipay</p>
            </div>
            {/* Address */}
            <div className="flex flex-col col-span-2">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Address
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">
                B-26 L-11 Prk-18, Employees Village, Fatima
              </p>
            </div>
            {/* Birthdate */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Birthdate
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">10/28/1985</p>
            </div>
            {/* Landline/Mobile No. */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Landline/Mobile No.
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">09123456789</p>
            </div>
            {/* Spouse */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Spouse/Authorized Representative
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">N/A</p>
            </div>
            {/* Email Address */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Email Address
              </p>
              <p className="border-2 border-gray-300 rounded-sm  italic">marilynabad@gmail.com</p>
            </div>
            {/* No. */}
            <div className="flex flex-row justify-between gap-3">
              <div className="flex flex-col w-1/2">
                <p className="" style={{ fontSize: "0.75rem" }}>
                  No of Persons in Household
                </p>
                <p className="border-2 border-gray-300 rounded-sm ">3</p>
              </div>
              <div className="flex flex-col w-1/2">
                <p className="" style={{ fontSize: "0.75rem" }}>
                  No of house in lot
                </p>
                <p className="border-2 border-gray-300 rounded-sm ">1</p>
              </div>
            </div>
            {/* Date */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Date
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">10/29/2024</p>
            </div>
            {/* Application No. */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Application No.
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">10/29/2024-000123</p>
            </div>
            {/* Valid ID */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Valid ID
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">philsys.jpg</p>
            </div>
            {/* Proof of lot Ownership */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Proof of lot Ownership
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">deed_absolute_sale.jpg</p>
            </div>
            {/* Barangay Certification */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Proof of lot Ownership
              </p>
              <p className="border-2 border-gray-300 rounded-sm ">brgy_fatima_cert.jpg</p>
            </div>
          </div>
          {/* Fixtures/Location */}
          <div className="grid grid-cols-2 gap-4">
            {/* Fixtures */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Plumbing Fixtures Declaration
              </p>
              <div
                className="text-center border-2 border-gray-300 rounded-xl flex flex-col items-center p-10"
                style={{ height: "600px" }}
              >
                <table className="border-separate border-spacing-y-1">
                  <thead>
                    <tr>
                      <th className="text-left">Type of Fixtures</th>
                      <th>No. of Fixtures</th>
                    </tr>
                  </thead>
                  <tbody className="" style={{ fontSize: "0.75rem" }}>
                    <tr>
                      <td className="text-left">Bathtub</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">Bidet</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">Clothes Washer</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">Dishwasher, Domestic</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">Dental unit or Cuspidor</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">Drinking Fountain or Water Cooler</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">Lavatory</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">Hose Bibb</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td className="text-left">Lawn Sprinkler</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="text-left">Sinks</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td className="text-left">Shower Head</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td className="text-left">Urinal</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td className="text-left">Water Closet (with 1.6 GPF)</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td className="text-left">Water Closet (with greater than 1.6 GPF)</td>
                      <td></td>
                    </tr>
                    {/* LINE */}
                    <tr
                      style={{
                        width: "100%",
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                        lineHeight: " 0.1em",
                        display: "inline-block",
                      }}
                    ></tr>
                    <tr>
                      <td className="text-left">SIZE OF WATER METER</td>
                      <td>20 mm threaded type water meter, class B</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Location */}
            <div className="flex flex-col">
              <p className="" style={{ fontSize: "0.75rem" }}>
                Location
              </p>
              <div
                className="text-left border-2 border-gray-300 rounded-xl  p-10 grid grid-cols-3 gap-2"
                style={{ height: "600px" }}
              >
                <p style={{ fontSize: "0.75rem" }}>Landmarks</p>
                <p className="col-span-2">Basketball Court</p>
                <p style={{ fontSize: "0.75rem" }}>Neighbors</p>
                <p className="col-span-2">Chairman Booc/Kagawad Sotto</p>
                <div className="col-span-3 mt-10">
                  <Image
                    src={images.sample_map}
                    alt={"Map"}
                    className="border-2 border-gray-400 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-end items-center p-3">
            <div className="flex flex-row gap-2 items-center">
              <p>Assigned to</p>
              <button className="flex flex-row gap-1 border-gray-400 border-2 p-2 rounded-md ">
                <p>Surveyor</p>
                <ChevronDown />
              </button>
            </div>
            <button className="flex flex-row gap-1 bg-blue-800 p-2 rounded-md text-white">
              <p onClick={handleOpenModal}>Dispatch</p>
              <SendHorizontal />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
