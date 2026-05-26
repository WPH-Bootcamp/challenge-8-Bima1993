import { useState } from "react";
import consultationImage from "../../assets/Consultation.jpg";
import type { FaqItem } from "../../types";

const faqs: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    question: "How do I know if this is right for my business?",
    answer:
      "Book a free consult - we'll assess your goals and recommend the right approach.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is different. Let's talk about your needs to get a tailored estimate.",
  },
  {
    question: "How long does it take?",
    answer:
      "Depends on scope - but we always prioritize quality and deadlines.",
  },
  {
    question: "Can I start with a small project first?",
    answer: "Absolutely. We often begin with MVPs or pilot projects.",
  },
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  function toggleFaq(index: number) {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  }

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="border-b border-t border-white/10 py-12">
          <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <h2
              id="faq-heading"
              className="max-w-sm text-4xl font-bold leading-tight md:text-5xl"
            >
              Need Help? Start Here.
            </h2>
            <p className="max-w-[220px] text-base leading-7 text-white/55 lg:justify-self-end">
              Everything you need to know - all in one place.
            </p>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <div>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={faq.question} className="border-b border-white/10">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-6 py-8 text-left text-xl font-bold text-white"
                    >
                      <span>{faq.question}</span>
                      <span className="text-2xl font-normal">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <p
                        id={`faq-answer-${index}`}
                        className="-mt-4 pb-8 text-lg leading-8 text-white/60"
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center lg:justify-end">
              <aside
                aria-label="Free consultation"
                className="w-full max-w-[330px] rounded-[2rem] bg-[#d64f35] p-6 text-white"
              >
                <h3 className="max-w-[230px] text-4xl font-bold leading-tight">
                  Let's talk it through
                </h3>
                <p className="mt-4 max-w-[230px] text-lg leading-8">
                  book a free consultation with our team.
                </p>

                <img
                  src={consultationImage}
                  alt="Business team discussing a project during a consultation meeting"
                  loading="lazy"
                  decoding="async"
                  className="mt-6 h-[146px] w-full rounded-2xl object-cover"
                />

                <button
                  type="button"
                  onClick={() => setIsConsultationOpen(true)}
                  className="mt-7 h-[54px] w-full rounded-full bg-white text-base font-bold text-black transition hover:bg-white/90"
                >
                  Free Consultation
                </button>

                {isConsultationOpen && (
                  <div className="mt-5 rounded-2xl bg-black/20 p-4 text-left">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm leading-6">
                        Thanks! Tell us your goals and we'll help recommend the
                        next best step.
                      </p>
                      <button
                        type="button"
                        aria-label="Close consultation message"
                        onClick={() => setIsConsultationOpen(false)}
                        className="text-xl leading-none text-white"
                      >
                        x
                      </button>
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
