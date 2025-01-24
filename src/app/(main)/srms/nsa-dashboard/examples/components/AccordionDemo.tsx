import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@mapstudio/lib/components/ui/Accordion";
import LoginCard from "./LoginCard";
import { DataTable } from "./DataTable";
import NSAStatsCard from "./NSAStatsCard";
import images from "../../../../../../../public/images";
import OMMSModule from "./OMMSModule";

export function AccordionDemo() {
  const data = [
    { name: "a", num: 1 },
    { name: "B", num: 2 },
    { name: "C", num: 2 },
    { name: "D", num: 3 },
    { name: "E", num: 3 },
    { name: "F", num: 4 },
    { name: "G", num: 4 },
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>LoginCard component</AccordionTrigger>
        <AccordionContent>
          <LoginCard />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>DataTable component</AccordionTrigger>
        <AccordionContent>
          <DataTable />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>DashboardStatsCard component</AccordionTrigger>
        <AccordionContent>
          <NSAStatsCard
            title="Pending"
            value={35}
            cardBackgroundColor="#FFB800E5"
            chartBackgroundColor="#FFD771"
            iconBackgroundColor="#DAA111"
            icon={images.pending_new_service_applications}
            chartData={data}
            iconWidth={70}
            iconHeight={70}
            width={350}
            height={200}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Module component</AccordionTrigger>
        <AccordionContent>
          <OMMSModule
            imageSrc={images.new_service_applications}
            title={"New Service Application"}
            href={"/srms/nsa-dashboard/home"}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
