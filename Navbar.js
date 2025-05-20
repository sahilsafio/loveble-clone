export default function Navbar() {
  return (
    <nav className="p-6 bg-gray-800 flex justify-between">
      <h1 className="text-xl font-bold">YourName</h1>
      <div className="space-x-4">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
