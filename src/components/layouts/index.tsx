import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';

export function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="px-56 ">
        <Outlet />
      </main>
    </>
  );
}
