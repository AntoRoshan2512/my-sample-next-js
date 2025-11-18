import { ColumnDef } from '@tanstack/react-table';

export const appointmentColumns: ColumnDef<any, any>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ row }) => row.original.name,
  },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: ({ row }) => row.original.status,
  },
  {
    header: 'Reach',
    accessorKey: 'reach',
    cell: ({ row }) => row.original.reach.toLocaleString(),
  },
  {
    header: 'CTR',
    accessorKey: 'ctr',
    cell: ({ row }) => row.original.ctr ? row.original.ctr + '%' : '-',
  },
  {
    header: 'Revenue',
    accessorKey: 'revenue',
    cell: ({ row }) => row.original.revenue ? '$' + row.original.revenue.toLocaleString() : '-',
  },
  {
    header: 'Start Date',
    accessorKey: 'startDate',
    cell: ({ row }) => row.original.startDate,
  },
  {
    header: 'End Date',
    accessorKey: 'endDate',
    cell: ({ row }) => row.original.endDate,
  },
];
