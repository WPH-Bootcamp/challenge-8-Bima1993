import { useState } from "react";
import emilyImage from "../../assets/Emily Chen.png";
import johnImage from "../../assets/John Lee.png";
import sarahImage from "../../assets/Sarah Tan.png";
import quoteImage from "../../assets/Testimony Quote.png";
import type { TestimonialItem } from "../../types";

const testimonials: TestimonialItem[] = [
  {
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    quote:
      "The team delivered exactly what we needed - on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    image: sarahImage,
  },
  {
    name: "John Lee",
    role: "Creative Director at Innovate Corp",
    quote:
      "Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.",
    image: johnImage,
  },
  {
    name: "Emily Chen",
    role: "Marketing Head at Tech Solutions",
    quote:
      "The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.",
    image: emilyImage,
  },
];

const starItems = Array.from({ length: 5 }, (_, index) => index);

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  function getCardPosition(index: number) {
    const offset =
      (index - activeIndex + testimonials.length) % testimonials.length;

    if (offset === 0) {
      return "center";
    }

    if (offset === 1) {
      return "right";
    }

    return "left";
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="testimonials-section overflow-hidden bg-black px-6 py-20 text-white md:pb-36 md:pt-7"
    >
      <div className="mx-auto max-w-[1288px] text-center">
        <h2
          id="testimonials-heading"
          className="text-[30px] font-bold leading-tight md:text-[36px]"
        >
          What Partners Say About Working With Us
        </h2>
        <p className="mt-4 text-base font-semibold text-white/55">
          Trusted voices. Real experiences. Proven results.
        </p>

        <div className="relative mt-16 min-h-[318px]">
          <div className="hidden md:block">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const position = getCardPosition(index);

              return (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  onClick={() => setActiveIndex(index)}
                  className={`testimonial-card-button absolute top-0 cursor-pointer border-0 bg-transparent p-0 text-center text-white transition-all duration-500 ${
                    position === "center"
                      ? "testimonial-card-button-center left-1/2 z-30 w-[594px] -translate-x-1/2 opacity-100"
                      : position === "left"
                        ? "testimonial-card-button-side testimonial-card-button-left -left-[76px] z-10 w-[430px]"
                        : "testimonial-card-button-side testimonial-card-button-right -right-[76px] z-10 w-[430px]"
                  }`}
                >
                  <article
                    className={`testimonial-card relative h-[268px] rounded-2xl border bg-[#080c12] px-10 pb-10 pt-[26px] ${
                      isActive ? "border-[#ff623e]/60" : "border-white/10"
                    }`}
                  >
                    <img
                      src={quoteImage}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className={`absolute -top-[35px] left-[48px] h-[66px] w-[66px] object-contain ${
                        isActive ? "opacity-100" : "opacity-45"
                      }`}
                    />

                    <div
                      className="text-[22px] leading-none tracking-[0.16em] text-[#ffcf55]"
                      aria-label="5 stars"
                    >
                      {starItems.map((starIndex) => (
                        <span key={starIndex} aria-hidden="true">
                          &#9733;
                        </span>
                      ))}
                    </div>
                    <p className="mx-auto mt-5 max-w-[520px] text-base font-semibold leading-[1.7]">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <p className="mt-7 text-base font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[#ff623e]">
                      {testimonial.role}
                    </p>

                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute -bottom-[31px] left-1/2 h-[62px] w-[62px] -translate-x-1/2 rounded-full border border-white/10 object-cover"
                    />
                  </article>
                </button>
              );
            })}

            <div className="testimonial-fade-left pointer-events-none absolute inset-y-0 -left-[76px] z-20 w-[430px]" />
            <div className="testimonial-fade-right pointer-events-none absolute inset-y-0 -right-[76px] z-20 w-[430px]" />
          </div>

          <article className="rounded-2xl border border-[#ff623e]/60 bg-[#080c12] px-6 pb-12 pt-10 md:hidden">
            <img
              src={quoteImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute left-10 top-5 h-12 w-12 object-contain"
            />
            <div
              className="mt-6 text-xl tracking-[0.2em] text-[#ffcf55]"
              aria-label="5 stars"
            >
              {starItems.map((starIndex) => (
                <span key={starIndex} aria-hidden="true">
                  &#9733;
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-8">
              &quot;{activeTestimonial.quote}&quot;
            </p>
            <p className="mt-8 text-lg">{activeTestimonial.name}</p>
            <p className="mt-2 text-base text-[#ff623e]">
              {activeTestimonial.role}
            </p>
            <img
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              loading="lazy"
              decoding="async"
              className="mx-auto mt-8 h-16 w-16 rounded-full border border-white/10 object-cover"
            />
          </article>
        </div>

        <div className="mt-6 flex justify-center gap-2 md:mt-0" role="tablist">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show testimonial from ${testimonial.name}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? "bg-[#ff623e]" : "bg-[#1f2937]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
