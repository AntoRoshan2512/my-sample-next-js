import React from 'react';

type Insight = {
  title: string;
  chartType?: string;
  data?: any[];
  actions?: { name: string; uplift: string }[];
  value?: string;
  tooltip?: string;
  cta?: string[];
};

type PredictiveInsightsProps = {
  insights: Insight[];
};

const PredictiveInsights: React.FC<PredictiveInsightsProps> = ({ insights }) => {
  return (
    <div className="predictive-insights-grid">
      {/* Sales Forecast */}
      <div className="insight-card forecast-card">
        <div className="insight-title">{insights[0]?.title || 'Sales Forecast (7 days)'}</div>
        <div className="insight-value">$33.2k</div>
        <div className="insight-sparkline">
          {/* Replace with real chart */}
          <svg width="100" height="32">
            <polyline fill="none" stroke="#3b82f6" strokeWidth="3" points="0,30 20,20 40,25 60,10 80,15 100,5" />
          </svg>
        </div>
      </div>
      {/* Top AI Actions */}
      <div className="insight-card ai-actions-card">
        <div className="insight-title">Top-3 AI Actions</div>
        <ul className="ai-actions-list">
          <li>
            Reorder Product X <span className="ai-action-uplift">10.3k</span>
          </li>
          <li>
            Increase VIP coupon to 15% <span className="ai-action-uplift">7.5k</span>
          </li>
          <li>
            Launch new ad campaign <span className="ai-action-uplift">3.1k</span>
          </li>
        </ul>
      </div>
      {/* At Risk CLV */}
      <div className="insight-card at-risk-card">
        <div className="insight-title">At Risk CLV</div>
        <div className="insight-value">$7.5k</div>
      </div>
    </div>
  );
};

export default PredictiveInsights;