import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, MapPin, Briefcase, Award, GraduationCap, Code2 } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { personalInfo, skills, experiences, certifications, education } from './data';
import { ResumePDF } from './components/ResumePDF';
import { ContactForm } from './components/ContactForm';
import { SkillIcon } from './components/SkillIcon';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-slate-900 font-mono">~/fattahemiryanuar</span>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors hidden sm:block">About</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors hidden sm:block">Experience</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors hidden sm:block">Skills</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors hidden sm:block">Contact</a>
            <PDFDownloadLink
              document={<ResumePDF />}
              fileName="Fattah_Emir_Yanuar_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors"
            >
              {({ loading }) => (
                <>
                  <Download size={16} />
                  <span>{loading ? 'Generating...' : 'Resume'}</span>
                </>
              )}
            </PDFDownloadLink>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new opportunities
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-slate-600 font-medium mb-8">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl">
              {personalInfo.profile.split('\n')[0]}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-600">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-slate-900 transition-colors">
                  <Github size={20} />
                </a>
                <div className="w-px h-4 bg-slate-200"></div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-slate-900 transition-colors">
                  <Linkedin size={20} />
                </a>
                <div className="w-px h-4 bg-slate-200"></div>
                <a href={`mailto:${personalInfo.email}`} className="p-1 hover:text-slate-900 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200/60">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 sm:pl-0"
              >
                <div className="hidden sm:block absolute left-[8.5rem] top-2 w-3 h-3 bg-slate-200 rounded-full border-4 border-white z-10"></div>
                <div className="hidden sm:block absolute left-[8.8rem] top-4 bottom-[-3rem] w-px bg-slate-200"></div>
                
                <div className="sm:grid sm:grid-cols-[8rem_1fr] gap-12">
                  <div className="mb-4 sm:mb-0 text-sm font-medium text-slate-500 pt-1">
                    {exp.date.split('—')[0].trim()} <br className="hidden sm:block" />
                    <span className="text-slate-400">— {exp.date.split('—')[1]?.trim()}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-600 mb-4">
                      <span className="font-medium text-indigo-600">{exp.company}</span>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 bg-slate-300 rounded-full shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-white py-24 border-y border-slate-200/60">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                <Code2 size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Technical Skills</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-sm hover:border-indigo-200 transition-all group"
                >
                  <div className="text-slate-400 group-hover:text-indigo-600 transition-colors">
                    <SkillIcon name={skill.icon} size={20} />
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Education */}
        <section className="max-w-5xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                  <Award size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Certifications</h2>
              </div>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group"
                  >
                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight mb-1">
                      {cert.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{cert.issuer}</span>
                      <span className="text-slate-400">{cert.date.split('—')[0].trim()}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Education</h2>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{edu.school}</h3>
                    <p className="text-slate-600 mb-2">{edu.degree}</p>
                    <span className="text-sm font-medium text-slate-400">{edu.date}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-slate-900 text-white py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's work together</h2>
              <p className="text-slate-400 text-lg">
                I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
