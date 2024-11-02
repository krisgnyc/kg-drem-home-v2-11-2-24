import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Logo } from '@/components/logo';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NYC Real Estate',
  description: 'Find your dream home in New York City',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
              <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Logo />
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1">
              {children}
            </main>
            <footer className="border-t border-border/40 py-8 mt-12">
              <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>© 2024 NYC Real Estate. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}