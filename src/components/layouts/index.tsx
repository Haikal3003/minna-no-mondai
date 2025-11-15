import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../Navbar';

export function RootLayout() {
  const location = useLocation();

  const hideNavbar = location.pathname === '/latihan/start/kotoba';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="px-56 max-sm:px-6">
        <Outlet />
      </main>
    </>
  );
}
