// src/components/providers/ApolloWrapper.tsx
'use client';

import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';
import { ReactNode } from 'react';

export default function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
