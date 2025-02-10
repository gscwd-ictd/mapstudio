import PageContainer from "@mapstudio/app/(main)/components/PageContainer";
import DynamicTable from "./DynamicTable";

export default async function PlumbingFixturesPage() {
  return (
    <>
      <PageContainer>
        <h1 className="text-xl font-bold">Plumbing Fixtures</h1>
        <DynamicTable />
      </PageContainer>
    </>
  );
}
