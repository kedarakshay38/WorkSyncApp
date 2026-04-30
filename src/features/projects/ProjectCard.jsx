function ProjectCard({ project }) {
  const statusColor =
    project.status === "active"
      ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      : project.status === "completed"
        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{project.description}</p>
      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
        {project.status}
      </span>
      <div className="flex justify-between mt-3 text-sm text-gray-500 dark:text-gray-400">
        <span>{project.members} members</span>
        <span>{project.createdAt}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
