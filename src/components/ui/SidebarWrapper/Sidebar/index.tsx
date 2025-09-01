import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const menuItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaUser />, label: "Profile" },
    { icon: <FaCog />, label: "Settings" },
  ];

  return (
    <div
      className={`h-screen bg-themeBlue-50 flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-[310px]"
      }`}
    >
      <nav className="flex-1 flex flex-col space-y-2 mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            <div className="text-xl">{item.icon}</div>
            {!collapsed && <span className="ml-4">{item.label}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
