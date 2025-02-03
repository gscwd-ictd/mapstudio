"use client";

import { useState } from "react";

export default function ReportsPage() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [reportName, setReportName] = useState("");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(dateFrom);
  };

  return (
    <>
      <div>
        <h1 className="text-xl font-bold mb-6">Reports</h1>
        <form
          className="p-4 bg-[#D9D9D933] h-full w-full rounded-sm grid grid-cols-2 grid-rows-2 gap-8"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-1 col-span-2">
            <label>Report Name</label>
            <select
              className="rounded-md p-2 border-2 border-[#3F3844]"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
            >
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className="flex flex-col gap-1" style={{ gridArea: 2 / 1 / 3 / 2 }}>
            <label>Date From</label>
            <input
              className="rounded-md p-2 border-2 border-[#3F3844]"
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </div>
          <div
            className="flex flex-col gap-1"
            style={{
              gridArea: 2 / 2 / 3 / 3,
            }}
          >
            <label>Date To</label>
            <input
              className="rounded-md p-2 border-2 border-[#3F3844]"
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>
          <input className="col-span-2" type="submit" name="Submit" />
        </form>
      </div>
    </>
  );
}
