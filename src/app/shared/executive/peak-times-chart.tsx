import React from 'react';

const hours = [
  '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p'
];
// Example data: bar heights (0-100), and which is live
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 40, 20];
const liveIndex = 12; // 6p is live

export default function PeakTimesChart() {
  return (
    <div className="rounded-xl bg-neutral-900 p-4 text-white w-full max-w-md mx-auto">
      <div className="flex items-center mb-2">
        <span className="text-sm font-medium flex-1">Popular times <span className="text-xs text-neutral-400 ml-1">Tuesdays</span></span>
        <span className="bg-red-600 text-xs font-bold px-2 py-0.5 rounded mr-2">LIVE</span>
        <span className="text-xs text-neutral-400">Not too busy</span>
      </div>
      <div className="flex items-end h-32 gap-1 mb-2">
        {data.map((value, i) => (
          <div key={i} className={`flex-1 flex flex-col items-center`}>
            <div
              className={`w-4 rounded-t ${i === liveIndex ? 'bg-red-600' : 'bg-cyan-800'} transition-all`}
              style={{ height: `${value}%`, minHeight: 8 }}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-neutral-400">
        {hours.map((h, i) => (
          <span key={h} className={i % 2 === 0 ? '' : 'invisible'}>{h}</span>
        ))}
      </div>
    </div>
  );
}
