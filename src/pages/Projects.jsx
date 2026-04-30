import { useState } from "react";
import ProjectList from "../features/projects/ProjectList";
import CreateProjectModal from "../features/projects/CreateProjectModal";
import { mockProjects } from "../services/mockData";
import useDebounce from "../hooks/useDebounce";

function Projects() {
  const [projects, setProjects] = useState(mockProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const debouncedSearch = useDebounce(searchText, 500);

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  function handleProject(newProject) {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          + New Project
        </button>
      </div>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full p-3 mb-6 border rounded outline-none focus:border-blue-500"
      />
      <ProjectList projects={filteredProjects} />
      {isModalOpen && (
        <CreateProjectModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleProject}
        />
      )}
    </div>
  );
}

export default Projects;
