import React from 'react';

type Experiment = {
  name: string;
  lift: string;
  pValue: string;
  recommendation: string;
};

type BottomRowProps = {
  experiments: Experiment[];
  exportOptions: string[];
};

const BottomRow: React.FC<BottomRowProps> = ({ experiments, exportOptions }) => {
  return (
    <div className="bottom-row">
      <div className="experiments-panel">
        {experiments.map((experiment, index) => (
          <div key={index} className="experiment-card">
            <h3>{experiment.name}</h3>
            <p>Lift: {experiment.lift}</p>
            <p>P-Value: {experiment.pValue}</p>
            <p>Recommendation: {experiment.recommendation}</p>
          </div>
        ))}
      </div>
      <div className="export-panel">
        <h3>Export Options</h3>
        {exportOptions.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
      </div>
    </div>
  );
};

export default BottomRow;