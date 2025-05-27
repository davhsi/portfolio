import React from "react";
import { Award, Presentation, Code, Network, FileCheck, Trophy } from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";

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
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      date: "Expected 2025",
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Expected 2025",
      icon: <FileCheck className="w-6 h-6" />,
    },
  ];

  const achievements = [
    {
      title: "Winner, National Level Hackathon",
      description: "Secured first place in a national level hackathon, developing a real-time collaborative coding platform.",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: "Top 10% in Competitive Programming",
      description: "Consistently ranked in the top 10% in various competitive programming contests.",
      icon: <Trophy className="w-6 h-6" />,
    },
  ];

  return (
    <div className="animate-fade-in">
      <AnimatedTitle title="Certifications & Achievements" />
      
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

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center text-violet-300">Additional Achievements</h3>
        <div className="space-y-4">
          {achievements.map((ach, index) => (
            <div key={index} className="card bg-slate-800/80 p-6 rounded-lg flex items-start space-x-4 hover:scale-105 transition-transform">
              <div className="text-violet-400">{ach.icon}</div>
              <div>
                <h4 className="font-semibold text-violet-300">{ach.title}</h4>
                <p className="text-violet-200 text-sm mt-1">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
