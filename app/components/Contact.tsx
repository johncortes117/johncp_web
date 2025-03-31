"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-2">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm border-blue-500/50 bg-blue-500/5 text-blue-400"
            >
              <Send className="mr-1 h-3 w-3" /> Contact
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Talk About Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Project
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Interested in collaborating or have any questions? Don't
            hesitate to reach out!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-20"></div>
            <Card className="relative bg-gradient-to-br from-blue-900/40 to-black/80 border border-blue-500/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">
                      Contact Information
                    </h3>

                    <div className="space-y-6 mb-8">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center border border-blue-500/20">
                          <Mail className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Email</p>
                          <a
                            href="mailto:stevencortespozo@gmail.com"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            stevencortespozo@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center border border-blue-500/20">
                          <Linkedin className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">LinkedIn</p>
                          <a
                            href="https://linkedin.com/in/john-cortes-pozo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            linkedin.com/in/john-cortes-pozo
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center border border-blue-500/20">
                          <Github className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">GitHub</p>
                          <a
                            href="https://github.com/johncortes117"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            github.com/johncortes117
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-950/30 p-6 rounded-lg border border-blue-500/20">
                      <h4 className="text-lg font-bold mb-3 text-blue-300">
                        Ready to Collaborate?
                      </h4>
                      <p className="text-gray-300 mb-4">
                        I'm available for freelance projects,
                        collaborations, and learning opportunities in AI and
                        software development.
                      </p>
                      <Link 
                        href="https://drive.google.com/file/d/1x54jXSzYkmjPj6RsGao8b-H-i1A0ckd2/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden">
                          <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
                          Download CV{" "}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">
                      Send Me a Message
                    </h3>

                    <form
                      className="space-y-4"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="text-sm text-gray-400 mb-1 block"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-md bg-blue-950/50 border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="text-sm text-gray-400 mb-1 block"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-3 rounded-md bg-blue-950/50 border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="text-sm text-gray-400 mb-1 block"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          placeholder="Message subject"
                          className="w-full px-4 py-3 rounded-md bg-blue-950/50 border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="text-sm text-gray-400 mb-1 block"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          placeholder="Your message"
                          rows={5}
                          className="w-full px-4 py-3 rounded-md bg-blue-950/50 border border-blue-900/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                          required
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden"
                      >
                        <span className="absolute right-full w-12 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-96 ease"></span>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
