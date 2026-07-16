import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { personalInfo, skills, experiences, certifications, education, languages } from '../data';
import { DEFAULT_RESUME_OPTIONS, ResumeOptions } from '../utils/resumeOptions';

const styles = StyleSheet.create({
  page: {
    padding: 26,
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.1,
    color: '#333',
  },
  header: {
    marginBottom: 12,
    textAlign: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0056b3',
    marginBottom: 3,
    lineHeight: 1.3,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3,
    lineHeight: 1.3,
    textTransform: 'uppercase',
  },
  contact: {
    fontSize: 10,
    marginBottom: 2,
  },
  personalLine: {
    fontSize: 9,
    color: '#555',
    marginTop: 2,
  },
  link: {
    color: '#0056b3',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 9,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0056b3',
    borderBottomWidth: 1,
    borderBottomColor: '#0056b3',
    paddingBottom: 2,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  text: {
    marginBottom: 3,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    width: '25%',
    marginBottom: 4,
  },
  experienceItem: {
    marginBottom: 7,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  expTitle: {
    fontWeight: 'bold',
  },
  expDate: {
    fontWeight: 'bold',
  },
  expCompany: {
    fontStyle: 'italic',
    marginBottom: 2,
  },
  expSubline: {
    fontSize: 9,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 1.5,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  certItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  certName: {
    fontWeight: 'bold',
    flex: 1,
  },
  certDate: {
    width: 120,
    textAlign: 'right',
  },
  eduItem: {
    marginBottom: 5,
  },
  eduSchool: {
    fontWeight: 'bold',
  },
  eduDegree: {
    fontStyle: 'italic',
    marginBottom: 2,
  },
  eduGpa: {
    fontWeight: 'bold',
    color: '#0056b3',
  },
  eduDetail: {
    fontSize: 9,
    color: '#666',
    fontStyle: 'italic',
  },
  langItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  langName: {
    fontWeight: 'bold',
  },
  langProficiency: {
    fontStyle: 'italic',
    color: '#0056b3',
  },
  langDetail: {
    fontSize: 8,
    color: '#666',
    marginTop: -2,
    marginBottom: 4,
  },
});

// Generic per-application motivation line for the Japanese rirekisho format.
const RIREKISHO_MOTIVATION =
  'Eager to bring my multi-cloud infrastructure and reliability engineering experience to a forward-thinking organization in Japan, and to grow alongside a team that values automation, security, and operational excellence.';

// ---- Shared section renderers -------------------------------------------------

const Header = ({ options }: { options: ResumeOptions }) => (
  <View style={styles.header}>
    <Text style={styles.name}>{personalInfo.name}</Text>
    <Text style={styles.title}>{personalInfo.title}</Text>
    <Text style={styles.contact}>
      {personalInfo.location} | <Link src={`mailto:${personalInfo.email}`} style={styles.link}>{personalInfo.email}</Link> | {personalInfo.phone}
    </Text>
    {options.format !== 'international' && (
      <Text style={styles.personalLine}>
        Nationality: {personalInfo.nationality}  |  Gender: {personalInfo.gender}
      </Text>
    )}
  </View>
);

const ProfileSection = ({ title }: { title: string }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle} minPresenceAhead={22}>{title}</Text>
    <Text style={styles.text}>{personalInfo.profile}</Text>
  </View>
);

const SkillsSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle} minPresenceAhead={22}>Technical Skills</Text>
    <View style={styles.skillsGrid}>
      {skills.map((skill, i) => (
        <Text key={i} style={styles.skillItem}>{skill.name}</Text>
      ))}
    </View>
  </View>
);

