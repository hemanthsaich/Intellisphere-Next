import type { Metadata } from "next";
import './globals.scss';
import { Providers } from './Providers';

export const metadata: Metadata = {
  title: 'IBM Intellisphere',
  description: 'Authentication system built with Next.js and IBM Carbon Design System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning suppressContentEditableWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
