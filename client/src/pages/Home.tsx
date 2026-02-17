/**
 * Design Philosophy: Minimalist Geometric with Red Accents
 * - Dark background with geometric network patterns
 * - Geometric photo frame with red borders
 * - Mouse cursor interaction with background
 * - Work experience timeline and services sections
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Server, Layers, Wrench, Mail, Github, Linkedin, ExternalLink, Menu, X, Briefcase, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; life: number }>>([]);
  const [isHovering, setIsHovering] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const particleIdRef = useRef(0);

  // Track mouse position and create particles on click
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX,
          y: e.clientY,
        });

        // Check if hovering over interactive elements
        const target = e.target as HTMLElement;
        const isInteractive = target.closest('button, a, input, select, textarea, [role="button"]');
        setIsHovering(!!isInteractive);
      }
    };

    const handleMouseClick = (e: MouseEvent) => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create multiple particles on click
        const newParticles = Array.from({ length: 8 }, (_, i) => ({
          id: particleIdRef.current++,
          x,
          y,
          life: 1,
        }));

        setParticles((prev) => [...prev, ...newParticles]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
    };
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, life: p.life - 0.02 }))
          .filter((p) => p.life > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const skills = {
    frontend: [
      { name: "React", description: "Component-based UI, Hooks, SPA development" },
      { name: "React Native", description: "Cross-platform mobile apps" },
      { name: "Redux", description: "Global state management" },
    ],
    backend: [
      { name: "Node.js", description: "Backend JavaScript runtime" },
      { name: "Express.js", description: "REST APIs, Middleware, Routing" },
      { name: "NestJS", description: "Structured backend architecture" },
    ],
    databases: [
      { name: "MySQL", description: "SQL, Tables & relations" },
      { name: "MongoDB", description: "Document-based database" },
    ],
    tools: [
      { name: "Prisma", description: "Type-safe database access" },
      { name: "Knex.js", description: "SQL query builder" },
    ],
    mobile: [
      { name: "React Native", description: "Cross-platform mobile apps" },
      { name: "Flutter", description: "Cross-platform apps with Dart" },
    ],
  };

  const experience = [
    {
      title: "Web Developer",
      company: "SmartFarm",
      period: "Aug 2025 - Nov 2025",
      description: "Built scalable web applications using React, Express, and Knex.js for database management.",
      technologies: ["React", "Express", "Knex.js"],
    },
    {
      title: "Web Development Internship",
      company: "SFECTORIA",
      period: "Jan 2024 - Jul 2024",
      description: "Engineered a scalable ERP system from front-end to back-end. Architected databases with MongoDB and Prisma. Implemented CI/CD workflows with Docker and Git.",
      technologies: ["React", "Node.js", "NestJS", "MongoDB", "Docker"],
    },
    {
      title: "Web Development Internship",
      company: "National Center for Informatics",
      period: "Feb 2023 - Mar 2023",
      description: "Developed responsive websites and a carpooling platform. Optimized performance and implemented real-time notifications.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web applications using React, Node.js, and modern frameworks. Responsive design and optimized performance.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native and Flutter. Native-like performance with shared codebase.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Scalable database architecture with MongoDB, MySQL, and Prisma ORM. Data integrity and efficient retrieval.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, Express, and NestJS. RESTful APIs and microservices architecture.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description: "End-to-end application development from UI/UX to deployment. Complete project ownership and delivery.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Code optimization, CI/CD pipelines, Docker containerization, and deployment strategies.",
    },
  ];

  const navItems = ["Home", "About", "Skills", "Experience", "Services", "Contact"];

  return (
    <div ref={bgRef} className="min-h-screen relative bg-background overflow-hidden">
      {/* Custom Cursor */}
      <div
        className={`cursor-glow ${isHovering ? 'active' : ''}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />
      {/* Interactive Background with Geometric Patterns */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>

        {/* Animated geometric lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#666" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Mouse-interactive glow effect */}
        <div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.05) 50%, transparent 70%)",
            left: `${mousePos.x - 192}px`,
            top: `${mousePos.y - 192}px`,
            filter: "blur(40px)",
            transition: "all 0.1s ease-out",
            boxShadow: "0 0 60px rgba(239, 68, 68, 0.2)",
          }}
        ></div>

        {/* Secondary glow layer for more intensity */}
        <div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)",
            left: `${mousePos.x - 128}px`,
            top: `${mousePos.y - 128}px`,
            filter: "blur(20px)",
            transition: "all 0.15s ease-out",
          }}
        ></div>

        {/* Particle effects */}
        {particles.map((particle) => {
          const angle = (particle.id * 360) / 8;
          const distance = 100 * (1 - particle.life);
          const x = Math.cos((angle * Math.PI) / 180) * distance;
          const y = Math.sin((angle * Math.PI) / 180) * distance;

          return (
            <div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full pointer-events-none"
              style={{
                background: `rgba(239, 68, 68, ${particle.life * 0.6})`,
                left: `${particle.x + x}px`,
                top: `${particle.y + y}px`,
                boxShadow: `0 0 ${10 * particle.life}px rgba(239, 68, 68, ${particle.life})`,
                transform: "translate(-50%, -50%)",
              }}
            />
          );
        })}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#ef4444" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#ef4444" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke="#ef4444" strokeWidth="1" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold hidden sm:inline">Seif</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-border bg-background">
              <div className="container py-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-muted-foreground mb-2">Hi,</p>
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    I'm <span className="text-primary">Seif</span>
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
                    Full-Stack Developer
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground max-w-md">
                  Building scalable web and mobile applications with modern technologies. Specialized in React, Node.js, and cloud solutions.
                </p>

                <div className="flex gap-4">
                  <a href="mailto:seif.eddin.boughrara@outlook.com">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Mail className="w-5 h-5 mr-2" />
                      Contact
                    </Button>
                  </a>
                  <a href="https://github.com/SBoughrara" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Projects
                    </Button>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 pt-4">
                  <a href="https://linkedin.com/in/seif-boughrara" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com/SBoughrara" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="mailto:seif.eddin.boughrara@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              {/* Right - Photo with Geometric Frame */}
              <div className="relative flex justify-center items-center">
                <div className="relative w-80 h-96 animate-pulse" style={{ animationDuration: "6s" }}>
                  <div
                    className="w-full h-full overflow-hidden"
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  >
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663361634434/YINyUqYDnKFohbGa.JPG"
                      alt="Seif Boughrara"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Red border frame */}
                  <div
                    className="absolute inset-0 border-2 border-primary pointer-events-none"
                    style={{
                      clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                    }}
                  ></div>

                  {/* Decorative geometric elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 border border-primary/30 opacity-50"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-primary/20 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 border-t border-border">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm a passionate Computer Science student and full-stack developer with hands-on experience building scalable applications. With expertise in modern technologies like React.js, Node.js, and MongoDB, I create dynamic front-end UIs and robust back-end systems.
                </p>
                <p className="text-muted-foreground">
                  My journey includes internships at leading tech companies where I engineered ERP systems, developed responsive platforms, and implemented CI/CD workflows. I'm committed to continuous learning and delivering high-quality solutions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Frontend Expertise</h3>
                    <p className="text-sm text-muted-foreground">React, React Native, Redux, modern UI/UX</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Backend Development</h3>
                    <p className="text-sm text-muted-foreground">Node.js, Express, NestJS, REST APIs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 border-t border-border">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
              {/* Frontend */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center mb-4">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name}>
                      <div className="font-semibold text-sm">{skill.name}</div>
                      <div className="text-xs text-muted-foreground">{skill.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Backend */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center mb-4">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {skills.backend.map((skill) => (
                    <div key={skill.name}>
                      <div className="font-semibold text-sm">{skill.name}</div>
                      <div className="text-xs text-muted-foreground">{skill.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Databases */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center mb-4">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Databases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {skills.databases.map((skill) => (
                    <div key={skill.name}>
                      <div className="font-semibold text-sm">{skill.name}</div>
                      <div className="text-xs text-muted-foreground">{skill.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* ORM Tools */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center mb-4">
                    <Wrench className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>ORM / Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {skills.tools.map((skill) => (
                    <div key={skill.name}>
                      <div className="font-semibold text-sm">{skill.name}</div>
                      <div className="text-xs text-muted-foreground">{skill.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Mobile */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center mb-4">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Mobile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {skills.mobile.map((skill) => (
                    <div key={skill.name}>
                      <div className="font-semibold text-sm">{skill.name}</div>
                      <div className="text-xs text-muted-foreground">{skill.description}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Core Concepts */}
              <Card className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>Core</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["REST APIs", "Auth", "Full-stack", "State Mgmt", "SQL/NoSQL"].map((concept) => (
                      <Badge key={concept} variant="secondary" className="text-xs">
                        {concept}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-32 border-t border-border">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12">Work Experience</h2>

            <div className="max-w-4xl">
              {experience.map((exp, index) => (
                <div key={index} className="relative pb-12">
                  {/* Timeline line */}
                  {index !== experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-primary to-transparent"></div>
                  )}

                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <Card className="flex-1 border-border hover:border-primary/50 transition-colors">
                      <CardHeader>
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <CardTitle>{exp.title}</CardTitle>
                            <CardDescription>{exp.company}</CardDescription>
                          </div>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 border-t border-border">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12">Services I Offer</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 border-t border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and opportunities. Let's connect!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:seif.eddin.boughrara@outlook.com">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Mail className="w-5 h-5 mr-2" />
                    seif.eddin.boughrara@outlook.com
                  </Button>
                </a>
                <a href="tel:+393508856819">
                  <Button size="lg" variant="outline">
                    <Phone className="w-5 h-5 mr-2" />
                    +39 350 8856819
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container">
            <div className="text-center text-muted-foreground text-sm">
              <p>© 2025 Seif Boughrara. Full-Stack Developer.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Import Phone icon
import { Phone } from "lucide-react";
