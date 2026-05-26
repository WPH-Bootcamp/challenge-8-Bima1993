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
    <footer className="bg-black px-0 pb-0 pt-0 text-white md:px-6 md:pb-10 md:pt-6">
      <div className="mx-auto max-w-6xl rounded-[20px] border border-white/10 bg-[#080c12] px-5 pb-5 pt-5 md:rounded-3xl md:px-12 md:py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <a
            href="#"
            aria-label="Your Logo home"
            className="flex items-center gap-2 text-xl font-bold md:order-2"
          >
            <img src={logoSymbol} alt="" className="h-7 w-7 object-contain" />
            Your Logo
          </a>

          <h2 className="max-w-[285px] text-[26px] font-bold uppercase leading-[1.5] md:order-1 md:max-w-[310px] md:text-4xl md:leading-tight">
            Let&apos;s Discuss Your Ideas
          </h2>
        </div>

        <div className="mb-8 mt-5 h-px bg-white/10 md:my-12" />

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-x-8 md:gap-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-white transition hover:text-[#ff623e] md:text-sm md:text-white/85"
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
            className="theme-dark-only h-10 w-[208px] object-contain"
          />
          <img
            src={socialMediaIconsLight}
            alt="Social media links for Facebook, Instagram, LinkedIn, and TikTok"
            className="theme-light-only h-10 w-[208px] object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
