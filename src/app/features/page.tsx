import type { Metadata } from 'next';
import FeaturesPageClient from './FeaturesPageClient';

export const metadata: Metadata = {
  title: 'Features — Heramba Digital Signage',
  description: 'Discover Heramba\'s full feature set: AI-based personalization, real-time display management, offline playback, analytics, and more.',
};

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
