import type { Metadata } from 'next';
import SolutionsPageClient from './SolutionsPageClient';

export const metadata: Metadata = {
  title: 'Solutions — Heramba Digital Signage',
  description: 'Explore Heramba\'s full product ecosystem: cloud software, digital standees, video walls, and enterprise turnkey solutions.',
};

export default function SolutionsPage() {
  return <SolutionsPageClient />;
}
