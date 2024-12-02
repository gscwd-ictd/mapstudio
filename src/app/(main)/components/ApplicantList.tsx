"use client";

import { Search } from "lucide-react";
import React from "react";
import { ApplicantCard } from "./ApplicantCard";
export function ApplicantList() {
  return (
    <div
      className="relative bg-white rounded-xl p-4 pb-60 border-2 border-blue-500"
      style={{ width: "450px", height: "100vh", overflowY: "scroll" }}
    >
      {/* search */}
      <div className="flex flex-col gap-4 mb-5">
        <div
          className="relative flex items-center"
          style={{
            gridArea: "2 / 1 / 3 / 2",
          }}
        >
          <input
            type="text"
            className="pr-8 outline outline-2 outline-gray-400 rounded-sm text-right placeholder-gray-400 placeholder:text-xs w-full"
            placeholder="Search"
          />
          <span className="absolute right-2">
            <Search className="text-gray-800" strokeWidth={2} style={{ height: "15px" }} />
          </span>
        </div>

        <p className="text-sm">Total: 1</p>
      </div>

      {/* Applicant Card */}
      <div className="flex flex-col gap-3">
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
        <ApplicantCard />
      </div>
    </div>
  );
}
