import React from "react";

interface Feedback {
  date: string;
  rating: number;
  text: string;
  resolved: boolean;
}
interface FeedbackTimelineProps {
  feedback: Feedback[];
}

const FeedbackTimeline: React.FC<FeedbackTimelineProps> = ({ feedback }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Feedback & Sentiment Timeline</h3>
    <ul>
      {feedback.map((f, i) => (
        <li key={i}>
          {f.date}: {f.rating}★ {f.text} {f.resolved ? "(Resolved)" : "(Unresolved)"}
        </li>
      ))}
    </ul>
  </section>
);

export default FeedbackTimeline;
