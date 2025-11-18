import React from "react";

interface Task {
  note: string;
  due: string;
}
interface NotesTasksCardProps {
  notes: string[];
  tasks: Task[];
}

const NotesTasksCard: React.FC<NotesTasksCardProps> = ({ notes, tasks }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Notes & Tasks</h3>
    <ul>
      {notes.map((n, i) => <li key={i}>{n}</li>)}
    </ul>
    <ul>
      {tasks.map((t, i) => <li key={i}>{t.note} (Due: {t.due})</li>)}
    </ul>
  </section>
);

export default NotesTasksCard;
