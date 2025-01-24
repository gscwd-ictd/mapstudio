type NewServiceApplicationProps = {
  id: string;

  // NSA Form
  firstName: string;
  middleName: string;
  lastName: string;
  address: Address;
  birthDate: string;
  phoneNumber: string;
  telephoneNumber: string;
  spouse: string;
  emailAddress: string;
  noOfPersonsInHousehold: number;
  noOfHouseInLot: number;

  // application date and time, date is only indicated in figma
  applicationDateTime: string;

  applicationNo: string;
  validIdUrl: string;
  proofOfLotOwnershipUrl: string;
  barangayCertificationUrl: string;

  plumbingFixturesDeclaration: PlumbingFixturesDeclaration[];

  location: Location;

  // assigned to / dispatched to / surveyed by
  assignedTo: string;
  dispatchDateTime: string;

  // present in table
  dispatchStatus: string;

  // for installation
  sacoNumber: number;
  bmNumber: number;
  typeOfConnection: string;

  assignedToGroup: string;

  // NSA Form after returning dispatch
  returnedBy: string;
  returnedRemarks: string;

  returnedDateTime: string;

  // present in table after dispatch is accomplished
  // estimates present in table / remarks present in form
  estimates: string;

  // NSA Form after accomplished dispatch
  dateOfOrientation: string;

  // Bill of Materials
  billOfMaterials: BillOfMaterials;

  // checkboxes
  // installationCharges, dmBm, customerHandbook

  // bill of materials pdf
  // installationCharges: number;
  // dmBmCharges: number;
  // customerHandbookCharges: number;
};

type Address = {
  street: string;
  barangay: string;
  city: string;
};

type PlumbingFixturesDeclaration = {
  sizeOfWaterMeter: string;
  plumbingFixtures: PlumbingFixtures[];
};

type PlumbingFixtures = {
  typeOfFixture: string;
  noOfFixtures: number;
};

type Location = {
  landmarks: string;
  neighbors: string;
  latitude: number;
  longitude: number;
};

type BillOfMaterials = {
  applicationNo: string;
  bmNo: number;
  referenceNo: string;
  dateInspected: string;
  establishmentName: string;
  connectionType: string;
  classification: string;
  remarks: string;
  materialsList: MaterialsList[];
};

type MaterialsList = {
  quantity: number;
  unit: string;
  itemDescription: string;
  cost: number;
  amount: number;
};

const NewServiceApplication: NewServiceApplicationProps[] = [
  {
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: {
      street: "",
      barangay: "",
      city: "",
    },
    birthDate: "",
    phoneNumber: "",
    telephoneNumber: "",
    spouse: "",
    emailAddress: "",
    noOfPersonsInHousehold: 0,
    noOfHouseInLot: 0,

    applicationDateTime: "",

    applicationNo: "",
    validIdUrl: "",
    proofOfLotOwnershipUrl: "",
    barangayCertificationUrl: "",

    plumbingFixturesDeclaration: [
      {
        sizeOfWaterMeter: "",
        plumbingFixtures: [
          {
            typeOfFixture: "",
            noOfFixtures: 0,
          },
        ],
      },
    ],

    location: {
      landmarks: "",
      neighbors: "",
      latitude: 0,
      longitude: 0,
    },

    assignedTo: "",
    dispatchDateTime: "",

    dispatchStatus: "",

    sacoNumber: 0,
    bmNumber: 0,
    typeOfConnection: "",

    assignedToGroup: "",

    returnedBy: "",
    returnedRemarks: "",

    returnedDateTime: "",

    estimates: "",

    dateOfOrientation: "",

    billOfMaterials: {
      applicationNo: "",
      bmNo: 0,
      referenceNo: "",
      dateInspected: "",
      establishmentName: "",
      connectionType: "",
      classification: "",
      remarks: "",
      materialsList: [
        {
          quantity: 0,
          unit: "",
          itemDescription: "",
          cost: 0,
          amount: 0,
        },
      ],
    },
  },
];

const NewServiceApplicationReport: NewServiceApplicationProps[] = [
  {
    id: "1",
    firstName: "Juan",
    middleName: "Dela",
    lastName: "Cruz",
    address: {
      street: "Street",
      barangay: "Barangay",
      city: "City",
    },
    birthDate: "2021-01-01",
    phoneNumber: "123456789",
    telephoneNumber: "123456789",
    spouse: "Maria",
    emailAddress: "",
    noOfPersonsInHousehold: 1,
    noOfHouseInLot: 1,
    applicationDateTime: "",
    applicationNo: "",
    validIdUrl: "",
    proofOfLotOwnershipUrl: "",
    barangayCertificationUrl: "",
    plumbingFixturesDeclaration: [],
    location: {
      landmarks: "",
      neighbors: "",
      latitude: 0,
      longitude: 0,
    },
    assignedTo: "",
    dispatchDateTime: "",
    dispatchStatus: "",
    sacoNumber: 0,
    bmNumber: 0,
    typeOfConnection: "",
    assignedToGroup: "",
    returnedBy: "",
    returnedRemarks: "",
    returnedDateTime: "",
    estimates: "",
    dateOfOrientation: "",
    billOfMaterials: {
      applicationNo: "",
      bmNo: 0,
      referenceNo: "",
      dateInspected: "",
      establishmentName: "",
      connectionType: "",
      classification: "",
      remarks: "",
      materialsList: [],
    },
  },
];

const BillOfMaterialsSummary: BillOfMaterials[] = [
  {
    applicationNo: "",
    bmNo: 0,
    referenceNo: "",
    dateInspected: "",
    establishmentName: "",
    connectionType: "",
    classification: "",
    remarks: "",
    materialsList: [],
  },
];

const NewServiceApplicationType = {
  NewServiceApplication,
  NewServiceApplicationReport,
  BillOfMaterialsSummary,
};

export default NewServiceApplicationType;
