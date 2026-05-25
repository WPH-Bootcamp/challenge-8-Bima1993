import { type FormEvent, useState } from "react";
import failedDarkModalImage from "../../assets/Failed Dark Theme.png";
import failedLightModalImage from "../../assets/Failed Light Mode.png";
import successDarkModalImage from "../../assets/Success Dark Theme.png";
import successLightModalImage from "../../assets/Success Light Mode.png";

const serviceOptions = [
  "Web Development",
  "Cloud Solutions",
  "Mobile App Development",
  "Software Development",
  "UI/UX Design",
  "Other",
];

function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web Development",
  ]);
  const [modalStatus, setModalStatus] = useState<"success" | "failed" | null>(
    null,
  );

  function toggleService(service: string) {
    setSelectedServices((currentServices) =>
      currentServices.includes(service)
        ? currentServices.filter((currentService) => currentService !== service)
        : [...currentServices, service],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setModalStatus(name && email && message ? "success" : "failed");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 id="contact-heading" className="text-4xl font-bold md:text-5xl">
            Ready to Start? Let&apos;s Talk.
          </h2>
          <p className="mt-6 text-lg text-white/55">
            Tell us what you need, and we&apos;ll get back to you soon.
          </p>
        </div>

        <form className="mt-16 space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm font-bold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="mt-3 h-12 w-full rounded-xl border border-white/15 bg-transparent px-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff623e]"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-bold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="mt-3 h-12 w-full rounded-xl border border-white/15 bg-transparent px-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff623e]"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows={6}
              className="mt-3 w-full resize-none rounded-xl border border-white/15 bg-transparent px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff623e]"
            />
          </div>

          <fieldset>
            <legend className="text-sm font-bold">Services</legend>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {serviceOptions.map((service) => {
                const isChecked = selectedServices.includes(service);

                return (
                  <label
                    key={service}
                    className="flex cursor-pointer items-center gap-3 text-base text-white"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleService(service)}
                      className="peer sr-only"
                    />
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded border transition ${
                        isChecked
                          ? "border-[#ff623e] bg-[#ff623e]"
                          : "border-white/20 bg-transparent"
                      }`}
                    >
                      {isChecked && (
                        <span className="text-xs font-bold text-white">✓</span>
                      )}
                    </span>
                    <span>{service}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <button
            type="submit"
            className="h-14 w-full rounded-full bg-[#ff623e] text-base font-bold text-white transition hover:bg-[#ff735c]"
          >
            Send
          </button>
        </form>
      </div>

      {modalStatus && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6"
          role="dialog"
          aria-modal="true"
          aria-label={
            modalStatus === "success"
              ? "Message received"
              : "Message failed to send"
          }
        >
          <div className="relative w-full max-w-[520px]">
            <img
              src={
                modalStatus === "success"
                  ? successDarkModalImage
                  : failedDarkModalImage
              }
              alt={
                modalStatus === "success"
                  ? "Message received confirmation"
                  : "Message failed to send"
              }
              className="theme-dark-only w-full rounded-2xl"
            />
            <img
              src={
                modalStatus === "success"
                  ? successLightModalImage
                  : failedLightModalImage
              }
              alt={
                modalStatus === "success"
                  ? "Message received confirmation"
                  : "Message failed to send"
              }
              className="theme-light-only w-full rounded-2xl"
            />
            <button
              type="button"
              onClick={() => setModalStatus(null)}
              className="absolute bottom-[7.5%] left-[15%] h-[10%] w-[70%] rounded-full"
              aria-label={
                modalStatus === "success" ? "Back to home" : "Try again"
              }
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactSection;
