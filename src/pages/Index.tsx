import { Shield, CheckCircle, Users, Zap, Lock, Monitor, FileText, Database, Headphones, Phone, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "CSCRF Audit Gap Analysis",
      description: "Comprehensive assessment against SEBI's CSCRF framework to identify compliance gaps."
    },
    {
      icon: FileText,
      title: "IT Policy & SOP Drafting",
      description: "Custom policies and standard operating procedures tailored for merchant banking operations."
    },
    {
      icon: Lock,
      title: "Endpoint & Server Hardening",
      description: "Secure your infrastructure with industry-standard hardening practices and configurations."
    },
    {
      icon: Monitor,
      title: "SIEM & Log Monitoring Setup",
      description: "Implement robust security monitoring and incident detection capabilities."
    },
    {
      icon: Users,
      title: "User Access Control & MFA",
      description: "Implement strong authentication and access control mechanisms for all users."
    },
    {
      icon: Database,
      title: "Backup, Recovery & Continuity",
      description: "Ensure business continuity with reliable backup and disaster recovery solutions."
    }
  ];

  const whyChooseUs = [
    {
      title: "Niche expertise in SEBI's CSCRF",
      description: "Deep understanding of regulatory requirements specific to merchant banking."
    },
    {
      title: "Actionable, hands-on consulting",
      description: "Practical solutions that you can implement immediately, not just reports."
    },
    {
      title: "Freelancer-led = Affordable, focused",
      description: "Cost-effective expertise without the overhead of large consulting firms."
    },
    {
      title: "Built for regulated financial institutions",
      description: "Purpose-built solutions for the unique challenges of financial services."
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-accent mr-3" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold tracking-tight">
                INFRADEFEND
              </h1>
            </div>
          </div>

          {/* Headlines */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
              Smart Cybersecurity for
              <span className="text-accent block mt-2">Merchant Bankers</span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed opacity-90">
              Helping you meet SEBI's CSCRF and IT compliance standards — with clarity, speed, and security.
            </p>
            
            <div className="flex justify-center">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={scrollToContact}
                className="text-lg px-8 py-4 h-auto transform hover:scale-105 transition-transform duration-200"
              >
                Get a Free Audit Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">
              About InfraDefend
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                InfraDefend is a specialist cybersecurity consultancy that helps merchant bankers secure their infrastructure and meet SEBI's CSCRF requirements. We deliver compliance-ready policies, implement practical security controls, and provide hands-on support — without overhead or fluff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">
              Our Services
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full shadow-card hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 sm:p-8 text-center flex flex-col items-center">
                  <service.icon className="h-12 w-12 text-accent mx-auto mb-6 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-poppins font-semibold text-primary mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center flex-grow">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why InfraDefend Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">
              Why InfraDefend?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <CheckCircle className="h-8 w-8 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-poppins font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-6">
            Ready for CSCRF without hiring a full team?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90 max-w-3xl mx-auto">
            Let's make your audit easy, fast, and compliant.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg px-8 py-4 h-auto transform hover:scale-105 transition-transform duration-200"
            >
              Schedule a Free Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">
              Contact Us
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-200">
                <Mail className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-primary mb-3">Email</h3>
              <a 
                href="mailto:hello@infradefend.com" 
                className="text-muted-foreground hover:text-accent transition-colors duration-200 break-all"
              >
                hello@infradefend.com
              </a>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-200">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-primary mb-3">Phone/WhatsApp</h3>
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                +91-XXXXXXXXXX
              </a>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-200">
                <Linkedin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg sm:text-xl font-poppins font-semibold text-primary mb-3">LinkedIn</h3>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                Connect with us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm opacity-80">
              © 2025 InfraDefend | Cybersecurity & IT Compliance Consulting
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
