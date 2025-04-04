import React from "react";

export default function Certifications() {
  const certs = [
    "Paper Presentation: Blockchain and Generative AI – Saveetha School of Engineering",
    "DSA using Java – NPTEL",
    "Networking Basics – CISCO",
    "International E-Conference on Emerging Trends – ACN College"
  ];

  return (
    <section className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-center">Certifications & Achievements</h2>
      <ul className="list-disc list-inside space-y-2">
        {certs.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </section>
  );
}
