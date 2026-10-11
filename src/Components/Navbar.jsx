
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/", icon: "⌂" },
  { name: "About", path: "/about", icon: "✧" },
  { name: "Contact", path: "/contact", icon: "✉" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex flex-col items-center justify-between gap-5
      rounded-3xl border border-white bg-white/90 p-5 shadow-xl
      shadow-violet-100 sm:flex-row">
      <Link to="/" className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl
          bg-gradient-to-br from-violet-500 to-fuchsia-500
          text-2xl text-white">
          ✦
        </div>
        <div>
          <h1 className="text-xl font-black text-slate-800">
            JB<span className="text-violet-600"></span>
          </h1>
          <p className="text-xs text-slate-500">
            A little space to explore
          </p>
        </div>
      </Link>

      <div className="flex flex-wrap justify-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`rounded-xl px-4 py-3 text-sm font-bold
              transition duration-300 hover:-translate-y-0.5 ${
                location.pathname === item.path
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "text-slate-600 hover:bg-violet-50 hover:text-violet-700"
              }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
