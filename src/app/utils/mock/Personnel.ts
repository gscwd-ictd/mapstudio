import Location from "./Location";

type Personnel = {
  id: string;

  name: string;
  position: string;
  department: string;

  phoneNumber: string;
  address: Location;

  assignedAreas?: Location[];
  assignedGroup?: string;

  overallPerformance: number;

  performanceTrend: MonthlyEmployeePerformance[];

  employeeStatus: string;
};

type MonthlyEmployeePerformance = {
  month: string;
  performance: number;
};

type InstallerGroupDetails = {
  id: string;
  groupName: string;
  groupLeader: Personnel["id"];
  groupMembers: Personnel[];
  currentLocation?: Location;
};

const Personnel: Personnel[] = [
  {
    id: "1",
    name: "Juan Dela Cruz",
    position: "Installer",
    department: "Installation",
    phoneNumber: "09123456789",
    address: {
      barangay: "Barangay 1",
    },
    assignedAreas: [
      {
        barangay: "Barangay 2",
      },
      {
        barangay: "Barangay 3",
      },
    ],
    assignedGroup: "1",
    overallPerformance: 4.5,
    performanceTrend: [
      {
        month: "January",
        performance: 4.5,
      },
      {
        month: "February",
        performance: 4.5,
      },
      {
        month: "March",
        performance: 4.5,
      },
      {
        month: "April",
        performance: 4.5,
      },
      {
        month: "May",
        performance: 4.5,
      },
      {
        month: "June",
        performance: 4.5,
      },
      {
        month: "July",
        performance: 4.5,
      },
      {
        month: "August",
        performance: 4.5,
      },
      {
        month: "September",
        performance: 4.5,
      },
      {
        month: "October",
        performance: 4.5,
      },
      {
        month: "November",
        performance: 4.5,
      },
      {
        month: "December",
        performance: 4.5,
      },
    ],
    employeeStatus: "Active",
  },
];

const PersonnelGroups: InstallerGroupDetails[] = [
  {
    id: "1",
    groupName: "Group 1",
    groupLeader: "1",
    groupMembers: [
      {
        id: "1",
        name: "Juan Dela Cruz",
        position: "Installer",
        department: "Installation",
        phoneNumber: "09123456789",
        address: {
          barangay: "Barangay 1",
        },
        assignedAreas: [
          {
            barangay: "Barangay 2",
          },
          {
            barangay: "Barangay 3",
          },
        ],
        assignedGroup: "1",
        overallPerformance: 4.5,
        performanceTrend: [
          {
            month: "January",
            performance: 4.5,
          },
          {
            month: "February",
            performance: 4.5,
          },
          {
            month: "March",
            performance: 4.5,
          },
          {
            month: "April",
            performance: 4.5,
          },
          {
            month: "May",
            performance: 4.5,
          },
          {
            month: "June",
            performance: 4.5,
          },
          {
            month: "July",
            performance: 4.5,
          },
          {
            month: "August",
            performance: 4.5,
          },
          {
            month: "September",
            performance: 4.5,
          },
          {
            month: "October",
            performance: 4.5,
          },
          {
            month: "November",
            performance: 4.5,
          },
          {
            month: "December",
            performance: 4.5,
          },
        ],
        employeeStatus: "Active",
      },
    ],
    currentLocation: {
      barangay: "Barangay 1",
    },
  },
];

const PersonnelType = { Personnel, PersonnelGroups };

export default PersonnelType;
