import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { StripedPattern } from './components/ui/striped-pattern';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StripedPattern className="text-red-300 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)]" />
    <RouterProvider router={router} />
  </StrictMode>
);
