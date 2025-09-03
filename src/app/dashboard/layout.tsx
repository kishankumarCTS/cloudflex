import Navbar from "@/components/ui/Navbar";
import SidebarWrapper from "@/components/ui/SidebarWrapper";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside>
        <SidebarWrapper />
      </aside>

      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <header>
          <Navbar />
        </header>
        <main style={{ flexGrow: 1, padding: "1rem" }}>{children}</main>
      </div>
    </div>
  );
};

export default layout;
