import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";



function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-800 text-white p-4 text-lg font-semibold">
       <nav>
  <Link to="/" className="mr-6">
    Exploridia
  </Link>

  <Link to="/saved-trips">
    Saved Trips
  </Link>
</nav>


      </header>

      <main className="flex-1 p-6 bg-gray-800">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white text-center p-3 text-sm">
        © 2026 Exploridia - Your Ultimate Travel Companion
      </footer>
    </div>
  );
}

export default Layout;
