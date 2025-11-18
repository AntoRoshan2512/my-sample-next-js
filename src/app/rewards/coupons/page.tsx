

"use client";
import { useState } from "react";

const initialCoupons = [
  {
    name: "WELCOME10",
    type: "Percentage",
    validity: "2025-08-01 to 2025-09-01",
    usage: "Single-use",
    distributed: 1200,
    redeemed: 350,
    uplift: "$1,200",
    status: "Active",
  },
  {
    name: "FREESHIP",
    type: "Free Shipping",
    validity: "2025-08-10 to 2025-12-31",
    usage: "Multi-use",
    distributed: 800,
    redeemed: 200,
    uplift: "$600",
    status: "Active",
  },
  {
    name: "SUMMER20",
    type: "Fixed Discount",
    validity: "2025-06-01 to 2025-08-31",
    usage: "Single-use",
    distributed: 500,
    redeemed: 400,
    uplift: "$2,000",
    status: "Expired",
  },
];

const couponTypes = [
  { label: "Percentage", value: "Percentage" },
  { label: "Fixed Discount", value: "Fixed Discount" },
  { label: "Free Gift", value: "Free Gift" },
  { label: "Free Shipping", value: "Free Shipping" },
];
const usageTypes = [
  { label: "Single-use", value: "Single-use" },
  { label: "Multi-use", value: "Multi-use" },
];
const distributionChannels = [
  { label: "SMS", value: "SMS" },
  { label: "WhatsApp", value: "WhatsApp" },
  { label: "Email", value: "Email" },
  { label: "App Push", value: "App Push" },
];

type CouponForm = {
  name: string;
  type: string;
  value: string;
  validityStart: string;
  validityEnd: string;
  minSpend: string;
  productRestriction: string;
  eligible: string;
  usage: string;
  distribution: string[];
  status: string;
};

function getDefaultCoupon(): CouponForm {
  return {
    name: "",
    type: "Percentage",
    value: "",
    validityStart: "",
    validityEnd: "",
    minSpend: "",
    productRestriction: "",
    eligible: "All Customers",
    usage: "Single-use",
    distribution: [],
    status: "Active",
  };
}

