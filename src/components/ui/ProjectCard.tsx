"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";
import { Project } from "@/types";
import CategoryTag from "./CategoryTag";
import SkillBadge from "./SkillBadge";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-44 bg-gradient-to-br from-[rgba(139,92,246,0.15)] to-[rgba(59,130,246,0.15)] overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.titleEn}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
              project.id === "weight-training" ? "object-top" : ""
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-30 select-none">
              {project.category === "ML / AI"
                ? "🤖"
                : project.category === "Full-Stack Web"
                ? "🌐"
                : project.category === "iOS / Mobile"
                ? "📱"
                : "💻"}
            </span>
          </div>
        )}
        {/* Category tag overlay */}
        <div className="absolute top-3 left-3">
          <CategoryTag category={project.category} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <h3 className="text-base font-bold text-[var(--text-primary)] leading-snug">
            {project.title}
          </h3>
          {project.title !== project.titleEn && (
            <p className="text-xs text-[var(--text-muted,#64748b)] mt-0.5">
              {project.titleEn}
            </p>
          )}
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3 flex-1 mb-4">
          {project.descriptionJa}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techs.map((tech) => (
            <SkillBadge key={tech.name} name={tech.name} />
          ))}
        </div>

        {/* Links */}
        {(project.githubUrl || project.demoUrl) && (
          <div className="flex gap-3 mt-auto pt-3 border-t border-[var(--border-glass)]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[#a78bfa] transition-colors duration-200"
              >
                <GitHubIcon size={14} />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[#60a5fa] transition-colors duration-200"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
