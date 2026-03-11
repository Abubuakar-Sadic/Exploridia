import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import DestinationDetails from "./pages/DestinationDetails.jsx";
import SavedTrips from "./pages/SavedTrips.jsx";


function Home() {
  return <h2 className="text-2xl">Home Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/saved-trips" element={<SavedTrips />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;


