function Navbar() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-gray-900">
          Company
        </a>

        <div className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Services
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;