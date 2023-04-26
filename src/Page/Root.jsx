import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext';


const queryClient = new QueryClient();

export default function Root () {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );

}