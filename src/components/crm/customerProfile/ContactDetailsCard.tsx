import React from "react";

interface ContactDetailsCardProps {
  primaryContact: string;
  alternateContacts: string[];
  birthdate: string;
  anniversary: string;
  gender: string;
  language: string;
  timezone: string;
  address: string;
}

const ContactDetailsCard: React.FC<ContactDetailsCardProps> = ({
  primaryContact,
  alternateContacts,
  birthdate,
  anniversary,
  gender,
  language,
  timezone,
  address,
}) => (
  <section className="card p-4 mb-4">
    <h3 className="font-semibold mb-2">Contact Details</h3>
    <div>Primary: {primaryContact}</div>
    <div>Alternate: {alternateContacts.join(", ")}</div>
    <div>Birthdate: {birthdate}</div>
    <div>Anniversary: {anniversary}</div>
    <div>Gender: {gender}</div>
    <div>Language: {language}</div>
    <div>Timezone: {timezone}</div>
    <div>Address: {address}</div>
  </section>
);

export default ContactDetailsCard;
