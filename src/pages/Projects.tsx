import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-muted-foreground mb-12">
            A collection of my work showcasing design and development expertise.
          </p>

          <div className="bg-card border border-border rounded-lg p-12 text-center text-muted-foreground">
            <p>Projects page content coming soon. Continue prompting to build this page out.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
