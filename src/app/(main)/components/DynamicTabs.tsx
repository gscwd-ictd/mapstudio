import { Tabs, TabsContent, TabsList, TabsTrigger } from "@mapstudio/lib/components/ui/Tabs";

type Tab = {
  value: string;
  label: string;
  content: React.ReactNode;
};

type DynamicTabsProps = {
  tabs: Tab[];
};

export default function DynamicTabs({ tabs }: DynamicTabsProps) {
  return (
    <Tabs defaultValue={tabs[0]?.value}>
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
