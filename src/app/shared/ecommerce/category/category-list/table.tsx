'use client';

import { categories } from '@/data/product-categories';
import Table from '@core/components/table';
import { useTanStackTable } from '@core/components/table/custom/use-TanStack-Table';
import { categoriesColumns as baseCategoriesColumns } from './columns';
import Link from 'next/link';
import TableFooter from '@core/components/table/footer';
import TablePagination from '@core/components/table/pagination';
import Filters from './filters';

export type CategoryDataType = (typeof categories)[number];

export default function CategoryTable() {
  // Enhance columns: make name cell a link to the drill-down page
  const categoriesColumns = baseCategoriesColumns.map((col) => {
    if (col.id === 'name') {
      return {
        ...col,
        cell: ({ row, getValue }: any) => (
          <Link
            href={`./segment/${row.original.id}`}
            className="text-primary underline hover:text-primary-700 focus:outline-none"
          >
            {getValue()}
          </Link>
        ),
      };
    }
    return col;
  });

  const { table, setData } = useTanStackTable<CategoryDataType>({
    tableData: categories,
    columnConfig: categoriesColumns,
    options: {
      initialState: {
        pagination: {
          pageIndex: 0,
          pageSize: 10,
        },
      },
      meta: {
        handleDeleteRow: (row: CategoryDataType) => {
          setData((prev) => prev.filter((r) => r.id !== row.id));
        },
        handleMultipleDelete: (rows: CategoryDataType[]) => {
          setData((prev) => prev.filter((r) => !rows.includes(r)));
        },
      },
      enableColumnResizing: false,
    },
  });

  return (
    <>
      <Filters table={table} />
      <Table
        table={table}
        variant="modern"
        classNames={{
          container: 'border border-muted rounded-md',
          rowClassName: 'last:border-0',
        }}
      />
      <TableFooter table={table} />
      <TablePagination table={table} className="py-4" />
    </>
  );
}
