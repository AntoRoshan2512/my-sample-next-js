'use client';

import Image from 'next/image';
import { useState } from 'react';
import JobBadge from './job-badge';
import cn from '@core/utils/class-names';
import SingleJob from './single-job-page';
import JobFeedRating from './job-feed-rating';
import Breadcrumb from '@core/ui/breadcrumb';
import { Button, Text, Title } from 'rizzui';
import { JobFeedFilterDrawer } from './job-feed-filter';
import { type JobType, jobFeedData } from '@/data/job-feed-data';
import {
  PiMapPin,
  PiSealCheckFill,
  PiBookmarkSimpleFill,
  PiBookmarkSimpleThin,
} from 'react-icons/pi';
import { useDrawer } from '@/app/shared/drawer-views/use-drawer';

let countPerPage = 4;

export default function JobFeed({ className }: { className?: string }) {
  const [isLoading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(countPerPage);
  const [activeTab, setActiveTab] = useState<'activity' | 'update'>('activity');
  // Use visibleData.length for correct Load More logic per tab
  // visibleData is defined after activityData/updateData, so move isLoadMore below

  function handleLoadMore() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNextPage(nextPage + countPerPage);
    }, 600);
  }

  // For demo, split data: first half for activity, second half for update
  const mid = Math.ceil(jobFeedData.length / 2);
  const activityData = jobFeedData.slice(0, mid);
  const updateData = jobFeedData.slice(mid);

  const visibleData = activeTab === 'activity' ? activityData : updateData;
  // Move isLoadMore here, after visibleData is defined
  let isLoadMore = nextPage < visibleData.length;

  return (
    <div className={cn(className)}>
      <JobFeedFilterDrawer />
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-0 sm:p-2 w-full max-w-full">
        {/* Heading and Tabs */}
        <div className="px-6 pt-6 pb-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Action Center</h2>
          </div>
          <div className="flex border-b border-gray-200 mt-4">
            <button
              className={`px-4 py-2 font-medium focus:outline-none border-b-2 transition-all ${activeTab === 'activity' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent'}`}
              onClick={() => setActiveTab('activity')}
            >
              Activity <span className="ml-1 text-xs text-gray-500">({activityData.length})</span>
            </button>
            <button
              className={`px-4 py-2 font-medium ml-2 focus:outline-none border-b-2 transition-all ${activeTab === 'update' ? 'text-blue-600 border-blue-600' : 'text-gray-500 border-transparent'}`}
              onClick={() => setActiveTab('update')}
            >
              Update <span className="ml-1 text-xs text-gray-500">({updateData.length})</span>
            </button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-4 max-h-[340px] min-h-[340px] overflow-y-auto custom-scrollbar">
          {visibleData.length === 0 ? (
            <div className="flex items-center justify-center w-full h-full min-h-[300px] text-gray-400 font-medium">
              No actions needed right now
            </div>
          ) : (
            <>
              {visibleData.slice(0, nextPage).map((job, index) => {
                return <JobFeedCard key={index} data={job as JobType} />;
              })}
              {isLoadMore && (
                <div className="mb-4 flex justify-center">
                  <Button
                    variant="solid"
                    isLoading={isLoading}
                    onClick={() => handleLoadMore()}
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function JobFeedCard({ data }: { data: JobType }) {
  // Data mapping for new card layout
  const title = data.jobTitle || 'VIP Customer Alert';
  const subtitle = data.jobDescription?.[0]?.desc || '';
  const recommended = data.skills?.[0] || 'Send a thank-you + 10% off next visit';
  const actions: import('@/data/job-feed-data').JobAction[] = Array.isArray(data.actions) ? data.actions : [];

  return (
    <div
      className="mb-3 flex w-full flex-col gap-y-1 rounded-xl bg-gray-50 shadow-sm border border-gray-100 p-4 sm:p-5 min-h-[90px] max-w-full transition hover:bg-gray-100"
      style={{ minHeight: 90 }}
    >
      <Title as="h3" className="text-base font-semibold text-gray-900 mb-1">
        {title}
      </Title>
      <Text className="text-xs text-gray-700 mb-2">
        {subtitle}
      </Text>
      <Text className="text-sm text-gray-700 mb-2">
        <span className="font-bold text-blue-600">Recommended Action:</span> <span className="font-bold">{recommended}</span>
      </Text>
      <div className="flex gap-3 mt-2">
        {actions.map((action: import('@/data/job-feed-data').JobAction, idx: number) => (
          <button
            key={idx}
            className={
              action.type === 'primary'
                ? 'px-4 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition'
                : 'text-blue-600 font-medium underline underline-offset-4 px-2 py-2 focus:outline-none hover:text-blue-800 transition'
            }
            type="button"
            onClick={e => { e.stopPropagation(); /* Add your action logic here */ }}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
