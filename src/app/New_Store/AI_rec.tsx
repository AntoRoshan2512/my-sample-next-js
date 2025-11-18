"use client";

import { BiTrendingUp } from 'react-icons/bi';
import { BsExclamationCircle } from 'react-icons/bs';
import { Tooltip, Button, Switch, Text, Title } from 'rizzui';

type AIActionProps = {
  className?: string;
};

function AI_Action({ className = '' }: AIActionProps) {
  return (
    <div className={['pb-5', className].filter(Boolean).join(' ')}>
      <div className="rounded-lg border border-muted w-44 bg-white flex flex-col justify-between">
        <div className="p-3">
          <div className="flex items-center justify-between pb-1 text-xs font-semibold text-gray-900">
            <span>Our Advice</span>
            <BiTrendingUp className="h-4 w-4" />
          </div>
          <Title as="h6" className="pb-2 text-primary text-sm">
            Buy Now
          </Title>
          <div className="flex flex-col gap-2">
            <Text className="text-sm leading-snug">
              Prices are unlikely to decrease within 7 days
            </Text>
            <div className="flex items-center gap-2">
              <Tooltip
                content={
                  <p className="max-w-[220px] xs:max-w-[320px] text-sm">
                    Best prices for the next week based on current and past
                    analyses, but like weather forecasts, 100% certainty
                    isn\'t guaranteed in our advisory.
                  </p>
                }
                placement="right"
              >
                <Button variant="text" className="h-5 p-0">
                  <BsExclamationCircle className="h-4 w-4 text-muted-foreground" />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-muted p-3">
          <Text as="span" className="text-sm font-semibold">
            Track Prices
          </Text>
          <Switch label="Off" />
        </div>
      </div>
    </div>
  );
}

export default AI_Action;
