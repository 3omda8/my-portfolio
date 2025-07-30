function ProjectCard({ project }) {
  const { image, title, description, liveDemo } = project;

  return (
    <div className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-2">
        <img
          src={image}
          alt={title}
          className="w-full object-cover rounded-lg"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-xl font-bold mb-2 text-orange-900">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit inline-block bg-orange-900 text-white px-4 py-2 rounded hover:bg-orange-800 transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
