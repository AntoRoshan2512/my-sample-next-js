import React from "react";

interface JourneyMapMiniProps {
  journey: { firstTouch: string; firstPurchase: string; lastPurchase: string; majorTickets: string[]; lastContact: string };
}

const JourneyMapMini: React.FC<JourneyMapMiniProps> = ({ journey }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Customer Journey Map</h3>
    <div>First touch: {journey.firstTouch}</div>
    <div>First purchase: {journey.firstPurchase}</div>
    <div>Last purchase: {journey.lastPurchase}</div>
    <div>Major tickets: {journey.majorTickets.join(", ")}</div>
    <div>Last contact: {journey.lastContact}</div>
  </section>
);

export default JourneyMapMini;
