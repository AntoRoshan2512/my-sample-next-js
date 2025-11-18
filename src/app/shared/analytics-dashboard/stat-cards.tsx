'use client';

import MetricCard from '@core/components/cards/metric-card';
import { Text } from 'rizzui';
import cn from '@core/utils/class-names';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { PiTrendDownBold, PiTrendUpBold } from 'react-icons/pi';

const VISITOR_COLORS = {
  skyBlue: {
    default: '#29CCB1',
    light: '#29ccb14d',
  },
  red: {
    default: '#E74C3C',
    light: '#e74c3c4d',
  },
  yellow: {
    default: '#EE6D3D',
    light: '#ee6c3d4d',
  },
  green: {
    default: '#34C759',
    light: '#34c7594d',
  },
};

// Revenue data showing daily revenue pattern (adjusted for clearer variation)
const revenueData = [
  { day: 'Sunday', value: 68450, cost: 42000 },
  { day: 'Monday', value: 53000, cost: 41398 },
  { day: 'Tuesday', value: 47200, cost: 43800 },
  { day: 'Wednesday', value: 61780, cost: 44908 },
  { day: 'Thursday', value: 50890, cost: 43800 },
  { day: 'Friday', value: 69390, cost: 45800 },
  { day: 'Saturday', value: 56490, cost: 44300 },
];

// Transaction count data (adjusted for clearer variation)
const transactionData = [
  { day: 'Sunday', value: 945, cost: 800 },
  { day: 'Monday', value: 1180, cost: 1050 },
  { day: 'Tuesday', value: 1320, cost: 1150 },
  { day: 'Wednesday', value: 1610, cost: 1200 },
  { day: 'Thursday', value: 990, cost: 880 },
  { day: 'Friday', value: 1580, cost: 1180 },
  { day: 'Saturday', value: 1290, cost: 1000 },
];

// AOV (Average Order Value) data (adjusted for clearer variation)
const aovData = [
  { day: 'Sunday', value: 55.03, cost: 42.00 },
  { day: 'Monday', value: 46.50, cost: 41.50 },
  { day: 'Tuesday', value: 62.20, cost: 42.30 },
  { day: 'Wednesday', value: 38.10, cost: 43.00 },
  { day: 'Thursday', value: 49.80, cost: 41.90 },
  { day: 'Friday', value: 52.50, cost: 42.50 },
  { day: 'Saturday', value: 41.90, cost: 43.10 },
];

// Items per basket data (adjusted for clearer variation)
const basketData = [
  { day: 'Sunday', value: 2.1, cost: 2.0 },
  { day: 'Monday', value: 3.8, cost: 2.7 },
  { day: 'Tuesday', value: 4.3, cost: 2.9 },
  { day: 'Wednesday', value: 2.7, cost: 3.0 },
  { day: 'Thursday', value: 3.5, cost: 2.8 },
  { day: 'Friday', value: 4.0, cost: 2.9 },
  { day: 'Saturday', value: 2.9, cost: 3.1 },
];

// Update the analyticsStatData to use specific chart data
const analyticsStatData = [
  {
    id: '1',
    title: 'Revenue',
    metric: '$58,450',
    info: 'Total revenue for the selected period.',
    increased: true,
    decreased: false,
    percentage: '+12.0',
    fill: '#3872FA',
    chart: revenueData,  // Changed from trafficData
  },
  {
    id: '2',
    title: 'Transactions',
    metric: '1,245 orders',
    info: 'Number of completed orders.',
    increased: true,
    decreased: false,
    percentage: '+5.0',
    fill: '#f1416c',
    chart: transactionData,  // Changed from trafficData
  },
  // ...rest of the data remains same but update chart properties
  {
    id: '3',
    title: 'Average Order Value (AOV)',
    metric: '$47.03',
    info: 'Average value per order.',
    increased: false,
    decreased: false,
    percentage: '+0.0',
    fill: '#7928ca',
    chart: aovData,  // Changed from conventionRateData
  },
  {
    id: '4',
    title: 'Items per Basket',
    metric: '3.2 items/order',
    info: 'Average items per order.',
    increased: true,
    decreased: false,
    percentage: '+3.2',
    fill: '#0ea5a4',
    chart: basketData,  // Changed from barData
  },
];

