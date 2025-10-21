import { Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/RabiBhujel-Resume.pdf";
    link.download = "RabiBhujel-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open("/RabiBhujel-Resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gradient">My Resume</h1>
            <p className="text-muted-foreground mb-8">
              Download or view my professional resume
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={handleView}
                className="gradient-accent"
              >
                <Eye className="mr-2" size={20} />
                View Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownload}
              >
                <Download className="mr-2" size={20} />
                Download PDF
              </Button>
            </div>
          </div>

          <Card className="mt-8">
            <CardContent className="p-8">
              <div className="aspect-[8.5/11] w-full bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="/RabiBhujel-Resume.pdf"
                  className="w-full h-full"
                  title="Resume Preview"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-muted/30 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Quick Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-accent mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Bachelor of Electronics and Communication Engineering
                  <br />
                  IOE Purwanchal Campus, Dharan
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-accent mb-2">Experience</h3>
                <p className="text-muted-foreground">
                  Technical Writer at Entegra Sources Pvt. Ltd.
                  <br />
                  Software Development Intern at Aansh Tech
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-accent mb-2">Specialization</h3>
                <p className="text-muted-foreground">
                  Full Stack Development, IoT Systems, Technical Documentation
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-accent mb-2">Key Skills</h3>
                <p className="text-muted-foreground">
                  React, TypeScript, Laravel, IoT, Technical Writing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
