"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { projectData } from "../data/userData";

const categories = Array.from(new Set(projectData.map((p) => p.category)));

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    activeCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === activeCategory);

  const handleProjectClick = (projectName: string) => {
    const slug = projectName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/project/${slug}`);
  };

  return (
    <section className="w-full min-h-screen px-4 py-12 backdrop-blur-sm text-center text-foreground">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
      >
        Explore my portfolio of projects
      </motion.p>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {["All", ...categories].map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={clsx(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                : "bg-white/10 dark:bg-white/5 text-muted-foreground border border-gray-300 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-white/10"
            )}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onClick={() => handleProjectClick(project.name)}
            className="group relative rounded-2xl overflow-hidden bg-white/50 dark:bg-white/5 shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
              {project.images && project.images.length > 0 ? (
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-300 dark:text-gray-700">
                    {project.name.charAt(0)}
                  </div>
                </div>
              )}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div className="flex items-center gap-2 text-white font-medium">
                  <span>View Details</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium mb-3">
                {project.category}
              </span>

              {/* Tech Stack Preview */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 text-gray-500 dark:text-gray-500 text-xs">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
