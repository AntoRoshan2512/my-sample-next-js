"use client";

import cn from "@core/utils/class-names";
import { Box } from "rizzui";
import CampaignManagement from "./campaign-management";
import CampaignsList from "./campaigns-list";
import FinancialManagement from "./financial-management";
import MyProfile from "./my-profile";
import PerformanceInsights from "./performance-insights";
import AffiliateStats from "./stats";
import VisitorsStatistics from "./visitors-statistics";

const initialItems = [
  {
    id: "111",
    className: "@4xl/af:col-span-full @4xl/af:order-1 @7xl/af:col-span-8",
    content: <VisitorsStatistics />,
  },
  {
    id: "222",
    className: "@4xl/af:order-2 @5xl/af:col-span-6 @7xl/af:col-span-4",
    content: <MyProfile />,
  },
  {
    id: "333",
    className:
      "@4xl/af:col-span-full @4xl/af:order-4 @7xl/af:order-3 @7xl/af:col-span-8",
    content: <CampaignsList />,
  },
  {
    id: "444",
    className:
      "@4xl/af:order-3  @5xl/af:col-span-6 @7xl/af:order-4 @7xl/af:col-span-4",
    content: <CampaignManagement />,
  },
  {
    id: "555",
    className: "@4xl/af:col-span-full @4xl/af:order-5  @5xl/af:col-span-6",
    content: <FinancialManagement />,
  },
  {
    id: "666",
    className: "@4xl/af:col-span-full @4xl/af:order-6  @5xl/af:col-span-6",
    content: <PerformanceInsights />,
  },
];

export default function AffiliateDashBoard() {
  // Drag and drop is disabled; swapy and DndSwitcher removed
  const items = initialItems;

  return (
    <Box className="@container/af">
      <Box
        className="grid grid-cols-1 @4xl/af:grid-cols-2 @5xl/af:grid-cols-12 gap-6 3xl:gap-8"
      >
        <AffiliateStats className="@4xl/af:col-span-full" />
        {items?.map((item, index) => (
          <Box
            className={cn(
              "relative h-full group rounded-md",
              item.className
            )}
            key={index}
          >
            <Box className="h-full">
              {item.content}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
