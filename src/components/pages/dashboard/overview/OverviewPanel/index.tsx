"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Dot,
  ReferenceLine,
  TooltipProps,
} from "recharts";

interface DataPoint {
  date: string;
  value: number;
  compare: number;
  fullDate: string;
  lastPeriod: number;
}

interface Action {
  title: string;
  count: string;
  icon: string;
}

interface TooltipData {
  date: string;
  value: number;
  lastPeriod: number;
}

interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: DataPoint;
}

interface ChartMouseEvent {
  activeLabel?: string;
  activePayload?: Array<{
    payload: DataPoint;
  }>;
}

const data: DataPoint[] = [
  { date: "2 Jun", value: 350, compare: 180, fullDate: "2 June 2025", lastPeriod: 360 },
  { date: "5 Jun", value: 454, compare: 185, fullDate: "5 June 2025", lastPeriod: 365 },
  { date: "9 Jun", value: 320, compare: 190, fullDate: "9 June 2025", lastPeriod: 370 },
  { date: "13 Jun", value: 320, compare: 185, fullDate: "13 June 2025", lastPeriod: 365 },
  { date: "15 Jun", value: 500.32, compare: 92.21, fullDate: "15 June 2025", lastPeriod: 92.21 },
  { date: "21 Jun", value: 550, compare: 90, fullDate: "21 June 2025", lastPeriod: 360 },
  { date: "25 Jun", value: 400, compare: 200, fullDate: "25 June 2025", lastPeriod: 370 },
  { date: "28 Jun", value: 520, compare: 255, fullDate: "28 June 2025", lastPeriod: 375 },
];

const actions: Action[] = [
  { title: "Compute Engine", count: "12", icon: "/images/overview/compute-engine.svg" },
  { title: "Volumes", count: "12", icon: "/images/overview/volumes.svg" },
  { title: "Storage", count: "12", icon: "/images/overview/storage.svg" },
  { title: "Snapshots", count: "12", icon: "/images/overview/snapshots.svg" },
  { title: "Backups", count: "12", icon: "/images/overview/backups.svg" },
  { title: "Floating IPs", count: "12", icon: "/images/overview/floating-ips.svg" },
  { title: "VPC Networks", count: "12", icon: "/images/overview/vpc-networks.svg" },
  { title: "Routers", count: "12", icon: "/images/overview/routers.svg" },
  { title: "Security Groups", count: "12", icon: "/images/overview/security-groups.svg" },
];

