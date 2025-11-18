import ForecastStats from './Components/stat-cards';
import PodcastsStatistics from './Components/statistics';
import WelcomeBanner from './Components/banner';
import RevenueGrowth from './Components/sales-forecast';
import ReportAnalytics from './Components/forecast-table';
import ConversionRates from './Components/product-forecast';
import DeviceAnalytics from './Components/Customer-forecast';

export default function AppointmentDashboard() {
  return (
      <div className="grid grid-cols-12 gap-6 @container @[59rem]:gap-7 3xl:gap-8">
      <PodcastsStatistics className="col-span-full @[59rem]:col-span-12 p-4" />
  <RevenueGrowth className="col-span-full @[59rem]:col-span-6 p-4" />
  <WelcomeBanner className="col-span-full @[59rem]:col-span-6 p-4" />
  <ReportAnalytics className="col-span-full @[59rem]:col-span-12 p-4" />
  <ConversionRates className="col-span-full @[59rem]:col-span-6 p-4" />
  <DeviceAnalytics className="col-span-full @[59rem]:col-span-6 p-4" />
  
    </div>
    
  );
}
