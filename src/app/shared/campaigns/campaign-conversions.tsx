export default function CampaignConversions() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="font-semibold mb-4">Conversion Settings</div>
      <div className="mb-2 text-xs text-gray-500">Primary Conversion Event - A:</div>
      <div className="mb-4">Made Purchase within 3 days (Any product) <span className="text-primary font-bold">28.90%</span></div>
      <div className="mb-2 text-xs text-gray-500">Conversion Event - B:</div>
      <div className="mb-4">Performed Custom Event within 3 days (added_item_to_cart) <span className="text-primary font-bold">26.61%</span></div>
      <div className="mb-2 text-xs text-gray-500">Conversion Event - C:</div>
      <div>Performed Custom Event within 3 days (add_to_wishlist) <span className="text-primary font-bold">24.31%</span></div>
    </div>
  );
}
