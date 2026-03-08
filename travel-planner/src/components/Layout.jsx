import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";



function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-xl font-semibold">
       <nav>
  <Link to="/" className="mr-4">
    Travel Planner
  </Link>

  <Link to="/saved-trips">
    Saved Trips
  </Link>
</nav>


      </header>

      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white text-center p-3 text-sm">
        © 2026 Travel Planner
      </footer>
    </div>
  );
}

export default Layout;
