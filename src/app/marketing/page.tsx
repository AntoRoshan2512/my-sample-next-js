import React from 'react';
// @ts-ignore
import './styles/dashboard.css';
import KPIBar from './components/KPIBar';
import PredictiveInsights from './components/PredictiveInsights';
import MainGrid from './components/MainGrid';

const EngagementOverview = () => {
  return (
    <div className="dashboard-container">
      {/* Above the Fold */}
      <header className="header-row">
        <h1>Engagement Overview</h1>
        <div className="controls">
          <select className="store-selector">
            <option>Store 1</option>
            <option>Store 2</option>
          </select>
          <select className="attribution-window">
            <option>1d</option>
            <option>7d</option>
            <option>30d</option>
            <option>90d</option>
          </select>
          <button className="help-icon">Definitions</button>
        </div>
      </header>

      {/* Top KPI Bar */}
      <KPIBar
        kpis={[
          { title: 'Revenue from Engagement', value: '$24,500', tooltip: 'Total $ attributed to all engagement (AI + campaigns)' },
          { title: 'Incremental Revenue (Personalization)', value: '+$8,700 (+12%)', tooltip: 'Lift from holdout baseline' },
          { title: 'Conversion Rate', value: '7.4%', tooltip: 'Conversions / recipients' },
          { title: '% Sales from Personalized vs Generic', value: 'Personalized 38% / Generic 62%', tooltip: 'Sales split' },
          { title: 'Engagement ROI', value: '4.2x', tooltip: '(Attributed revenue − cost) / cost' },
        ]}
      />

      {/* Predictive Insights Row */}
      <PredictiveInsights
        insights={[]}
      />

      {/* Main Grid */}
      <MainGrid
        leftContent={[]}
        rightContent={[]}
      />
    </div>
  );
};

export default EngagementOverview;