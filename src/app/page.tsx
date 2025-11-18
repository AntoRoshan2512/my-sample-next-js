import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/config/routes';
import { Button } from 'rizzui/button';
import WelcomeBanner from '@core/components/banners/welcome';
import StatCards from '@/app/shared/ecommerce/dashboard/stat-cards';
import ProfitWidget from '@/app/shared/ecommerce/dashboard/profit-widget';
import SalesReport from '@/app/shared/ecommerce/dashboard/sales-report';
import BestSellers from '@/app/shared/ecommerce/dashboard/best-sellers';
import RepeatCustomerRate from '@/app/shared/ecommerce/dashboard/repeat-customer-rate';
import UserLocation from '@/app/shared/ecommerce/dashboard/user-location';
import PromotionalSales from '@/app/shared/ecommerce/dashboard/promotional-sales';
import RecentOrder from '@/app/shared/ecommerce/dashboard/recent-order';
import StockReport from '@/app/shared/ecommerce/dashboard/stock-report';
import { PiPlusBold } from 'react-icons/pi';
import welcomeImg from '@public/shop-illustration.png';
import HandWaveIcon from '@core/components/icons/hand-wave';


import { Grid } from 'rizzui/grid';
import { Box } from 'rizzui/box';
import { metaObject } from '@/config/site.config';
import dynamic from 'next/dynamic';


import RatingAnalytics from '@/app/shared/crm/dashboard/rating-analytics';

import CashInBank from '@/app/shared/financial/dashboard/cash-in-bank';

import JobOverview from '../components/job-overview';



import SatisfactionRate from '@/app/shared/support/dashboard/satisfaction-rate';

import TeamActivity from '@/app/shared/crm/dashboard/team-activity';



import PledgesNumber from '../components/pledges-number';

import RecentCustomers from '@/app/shared/executive/recent-customers';

import CustomerGrowthSummary from '@/app/shared/crm/dashboard/customer-growth-summary';

import Investment from '@/app/shared/financial/dashboard/investment/investment';

import MonthlySalesGrowth from '@/app/shared/executive/monthly-sales-growth';

import StoreAnalyticsStats from '@/app/shared/store-analytics/dashboard/store-analytics-stats';

import GenderStatistics from '../components/gender-statistics';

import PerformanceInsights from "../components/performance-insights";

import LeadingTeams from '@/components/leading-teams';

import JobFeed from './feeds/job-feed';



export default function EcommerceDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
        <WelcomeBanner
          title={
            <>
              Good Morning, <br /> Cameron{' '}
              <HandWaveIcon className="inline-flex h-8 w-8" />
            </>
          }
          description={
            'Here’s What happening on your store today. See the statistics at once.'
          }
          media={
            <div className="absolute -bottom-6 end-4 hidden w-[300px] @2xl:block lg:w-[320px] 2xl:-bottom-7 2xl:w-[330px]">
              <div className="relative">
                <Image
                  src={welcomeImg}
                  alt="Welcome shop image form freepik"
                  className="dark:brightness-95 dark:drop-shadow-md"
                />
              </div>
            </div>
          }
          contentClassName="@2xl:max-w-[calc(100%-340px)]"
          className="border border-muted bg-gray-0 pb-8 @4xl:col-span-2 @7xl:col-span-8 dark:bg-gray-100/30 lg:pb-9"
        >
          <Link href={routes.eCommerce.createProduct} className="inline-flex">
            <Button as="span" className="h-[38px] shadow md:h-10">
               Explore Store Analytics
            </Button>
          </Link>
        </WelcomeBanner>
        
        <StatCards className="@2xl:grid-cols-3 @3xl:gap-6 @4xl:col-span-2 @7xl:col-span-8" />
         
        
        <LeadingTeams className="h-[455px] @sm:h-[450px] @7xl:col-span-4 @7xl:col-start-9 @7xl:row-start-1 @7xl:row-end-3" />
        <SalesReport className="@4xl:col-span-2 @7xl:col-span-8" />

        <SatisfactionRate className="@4xl:col-start-2 @4xl:row-start-3 @7xl:col-span-4 @7xl:col-start-auto @7xl:row-start-auto" />
        <JobFeed className="@4xl:col-span-2 @7xl:col-span-12 @[90rem]:col-span-7 @[112rem]:col-span-8" />
        <PerformanceInsights className="@7xl:col-span-6 @[90rem]:col-span-5 @[112rem]:col-span-4" />

        <CashInBank className="@4xl:col-span-2 @7xl:col-span-12 @[90rem]:col-span-8" /> 

        <MonthlySalesGrowth className="@7xl:col-span-6 @[90rem]:col-span-4" />

        
    
        <RecentOrder className="relative @4xl:col-span-2 @7xl:col-span-12" />
        
        
      </div>
    </div>
  );
}
