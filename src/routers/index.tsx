import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { RootLayout } from '../components/layouts';
import About from '../pages/About';
import Kotoba from '../pages/Kotoba';
import Kanji from '../pages/Kanji';
import KanjiDetails from '../pages/KanjiDetails';
import Renshuu from '../pages/Renshuu';
import StartQuiz from '../pages/StartQuiz';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'kotoba', element: <Kotoba /> },
      { path: 'latihan', element: <Renshuu /> },
      { path: 'latihan/start/:type', element: <StartQuiz /> }, // type = 'kotoba' atau 'kanji'
      { path: 'kanji', element: <Kanji /> },
      { path: 'kanji/:word', element: <KanjiDetails /> },
      { path: 'tentang', element: <About /> },
    ],
  },
]);
