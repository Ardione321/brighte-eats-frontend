// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import ApolloWrapper from '@/components/providers/ApolloWrapper';
import { Header } from '@/components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Header />
          {children}
          </ApolloWrapper>
      </body>
    </html>
  );
}
