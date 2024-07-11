import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/toaster';
import '@uploadthing/react/styles.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { Kantumruy_Pro } from 'next/font/google';
import './globals.css';
import { auth } from '@/auth';

const inter = Kantumruy_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <NextTopLoader color="#D7AD45" />
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
