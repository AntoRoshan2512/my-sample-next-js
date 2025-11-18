'use client';

import WidgetCard from '@core/components/cards/widget-card';
import { CustomTooltip } from '@core/components/charts/custom-tooltip';
import { CustomYAxisTick } from '@core/components/charts/custom-yaxis-tick';
import cn from '@core/utils/class-names';
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Title } from 'rizzui';

const data = [
  { month: '7am', growthPercentage: 15 },
  { month: '8am', growthPercentage: 20 },
  { month: '9am', growthPercentage: 30 },
  { month: '10am', growthPercentage: 40 },
  { month: '11am', growthPercentage: 50 },
  { month: '12pm', growthPercentage: 60 },
  { month: '1pm', growthPercentage: 70 },
  { month: '2pm', growthPercentage: 80 },
  { month: '3pm', growthPercentage: 90 },
  { month: '4pm', growthPercentage: 100 },
  { month: '5pm', growthPercentage: 95 },
  { month: '6pm', growthPercentage: 90 },
  { month: '7pm', growthPercentage: 80 },
  { month: '8pm', growthPercentage: 60 },
  { month: '9pm', growthPercentage: 40 },
  { month: '10pm', growthPercentage: 25 },
  { month: '11pm', growthPercentage: 15 },
  { month: '12am', growthPercentage: 10 },
];

export default function MonthlySalesGrowth({
  className,
}: {
  className?: string;
}) {
  return (
    <WidgetCard
      title="Store Peak Times"
      titleClassName="font-bold text-2xl mb-2 font-inter"
      headerClassName="flex-col @2xl:flex-row gap-3"
      className={cn('min-h-[28rem]', className)}
    >
      <div className="custom-scrollbar overflow-x-auto scroll-smooth -mb-3 pb-3">
        <div className="h-[28rem] w-full pt-6 @lg:pt-8">
          <ResponsiveContainer width="100%" height="100%" >
            <ComposedChart
              layout="vertical"
              data={data}
              margin={{
                top: 0,
                right: 32,
                bottom: 0,
                left: -20,
              }}
              className="[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500 [&_.recharts-cartesian-axis.yAxis]:-translate-y-3 rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
            >
              <CartesianGrid
                vertical={false}
                strokeOpacity={0.435}
                strokeDasharray="8 10"
              />

              <XAxis
                type="number"
                tickLine={false}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                domain={[0, 100]}
              />
              <YAxis
                dataKey="month"
                type="category"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip postfix="%" />} cursor={false} />
              <defs>
                <linearGradient
                  id="horizontalGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0" stopColor="#82ccdd" />
                  <stop offset="0.8" stopColor="#706fd3" />
                  <stop offset="1" stopColor="#706fd3" />
                </linearGradient>
              </defs>

              <Bar
                dataKey="growthPercentage"
                barSize={10}
                radius={[0, 4, 4, 0]}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      entry.growthPercentage < 0
                        ? '#dd6773'
                        : 'url(#horizontalGradient)'
                    }
                  />
                ))}
                <LabelList
                  dataKey="growthPercentage"
                  className="text-gray-500"
                  content={renderCustomizedLabel}
                />
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </WidgetCard>
  );
}

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  return (
    <text
      x={x + width + 8}
      y={y + height / 2 + 5}
      fill="#6b7280"
      textAnchor="start"
      fontSize={12}
    >
      {value}
    </text>
  );
};
