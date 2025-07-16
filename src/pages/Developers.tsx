import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Smartphone, 
  Globe, 
  Database, 
  Zap, 
  MessageSquare, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Play
} from "lucide-react";

const Developers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectIdea: ""
  });
  const { toast } = useToast();

  const services = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native Android, iOS & Flutter apps that deliver exceptional user experiences",
      tech: "Android • iOS • Flutter • React Native"
    },
    {
      icon: Globe,
      title: "Websites",
      description: "Fast, responsive websites built with modern frameworks and CMS platforms",
      tech: "React • WordPress • eCommerce • Landing Pages"
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Scalable backend systems and APIs that power your digital products",
      tech: "Node.js • Python • PostgreSQL • REST APIs"
    }
  ];

  const mockups = [
    {
      title: "E-Commerce App",
      description: "Full-featured shopping experience",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop",
      demoLink: "#"
    },
    {
      title: "FinTech Dashboard",
      description: "Real-time financial analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=600&fit=crop",
      demoLink: "#"
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=600&fit=crop",
      demoLink: "#"
    },
    {
      title: "Social Platform",
      description: "Community-driven mobile app",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=600&fit=crop",
      demoLink: "#"
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Built for Scale",
      description: "Performance-optimized code that grows with your business"
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Regular updates, no technical jargon, transparent process"
    },
    {
      icon: Rocket,
      title: "Full-Stack Delivery",
      description: "From design to deployment, we handle the complete journey"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 24 hours with a detailed proposal.",
    });
    setFormData({ name: "", email: "", projectIdea: "" });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            InfraDefend Developers
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            We Build Digital Products That Launch Fast & Scale Faster
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            InfraDefend Developers crafts high-performance mobile apps and websites that feel custom-built for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-3 h-auto group"
            >
              Get a Free Tech Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto">
              View Our Work
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Apps Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Websites Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2-4 Weeks</div>
              <div className="text-sm text-muted-foreground">Average Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From mobile apps to enterprise dashboards, we create digital solutions that drive results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    {service.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Our Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our mobile apps and web platforms firsthand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockups.map((mockup, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-background rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative bg-foreground rounded-xl p-2 mx-auto" style={{ width: '200px', height: '400px' }}>
                    <div 
                      className="w-full h-full bg-cover bg-center rounded-lg relative overflow-hidden"
                      style={{ backgroundImage: `url(${mockup.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-semibold">{mockup.title}</h3>
                    <p className="text-sm text-muted-foreground">{mockup.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver more than just code - we build partnerships that drive success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll provide a detailed proposal within 24 hours
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Get Your Free Tech Consultation</CardTitle>
              <CardDescription>
                Share your project details and we'll create a custom development plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project">Project Idea *</Label>
                  <Textarea
                    id="project"
                    placeholder="Tell us about your mobile app, website, or digital platform idea..."
                    value={formData.projectIdea}
                    onChange={(e) => setFormData({ ...formData, projectIdea: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1">
                    Get Free Consultation
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Book a Call
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="mailto:developers@infradefend.com" className="text-primary hover:underline">
                developers@infradefend.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a href="tel:+91-8369645695" className="text-primary hover:underline">
                +91-8369645695
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">InfraDefend Developers</h3>
              <p className="text-sm text-muted-foreground">
                Building the digital future, one project at a time.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Main Site
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="mailto:developers@infradefend.com" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 InfraDefend Developers. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Developers;