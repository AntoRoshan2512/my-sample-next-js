'use client';

import { projectRecentActivitiesData } from '@/data/project-dashboard';
import WidgetCard from '@core/components/cards/widget-card';
import cn from '@core/utils/class-names';
import { Box, Flex, Tab, Text } from 'rizzui';

export default function RecentActivities({
  className,
}: {
  className?: string;
}) {
  return (
    <WidgetCard
      title="Action Center "
      className={cn('@container dark:bg-gray-100/50', className)}
    >
      <Tab className="mt-4">
        <Tab.List className="grid w-full grid-cols-2 gap-0">
          <Tab.ListItem className="justify-center py-4">Activity</Tab.ListItem>
          <Tab.ListItem className="justify-center py-4">Update</Tab.ListItem>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="custom-scrollbar overflow-y-auto scroll-smooth h-auto max-h-[220px]">
              <ActivityCard />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="custom-scrollbar overflow-y-auto scroll-smooth h-auto max-h-[220px]">
              <ActivityCard />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab>
    </WidgetCard>
  );
}

function ActivityCard() {
  // Example data for demonstration; replace with your actual data structure
  const items = [
    {
      id: 1,
      icon: '',
      title: 'VIP Customer Alert',
      description: 'Sarah Johnson (Lifetime Spend: $12,340) just made a $550 purchase',
      recommended: 'Send a personalized thank-you + 10% off next visit',
      date: 'Just now',
      actions: [
        { label: 'Place a Bid', onClick: () => {/* trigger email/SMS */}, primary: true },
        { label: 'View Item', onClick: () => {/* go to CRM details */} },
      ],
    },
    {
      id: 2,
      icon: '',
      title: 'Churn Risk Alert',
      description: '25 customers at risk of churn this month',
      recommended: 'Launch retention campaign to win them back',
      date: '1 hour ago',
      actions: [
        { label: 'Place a Bid', onClick: () => {/* launch campaign */}, primary: true },
        { label: 'View Item', onClick: () => {/* view details */} },
      ],
    },
    {
      id: 3,
      icon: '',
      title: 'Inventory Alert',
      description: 'Top product X running low (5 left in stock)',
      recommended: 'Reorder now to avoid stockout',
      date: '2 hours ago',
      actions: [
        { label: 'Place a Bid', onClick: () => {/* reorder */}, primary: true },
        { label: 'View Item', onClick: () => {/* view product */} },
      ],
    },
  ];
  const showViewAll = items.length > 4;
  return (
    <Box className="space-y-4 p-0.5">
      {items.length === 0 ? (
        <Text className="text-center text-gray-400 py-8">No actions left</Text>
      ) : (
        <>
          {items.map((item) => (
            <Box
              key={item.id}
              className="rounded-xl bg-white shadow p-6 border border-gray-100 flex flex-col gap-4"
            >
              <Flex align="center" justify="between" className="gap-4 mb-2">
                <Flex align="center" className="gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <Text className="font-bold text-lg mb-1">{item.title}</Text>
                    <Text className="text-gray-700 text-sm mb-1">{item.description}</Text>
                  </div>
                </Flex>
                <Text className="text-gray-400 text-xs">{item.date}</Text>
              </Flex>
              <Text className="text-gray-500 text-sm mb-2">
                <span className="font-medium text-blue-600">Recommended Action:</span> {item.recommended}
              </Text>
              <Flex align="center" className="gap-2 mt-1">
                {item.actions.map((action, idx) => (
                  <button
                    key={idx}
                    className={action.primary
                      ? "px-6 py-2 rounded bg-black text-white font-semibold shadow hover:bg-gray-800 transition"
                      : "px-6 py-2 rounded bg-white text-gray-900 font-semibold shadow border border-gray-200 hover:bg-gray-100 transition"
                    }
                    type="button"
                    onClick={action.onClick}
                  >
                    {action.label}
                  </button>
                ))}
              </Flex>
            </Box>
          ))}
          {showViewAll && (
            <Box className="pt-2 text-center">
              <button
                className="px-6 py-2 bg-white rounded-lg shadow text-gray-900 font-medium hover:shadow-md transition"
                type="button"
              >
                View All
              </button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}
