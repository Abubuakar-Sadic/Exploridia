import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#8318E1] text-white p-4 text-xl font-semibold fixed top-0 left-0 right-0 z-10">
      Exploridia
      <nav>
        <ul className="flex space-x-4 mt-2 text-sm fixed top-2 right-20">
          <li>
            <a href="./pages/TripsPage.jsx" className="hover:underline">
              My Trips
            </a>
          </li>
        </ul>
      </nav>
      </header>

      <main className="flex-1 p-6 bg-gray-800">
        <Outlet />
        
      </main>

      <footer className="bg-gray-800 text-white text-center p-3 text-sm">
        © 2026 Travel Planner
      </footer>
    </div>
  );
}

export default Layout;
