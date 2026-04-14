export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer building clean and meaningful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:jose.lourenco.fernandes2005@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                Email
              </a>
              <a
                href="https://github.com/JoseLourencoFernandes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/joselourencofernandes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
