import { Barangay } from "../types/Location";

const SampleBarangays: Barangay[] = [
  {
    id: "1",
    name: "Calumpang",
    created_at: "1",
    updated_at: "1",
    deleted_at: "1",
    purok: [
      {
        id: "1",
        name: "1",
        created_at: "1",
        updated_at: "1",
        deleted_at: "1",
      },
      {
        id: "2",
        name: "2",
        created_at: "2",
        updated_at: "2",
        deleted_at: "2",
      },
    ],
  },
];

const SampleBarangayDetails: Barangay = {
  id: "3",
  name: "3",
  created_at: "3",
  updated_at: "3",
  deleted_at: "3",
  purok: [
    {
      id: "3.1",
      name: "3.1",
      created_at: "3.1",
      updated_at: "3.1",
      deleted_at: "3.1",
    },
  ],
};

export const SampleLocation = { SampleBarangays, SampleBarangayDetails };
