import React from 'react';

type FooterProps = {
  notes: string;
};

const Footer: React.FC<FooterProps> = ({ notes }) => {
  return (
    <footer className="dashboard-footer">
      <p>{notes}</p>
      <a href="/help">Help</a>
    </footer>
  );
};

export default Footer;