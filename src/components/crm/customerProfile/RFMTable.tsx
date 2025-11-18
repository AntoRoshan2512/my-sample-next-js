import React from "react";

interface RFMTableProps {
  rfm: { R: number; F: number; M: number; lastVisit: string; nextExpected: string };
}

const RFMTable: React.FC<RFMTableProps> = ({ rfm }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Recency / Frequency / Monetary (RFM)</h3>
    <table className="table-auto w-full mb-2">
      <thead>
        <tr>
          <th>R</th>
          <th>F</th>
          <th>M</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{rfm.R}</td>
          <td>{rfm.F}</td>
          <td>{rfm.M}</td>
        </tr>
      </tbody>
    </table>
    <div>Last visit: {rfm.lastVisit}</div>
    <div>Next expected: {rfm.nextExpected}</div>
  </section>
);

export default RFMTable;