export default function OverviewPanel() {
  const [activePoint, setActivePoint] = useState<string>("15 Jun");
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);

  
  useEffect(() => {
    const defaultData = data.find(d => d.date === "15 Jun");
    if (defaultData) {
      setTooltipData({
        date: defaultData.fullDate,
        value: defaultData.value,
        lastPeriod: defaultData.lastPeriod,
      });
    }
  }, []);

  const handleMouseMove = (e: ChartMouseEvent | null) => {
    if (e && e.activeLabel) {
      setActivePoint(e.activeLabel);
      if (e.activePayload && e.activePayload.length > 0) {
        const payload = e.activePayload[0].payload;
        setTooltipData({
          date: payload.fullDate,
          value: payload.value,
          lastPeriod: payload.lastPeriod,
        });
      }
    }
  };

  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      const current = payload[0].payload as DataPoint;

      return (
        <div className="bg-slate-700 text-white p-3 rounded-lg shadow-lg border-0">
          <p className="text-xs text-gray-300 mb-1">{current.fullDate}</p>
          <p className="text-[14.77px] font-medium mb-2 leading-[25.32px]">
            $ {current.value}
          </p>
          <div className="flex items-center gap-1 mb-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span className="text-xs text-gray-300">Last Period</span>
          </div>
          <p className="text-sm font-normal">$ {current.lastPeriod}</p>
        </div>
      );
    }
    return null;
  };

  const CustomMainDot = ({ cx, cy, payload }: CustomDotProps) => {
    if (typeof cx !== 'number' || typeof cy !== 'number' || !payload) {
      return null;
    }
    
    const isActive = payload.date === activePoint;
    if (isActive) {
      return (
        <Dot cx={cx} cy={cy} r={5} fill="#2563EB" stroke="#fff" strokeWidth={2} />
      );
    }
    return <Dot cx={cx} cy={cy} r={3} fill="#2563EB" />;
  };

  const CustomGreyDot = ({ cx, cy, payload }: CustomDotProps) => {
    if (typeof cx !== 'number' || typeof cy !== 'number' || !payload) {
      return null;
    }
    
    const isActive = payload.date === activePoint;
    if (isActive) {
      return (
        <Dot cx={cx} cy={cy} r={4} fill="#9CA3AF" stroke="#fff" strokeWidth={2} />
      );
    }
    return <Dot cx={cx} cy={cy} r={3} fill="#9CA3AF" />;
  };

  return (
    <div className="flex gap-6">
      <div className="flex-[7] flex flex-col gap-6">
        <div className="flex gap-4">
          <div className="bg-white p-5 rounded-2xl shadow flex items-center justify-between w-1/2">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                <Image
                  src="/images/overview/server-icon.svg"
                  alt="Instances"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <p className="text-blue-500 text-sm font-medium">Instances</p>
                <h3 className="text-2xl font-bold text-blue-600">10</h3>
              </div>
            </div>
            <button
              className="w-12 h-12 rounded-xl bg-blue-600 text-white text-xl font-bold flex items-center justify-center"
            >
              +
            </button>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow w-1/2 flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
              <Image
                src="/images/overview/projects-icon.svg"
                alt="Projects"
                width={32}
                height={32}
              />
            </div>
            <div>
              <p className="text-blue-500 text-sm font-medium">Active Projects</p>
              <h3 className="text-2xl font-bold text-blue-600">6/10</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-base font-semibold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {actions.map((action, i) => (
              <button
                key={i}
                className="flex items-center justify-between h-[64px] px-3 rounded-lg border border-[#BFD9FF]"
                style={{ backgroundColor: "#DBEAFE" }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Image src={action.icon} alt={action.title} width={36} height={36} />
                  <div className="flex flex-col items-start truncate">
                    <span className="text-[#1D4ED8] font-medium text-[13px] leading-[18px] truncate">
                      {action.title}
                    </span>
                    <span className="text-[#0F172A]/80 text-[12px] leading-[16px]">
                      {action.count}
                    </span>
                  </div>
                </div>
                <Image
                  src="/images/overview/arrow-right.svg"
                  alt="arrow"
                  width={30}
                  height={20}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-[5]">
        <div className="p-6 rounded-2xl shadow h-full flex flex-col text-white"
          style={{ background: "linear-gradient(218.08deg, #93C5FD -1.54%, #1D4ED8 89.24%)" }}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">Monitoring</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 text-sm text-black">
                <Image src="/images/overview/settings.svg" alt="Settings" width={16} height={16} />
                <span>My Test Instance</span>
                <Image src="/images/overview/arrow-down.svg" alt="▼" width={12} height={12} />
              </div>
              <Image src="/images/overview/expand.svg" alt="Expand" width={24} height={24} />
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            {[
              { label: "Current Billing", value: "$124.32" },
              { label: "Monthly Consumption", value: "$901.77" },
              { label: "Monthly Forecast", value: "$901.77" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 bg-white rounded-xl p-3 text-center text-gray-800"
              >
                <p className="text-[11px] text-gray-500 whitespace-nowrap truncate">
                  {item.label}
                </p>
                <h4 className="text-base font-semibold">{item.value}</h4>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-4 relative">
            <LineChart 
              data={data} 
              width={400} 
              height={200}
              onMouseMove={handleMouseMove}
            >
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 11, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 10, fill: "#6B7280" }} 
                domain={[0, 600]}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              
              <ReferenceLine 
                x={activePoint} 
                stroke="#94A3B8" 
                strokeDasharray="4 4" 
                strokeWidth={1}
              />
              
              <Line
                type="linear"
                dataKey="value"
                stroke="#2563EB"
                strokeWidth={3}
                dot={<CustomMainDot />}
                activeDot={{ r: 6, fill: "#2563EB", stroke: "#fff", strokeWidth: 2 }}
              />
              <Line
                type="linear"
                dataKey="compare"
                stroke="#9CA3AF"
                strokeWidth={2}
                dot={<CustomGreyDot />}
              />
            </LineChart>
          </div>

          <div className="mt-4 bg-white rounded-xl overflow-hidden">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`
                  flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-gray-50
                  ${i !== 0 ? "border-t border-gray-200" : ""}
                `}
              >
                <div className="flex items-center gap-3">
                  <Image src="/images/overview/doc-icon.svg" alt="doc" width={20} height={20} />
                  <span>Sample Text</span>
                </div>
                <Image src="/images/overview/righticon.svg" alt="arrow" width={12} height={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}