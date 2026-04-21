function ProjectCard({ project }) {
  const statusColor =
    project.status === "active"
      ? "bg-green-100 text-green-700"
      : project.status === "completed"
        ? "bg-blue-100 text-blue-700"
        : "bg-yellow-100 text-yellow-700";

  return (
    <div className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
        {project.status}
      </span>
      <div className="flex justify-between mt-3 text-sm text-gray-500">
        <span>{project.members} members</span>
        <span>{project.createdAt}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
