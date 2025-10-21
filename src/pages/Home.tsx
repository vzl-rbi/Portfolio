import {
  Github,
  Linkedin,
  ArrowRight,
  Code2,
  Database,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div
            className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Hi, I'm <span className="text-secondary">Rabi Bhujel</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
              Full Stack Developer | IoT Enthusiast | Technical Writer
            </p>

            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              I build efficient, scalable, and user-friendly applications using
              React, TypeScript, and Laravel. Passionate about creating
              innovative IoT solutions and writing clear technical
              documentation.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white glow-effect"
              >
                <a href="/contact">
                  Get In Touch <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="/resume">View Resume</a>
              </Button>
            </div>

            <div className="flex justify-center gap-6 pt-4">
              <a
                href="https://github.com/vzl-rbi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-secondary transition-all hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/rabi-bhujel-89b057276"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-secondary transition-all hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Why Me?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
                <p className="text-muted-foreground">
                  I write maintainable, well-documented code following best
                  practices and industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Terminal className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Learner</h3>
                <p className="text-muted-foreground">
                  Quick to adapt to new technologies and frameworks, always
                  eager to expand my skill set.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Team Collaboration
                </h3>
                <p className="text-muted-foreground">
                  Strong communicator with experience in cross-functional teams
                  and technical documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
};

export default Home;
