import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './assets/sass/pages/header/Header'; // Header komponentini import qilish

// QueryClient instansiyasi
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
    </QueryClientProvider>
  );
};

export default App;
