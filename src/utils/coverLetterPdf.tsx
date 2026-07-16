/* eslint-disable react-refresh/only-export-components -- build util, not an HMR component module */
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { pdf } from '@react-pdf/renderer';
import { buildLetter, CoverLetterInput } from './coverLetter';

const styles = StyleSheet.create({
  page: { padding: 50, fontFamily: 'Helvetica', fontSize: 11, color: '#222', lineHeight: 1.5 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#0056b3' },
  title: { fontSize: 11, marginBottom: 2, color: '#555' },
  contact: { fontSize: 10, color: '#555', marginBottom: 24 },
  date: { marginBottom: 16 },
  recipient: { marginBottom: 16 },
  greeting: { marginBottom: 12 },
  paragraph: { marginBottom: 12, textAlign: 'justify' },
  closing: { marginTop: 12 },
  signature: { fontWeight: 'bold', marginTop: 24 },
});

const CoverLetterDoc = ({ input }: { input: CoverLetterInput }) => {
  const c = buildLetter(input);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{c.senderName}</Text>
        <Text style={styles.title}>{c.senderTitle}</Text>
        <Text style={styles.contact}>{c.senderContact}</Text>
        <Text style={styles.date}>{c.date}</Text>
        <View style={styles.recipient}>
          {c.recipient.split('\n').map((line, i) => <Text key={i}>{line}</Text>)}
        </View>
        <Text style={styles.greeting}>{c.greeting}</Text>
        {c.paragraphs.map((p, i) => <Text key={i} style={styles.paragraph}>{p}</Text>)}
        <Text style={styles.closing}>{c.closing}</Text>
        <Text style={styles.signature}>{c.signature}</Text>
      </Page>
    </Document>
  );
};

export async function buildCoverLetterPdf(input: CoverLetterInput): Promise<Blob> {
  return pdf(<CoverLetterDoc input={input} />).toBlob();
}
