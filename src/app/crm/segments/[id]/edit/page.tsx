
"use client";
import { useState } from "react";
import { Button } from "rizzui/button";
import { Select } from "rizzui/select";
import Link from "next/link";
// If you have an Input component, import it correctly. Otherwise, use a native input below.
// import { Input } from "rizzui/input";

// If you have a routes config, import it correctly. Otherwise, use static paths below.
// import { routes } from "@/config/routes";

const initialSegment = {
  name: "emp",
  createdAt: "Sep 06, 2025 02:22 PM",
  lastModified: "Sep 07, 2025 10:00 AM",
  criteria: [
    { field: "Email", operator: "equals", value: "21241" },
  ],
  logic: "and",
};

const fields = [
  { group: "Predefined Fields", options: ["First Name", "Last Name", "Email", "Phone"] },
  { group: "Consent Fields", options: ["Marketing Consent", "Subscription Preferences"] },
  { group: "Contact Social Fields", options: ["LinkedIn", "Twitter", "Facebook"] },
  { group: "List Based", options: ["VIP List", "Newsletter List"] },
  { group: "Contact Activity", options: ["Last Purchase", "Last Visit", "Total Spend"] },
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
          { label: "contains", value: "contains" },
          { label: "equals", value: "equals" },
          { label: "starts with", value: "startsWith" },
          { label: "ends with", value: "endsWith" },
        ]}
        placeholder="Operator"
      />
      {/* Use Input if available, otherwise fallback to native input */}
      {/* <Input
        className="min-w-[260px] text-base"
        value={criteria.value}
        onChange={e => onChange(index, { ...criteria, value: e.target.value })}
        placeholder="Enter value"
      /> */}
      <input
        className="min-w-[260px] text-base border rounded px-2 py-1"
        value={criteria.value}
        onChange={e => onChange(index, { ...criteria, value: e.target.value })}
        placeholder="Enter value"
      />
      <Button variant="outline" onClick={() => onRemove(index)} className="px-2 py-1">-</Button>
      {showAdd && <Button variant="outline" onClick={onAdd} className="px-2 py-1">+</Button>}
    </div>
  );
}

export default function EditSegmentPage() {
  const [name, setName] = useState(initialSegment.name);
  const [criteria, setCriteria] = useState(initialSegment.criteria);
  const [logic, setLogic] = useState(initialSegment.logic);

  const handleCriteriaChange = (idx: number, newCrit: any) => {
    setCriteria(criteria.map((c, i) => (i === idx ? newCrit : c)));
  };
  const handleRemove = (idx: number) => {
    setCriteria(criteria.filter((_, i) => i !== idx));
  };
  const handleAdd = () => {
    setCriteria([...criteria, { field: "", operator: "contains", value: "" }]);
  };

  // For summary display
  const criteriaSummary = criteria
    .map(
      c =>
        `${c.field || "[Field]"} ${c.operator || "[Operator]"} "${c.value || "[Value]"}"`
    )
    .join(` ${logic.toUpperCase()} `);

  return (
    <div className="w-full max-w-screen-xl mx-auto p-12">
      <div className="mb-6">
        <nav className="text-xs text-gray-500 mb-2">
          {/* Replace with static paths if routes config is missing */}
          <Link href="/crm/dashboard" className="hover:underline">Contacts</Link> {'>'} <Link href="/crm/segments" className="hover:underline">Segments</Link> {'>'} <span className="text-black">Edit</span>
        </nav>
        <h1 className="text-2xl font-bold mb-2">Edit Segment</h1>
      </div>
      {/* Segment Details Card */}
      <div className="bg-gray-50 rounded-xl border p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-lg">{name}</div>
          <div className="text-xs text-gray-500">Created: {initialSegment.createdAt}</div>
          <div className="text-xs text-gray-500">Last Modified: {initialSegment.lastModified}</div>
        </div>
        <div className="mt-4 md:mt-0">
          <span className="font-semibold">Criteria Summary:</span>
          <div className="text-sm text-gray-700 mt-1">{criteriaSummary}</div>
        </div>
      </div>
      {/* Editable Form */}
      <div className="bg-white rounded-xl border p-8 mb-8">
        <label className="block font-semibold mb-2">Segment Name</label>
        {/* Use Input if available, otherwise fallback to native input */}
        {/* <Input
          className="w-full text-lg mb-4"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter segment name"
        /> */}
        <input
          className="w-full text-lg mb-4 border rounded px-2 py-1"
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
              { label: "and", value: "and" },
              { label: "or", value: "or" },
            ]}
            placeholder="Logic"
          />
          <span className="text-xs text-gray-500">Combine criteria with AND/OR</span>
        </div>
        <div className="text-xs text-gray-500 mb-2">
          Tip: Comma-separated search values will be treated as OR. Example: Last Name contains Jones, West will match Jones OR West.
        </div>
        <div className="flex gap-4 mt-6">
          <Button variant="solid" className="px-6">Save</Button>
          <Button variant="outline" className="px-6">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
