import logoSymbol from "../../assets/logo-symbol.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2 text-sm font-bold text-white">
          <img src={logoSymbol} alt="" className="h-5 w-5 object-contain" />
          Your Logo
        </a>

        <div className="hidden gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-white transition hover:text-[#ff5a3d]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#ff5a3d] px-10 py-3 text-xs font-semibold text-white transition hover:bg-[#ff735c] md:inline-flex"
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
