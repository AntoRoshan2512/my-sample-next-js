"use client";

import { useState } from 'react';
import { Button } from 'rizzui/button';
import { Input } from 'rizzui/input';
import { Select } from 'rizzui/select';
import { routes } from '@/config/routes';
import Link from 'next/link';

const fields = [
  { group: 'Predefined Fields', options: ['First Name', 'Last Name', 'Email', 'Phone'] },
  { group: 'Consent Fields', options: ['Marketing Consent', 'Subscription Preferences'] },
  { group: 'Contact Social Fields', options: ['LinkedIn', 'Twitter', 'Facebook'] },
  { group: 'List Based', options: ['VIP List', 'Newsletter List'] },
  { group: 'Contact Activity', options: ['Last Purchase', 'Last Visit', 'Total Spend'] },
];

function CriteriaRow({ index, criteria, onChange, onRemove, onAdd, showAdd }: {
  index: number;
  criteria: any;
  onChange: (idx: number, newCrit: any) => void;
  onRemove: (idx: number) => void;
  onAdd: () => void;
  showAdd: boolean;
}) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <Select
        className="min-w-[220px] text-base"
        value={criteria.field}
           onChange={value => onChange(index, { ...criteria, field: value })}
        options={fields.flatMap(group => group.options.map(opt => ({ label: `${group.group}: ${opt}`, value: opt })))}
        placeholder="Select field"
      />
      <Select
        className="min-w-[160px] text-base"
        value={criteria.operator}
  onChange={value => onChange(index, { ...criteria, operator: value })}
        options={[
          { label: 'contains', value: 'contains' },
          { label: 'equals', value: 'equals' },
          { label: 'starts with', value: 'startsWith' },
          { label: 'ends with', value: 'endsWith' },
        ]}
        placeholder="Operator"
      />
      <Input
        className="min-w-[260px] text-base"
        value={criteria.value}
        onChange={e => onChange(index, { ...criteria, value: e.target.value })}
        placeholder="Enter value"
      />
      <Button variant="outline" onClick={() => onRemove(index)} className="px-2 py-1">-</Button>
      {showAdd && <Button variant="outline" onClick={onAdd} className="px-2 py-1">+</Button>}
    </div>
  );
}

export default function CreateSegmentPage() {
  const [name, setName] = useState('');
  const [criteria, setCriteria] = useState([
    { field: '', operator: 'contains', value: '' },
    { field: '', operator: 'contains', value: '' },
  ]);
  const [logic, setLogic] = useState('and');

  const handleCriteriaChange = (idx: number, newCrit: any) => {
    setCriteria(criteria.map((c, i) => (i === idx ? newCrit : c)));
  };
  const handleRemove = (idx: number) => {
    setCriteria(criteria.filter((_, i) => i !== idx));
  };
  const handleAdd = () => {
    setCriteria([...criteria, { field: '', operator: 'contains', value: '' }]);
  };

  return (
  <div className="w-full max-w-screen-xl mx-auto p-12">
      <div className="mb-6">
        <nav className="text-xs text-gray-500 mb-2">
          <Link href={routes.crm.dashboard} className="hover:underline">Contacts</Link> {'>'} <Link href={routes.crm.segments} className="hover:underline">Segments</Link> {'>'} <span className="text-black">create</span>
        </nav>
        <h1 className="text-2xl font-bold mb-2">Create Segment</h1>
      </div>
      <div className="bg-white rounded-xl border p-8 mb-8">
        <label className="block font-semibold mb-2">Name</label>
        <Input
          className="w-full text-lg mb-4"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter segment name"
        />
        <label className="block font-semibold mb-2">Criteria</label>
        <div className="mb-4">
          {criteria.map((crit, idx) => (
            <CriteriaRow
              key={idx}
              index={idx}
              criteria={crit}
              onChange={handleCriteriaChange}
              onRemove={handleRemove}
              onAdd={handleAdd}
              showAdd={idx === criteria.length - 1}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Select
            className="min-w-[120px] text-base"
            value={logic}
            onChange={val => setLogic(val as string)}
            options={[
              { label: 'and', value: 'and' },
              { label: 'or', value: 'or' },
            ]}
            placeholder="Logic"
          />
          <span className="text-xs text-gray-500">Combine criteria with AND/OR</span>
        </div>
        <div className="text-xs text-gray-500 mb-2">Tip: Comma-separated search values will be treated as OR. Example: Last Name contains Jones, West will match Jones OR West.</div>
        <div className="flex gap-4 mt-6">
          <Button variant="solid" className="px-6">Save</Button>
          <Button variant="outline" className="px-6">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
