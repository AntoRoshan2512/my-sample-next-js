import { routes } from '@/config/routes';
import CategoryTable from '@/app/shared/crm/segment/segment-list/table';
import CategoryPageHeader from './segment-page-header';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Segments'),
};

const pageHeader = {
  title: 'Segments',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'Home',
    },
    {
      href: routes.eCommerce.categories,
      name: 'CRM',
    },
    {
      name: 'Segments',
    },
  ],
};

export default function SegmentsPage() {
  return (
    <>
      <CategoryPageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      />
      <CategoryTable />
    </>
  );
}
