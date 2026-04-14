import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Experience</h1>
          <p className="text-lg text-muted-foreground mb-12">
            My professional journey through various roles and learning experiences.
          </p>

          <div className="bg-card border border-border rounded-lg p-12 text-center text-muted-foreground">
            <p>Experience page content coming soon. Continue prompting to build this page out.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
