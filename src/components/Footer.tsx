import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Rabi Bhujel</h3>
            <p className="text-sm opacity-90">
              Full Stack Developer | IoT Enthusiast | Technical Writer
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/resume" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="/experiences" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="/contact" className="opacity-90 hover:opacity-100 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <MapPin size={16} />
                <span>Itahari, Nepal</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail size={16} />
                <a
                  href="mailto:rabibhujel04129@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  rabibhujel04129@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/vzl-rbi"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 hover:text-accent transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rabi-bhujel-89b057276"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 hover:text-accent transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Rabi Bhujel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
