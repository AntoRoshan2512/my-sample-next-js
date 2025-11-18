import { routes } from '@/config/routes';
import CategoryTable from '@/app/shared/ecommerce/category/category-list/table';
import CategoryPageHeader from './category-page-header';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Tags'),
};

const pageHeader = {
  title: 'Tags',
  breadcrumb: [
    {
      href: routes.crm.dashboard,
      name: 'Home',
    },
    {
      href: routes.crm.segments,
      name: 'CRM',
    },
    {
      name: 'Tags',
    },
  ],
};

export default function CategoriesPage() {
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
