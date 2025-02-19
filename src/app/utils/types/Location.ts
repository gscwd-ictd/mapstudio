export type Barangay = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  purok: Purok[];
};

export type Purok = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

export type BarangayName = {
  name: string;
};

export type PurokName = {
  barangayId: string;
  name: string;
};


// type Location = {
//   block?: number;
//   lot?: number;
//   street?: string;
//   barangay: string;
// };

// export default Location;
