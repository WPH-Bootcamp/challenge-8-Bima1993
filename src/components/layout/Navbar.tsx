import { useEffect, useState } from "react";
import logoSymbol from "../../assets/logo-symbol.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function getSavedTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  return localStorage.getItem("theme") === "light" ? "light" : "dark";
}

function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">(getSavedTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("light-theme", theme === "light");
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
  }

  return (
    <header className="sticky top-0 z-50 bg-black/90">
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

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="keep-white inline-flex h-[44px] w-[197px] items-center justify-center gap-1 rounded-full bg-[rgba(255,98,62,1)] p-2 text-xs font-semibold text-white shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] transition hover:bg-[#ff735c]"
          >
            Let's Talk
          </a>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold text-white transition hover:border-[#ff623e] hover:text-[#ff623e]"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          <span className="sr-only">Open menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </span>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu-panel fixed inset-0 z-[120] bg-black px-6 py-5 text-white md:hidden">
          <div className="flex items-center justify-between">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-xl font-bold"
            >
              <img src={logoSymbol} alt="" className="h-7 w-7 object-contain" />
              Your Logo
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation menu"
              className="text-4xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold"
              >
                {link.label === "Projects" ? "Porfolio" : link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="keep-white inline-flex h-[44px] w-full items-center justify-center gap-1 rounded-full bg-[rgba(255,98,62,1)] p-2 text-sm font-semibold text-white shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)] transition hover:bg-[#ff735c]"
            >
              Let's Talk
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ff623e] hover:text-[#ff623e]"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
