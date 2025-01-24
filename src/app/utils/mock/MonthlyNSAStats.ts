type MonthlyNSAStat = {
  title: string;
  value: number;
};

const MonthlyNSASurveyStats: MonthlyNSAStat[] = [
  {
    title: "New Applications",
    value: 124,
  },
  {
    title: "Approved",
    value: 89,
  },
  {
    title: "Pending",
    value: 35,
  },
  {
    title: "Disapproved",
    value: 1,
  },
];

const MonthlyNSAInstallationStats: MonthlyNSAStat[] = [
  {
    title: "New Applications",
    value: 124,
  },
  {
    title: "Approved",
    value: 89,
  },
  {
    title: "Pending",
    value: 35,
  },
  {
    title: "Disapproved",
    value: 1,
  },
];

// const MonthlyNSAStats: MonthlyNSAStat[] = [
//   {
//     title: "New Applications",
//     value: 124,
//   },
//   {
//     title: "Approved",
//     value: 89,
//   },
//   {
//     title: "Pending",
//     value: 35,
//   },
//   {
//     title: "Disapproved",
//     value: 1,
//   },
// ];

const MonthlyNSAStats: MonthlyNSAStat[] = [
  {
    title: "New Applications",
    value: MonthlyNSASurveyStats[0].value + MonthlyNSAInstallationStats[0].value,
  },
  {
    title: "Approved",
    value: MonthlyNSASurveyStats[1].value + MonthlyNSAInstallationStats[1].value,
  },
  {
    title: "Pending",
    value: MonthlyNSASurveyStats[2].value + MonthlyNSAInstallationStats[2].value,
  },
  {
    title: "Disapproved",
    value: MonthlyNSASurveyStats[3].value + MonthlyNSAInstallationStats[3].value,
  },
];

const MonthlyNSAStatsType = {
  MonthlyNSAStats,
  MonthlyNSASurveyStats,
  MonthlyNSAInstallationStats,
};

export default MonthlyNSAStatsType;
