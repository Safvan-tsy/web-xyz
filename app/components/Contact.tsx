'use client';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@helloaura.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+971 54 309 7783",
      description: "Available 24/7 for urgent inquiries"
    },
    {
      icon: MapPin,
      title: "Our Locations",
      content: "Calicut, India & Dubai, UAE",
      description: "Two offices, global reach"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 4 hours",
      description: "Quick turnaround guaranteed"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-900 light:from-white light:to-gray-50 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-noise opacity-10 dark:opacity-10 light:opacity-3"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/20 light:via-black/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/20 light:via-black/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-6">
            <span className="text-sm font-medium">CONTACT</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Create Something
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your brand&apos;s story? Get in touch with us today 
            and let&apos;s discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                Start Your Brand Journey
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">
                Tell us about your project and we&apos;ll get back to you within 4 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-300">Company</Label>
                <Input 
                  id="company" 
                  placeholder="Your Company" 
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service" className="text-gray-300">Service Needed</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="social-media">Social Media Marketing</SelectItem>
                    <SelectItem value="performance-marketing">Performance Marketing</SelectItem>
                    <SelectItem value="web-development">Web Development UI/UX</SelectItem>
                    <SelectItem value="production">Production</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                    <SelectItem value="complete-package">Complete Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-gray-300">Project Budget</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-white/20">
                    <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                    <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                    <SelectItem value="30k-60k">$30,000 - $60,000</SelectItem>
                    <SelectItem value="60k-100k">$60,000 - $100,000</SelectItem>
                    <SelectItem value="100k+">$100,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Tell Us Your Story</Label>
                <Textarea 
                  id="message" 
                  placeholder="What&apos;s your brand story? What are your goals? How can we help you make an impact?"
                  className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-white/40"
                />
              </div>
              
              <Button className="w-full cursor-pointer bg-white text-black hover:bg-gray-200 text-lg py-6 transition-all duration-300 transform hover:scale-105">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We&apos;re here to help you succeed. Whether you have a specific project in mind 
                or just want to explore possibilities, we&apos;d love to hear from you and learn about your brand story.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-4 p-6 bg-white/5 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:bg-white/10">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 group-hover:text-gray-200 transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-white mb-1">{info.content}</p>
                        <p className="text-sm text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-8 h-8 text-white mr-4" />
                  <h4 className="text-xl font-bold text-white">
                    Prefer WhatsApp?
                  </h4>
                </div>
                <p className="text-gray-300 mb-6">
                  For immediate assistance or quick questions, reach out to us on WhatsApp. 
                  We&apos;re available for quick consultations and project discussions.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/30 cursor-pointer text-white hover:bg-white/10 transition-all duration-300"
                >
                  <a
                  href="https://wa.me/971543097783"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Partnership CTA */}
            <div className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">
                Ready to Transform Your Brand?
              </h4>
              <p className="text-gray-300 mb-6">
                Let&apos;s turn your vision into reality. We&apos;re not just a service provider — 
                we&apos;re your partner, creative ally, and biggest believer.
              </p>
              <p className="text-sm text-gray-400 italic">
                &ldquo;At Hello Aura, we&apos;re more than just a service provider. 
                We&apos;re your partner, your creative ally, and your biggest believer.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-noise {
          background-image: 
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}