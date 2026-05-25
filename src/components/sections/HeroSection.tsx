import Button from "../ui/Button";
import brandLogos from "../../assets/Container.png";
import heroImage from "../../assets/hero section img.png";


const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Industry Awards Won" },
  { value: "100%", label: "Client Satisfaction Rate" },
];

function HeroSection() {
  return (
    <section className="overflow-hidden bg-black px-6 pb-16 pt-16 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative z-10 lg:pt-4">
          <h1 className="mb-5 max-w-[540px] text-4xl font-bold leading-tight md:text-5xl lg:text-[56px]">
            Your Tech Partner for{" "}
            <span className="text-[#ff5a3d]">Smarter Growth</span>
          </h1>

          <p className="mb-8 max-w-[560px] text-base leading-8 text-white/85">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <Button size="sm">Let's Talk</Button>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff5a3d2e,transparent_58%)]" />
          <img
            src={heroImage}
            alt="Illustration of a digital product dashboard on a smartphone"
            className="relative z-10 w-full max-w-[420px] object-contain md:max-w-[560px] lg:max-w-[660px]"
          />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl text-center">
        <p className="mb-9 text-base font-semibold">
          Trusted by Global Innovators & Leading Brands
        </p>

        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee-left">
            <img
              src={brandLogos}
              alt="Trusted brands including Upwork, Zoom, Postman, Databricks, Airbnb, Dropbox, and PayPal"
              className="w-[1040px] max-w-none pr-12"
            />
            <img
              src={brandLogos}
              alt=""
              aria-hidden="true"
              className="w-[1040px] max-w-none pr-12"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          End-to-End IT Solutions That Drive Results
        </h2>
        <p className="mt-4 text-sm text-white/45 md:text-base">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="mx-auto flex h-52 w-52 flex-col items-center justify-center rounded-full bg-[#0d1118] text-center md:h-56 md:w-56 lg:h-60 lg:w-60"
            >
              <p className="text-4xl font-bold text-[#ff5a3d]">{stat.value}</p>
              <p className="mt-3 px-4 text-sm text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
