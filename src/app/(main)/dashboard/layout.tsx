import { SidebarProvider, SidebarTrigger } from "@mapstudio/lib/components/ui/Sidebar";
import { AppSidebar } from "../components/AppSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main suppressHydrationWarning>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
