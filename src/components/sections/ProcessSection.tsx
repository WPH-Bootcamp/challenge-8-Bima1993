const processSteps = [
  {
    title: "Discovery & Consultation",
    description: "Understand Your Needs & Goals",
    side: "left",
  },
  {
    title: "Planning & Strategy",
    description: "Build a Clear, Scalable Roadmap",
    side: "right",
  },
  {
    title: "Design & Prototyping",
    description: "Craft UX That Converts",
    side: "left",
  },
  {
    title: "Development & Implementation",
    description: "Deliver With Speed & Precision",
    side: "right",
  },
  {
    title: "Testing & Optimization",
    description: "Ensure Quality at Every Step",
    side: "left",
  },
  {
    title: "Launch & Growth",
    description: "Scale, Measure & Improve Continuously",
    side: "right",
  },
];

function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="process-heading" className="text-4xl font-bold">
            Our Process
          </h2>
          <p className="mt-5 text-lg text-white/55">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute bottom-10 left-5 top-10 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

          <ol className="space-y-8 lg:space-y-0">
            {processSteps.map((step, index) => {
              const isLeft = step.side === "left";

              return (
                <li
                  key={step.title}
                  className="relative min-h-[112px] lg:min-h-[132px]"
                >
                  <article
                    className={`ml-16 rounded-2xl border border-white/10 bg-[#080c12] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] lg:absolute lg:top-1/2 lg:ml-0 lg:w-[430px] lg:-translate-y-1/2 lg:p-7 ${
                      isLeft
                        ? "lg:right-[calc(50%+40px)]"
                        : "lg:left-[calc(50%+40px)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-lg font-bold lg:text-xl">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-sm text-white/55 lg:text-base">
                          {step.description}
                        </p>
                      </div>
                      <span aria-hidden="true" className="text-2xl text-white">
                        ^
                      </span>
                    </div>
                  </article>

                  <div className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff5a3d] text-sm font-bold lg:left-1/2 lg:-translate-x-1/2">
                    {index + 1}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
