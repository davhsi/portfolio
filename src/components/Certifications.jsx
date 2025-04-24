import React from "react";
import { Award, Presentation, Code, Network } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Data Structure and Algorithms using Java",
      issuer: "NPTEL",
      icon: <Code className="w-6 h-6" />,
      date: "October 2023",
      description: "Completed comprehensive course on Data Structures and Algorithms using Java programming language."
    },
    {
      title: "Networking Basics",
      issuer: "CISCO",
      icon: <Network className="w-6 h-6" />,
      date: "September 2023",
      description: "Mastered fundamental concepts of computer networking and network security protocols."
    },
    {
      title: "International E-Conference on Emerging Trends",
      issuer: "Bharath Digital Academy & ACN College",
      icon: <Award className="w-6 h-6" />,
      date: "October 2024",
      description: "Participated in international conference focusing on emerging technologies and their applications."
    },
    {
      title: "Paper Presentation: Blockchain and Generative AI",
      issuer: "Saveetha School of Engineering",
      icon: <Presentation className="w-6 h-6" />,
      date: "October 2023",
      description: "Presented research paper on the integration of Blockchain technology with Generative AI applications."
    }
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-center text-violet-300">Certifications & Achievements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="card bg-slate-800/80 group hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-violet-500/20 rounded-lg text-violet-400">
                {cert.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-violet-300">{cert.title}</h3>
                <p className="text-violet-200">{cert.issuer}</p>
                <p className="text-sm text-violet-300/90">{cert.date}</p>
                <p className="text-violet-200 mt-2">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Achievements Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center text-violet-300">Additional Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-slate-800/80 text-center p-6">
            <Award className="w-8 h-8 text-violet-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-violet-300">Academic Excellence</h4>
            <p className="text-violet-200">Consistently maintained high academic performance throughout education</p>
          </div>
          <div className="card bg-slate-800/80 text-center p-6">
            <Code className="w-8 h-8 text-violet-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-violet-300">Technical Skills</h4>
            <p className="text-violet-200">Proficient in multiple programming languages and frameworks</p>
          </div>
          <div className="card bg-slate-800/80 text-center p-6">
            <Presentation className="w-8 h-8 text-violet-400 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-violet-300">Leadership</h4>
            <p className="text-violet-200">Led various technical projects and team collaborations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
