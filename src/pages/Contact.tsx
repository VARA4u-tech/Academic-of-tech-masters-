import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Youtube, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10 section-heading">Contact Us</h1>
        <p className="text-xl text-center text-muted-foreground mb-12 section-subheading">
          We'd love to hear from you! Reach out to us for any queries or assistance.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <section className="bg-card p-8 rounded-lg shadow-md border border-border/50">
            <h2 className="text-3xl font-bold mb-6 section-heading">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <Input type="text" id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <Input type="email" id="email" placeholder="your@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                  Phone Number
                </label>
                <Input type="tel" id="phone" placeholder="+91 XXXXXXXXXX" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" rows={5} placeholder="Your message..." />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="bg-card p-8 rounded-lg shadow-md border border-border/50">
            <h2 className="text-3xl font-bold mb-6 section-heading">Our Contact Details</h2>
            <div className="space-y-6">
              {/* Phone Numbers */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 8019942233</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 80199 52233</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 80199 62233</span>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@aotms.com</span>
                </div>
              </div>

              {/* Addresses */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Addresses</h3>
                <div className="flex items-start space-x-2 text-muted-foreground mb-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>40-1-140/2, 2nd Floor, MG Road, opp. Lucky shopping mall, DV manor, VJA - 10</span>
                </div>
                <div className="flex items-start space-x-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>Pothuri Towers, 2nd Floor, MG Road, Near DV manor, VJA - 10</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;