"use client";

import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

const expiryOptions = [
  { label: "Never", value: "never" },
  { label: "6 Months", value: "6m" },
  { label: "1 Year", value: "1y" },
];
const eligibilityOptions = [
  { label: "All Customers", value: "all" },
  { label: "VIP Tiers", value: "vip" },
];
const bonusOptions = [
  { label: "Double points on weekends", value: "weekends" },
  { label: "First purchase bonus", value: "first" },
  { label: "Birthday bonus", value: "birthday" },
];

type LoyaltyFormValues = {
  pointsPerDollar: number;
  expiry: string;
  redemptionValue: number;
  redemptionCash: number;
  eligibility: string;
  bonuses: string[];
};

const defaultValues: LoyaltyFormValues = {
  pointsPerDollar: 1,
  expiry: "never",
  redemptionValue: 100,
  redemptionCash: 1,
  eligibility: "all",
  bonuses: [],
};

export default function LoyaltySettings() {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<LoyaltyFormValues>({
    defaultValues,
    mode: "onChange",
  });

  const values = watch();
  const previewSpend = 50;
  const previewPoints = previewSpend * (values.pointsPerDollar || 1);
  const previewRedeem = (previewPoints / (values.redemptionValue || 1)) * (values.redemptionCash || 1);

  const onSubmit = (data: LoyaltyFormValues) => {
    toast.success("Loyalty settings saved!");
    // Save logic here
  };

  return (
    <form className="w-full px-8 pb-24 pt-10" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold mb-8">Loyalty Settings & Rules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* Left: Settings */}
        <div>
          <div className="mb-8">
            <div className="font-semibold text-lg mb-1">Rules Configuration</div>
            <div className="text-gray-500 mb-6">Set how points are earned and redeemed.</div>
            <div className="space-y-6">
              {/* Earn Points */}
              <div>
                <label className="block font-medium mb-2">Earn Points</label>
                <div className="flex gap-2">
                  <Controller
                    name="pointsPerDollar"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        min={1}
                        {...field}
                        className="border border-gray-300 rounded px-3 py-2 w-28 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    )}
                  />
                  <span className="self-center text-gray-600">points per $1 spent</span>
                </div>
              </div>
              {/* Points Expiry */}
              <div>
                <label className="block font-medium mb-2">Points Expiry</label>
                <Controller
                  name="expiry"
                  control={control}
                  render={({ field }) => (
                    <select {...field} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200">
                      {expiryOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  )}
                />
              </div>
              {/* Redemption Value */}
              <div>
                <label className="block font-medium mb-2">Redemption Value</label>
                <div className="flex gap-2">
                  <Controller
                    name="redemptionValue"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        min={1}
                        {...field}
                        className="border border-gray-300 rounded px-3 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    )}
                  />
                  <span className="self-center text-gray-600">points = $</span>
                  <Controller
                    name="redemptionCash"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="number"
                        min={0.01}
                        step={0.01}
                        {...field}
                        className="border border-gray-300 rounded px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    )}
                  />
                </div>
              </div>
              {/* Eligibility */}
              <div>
                <label className="block font-medium mb-2">Eligibility</label>
                <Controller
                  name="eligibility"
                  control={control}
                  render={({ field }) => (
                    <select {...field} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-200">
                      {eligibilityOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  )}
                />
              </div>
              {/* Bonuses */}
              <div>
                <label className="block font-medium mb-2">Bonuses</label>
                <Controller
                  name="bonuses"
                  control={control}
                  render={({ field }) => (
                    <div className="flex flex-col gap-2">
                      {bonusOptions.map((opt) => (
                        <label key={opt.value} className="inline-flex items-center gap-2 text-gray-700">
                          <input
                            type="checkbox"
                            checked={field.value.includes(opt.value)}
                            onChange={(e) => {
                              if (e.target.checked) field.onChange([...field.value, opt.value]);
                              else field.onChange(field.value.filter((b: string) => b !== opt.value));
                            }}
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right: Preview & AI Suggestions */}
        <div>
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <div className="font-semibold mb-2">Preview Example</div>
            <div>
              Customer spends <span className="font-bold">${previewSpend}</span> → earns <span className="font-bold">{previewPoints}</span> points → can redeem <span className="font-bold">${previewRedeem.toFixed(2)}</span> next time.
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="font-semibold mb-2">AI Suggestions</div>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Raising redemption threshold to 200 points increases profit margin by 12%.</li>
              <li>Offer double points in low-traffic weekdays to boost sales.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 px-6 flex justify-end gap-3 z-10">
        <button type="button" className="border border-gray-300 rounded px-5 py-2 text-gray-700 hover:bg-gray-100">Cancel</button>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Save</button>
      </div>
    </form>
  );
}
