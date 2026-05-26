import { useState } from "react";
import ecommerceImage from "../../assets/E-Commerce.jpg";
import fintechImage from "../../assets/Fintech.jpg";
import healthcareImage from "../../assets/Healtcare.jpg";
import type { IndustryItem } from "../../types";

const industries: IndustryItem[] = [
  {
    id: "fintech",
    label: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions - from digital wallets to core banking systems - tailored to modern financial needs.",
    image: fintechImage,
    alt: "A glowing payment card representing fintech solutions",
  },
  {
    id: "e-commerce",
    label: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experience, inventory management, and payment integration.",
    image: ecommerceImage,
    alt: "Shopping bags being handed to a customer representing e-commerce solutions",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: healthcareImage,
    alt: "Medicine bottle and pills representing healthcare technology solutions",
  },
];

function IndustriesSection() {
  const [activeIndustryId, setActiveIndustryId] = useState(industries[0].id);
  const activeIndustry =
    industries.find((industry) => industry.id === activeIndustryId) ??
    industries[0];

  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div>
          <h2 id="industries-heading" className="text-4xl font-bold">
            Built for Your Industry
          </h2>
          <p className="mt-5 max-w-3xl text-base text-white/55">
            We&apos;ve helped companies across industries launch smarter,
            faster, and more securely.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <div
            className="flex flex-col gap-6"
            role="tablist"
            aria-label="Industry examples"
          >
            {industries.map((industry) => {
              const isActive = industry.id === activeIndustry.id;

              return (
                <button
                  key={industry.id}
                  id={`${industry.id}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${industry.id}-panel`}
                  onClick={() => setActiveIndustryId(industry.id)}
                  className={`border-l-4 py-1 pl-3 pr-4 text-left text-lg font-bold transition ${
                    isActive
                      ? "border-[#ff623e] text-white"
                      : "border-white/30 text-white/30 hover:border-white/60 hover:text-white/70"
                  }`}
                >
                  {industry.label}
                </button>
              );
            })}
          </div>

          <article
            id={`${activeIndustry.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeIndustry.id}-tab`}
          >
            <p className="max-w-3xl text-base leading-8 text-white/90">
              {activeIndustry.description}
            </p>

            <img
              src={activeIndustry.image}
              alt={activeIndustry.alt}
              loading="lazy"
              decoding="async"
              className="mt-7 h-[260px] w-full rounded-2xl object-cover md:h-[340px] lg:h-[360px]"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
