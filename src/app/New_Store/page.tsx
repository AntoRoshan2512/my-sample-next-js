import StatCards from './stat-cards';
import SalesGrowth from './sales_growth';
import AI_Action from './AI_rec';
import TopSellingProducts from '@/app/shared/store-analytics/dashboard/top-selling-products'; 

import Spending from '@/app/shared/financial/dashboard/spending';
import Heatmap from './Heatmap';
import PageMetrics from '@/app/shared/analytics-dashboard/page-metric';
import AccountRetention from '@/app/shared/analytics-dashboard/account-retention';

import RecentOrder from '@/app/shared/ecommerce/dashboard/recent-order';


export default function NewStore_AnalyticsDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
        <StatCards className="grid-cols-1 @xl:grid-cols-2 @4xl:col-span-2 @6xl:grid-cols-4 @7xl:col-span-12" />
        <SalesGrowth className="col-span-full @[59rem]:col-span-6 @[90rem]:col-span-7 @[90rem]:col-start-auto @[90rem]:row-start-auto" />

        <AI_Action className="@7xl:col-span-6 @[90rem]:col-span-5 @[112rem]:col-span-4 h-[420px] min-h-0 pb-2" />
        <TopSellingProducts className="@7xl:col-span-6 @[90rem]:col-span-4 h-[420px] min-h-0 pb-2 overflow-auto" />
        <TopSellingProducts className="@7xl:col-span-6 @[90rem]:col-span-4 h-[420px] min-h-0 pb-2 overflow-auto" />
        <Heatmap className="@7xl:col-span-6 @[90rem]:col-span-4 h-[420px] min-h-0 pb-2" />

        <PageMetrics className="@4xl:col-span-2 @4xl:row-start-5 @7xl:col-span-12 @7xl:row-start-auto @[90rem]:col-span-7 @[112rem]:col-span-8" />
        <AccountRetention className="@7xl:col-span-12 @[90rem]:col-span-5 @[112rem]:col-span-4" />

      </div>
      <div className="grid grid-cols-6 gap-6 @container 3xl:gap-8 mt-6">
        <Spending className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      </div>

      <div className="grid grid-cols-6 gap-6 @container 3xl:gap-8 mt-6">
        <RecentOrder className="relative @4xl:col-span-2 @7xl:col-span-12" />
      </div>
      

    </div>
  );
}
