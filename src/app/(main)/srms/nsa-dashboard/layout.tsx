import { SidebarProvider } from "@mapstudio/lib/components/ui/Sidebar";
import { AppSidebar } from "../../components/AppSidebar";
import { AppHeader } from "../../components/AppHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main
          className="text-black h-screen w-screen"
          style={{ backgroundColor: "white" }}
          suppressHydrationWarning
        >
          <AppHeader />
          <div className="m-4 text-gray-800">{children}</div>
        </main>
      </SidebarProvider>
    </>
  );
}
