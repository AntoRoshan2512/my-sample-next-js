import React from "react";

export interface SidebarProps {
  avatar: string;
  name: string;
  badges: string[];
  email: string;
  phone: string;
  segments: string[];
  identity: string[];
  quickActions: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ avatar, name, badges, email, phone, segments, identity, quickActions }) => (
  <aside className="w-72 min-h-screen bg-white border-r flex-shrink-0 p-8 flex flex-col">
    <div className="flex flex-col items-center mb-6">
      <img src={avatar} alt="avatar" className="w-20 h-20 rounded-full bg-gray-200 mb-2" />
      <div className="font-bold text-lg">{name}</div>
      <div className="flex gap-2 mt-2">
        {badges.map(b => <span key={b} className="bg-gray-100 rounded px-2 py-1 text-xs">{b}</span>)}
      </div>
      <div className="mt-2 text-xs text-gray-500">{email}</div>
      <div className="text-xs text-gray-500">{phone}</div>
      <div className="flex flex-wrap gap-2 mt-2">
        {segments.map(s => <span key={s} className="bg-gray-100 rounded px-2 py-1 text-xs">{s}</span>)}
      </div>
    </div>
    <div className="space-y-1 text-sm text-gray-700 mb-4">
      {identity.map((item, idx) => <div key={idx}>{item}</div>)}
    </div>
    <div className="mt-6 font-semibold text-sm">Quick actions</div>
    <ul className="mt-2 space-y-1 text-sm">
      {quickActions.map((action, idx) => <li key={idx}>{action}</li>)}
    </ul>
  </aside>
);

export default Sidebar;
