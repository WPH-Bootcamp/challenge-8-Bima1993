import Button from "../ui/Button";

function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Company Profile Assignment
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Start building your components!
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;