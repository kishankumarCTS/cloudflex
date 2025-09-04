"use client";
import Navbar from "@/components/ui/Navbar";
import SidebarWrapper from "@/components/ui/SidebarWrapper";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside>
        <SidebarWrapper collapsed={collapsed} setCollapsed={setCollapsed} />
      </aside>

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: collapsed ? "88px" : "310px",
        }}
        className="transition-all duration-300"
      >
        <header>
          <Navbar />
        </header>
        <main style={{ flexGrow: 1, padding: "1rem" }}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
