import React from 'react';

type GridContent = {
  title: string;
  chartType?: string;
  type?: string;
  data?: any[];
  cards?: { title: string; description: string; uplift: string; cta: string[] }[];
  toggles?: { name: string; status: string; lastRun: string }[];
};

type MainGridProps = {
  leftContent: GridContent[];
  rightContent: GridContent[];
};

const MainGrid: React.FC<MainGridProps> = ({ leftContent, rightContent }) => {
  return (
    <div className="main-grid-grid">
      {/* LEFT COLUMN */}
      <div className="main-left">
        {/* Revenue Over Time */}
        <div className="main-card">
          <div className="main-title">Revenue Over Time</div>
          <div className="main-chart">
            <svg width="180" height="60">
              <rect x="0" y="30" width="30" height="30" fill="#a5d8ff" />
              <rect x="35" y="20" width="30" height="40" fill="#74c0fc" />
              <rect x="70" y="10" width="30" height="50" fill="#228be6" />
              <rect x="105" y="5" width="30" height="55" fill="#1864ab" />
            </svg>
          </div>
        </div>
        {/* Personalized vs Generic Performance */}
        <div className="main-card">
          <div className="main-title">Personalized vs Generic Performance</div>
          <div className="main-chart">
            <svg width="120" height="40">
              <polyline
                fill="none"
                stroke="#228be6"
                strokeWidth="3"
                points="0,30 30,20 60,25 90,10 120,15"
              />
            </svg>
          </div>
          <div className="main-value">
            18% <span className="main-label">Uplift</span>
          </div>
        </div>
        {/* Conversion Funnel */}
        <div className="main-card">
          <div className="main-title">Conversion Funnel</div>
          <div className="main-funnel">
            <div
              className="funnel-bar"
              style={{
                width: '60px',
                height: '20px',
                background: '#228be6',
                marginBottom: '4px',
              }}
            ></div>
            <div
              className="funnel-bar"
              style={{ width: '30px', height: '20px', background: '#a5d8ff' }}
            ></div>
          </div>
        </div>
        {/* Campaigns Leaderboard */}
        <div className="main-card">
          <div className="main-title">Campaigns Leaderboard</div>
          <table className="main-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Type</th>
                <th>Recipients</th>
                <th>Open%</th>
                <th>Click%</th>
                <th>Conv%</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Holiday Sale</td>
                <td>Personalized</td>
                <td>22</td>
                <td>0.5%</td>
                <td>2.0%</td>
                <td>1.5%</td>
                <td>$4.0k</td>
              </tr>
              <tr>
                <td>Welcome Discount</td>
                <td>Generic</td>
                <td>16</td>
                <td>0.3%</td>
                <td>1.3%</td>
                <td>1.4%</td>
                <td>$0.6k</td>
              </tr>
              <tr>
                <td>Cart Recovery</td>
                <td>Generic</td>
                <td>23</td>
                <td>0.8%</td>
                <td>0.5%</td>
                <td>1.3%</td>
                <td>$1.5k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* RIGHT COLUMN */}
      <div className="main-right">
        {/* AI Action Center */}
        <div className="main-card">
          <div className="main-title">AI Action Center</div>
          <div className="main-action">
            Recover 32 abandoned carts
            <br />
            <span className="main-uplift">+$2,400</span>
          </div>
          <button className="main-cta">Create Personalization</button>
        </div>
        {/* Top Triggers by Revenue */}
        <div className="main-card">
          <div className="main-title">Top Triggers by Revenue</div>
          <ul className="main-list">
            <li>
              Abandoned cart <span>$4,800</span>
            </li>
            <li>
              Restock <span>$2,100</span>
            </li>
            <li>
              Price-drop <span>$7,700</span>
            </li>
            <li>
              Birthday <span>$400</span>
            </li>
          </ul>
        </div>
        {/* Experiments */}
        <div className="main-card">
          <div className="main-title">Experiments</div>
          <div className="main-holdout">
            Holdout <span className="main-uplift">+8.7%</span>
          </div>
          <div className="main-sample">Nₜ=1,767 N꜀=1,840</div>
          <button className="main-cta">Promote Variant</button>
        </div>
        {/* Alerts */}
        <div className="main-card">
          <div className="main-title">Alerts</div>
          <div className="main-alert">
            Personalization underperforming
            <br />
            <span className="main-confidence">&gt;18% confidence</span>
          </div>
          <div className="main-alert">Low delivery rate</div>
        </div>
        {/* Export Summary */}
        <div className="main-card main-export">
          <button className="main-cta main-export-btn">Export Summary</button>
        </div>
      </div>
    </div>
  );
};

export default MainGrid;