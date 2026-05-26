import portfolioOneImage from "../../assets/Portofolio 1.png";
import portfolioTwoImage from "../../assets/Portofolio 2.png";
import portfolioThreeImage from "../../assets/Portofolio 3.png";
import type { PortfolioItem } from "../../types";

const portfolios: PortfolioItem[] = [
  {
    category: "Landing Page",
    title: "Portofolio 1",
    image: portfolioOneImage,
    alt: "Landing page portfolio preview for Willy Nielsen",
  },
  {
    category: "Landing Page",
    title: "Portofolio 2",
    image: portfolioTwoImage,
    alt: "Dark landing page portfolio preview with green accent",
  },
  {
    category: "Landing Page",
    title: "Portofolio 3",
    image: portfolioThreeImage,
    alt: "Landing page portfolio preview for Delon Lorenzo",
  },
];

function PortfolioSection() {
  return (
    <section
      id="projects"
      aria-labelledby="portfolio-heading"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2
            id="portfolio-heading"
            className="text-4xl font-bold leading-tight md:text-5xl"
          >
            From Vision to Launch! Projects We&apos;re Proud Of
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-white/80">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {portfolios.map((portfolio) => (
            <article key={portfolio.title}>
              <img
                src={portfolio.image}
                alt={portfolio.alt}
                loading="lazy"
                decoding="async"
                className="h-[340px] w-full rounded-2xl object-cover object-top"
              />
              <p className="mt-6 text-lg font-semibold text-[#ff623e]">
                {portfolio.category}
              </p>
              <h3 className="mt-3 text-2xl font-bold">{portfolio.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
