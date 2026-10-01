import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HERAMBA: Digital Signage Solutions — Lightning-fast, Real-time, Personalized',
  description: 'Heramba Digital Signage Solutions empower modern businesses with smart, cloud-based software to create, manage, and display engaging content in real time.',
  keywords: [
    'digital signage solution',
    'cloud digital signage',
    'digital standees',
    'video wall displays',
    'screen management software',
    'retail digital displays',
    'India digital signage'
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'HERAMBA: Digital Signage Solutions',
    description: 'AI-driven cloud-based digital signage solution for seamlessly managing your digital displays.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#C34811',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
