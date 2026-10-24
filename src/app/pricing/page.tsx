import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing — Heramba Digital Signage',
  description: 'Flexible per-screen SaaS pricing for Heramba Digital Signage. Monthly and annual plans with no hidden fees. Start with a 14-day free trial.',
};

export default function PricingPage() {
  return <PricingPageClient />;
}
