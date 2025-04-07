'use client'
import { motion } from "framer-motion";
import { Project } from "../data/projects";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <Image 
        src={project.image} 
        alt={project.title} 
        width={500}  
        height={300} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.github} className="text-purple-600 hover:underline">GitHub</a>
          <a href={project.demo} className="text-purple-600 hover:underline">Live Demo</a>
        </div>
      </div>
    </motion.div>
  );
}