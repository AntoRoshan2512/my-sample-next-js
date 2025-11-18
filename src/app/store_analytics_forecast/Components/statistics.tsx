'use client';

import WidgetCard from '@core/components/cards/widget-card';
import { CustomTooltip } from '@core/components/charts/custom-tooltip';
import cn from '@core/utils/class-names';
import { useMedia } from 'react-use';
import {
  CartesianGrid,
  ComposedChart,
  Customized,
  Area,
  Line,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Box } from 'rizzui/box';
import { Flex } from 'rizzui/flex';
import { Text } from 'rizzui/typography';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
  },
  {
    name: 'Aug',
    uv: 6490,
    pv: 2300,
  },
  {
    name: 'Sep',
    uv: 4490,
    pv: 3300,
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 6300,
  },
  {
    name: 'Nov',
    uv: 2490,
    pv: 1300,
  },
  {
    name: 'Dec',
    uv: 5490,
    pv: 3300,
  },
];

export default function PodcastsStatistics({
  className,
}: {
  className?: string;
}) {
  const isTablet = useMedia('(max-width: 820px)', false);

  return (
    <WidgetCard
      // hide header area to remove leftover empty space above KPIs
      headerClassName="hidden"
      // remove top padding from card to eliminate leftover space
      className={cn('@container pt-0', className)}
    >
      {/* KPI row */}
      <div className="mb-5 grid grid-cols-1 @[48rem]:grid-cols-3 gap-4">
        <div className="rounded-md bg-muted/10 p-4">
          <text className="text-xl text-muted-foreground">Revenue Forecast</text>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl font-bold">₹7.4L</h3>
            <span className="text-sm text-green-600">+12%</span>
          </div>
        </div>
        <div className="rounded-md bg-muted/10 p-4">
          <Text className="text-xl text-muted-foreground">Expected Orders</Text>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl font-bold">3,520</h3>
            <span className="text-sm text-green-600">+8%</span>
          </div>
        </div>
        <div className="rounded-md bg-muted/10 p-4">
          <Text className="text-xl text-muted-foreground">Top Category</Text>
          <div className="flex items-baseline gap-3">
            <h3 className="text-3xl font-bold">Footwear</h3>
            <span className="text-sm text-green-600">+18%</span>
          </div>
        </div>
      </div>

      {/* Tag between KPIs and chart */}
      <div className="mb-3">
        <div className="inline-flex items-center rounded-md bg-muted/10 px-3 py-1 text-sm">
          Forecast Revenue
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="h-[380px] w-full @lg/pod:h-[420px] relative">
          {/* Confidence badge (top-right) */}
          <div className="absolute right-4 top-4 z-10">
            <div className="rounded-md bg-muted/20 px-3 py-1 text-sm">
              Forecast Confidence: <span className="font-semibold text-emerald-400">HIGH</span>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ left: -10 }}
            >
              <defs>
                <linearGradient id="bandGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(2,188,125,0.12)" />
                  <stop offset="100%" stopColor="rgba(2,188,125,0.02)" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#58C6FF" />
                  <stop offset="100%" stopColor="#02BC7D" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="6 6" vertical={false} />
              <XAxis dataKey="name" padding={{ left: 20, right: 20 }} tickLine={false} />
              <YAxis tickLine={false} tickFormatter={formatYAxis} />
              <Tooltip content={<CustomTooltip />} />
              {/* confidence band area */}
              {/* <Area type="monotone" dataKey="pv" stroke="none" fill="url(#bandGradient)" fillOpacity={0.6} /> */}
              <Line type="monotone" dataKey="pv" stroke="#58C6FF" strokeWidth={2} activeDot={{ r: 6 }} dot={false} />
              <Line type="monotone" dataKey="uv" stroke="#02BC7D" strokeWidth={2} dot={false} />
              <Customized component={CustomizedRectangle} />
            </ComposedChart>
          </ResponsiveContainer>
          {/* legend */}
          <div className="mt-3 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><span className="h-2 w-6 bg-[#58C6FF] rounded"/> HI prescution</div>
            <div className="flex items-center gap-2"><span className="h-2 w-6 bg-[#02BC7D] rounded"/> AI Prediction</div>
            <div className="ml-auto text-xs text-muted-foreground pr-4">90d</div>
          </div>
          {/* bottom label inside chart */}
          
        </div>
      </div>
    </WidgetCard>
  );
}

const formatYAxis = (tick: any) => {
  if (tick >= 1000000) return `${tick / 1000000000}b`;
  if (tick >= 1000000) return `${tick / 1000000}m`;
  if (tick >= 1000) return `${tick / 1000}k`;
  return tick;
};

const CustomizedRectangle = (props: any) => {
  const x = props.activeCoordinate?.x;

  return x ? (
    <>
      <defs>
        <linearGradient id="uvGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255, 126, 58, 0.04)" />
          <stop offset="100%" stopColor="rgba(255, 126, 58, 0.4)" />
        </linearGradient>
      </defs>
      <Rectangle
        key="uv"
        width={40}
        height={props.height - 30}
        x={props.activeCoordinate?.x - 20}
        y={0}
        fill="url(#uvGradient)"
        radius={[12, 12, 0, 0]}
      />
    </>
  ) : null;
};
