import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Github, ExternalLink, Code, Layers, Settings } from "lucide-react";
import { projectData } from "../data/userData";

const ProjectDetail = () => {
    const { projectName } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Find the project by name
    const project = projectData.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, "-") === projectName
    );

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <button
                        onClick={() => navigate("/")}
                        className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                    >
                        ← Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    const images = project.images || [];
    const hasImages = images.length > 0;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen w-full bg-background">
            {/* Header with Back Button */}
            <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                        <span className="font-medium">Back to Projects</span>
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
                {/* Image Slider */}
                {hasImages && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative mb-12 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 shadow-2xl"
                    >
                        {/* Main Image */}
                        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center p-8">
                            <motion.img
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                src={images[currentImageIndex]}
                                alt={`${project.name} - ${currentImageIndex + 1}`}
                                className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
                            />

                            {/* Navigation Arrows */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft size={28} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all hover:scale-110 backdrop-blur-sm"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight size={28} />
                                    </button>
                                </>
                            )}

                            {/* Image Counter */}
                            {images.length > 1 && (
                                <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                                    {currentImageIndex + 1} / {images.length}
                                </div>
                            )}
                        </div>

                        {/* Dot Indicators */}
                        {images.length > 1 && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`h-2 rounded-full transition-all ${idx === currentImageIndex
                                                ? "bg-white w-8 shadow-lg"
                                                : "bg-white/50 hover:bg-white/75 w-2"
                                            }`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Project Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-start justify-between flex-wrap gap-6 mb-6">
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {project.name}
                            </h1>
                            <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                                {project.category}
                            </span>
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 flex-wrap">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all shadow-md hover:shadow-lg"
                                >
                                    <Github size={20} />
                                    <span className="font-medium">GitHub</span>
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all shadow-md hover:shadow-lg"
                                >
                                    <ExternalLink size={20} />
                                    <span className="font-medium">Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content - Left Column (2/3) */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Project Overview */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="bg-white/50 dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                                    <Layers className="text-white" size={24} />
                                </div>
                                <h2 className="text-3xl font-bold">Overview</h2>
                            </div>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-muted-foreground whitespace-pre-line leading-relaxed text-lg">
                                    {project.description}
                                </p>
                            </div>
                        </motion.section>

                        {/* Features Section (if available) */}
                        {project.features && project.features.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="bg-white/50 dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl">
                                        <Code className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold">Key Features</h2>
                                </div>
                                <ul className="space-y-3">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                                ✓
                                            </span>
                                            <span className="text-muted-foreground text-lg leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* System Details (if available) */}
                        {project.systemDetails && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="bg-white/50 dark:bg-white/5 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                                        <Settings className="text-white" size={24} />
                                    </div>
                                    <h2 className="text-3xl font-bold">System Details</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {Object.entries(project.systemDetails).map(([key, value]) => (
                                        <div key={key} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                                            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </div>
                                            <div className="text-foreground font-medium text-lg">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}
                    </div>

                    {/* Sidebar - Right Column (1/3) */}
                    <div className="space-y-8">
                        {/* Technologies */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="bg-white/50 dark:bg-white/5 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg sticky top-24"
                        >
                            <h2 className="text-2xl font-bold mb-6">Technologies</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-700 rounded-lg text-sm font-semibold text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
