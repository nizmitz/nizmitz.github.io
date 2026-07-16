import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';
import { personalInfo, skills, experiences, certifications, education, languages } from './data';
import { ContactForm } from './components/ContactForm';
import { SkillIcon } from './components/SkillIcon';
import { DocumentsMenu } from './components/DocumentsMenu';

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

// Editorial section header: numbered mono kicker + rule + large serif title.
const SectionHead = ({ num, label, title, light = false }: { num: string; label: string; title: string; light?: boolean }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs tracking-[0.2em] text-accent">{num}</span>
      <span className={`h-px w-8 ${light ? 'bg-paper/30' : 'bg-line'}`}></span>
      <span className={`font-mono text-xs tracking-[0.2em] uppercase ${light ? 'text-paper/60' : 'text-muted'}`}>{label}</span>
    </div>
    <h2 className={`font-display text-4xl sm:text-5xl font-semibold tracking-tight ${light ? 'text-paper' : 'text-ink'}`}>{title}</h2>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-accent-soft selection:text-accent">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-paper/80 backdrop-blur-md z-50 border-b border-line">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-medium text-lg tracking-tight text-ink">~/fattahemiryanuar</span>
          <div className="flex items-center gap-6 text-sm font-medium text-muted">
            <a href="#about" className="hover:text-accent transition-colors hidden sm:block">About</a>
            <a href="#experience" className="hover:text-accent transition-colors hidden sm:block">Experience</a>
            <a href="#skills" className="hover:text-accent transition-colors hidden sm:block">Skills</a>
            <a href="#contact" className="hover:text-accent transition-colors hidden sm:block">Contact</a>
            <DocumentsMenu />
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section id="about" className="max-w-5xl mx-auto px-6 pt-16 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Available for new opportunities
            </div>
            <h1 className="font-display text-6xl sm:text-8xl font-semibold tracking-[-0.02em] text-ink mb-6 leading-[0.95]">
              {personalInfo.name}
            </h1>
            <h2 className="font-display text-2xl sm:text-3xl italic text-accent font-normal mb-8">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-10 max-w-2xl">
              {personalInfo.profile.split('\n')[0]}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-accent hover:bg-accent-strong text-paper rounded-full font-medium transition-colors"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-2 px-4 py-3 bg-paper-card border border-line rounded-full text-muted">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-accent transition-colors">
                  <GithubIcon size={20} />
                </a>
                <div className="w-px h-4 bg-line"></div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-1 hover:text-accent transition-colors">
                  <LinkedinIcon size={20} />
                </a>
                <div className="w-px h-4 bg-line"></div>
                <a href={`mailto:${personalInfo.email}`} className="p-1 hover:text-accent transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
          <SectionHead num="01" label="Career" title="Experience" />

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
                <div className="hidden sm:block absolute left-[8.5rem] top-2 w-2.5 h-2.5 bg-accent rounded-full ring-4 ring-paper z-10"></div>
                <div className="hidden sm:block absolute left-[8.68rem] top-4 bottom-[-3rem] w-px bg-line"></div>

                <div className="sm:grid sm:grid-cols-[8rem_1fr] gap-12">
                  <div className="mb-4 sm:mb-0 font-mono text-xs text-muted pt-1.5 leading-relaxed">
                    {exp.date.split('—')[0].trim()} <br className="hidden sm:block" />
                    <span className="text-muted/60">— {exp.date.split('—')[1]?.trim()}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink mb-1 leading-snug">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                      <span className="font-medium text-accent">{exp.company}</span>
                      <div className="flex items-center gap-1 text-sm text-muted">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                    {exp.sublines?.map((line, k) => (
                      <p key={k} className="text-sm italic text-muted mb-3 max-w-2xl">{line}</p>
                    ))}
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 bg-accent/50 rounded-full shrink-0"></span>
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
        <section id="skills" className="bg-paper-card py-24 border-y border-line">
          <div className="max-w-5xl mx-auto px-6">
            <SectionHead num="02" label="Toolkit" title="Technical Skills" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-line bg-paper hover:border-accent hover:shadow-sm transition-all group"
                >
                  <div className="text-muted group-hover:text-accent transition-colors">
                    <SkillIcon name={skill.icon} size={20} />
                  </div>
                  <span className="font-medium text-ink transition-colors">
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
              <SectionHead num="03" label="Credentials" title="Certifications" />
              <div className="space-y-5">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group border-b border-line pb-4"
                  >
                    <h3 className="font-medium text-ink group-hover:text-accent transition-colors leading-tight mb-1">
                      {cert.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted">{cert.issuer}</span>
                      <span className="font-mono text-xs text-muted/70">{cert.date.split('—')[0].trim()}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <SectionHead num="04" label="Academics" title="Education" />
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-display text-xl font-semibold text-ink mb-1">{edu.school}</h3>
                    <p className="text-muted mb-1">{edu.degree}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                      <span className="font-mono text-xs text-muted/70">{edu.date}</span>
                      {edu.gpa && (
                        <span className="text-sm font-medium text-accent">GPA: {edu.gpa}</span>
                      )}
                    </div>
                    {edu.activities && (
                      <p className="text-sm text-muted mb-1 italic">
                        <span className="font-semibold not-italic text-ink">Activities:</span> {edu.activities}
                      </p>
                    )}
                    {edu.finalProject && (
                      <p className="text-sm text-muted italic">
                        <span className="font-semibold not-italic text-ink">Final Project:</span> {edu.finalProject}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-16">
                <SectionHead num="05" label="Fluency" title="Languages" />
                <div className="space-y-5">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="font-display text-lg font-semibold text-ink">{lang.name}</h3>
                        <span className="text-xs font-semibold text-accent px-2 py-0.5 bg-accent-soft rounded-full">
                          {lang.proficiency}
                        </span>
                      </div>
                      {lang.detail && (
                        <p className="text-sm text-muted">{lang.detail}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-ink text-paper py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-[0.2em] text-accent">06</span>
                <span className="h-px w-8 bg-paper/30"></span>
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-paper/60">Contact</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-paper mb-4">Let's work together</h2>
              <p className="text-paper/70 text-lg">
                I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-paper/50 py-8 text-center text-sm border-t border-paper/10">
        <p className="font-mono text-xs">© {new Date().getFullYear()} {personalInfo.name} — all rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
