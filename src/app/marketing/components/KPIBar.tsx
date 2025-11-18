import React from 'react';

type KPI = {
  title: string;
  value: string;
  tooltip: string;
};

type KPIBarProps = {
  kpis: KPI[];
};

const KPIBar: React.FC<KPIBarProps> = ({ kpis }) => {
  return (
    <div className="kpi-bar-strip">
      {kpis.map((kpi, index) => (
        <div key={index} className="kpi-bar-card">
          <div className="kpi-bar-title">{kpi.title}</div>
          <div className="kpi-bar-value">{kpi.value}</div>
        </div>
      ))}
    </div>
  );
};

export default KPIBar;