import { metaObject } from '@/config/site.config';
import CampaignDrilldown from '@/app/shared/campaigns/campaign-drilldown';

export const metadata = {
  ...metaObject('Campaign Details'),
};

export default function CampaignDetailPage() {
  return <CampaignDrilldown />;
}
