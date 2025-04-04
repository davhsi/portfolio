import React from "react";
import { Card, CardContent } from "../components/ui/Card"

export default function Projects() {
  const projects = [
    {
      title: "Fresh Fleet",
      desc: "MERN stack grocery shopping website with vendor management, reviews, and recipe integration.",
      role: "Frontend & Backend Developer",
      link: "https://freshfleet.vercel.app/",
      label: "Live Demo"
    },
    {
      title: "Fruit Ninja Multiplayer",
      desc: "Real-time multiplayer game with Redis-based leaderboard and gameplay sync.",
      role: "Fullstack Developer",
      link: "https://fruitninjahsi.vercel.app/",
      label: "Play Now"
    },
    {
      title: "IIPC-BIT Portal",
      desc: "Dashboard to manage records of industry experts and faculty visits with CRUD functionality.",
      role: "Fullstack Developer",
      link: "https://github.com/davhsi/iipc-portal",
      label: "GitHub Repo"
    }
  ];

  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <Card key={idx}>
            <CardContent className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.desc}</p>
              <p className="text-sm font-medium text-gray-700">Role: {project.role}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:underline text-sm"
              >
                {project.label}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
