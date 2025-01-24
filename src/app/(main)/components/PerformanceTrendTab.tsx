import { Button } from "@mapstudio/lib/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mapstudio/lib/components/ui/Card";
import { Input } from "@mapstudio/lib/components/ui/Input";
import { Label } from "@mapstudio/lib/components/ui/Label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@mapstudio/lib/components/ui/Tabs";
import { PerformanceTrendChart } from "./PerformanceTrendChart";

export function PerformanceTrendTab() {
  return (
    <Tabs defaultValue="last_six_months" className="w-[400px]">
      <TabsList className="w-[75%] grid grid-cols-2 gap-3">
        <TabsTrigger
          value="last_six_months"
          className="bg-[#D5D8D9] text-[#3F3844CC] data-[state=active]:text-white data-[state=active]:bg-[#699FFF] rounded-xl"
        >
          Last 6 Months
        </TabsTrigger>
        <TabsTrigger
          value="last_year"
          className="bg-[#D5D8D9] text-[#3F3844CC] data-[state=active]:text-white data-[state=active]:bg-[#699FFF] rounded-xl"
        >
          Last Year
        </TabsTrigger>
      </TabsList>
      <TabsContent value="last_six_months">
        {/* <p>Account</p> */}
        <PerformanceTrendChart />
      </TabsContent>
      <TabsContent value="last_year">
        {/* <p>Password</p> */}
        <PerformanceTrendChart />
      </TabsContent>
    </Tabs>
  );
}
