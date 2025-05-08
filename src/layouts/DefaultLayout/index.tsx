import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";

export function DefaultLayout() {
  const [isSidebarOpen, setIsSidbarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidbarOpen((state) => !state);
  }

  return (
    <LayoutContainer>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidbarOpen(false)} />
      <Outlet />
    </LayoutContainer>
  );
}
