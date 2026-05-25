import logoSymbol from "../../assets/logo-symbol.png";
import socialMediaIconsDark from "../../assets/Social Media Icons Dark Mode.png";
import socialMediaIconsLight from "../../assets/Social Media Icons Light Mode.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function Footer() {
  return (
    <footer className="bg-black px-6 pb-10 pt-6 text-white">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#080c12] px-10 py-10 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h2 className="max-w-[310px] text-4xl font-bold uppercase leading-tight">
            Let&apos;s Discuss Your Ideas
          </h2>

          <a
            href="#"
            aria-label="Your Logo home"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <img src={logoSymbol} alt="" className="h-7 w-7 object-contain" />
            Your Logo
          </a>
        </div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/85 transition hover:text-[#ff623e]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <img
            src={socialMediaIconsDark}
            alt="Social media links for Facebook, Instagram, LinkedIn, and TikTok"
            className="theme-dark-only h-10 w-[203px] object-contain"
          />
          <img
            src={socialMediaIconsLight}
            alt="Social media links for Facebook, Instagram, LinkedIn, and TikTok"
            className="theme-light-only h-10 w-[203px] object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
