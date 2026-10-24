import type { Metadata } from 'next';
import SectorsPageClient from './SectorsPageClient';

export const metadata: Metadata = {
  title: 'Sectors & Industries — Heramba Digital Signage',
  description: 'See how Heramba powers digital signage across retail, restaurants, corporate offices, healthcare, manufacturing, and advertising sectors.',
};

export default function SectorsPage() {
  return <SectorsPageClient />;
}
