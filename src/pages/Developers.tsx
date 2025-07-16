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
      demoUrl: "https://react-shopping-cart-67954.firebaseapp.com/",
      type: "mobile",
      bgColor: "bg-blue-50"
    },
    {
      title: "Task Management",
      description: "Project management dashboard",
      demoUrl: "https://todoist.com/app/",
      type: "web",
      bgColor: "bg-red-50"
    },
    {
      title: "Weather App",
      description: "Real-time weather tracking",
      demoUrl: "https://weather.com/",
      type: "mobile",
      bgColor: "bg-sky-50"
    },
    {
      title: "Recipe Platform",
      description: "Food & cooking community",
      demoUrl: "https://www.allrecipes.com/",
      type: "web",
      bgColor: "bg-orange-50"
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
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            InfraDefend Developers
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            We Build Digital Products That Launch Fast & Scale Faster
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            InfraDefend Developers crafts high-performance mobile apps and websites that feel custom-built for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-3 h-auto group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get a Free Tech Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950">
              View Our Work
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Apps Delivered</div>
            </div>
            <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Websites Built</div>
            </div>
            <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">2-4 Weeks</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From mobile apps to enterprise dashboards, we create digital solutions that drive results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500 bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-950/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {service.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Our Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our mobile apps and web platforms firsthand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockups.map((mockup, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => window.open(mockup.demoUrl, '_blank')}>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  {mockup.type === 'mobile' ? (
                    <div className="relative bg-gray-900 rounded-xl p-2 mx-auto" style={{ width: '200px', height: '400px' }}>
                      <div className={`w-full h-full ${mockup.bgColor} rounded-lg relative overflow-hidden border-2 border-gray-200`}>
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-800 rounded-full"></div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-800 rounded-full"></div>
                        <iframe 
                          src={mockup.demoUrl}
                          className="w-full h-full border-0 rounded-lg mt-4 mb-4"
                          style={{ height: 'calc(100% - 32px)' }}
                          title={mockup.title}
                        />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                          <div className="bg-white/90 rounded-full p-3 shadow-lg">
                            <Play className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-gray-800 rounded-xl p-2 mx-auto" style={{ width: '200px', height: '300px' }}>
                      <div className={`w-full h-full ${mockup.bgColor} rounded-lg relative overflow-hidden border-2 border-gray-200`}>
                        <div className="absolute top-1 left-2 flex gap-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <iframe 
                          src={mockup.demoUrl}
                          className="w-full h-full border-0 rounded-lg mt-4"
                          style={{ height: 'calc(100% - 16px)' }}
                          title={mockup.title}
                        />
                        <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                          <div className="bg-white/90 rounded-full p-3 shadow-lg">
                            <Play className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="text-center mt-4">
                    <h3 className="font-semibold">{mockup.title}</h3>
                    <p className="text-sm text-muted-foreground">{mockup.description}</p>
                    <Button variant="outline" size="sm" className="mt-2 border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950">
                      Try Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-blue-950 dark:via-indigo-950 dark:to-cyan-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your project and we'll provide a detailed proposal within 24 hours
            </p>
          </div>

          <Card className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl">
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
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Free Consultation
                  </Button>
                  <Button type="button" variant="outline" className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950">
                    Book a Call
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="mailto:developers@infradefend.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline font-medium">
                developers@infradefend.com
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a href="tel:+91-8369645695" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline font-medium">
                +91-8369645695
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">InfraDefend Developers</h3>
              <p className="text-sm text-muted-foreground">
                Building the digital future, one project at a time.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium">
                Main Site
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="mailto:developers@infradefend.com" className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
            © 2024 InfraDefend Developers. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Developers;