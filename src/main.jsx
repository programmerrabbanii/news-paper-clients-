import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import AuthProvider from './auth/AuthProvider'
import {HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
   <HelmetProvider>
   <RouterProvider router={router}></RouterProvider>
   </HelmetProvider>
   </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)






