import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Accordion";
import SidebarItem from "../SidebarItem";
import observabilityIcon from "@/assets/icons/observability.svg";
interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const sidebarData = [
    {
      id: 1,
      option: "Observability",
      url: "",
      isDropdown: true,
      iconSrc: observabilityIcon,
      isActive: true,
      subOptions: [
        { id: 1, title: "Monitoring", url: "" },
        { id: 2, title: "Alert Rules", url: "" },
        { id: 3, title: "Activity Logs", url: "" },
        { id: 4, title: "Event Notifications", url: "" },
        { id: 5, title: "Usage Reports", url: "" },
      ],
    },
    {
      id: 2,
      option: "Compute Engine",
      url: "",
      isDropdown: true,
      iconSrc: observabilityIcon,
      isActive: true,
      subOptions: [
        { id: 1, title: "Create A New Compute Instance", url: "" },
        { id: 2, title: "All Compute Instances", url: "" },
      ],
    },
    {
      id: 3,
      option: "Compute Engine",
      url: "",
      isDropdown: true,
      iconSrc: observabilityIcon,
      isActive: true,
      subOptions: [
        { id: 1, title: "Create A New Compute Instance", url: "" },
        { id: 2, title: "All Compute Instances", url: "" },
      ],
    },
    {
      id: 4,
      option: "Compute Engine",
      url: "",
      isDropdown: true,
      iconSrc: observabilityIcon,
      isActive: true,
      subOptions: [
        { id: 1, title: "Create A New Compute Instance", url: "" },
        { id: 2, title: "All Compute Instances", url: "" },
      ],
    },
  ];
  return (
    <div
      className={`bg-themeBlue-50 flex flex-col transition-all duration-300 flex-1 overflow-auto ${
        collapsed ? "w-16" : "w-[310px]"
      }`}
    >
      <nav className="flex-1 flex flex-col px-4 gap-1">
        {sidebarData.map((item) => (
          <Accordion type="single" key={item.id} collapsible>
            <AccordionItem value={item.option}>
              <AccordionTrigger>
                <SidebarItem
                  title={item.option}
                  url={item.url}
                  isDropdown={item.isDropdown}
                  iconSrc={item.iconSrc}
                  collapsed={collapsed}
                  isActive={item.isActive}
                />
              </AccordionTrigger>
              {item.subOptions.map((option) => (
                <AccordionContent key={option.id}>
                  <SidebarItem title={option.title} url={option.url} />
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
