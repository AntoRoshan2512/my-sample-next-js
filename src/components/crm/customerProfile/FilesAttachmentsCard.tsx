import React from "react";

interface FilesAttachmentsCardProps {
  files: string[];
}

const FilesAttachmentsCard: React.FC<FilesAttachmentsCardProps> = ({ files }) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Files & Attachments</h3>
    <ul>
      {files.map((f, i) => <li key={i}><a href={f}>View</a></li>)}
    </ul>
  </section>
);

export default FilesAttachmentsCard;
