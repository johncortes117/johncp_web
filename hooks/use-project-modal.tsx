import { useState, useEffect } from "react";
import { Project } from "@/app/data/projects";

export const useProjectModal = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return {
    selectedProject,
    setSelectedProject,
    openModal: (project: Project) => setSelectedProject(project),
    closeModal: () => setSelectedProject(null),
  };
};