const ExperienceSection = ({
  title,
  showSublines,
  chronological,
}: {
  title: string;
  showSublines: boolean;
  chronological?: boolean;
}) => {
  const list = chronological ? [...experiences].reverse() : experiences;
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle} minPresenceAhead={22}>{title}</Text>
      {list.map((exp, i) => (
        <View key={i} style={styles.experienceItem}>
          <View style={styles.expHeader}>
            <Text style={styles.expTitle}>{exp.title}, {exp.company}</Text>
            <Text style={styles.expDate}>{exp.date}</Text>
          </View>
          <Text style={styles.expCompany}>{exp.location}</Text>
          {showSublines && exp.sublines?.map((line, k) => (
            <Text key={k} style={styles.expSubline}>{line}</Text>
          ))}
          {exp.responsibilities.map((resp, j) => (
            <View key={j} style={styles.bulletPoint}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{resp}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const CertSection = ({ title }: { title: string }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle} minPresenceAhead={22}>{title}</Text>
    {certifications.map((cert, i) => (
      <View key={i} style={styles.certItem}>
        <Text style={styles.certName}>{cert.name}, {cert.issuer}</Text>
        <Text style={styles.certDate}>{cert.date}</Text>
      </View>
    ))}
  </View>
);

const EducationSection = ({ chronological }: { chronological?: boolean }) => {
  const list = chronological ? [...education].reverse() : education;
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle} minPresenceAhead={22}>Education</Text>
      {list.map((edu, i) => (
        <View key={i} style={styles.eduItem}>
          <View style={styles.expHeader}>
            <Text style={styles.eduSchool}>{edu.school}</Text>
            <Text style={styles.expDate}>{edu.date}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 }}>
            <Text style={styles.eduDegree}>{edu.degree}</Text>
            {edu.gpa && <Text style={styles.eduGpa}>GPA: {edu.gpa}</Text>}
          </View>
          {edu.activities && (
            <Text style={styles.eduDetail}>Activities: {edu.activities}</Text>
          )}
          {edu.finalProject && (
            <Text style={styles.eduDetail}>Final Project: {edu.finalProject}</Text>
          )}
        </View>
      ))}
    </View>
  );
};

const LanguagesSection = ({ withCefr }: { withCefr?: boolean }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle} minPresenceAhead={22}>Languages</Text>
    {languages.map((lang, i) => (
      <View key={i}>
        <View style={styles.langItem}>
          <Text style={styles.langName}>{lang.name}</Text>
          <Text style={styles.langProficiency}>
            {withCefr ? `${lang.proficiency} (CEFR ${lang.cefr})` : lang.proficiency}
          </Text>
        </View>
        {!withCefr && lang.detail && <Text style={styles.langDetail}>{lang.detail}</Text>}
      </View>
    ))}
  </View>
);

const SimpleTextSection = ({ title, body }: { title: string; body: string }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle} minPresenceAhead={22}>{title}</Text>
    <Text style={styles.text}>{body}</Text>
  </View>
);

// ---- Per-format bodies --------------------------------------------------------

const InternationalBody = ({ options }: { options: ResumeOptions }) => (
  <>
    <ProfileSection title="Profile" />
    <SkillsSection />
    <ExperienceSection title="Professional Experience" showSublines={options.sublines} />
    <CertSection title="Certifications" />
    <EducationSection />
    <LanguagesSection />
  </>
);

const EuropassBody = () => (
  <>
    <ProfileSection title="About Me" />
    <ExperienceSection title="Work Experience" showSublines={false} />
    <EducationSection />
    <CertSection title="Certifications" />
    <SkillsSection />
    <LanguagesSection withCefr />
  </>
);

const RirekishoBody = () => (
  <>
    <EducationSection chronological />
    <ExperienceSection title="Work History" showSublines={false} chronological />
    <CertSection title="Qualifications" />
    <SimpleTextSection title="Self-PR" body={personalInfo.profile} />
    <SimpleTextSection title="Motivation" body={RIREKISHO_MOTIVATION} />
  </>
);

export const ResumePDF = ({ options = DEFAULT_RESUME_OPTIONS }: { options?: ResumeOptions }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header options={options} />
      {options.format === 'international' && <InternationalBody options={options} />}
      {options.format === 'europass' && <EuropassBody />}
      {options.format === 'rirekisho' && <RirekishoBody />}
    </Page>
  </Document>
);
