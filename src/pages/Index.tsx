import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const techStack = [
    { name: "Go", icon: "🐹" },
    { name: "C", icon: "💻" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "MySQL", icon: "🐬" },
    { name: "Docker", icon: "🐳" },
    { name: "Linux", icon: "🐧" },
  ];

  const featuredProjects = [
    {
      title: "Project One",
      description: "A modern web application with real-time features and beautiful UI.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
      techs: ["React", "TypeScript", "TailwindCSS"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in leading-tight">
                  Hi, I'm <span className="text-accent">José</span>.
                </h1>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground animate-fade-in leading-tight">
                  I'm a Software Engineer.
                </h1>
                <p
                  className="text-lg md:text-xl text-muted-foreground mt-6 animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  Enjoy solving problems that make a difference to help people living better lives.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Link to="/projects" className="btn-primary text-center">
                  View Projects
                </Link>
                <Link to="/timeline" className="btn-secondary text-center">
                  My Journey
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-3xl"></div>
                <div className="relative bg-card rounded-2xl overflow-hidden border border-border p-4 animate-float">
                  <img
                    src={`${import.meta.env.BASE_URL}profilepic.jpeg`}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 px-4 md:px-8 bg-card/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            My desire is to use programming as a tool to solve real-world problems and create meaningful experiences. I am passionate about learning new technologies and continuously improving my skills to build impactful solutions.
          </p>
        </div>
      </section>

      {/* Featured Project
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Project</h2>

          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glow-border rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="overflow-hidden rounded-lg h-80 md:h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="btn-primary text-sm">
                    GitHub
                  </a>
                  <a href={project.live} className="btn-secondary text-sm">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Tech Stack Snapshot */}
      <section className="py-20 px-4 md:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Preferred Tech Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center p-4 rounded-lg bg-secondary border border-border hover:border-accent transition-all cursor-pointer glow-border"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <p className="text-xs font-medium text-center text-muted-foreground group-hover:text-accent transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Feel free to reach out to discuss new opportunities or collaborations.<br />
            Email: <span className="text-foreground font-medium">jose.lourenco.fernandes2005@gmail.com</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:jose.lourenco.fernandes2005@gmail.com" className="btn-primary">
              Send me an email
            </a>
            <a href="https://www.linkedin.com/in/joselourencofernandes/" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
