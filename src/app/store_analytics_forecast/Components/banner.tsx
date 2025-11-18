"use client";

import { PiLightbulb, PiPencilSimple } from 'react-icons/pi';
import { Box } from 'rizzui/box';
import { Flex } from 'rizzui/flex';
import { Text } from 'rizzui/typography';

import cn from '@core/utils/class-names';

export default function WelcomeBanner({ className }: { className?: string }) {
  return (
    <Flex
      align="start"
      className={cn('w-full rounded-xl bg-white border border-gray-200 shadow-sm p-4', className)}
    >
      <Box className="w-full">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E6F7FF] text-[#0583B8]">
            <PiLightbulb className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-semibold text-gray-900">Boost ad spend by 10% in Footwear</h3>
        </div>

        <div className="mt-3 relative rounded-md bg-muted/10 p-4">
          <span className="absolute left-0 top-0 bottom-0 w-1 rounded-l-md bg-[#58C6FF]" />
          <div className="ml-4">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-4 w-4 items-center justify-center text-[#58C6FF]">✎</span>
              <div>
                <Text className="text-sm text-muted-foreground">Boost ad spend by 10% in Footwear &amp; Apparel to leverage upcoming growth window</Text>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Flex>
  );
}