export default function CouponsManagement() {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [showCreate, setShowCreate] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(getDefaultCoupon());

  // Step handlers
  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const closeModal = () => {
    setShowCreate(false);
    setStep(1);
    setForm(getDefaultCoupon());
  };

  // Save coupon
  const saveCoupon = () => {
    setCoupons([
      {
        name: form.name || "NEWCOUPON",
        type: form.type,
        validity: `${form.validityStart} to ${form.validityEnd}`,
        usage: form.usage,
        distributed: 0,
        redeemed: 0,
        uplift: "$0",
        status: "Active",
      },
      ...coupons,
    ]);
    closeModal();
  };

  // Coupon creation steps
  function renderStep() {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Coupon Name</label>
              <input
                className="border rounded px-3 py-2 w-full"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="e.g. SUMMER20"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Type</label>
              <select
                className="border rounded px-3 py-2 w-full"
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
              >
                {couponTypes.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            {(form.type === "Percentage" || form.type === "Fixed Discount") && (
              <div>
                <label className="block font-medium mb-1">Value</label>
                <input
                  className="border rounded px-3 py-2 w-full"
                  value={form.value}
                  onChange={e => setForm(f => ({ ...f, value: e.target.value }))}
                  placeholder={form.type === "Percentage" ? "e.g. 10%" : "e.g. $10"}
                />
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Validity</label>
              <div className="flex gap-2">
                <input
                  type="date"
                  className="border rounded px-3 py-2"
                  value={form.validityStart}
                  onChange={e => setForm(f => ({ ...f, validityStart: e.target.value }))}
                />
                <span className="self-center">to</span>
                <input
                  type="date"
                  className="border rounded px-3 py-2"
                  value={form.validityEnd}
                  onChange={e => setForm(f => ({ ...f, validityEnd: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Minimum Spend</label>
              <input
                className="border rounded px-3 py-2 w-full"
                value={form.minSpend}
                onChange={e => setForm(f => ({ ...f, minSpend: e.target.value }))}
                placeholder="$0"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Product/Category Restriction</label>
              <input
                className="border rounded px-3 py-2 w-full"
                value={form.productRestriction}
                onChange={e => setForm(f => ({ ...f, productRestriction: e.target.value }))}
                placeholder="e.g. Shoes, Electronics"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Eligible Customers</label>
              <select
                className="border rounded px-3 py-2 w-full"
                value={form.eligible}
                onChange={e => setForm(f => ({ ...f, eligible: e.target.value }))}
              >
                <option>All Customers</option>
                <option>VIP Tiers</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Usage Type</label>
              <select
                className="border rounded px-3 py-2 w-full"
                value={form.usage}
                onChange={e => setForm(f => ({ ...f, usage: e.target.value }))}
              >
                {usageTypes.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Distribution Channels</label>
              <div className="flex flex-wrap gap-3">
                {distributionChannels.map(opt => (
                  <label key={opt.value} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={form.distribution.includes(opt.value)}
                      onChange={e => {
                        if (e.target.checked) setForm(f => ({ ...f, distribution: [...f.distribution, opt.value] }));
                        else setForm(f => ({ ...f, distribution: f.distribution.filter((v: string) => v !== opt.value) }));
                      }}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-medium mb-1">Distribution Mode</label>
              <select className="border rounded px-3 py-2 w-full">
                <option>Manual Audience Selection</option>
                <option>AI Auto-Suggest</option>
              </select>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <div className="font-semibold mb-2">Preview & Confirm</div>
            <div className="bg-gray-50 rounded p-4">
              <div><b>Name:</b> {form.name || "-"}</div>
              <div><b>Type:</b> {form.type} {form.value && `(${form.value})`}</div>
              <div><b>Validity:</b> {form.validityStart} to {form.validityEnd}</div>
              <div><b>Min Spend:</b> {form.minSpend || "-"}</div>
              <div><b>Restriction:</b> {form.productRestriction || "-"}</div>
              <div><b>Eligible:</b> {form.eligible}</div>
              <div><b>Usage:</b> {form.usage}</div>
              <div><b>Distribution:</b> {form.distribution.join(", ") || "-"}</div>
            </div>
            <div className="text-green-700 font-medium">All set! Click "Create Coupon" to finish.</div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="w-full px-8 pb-24 pt-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Coupons Management</h1>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => setShowCreate(true)}
        >
          Create New Coupon
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Type</th>
              <th className="px-4 py-3 text-left font-semibold">Validity</th>
              <th className="px-4 py-3 text-left font-semibold">Usage</th>
              <th className="px-4 py-3 text-left font-semibold">Distributed</th>
              <th className="px-4 py-3 text-left font-semibold">Redeemed</th>
              <th className="px-4 py-3 text-left font-semibold">Revenue Uplift</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c, i) => (
              <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3">{c.name}</td>
                <td className="px-4 py-3">{c.type}</td>
                <td className="px-4 py-3">{c.validity}</td>
                <td className="px-4 py-3">{c.usage}</td>
                <td className="px-4 py-3">{c.distributed}</td>
                <td className="px-4 py-3">{c.redeemed}</td>
                <td className="px-4 py-3">{c.uplift}</td>
                <td className="px-4 py-3">
                  <span className={c.status === "Active" ? "text-green-600 font-semibold" : "text-gray-400"}>{c.status}</span>
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button className="text-blue-600 hover:underline">Distribute</button>
                  <button className="text-gray-600 hover:underline">Clone</button>
                  <button className="text-red-600 hover:underline">{c.status === "Active" ? "Pause" : "End"}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Coupon creation workflow modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create New Coupon</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">✕</button>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                {[1,2,3,4,5].map(n => (
                  <div key={n} className={`w-8 h-2 rounded-full ${step===n?'bg-blue-600':'bg-gray-200'}`}></div>
                ))}
              </div>
              {renderStep()}
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={step === 1 ? closeModal : prevStep}
                type="button"
              >
                {step === 1 ? "Cancel" : "Back"}
              </button>
              {step < 5 ? (
                <button
                  className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                  onClick={nextStep}
                  type="button"
                >
                  Next
                </button>
              ) : (
                <button
                  className="px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                  onClick={saveCoupon}
                  type="button"
                >
                  Create Coupon
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
