// import CustomerList from '@/app/shared/crm/dashboard/customer-list';

// export default function CrmDashboardPage() {
//   return <CustomerList />;
// }

import Link from 'next/link';
import { routes } from '@/config/routes';
import { Button } from 'rizzui/button';
import PageHeader from '@/app/shared/page-header';
import InvoiceTable from '@/app/shared/invoice/invoice-list/table';
import { PiPlusBold } from 'react-icons/pi';
import { invoiceData } from '@/data/invoice-data';
import ExportButton from '@/app/shared/export-button';
import { metaObject } from '@/config/site.config';
import ShipmentStats from '@/app/shared/crm/customer/shipment-stats';
import RecentActivities from '@/app/shared/file/recent-activities';

export const metadata = {
  ...metaObject('Invoices'),
};

const pageHeader = {
  title: 'Customer List',
  breadcrumb: [
    {
      href: routes.home,
      name: 'Home',
    },
    {
      href: routes.crm.dashboard,
      name: 'CRM',
    },
    {
      name: 'Customer List',
    },
  ],
};

export default function CustomerListPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          
          <ExportButton
            data={invoiceData}
            fileName="invoice_data"
            header="ID,Name,Username,Avatar,Email,Due Date,Amount,Status,Created At"
          />

          <Link href={routes.invoice.create} className="w-full @lg:w-auto">
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add Invoice
            </Button>
          </Link>
        </div>
      </PageHeader>
      <div className="flex flex-col gap-10">
      <ShipmentStats />
      <InvoiceTable />
      </div>
      
        <div className="col-span-full flex flex-col gap-6 @5xl:col-span-4 2xl:gap-8 3xl:col-span-3">
          <RecentActivities />

        </div>
      </>
  );
}

