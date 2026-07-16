import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Briefcase, Award, GraduationCap, Code2, Globe } from 'lucide-react';
import { personalInfo, skills, experiences, certifications, education, languages } from './data';
import { ContactForm } from './components/ContactForm';
import { SkillIcon } from './components/SkillIcon';
import { DownloadButton } from './components/DownloadButton';

// Lazily generate the resume files so @react-pdf and docx stay out of the initial bundle.
// Each generator sits behind a single dynamic import so its heavy lib is a lazy chunk.
const generatePdf = async (): Promise<Blob> => {
  const { buildResumePdf } = await import('./utils/resumePdf');
  return buildResumePdf();
};

const generateDocx = async (): Promise<Blob> => {
  const { buildResumeDocx } = await import('./utils/resumeDocx');
  return buildResumeDocx();
};

// Inline SVG icons to replace removed lucide-react exports
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

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
            <DownloadButton
              label="PDF"
              fileName="Fattah_Emir_Yanuar_Resume.pdf"
              generate={generatePdf}
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-60 text-white rounded-lg transition-colors"
            />
            <DownloadButton
              label="Word"
              fileName="Fattah_Emir_Yanuar_Resume.docx"
              generate={generateDocx}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white rounded-lg transition-colors"
            />
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
                  <GithubIcon size={20} />
                </a>
                <div className="w-px h-4 bg-slate-200"></div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-slate-900 transition-colors">
                  <LinkedinIcon size={20} />
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
                    {exp.sublines?.map((line, k) => (
                      <p key={k} className="text-sm italic text-slate-500 mb-2">{line}</p>
                    ))}
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
                    <p className="text-slate-600 mb-1">{edu.degree}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                      <span className="text-sm font-medium text-slate-400">{edu.date}</span>
                      {edu.gpa && (
                        <span className="text-sm font-medium text-indigo-600">GPA: {edu.gpa}</span>
                      )}
                    </div>
                    {edu.activities && (
                      <p className="text-sm text-slate-500 mb-1 italic">
                        <span className="font-semibold not-italic">Activities:</span> {edu.activities}
                      </p>
                    )}
                    {edu.finalProject && (
                      <p className="text-sm text-slate-500 italic">
                        <span className="font-semibold not-italic">Final Project:</span> {edu.finalProject}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-16">
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                    <Globe size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Languages</h2>
                </div>
                <div className="space-y-6">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="font-bold text-slate-900">{lang.name}</h3>
                        <span className="text-xs font-semibold text-indigo-600 px-2 py-0.5 bg-indigo-50 rounded-full">
                          {lang.proficiency}
                        </span>
                      </div>
                      {lang.detail && (
                        <p className="text-sm text-slate-500">{lang.detail}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
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
