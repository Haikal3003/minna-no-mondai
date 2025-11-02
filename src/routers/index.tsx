import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { RootLayout } from '../components/layouts';
import About from '../pages/About';
import Kotoba from '../pages/Kotoba';
import Bunpou from '../pages/Bunpou';
import Kanji from '../pages/Kanji';
import KanjiDetails from '../pages/KanjiDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'kotoba', element: <Kotoba /> },
      { path: 'bunpou', element: <Bunpou /> },
      {
        path: 'kanji',
        element: <Kanji />,
      },
      { path: 'kanji/:word', element: <KanjiDetails /> },

      { path: 'tentang', element: <About /> },
    ],
  },
]);
