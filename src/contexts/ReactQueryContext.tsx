/* eslint-disable no-console */
import React, { ReactNode } from 'react';
import { LogBox } from 'react-native';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';

// Ignore react-query setTimeout warning till it's fixed
// https://github.com/tannerlinsley/react-query/issues/1259
LogBox.ignoreLogs(['Setting a timer']);

const queryClient = new QueryClient();

setLogger({
  log: () => console.log,
  warn: () => console.log,
  error: () => console.warn,
});

const ReactQueryProvider = ({ children }: { children: ReactNode }): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default ReactQueryProvider;
