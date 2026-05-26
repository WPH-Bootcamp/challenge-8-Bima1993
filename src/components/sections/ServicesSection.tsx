import cloudSolutionsIcon from "../../assets/Cloud Solutions.png";
import cybersecurityIcon from "../../assets/Cyber security service.png";
import infrastructureIcon from "../../assets/IT Infrastructure.png";
import consultingIcon from "../../assets/IT Consulting & Support.png";
import mobileIcon from "../../assets/Mobile App Development.png";
import qaIcon from "../../assets/QA solutions.png";
import softwareIcon from "../../assets/Software Development.png";
import uiUxIcon from "../../assets/UI UX Design.png";
import webIcon from "../../assets/Web Development.png";
import type { ServiceItem } from "../../types";

const services: ServiceItem[] = [
  {
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
    icon: webIcon,
  },
  {
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
    icon: mobileIcon,
    featured: true,
  },
  {
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces",
    icon: uiUxIcon,
  },
  {
    title: "Cloud Solutions",
    description: "Secure and flexible cloud infrastructure for your growth.",
    icon: cloudSolutionsIcon,
  },
  {
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
    icon: softwareIcon,
  },
  {
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    icon: infrastructureIcon,
  },
  {
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
    icon: cybersecurityIcon,
  },
  {
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
    icon: qaIcon,
  },
  {
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
    icon: consultingIcon,
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="services-heading" className="text-4xl font-bold md:text-5xl">
            Smart IT Solutions That Grow With You
          </h2>
          <p className="mt-6 text-lg text-white/55">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={`relative rounded-2xl border bg-[#080c12] px-6 pb-7 pt-16 ${
                service.featured
                  ? "border-[#ff5a3d]/70"
                  : "border-white/10"
              }`}
            >
              <img
                src={service.icon}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute -top-5 left-6 h-14 w-14 object-contain"
              />

              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-4 max-w-[290px] text-base leading-8 text-white/55">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
