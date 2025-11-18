import FileStats from './components/stats';
import Patients from './components/payment-pie';
import ActivityReport from './components/graph';
import RecentCustomers from './components/payments-table';

export default function PaymentDashboard() {
  return (
    <div className="grid grid-cols-12 gap-6 @container @[59rem]:gap-7 3xl:gap-8">
      <FileStats className="col-span-full mb-5 2xl:mb-8" />
      <Patients className="col-span-full @[59rem]:col-span-6 p-4" />
      <ActivityReport className="col-span-full @[59rem]:col-span-6 p-4" />
      <RecentCustomers className="col-span-full p-4" />
    </div>
  );
}
