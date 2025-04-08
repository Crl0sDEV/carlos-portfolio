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
      className="rounded-xl shadow-lg overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--card-border)'
      }}
    >
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 
          className="text-xl font-bold mb-2"
          style={{ color: 'var(--foreground)' }}
        >
          {project.title}
        </h3>
        <p 
          className="mb-4"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full text-sm"
              style={{
                backgroundColor: 'var(--tag-bg)',
                color: 'var(--tag-text)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a 
            href={project.github} 
            className="hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            GitHub
          </a>
          <a 
            href={project.demo} 
            className="hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}