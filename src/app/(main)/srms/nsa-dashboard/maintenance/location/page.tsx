import PageContainer from "@mapstudio/app/(main)/components/PageContainer";
import DynamicTable from "./DynamicTable";

export default function LocationPage() {
  return (
    <>
      <PageContainer>
        <h1 className="text-xl font-bold">Location</h1>
        <DynamicTable />
      </PageContainer>
    </>
  );
}
