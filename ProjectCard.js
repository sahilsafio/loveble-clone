export default function ProjectCard({ title, description }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 transition">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