export default function StatCards({ className }: { className?: string }) {
  return (
    <div className={cn('@container', className)}>
      <div className="grid grid-cols-1 gap-6 @lg:grid-cols-2 @4xl:grid-cols-4 @7xl:gap-8">
        {analyticsStatData.map((stat, index) => {
          // Rearrange colors to match the desired order
            const colors = ['skyBlue', 'yellow', 'green', 'red'] as const;
          const color = colors[index] as keyof typeof VISITOR_COLORS;

          // Prepare last-month (previous period) comparison using the second-last chart value
          const prevVal = stat.chart?.[Math.max(0, stat.chart.length - 2)]?.value;
          let prevLabel = '';
          let prevValueFormatted: string | number | null = null;
          if (prevVal !== undefined) {
            prevLabel = 'vs Last month:';
            if (stat.title.toLowerCase().includes('revenue')) {
              prevValueFormatted = `$${Number(prevVal).toLocaleString()}`;
            } else if (
              stat.title.toLowerCase().includes('transaction') ||
              stat.title.toLowerCase().includes('orders')
            ) {
              prevValueFormatted = `${Number(prevVal).toLocaleString()} orders`;
            } else if (stat.title.toLowerCase().includes('aov') || stat.title.toLowerCase().includes('average')) {
              prevValueFormatted = `$${Number(prevVal).toFixed(2)}`;
            } else {
              prevValueFormatted = prevVal;
            }
          }
            
          return (
            <div
              key={stat.title + stat.id}
              style={{
                '--color-light': VISITOR_COLORS[color].light,
                '--color': VISITOR_COLORS[color].default,
              } as React.CSSProperties}
              className="space-y-3 rounded-lg border border-muted p-6 dark:bg-[#181818]"
            >
              <div className="@container/sa-stats-card">
                <Text className="text-xs font-medium text-gray-600">{stat.title}</Text>
                <div className="flex flex-col-reverse items-end justify-between @[17rem]/sa-stats-card:flex-row">
                  <div className="me-auto @[17rem]/sa-stats-card:pt-6">
                    <div className="mb-2">
                      {/* make the metric block the same height as the chart so the prev value aligns with the chart bottom */}
                      <div className="flex flex-col h-12 @[16.25rem]:h-16 @xs:h-20 justify-between">
                        <div className="flex items-center gap-2">
                          <Text className="text-lg font-semibold text-gray-900 @[11rem]/sa-stats-card:text-2xl @[17rem]/sa-stats-card:text-xl @[20rem]/sa-stats-card:text-2xl @[24rem]/sa-stats-card:text-[28px]">
                            {stat.metric}
                          </Text>
                          <span className="bg-[var(--color-light)] px-1.5 py-0 text-[10px] text-[var(--color)] rounded">
                            <Text as="span" className="pe-1">
                              {stat.percentage}%
                            </Text>
                            {stat.increased ? (
                              <PiTrendUpBold className="inline size-3" />
                            ) : (
                              <PiTrendDownBold className="inline size-3" />
                            )}
                          </span>
                        </div>

                        {/* prev value aligned to bottom of the chart; numeric portion bold */}
                        {prevValueFormatted !== null ? (
                          <Text className="text-sm text-gray-500">
                            <span className="me-1">{prevLabel}</span>
                            <span className="font-semibold text-gray-900 dark:text-white">{prevValueFormatted}</span>
                          </Text>
                        ) : null}
                      </div>
                    </div>
                    {/* Removed verbose info line per request; keep layout concise */}
                  </div>
                  <div className="mb-2 me-auto mt-0 @[17rem]/sa-stats-card:mb-0 @[17rem]/sa-stats-card:me-0 @[17rem]/sa-stats-card:mt-0">
                    {/* reduced width and enable cropping so chart right edge aligns with the prev line */}
                    <div className="h-12 w-16 overflow-hidden @[16.25rem]:h-16 @[16.25rem]:w-20 @xs:h-20 @xs:w-24">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={stat.chart}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                          barSize={8}
                          barGap={0.5}
                          barCategoryGap="10%"
                        >
                          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                            {stat.chart.map((_, i) => (
                              <Cell
                                key={i}
                                fill={
                                  // make the 6th bar (index 5) dark; others light
                                  i === 5
                                    ? VISITOR_COLORS[color].default
                                    : VISITOR_COLORS[color].light
                                }
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}