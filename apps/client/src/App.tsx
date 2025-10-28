import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">{new Date().getFullYear()} Pantry → Plate</footer>
    </div>
  )
}