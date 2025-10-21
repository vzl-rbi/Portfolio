import { Award, Briefcase, Calendar, MapPin, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import certificateEntegra from "@/assets/certificate-entegra.jpg";
import experienceLetter from "@/assets/experience-letter-aansh.jpg";
import certificateIot from "@/assets/certificate-iot.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import trainingPhoto from "@/assets/training-photo.jpg";

const Experiences = () => {
  const experiences = [
    {
      company: "Entegra Sources Pvt. Ltd.",
      role: "Technical Writer",
      type: "Full-time",
      location: "Nepal",
      period: "Nov 2021 - Jul 2022",
      achievements: [
        "Created and maintained 100+ technical documents, improving product usability and adoption",
        "Enhanced collaboration between engineering and documentation teams through improved workflow documentation",
        "Recognized for excellence in technical documentation",
      ],
      skills: ["Technical Writing", "Documentation", "Team Collaboration"],
    },
    {
      company: "Aansh Tech",
      role: "Software Development Intern",
      type: "Internship",
      location: "Dharan",
      period: "Jun 2025 - Aug 2025",
      achievements: [
        "Gained full-stack experience contributing to internal projects focused on building robust, user-centric web applications",
        "Frontend Development: Built responsive UI using React.js, TypeScript, Tailwind, and TanStack Query",
        "Backend API Development: Developed scalable RESTful APIs using Laravel; tested and documented APIs with Postman",
      ],
      skills: ["React", "TypeScript", "Laravel", "REST API", "Tailwind CSS"],
    },
  ];

  const achievements = [
    {
      title: "IoT Innovation Recognition",
      description: "Received recognition from Dr. Mahabir Pun for IoT-based Home Automation System developed during college program",
      icon: Award,
    },
    {
      title: "Technical Documentation Excellence",
      description: "Recognized for excellence in technical documentation at Entegra Sources Pvt. Ltd., improving product adoption",
      icon: Award,
    },
    {
      title: "Full-Stack Project Development",
      description: "Developed multiple frontend and API projects using Express.js, React, and Laravel with modern best practices",
      icon: Award,
    },
  ];

  const galleryItems = [
    {
      image: profilePhoto,
      title: "Professional Profile",
      caption: "Rabi Bhujel - Full Stack Developer",
    },
    {
      image: certificateEntegra,
      title: "Certificate of Excellence",
      caption: "Technical Writing Excellence - Entegra Sources Pvt. Ltd.",
    },
    {
      image: experienceLetter,
      title: "Experience Letter",
      caption: "Software Development Internship - Aansh Tech",
    },
    {
      image: certificateIot,
      title: "IoT Recognition Certificate",
      caption: "Home Automation System - Dr. Mahabir Pun",
    },
    {
      image: trainingPhoto,
      title: "IoT Workshop Training",
      caption: "Hands-on IoT project development session",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 text-gradient">Experience & Achievements</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and recognition in software development and technical writing
            </p>
          </div>

          {/* Work Experience Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="text-accent" size={28} />
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements & Recognition */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Award className="text-accent" size={28} />
              Achievements & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="text-accent" size={32} />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Certificates & Photos Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.caption}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image Preview Dialog */}
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0">
              <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-6 w-6 text-white drop-shadow-lg" />
                <span className="sr-only">Close</span>
              </DialogClose>
              {selectedImage !== null && (
                <div className="relative">
                  <img
                    src={galleryItems[selectedImage].image}
                    alt={galleryItems[selectedImage].title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="bg-background/95 p-4 border-t">
                    <h3 className="font-semibold text-lg">{galleryItems[selectedImage].title}</h3>
                    <p className="text-sm text-muted-foreground">{galleryItems[selectedImage].caption}</p>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
