import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { personalInfo, skills, experiences, certifications, education, languages } from '../data';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#333',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0056b3',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  contact: {
    fontSize: 10,
    marginBottom: 2,
  },
  link: {
    color: '#0056b3',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0056b3',
    borderBottomWidth: 1,
    borderBottomColor: '#0056b3',
    paddingBottom: 2,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  text: {
    marginBottom: 4,
    lineHeight: 1.4,
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
    marginBottom: 10,
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
    marginBottom: 4,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
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
    marginBottom: 4,
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

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.name}</Text>
        <Text style={styles.title}>{personalInfo.title}</Text>
        <Text style={styles.contact}>
          {personalInfo.location} | <Link src={`mailto:${personalInfo.email}`} style={styles.link}>{personalInfo.email}</Link> | {personalInfo.phone}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.text}>{personalInfo.profile}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.skillsGrid}>
          {skills.map((skill, i) => (
            <Text key={i} style={styles.skillItem}>{skill.name}</Text>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experiences.map((exp, i) => (
          <View key={i} style={styles.experienceItem}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>{exp.title}, {exp.company}</Text>
              <Text style={styles.expDate}>{exp.date}</Text>
            </View>
            <Text style={styles.expCompany}>{exp.location}</Text>
            {exp.responsibilities.map((resp, j) => (
              <View key={j} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{resp}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {certifications.map((cert, i) => (
          <View key={i} style={styles.certItem}>
            <Text style={styles.certName}>{cert.name}, {cert.issuer}</Text>
            <Text style={styles.certDate}>{cert.date}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {education.map((edu, i) => (
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

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        {languages.map((lang, i) => (
          <View key={i}>
            <View style={styles.langItem}>
              <Text style={styles.langName}>{lang.name}</Text>
              <Text style={styles.langProficiency}>{lang.proficiency}</Text>
            </View>
            {lang.detail && <Text style={styles.langDetail}>{lang.detail}</Text>}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
