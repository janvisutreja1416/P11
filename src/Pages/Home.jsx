
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
      <div>
        <span className="rounded-full border border-violet-100
          bg-white px-4 py-2 text-sm font-semibold text-violet-700">
          ✨ Welcome to something different
        </span>

        <h2 className="mt-7 text-5xl font-black leading-tight
          tracking-tight text-slate-800 md:text-6xl">
          Navigate your
          <span className="block bg-gradient-to-r from-violet-600
            to-fuchsia-500 bg-clip-text text-transparent">
            own journey.
          </span>
        </h2>

        <p className="mt-6 max-w-lg leading-8 text-slate-500">
          Discover a beautiful web experience built with React.
          Explore different pages without reloading the entire webpage.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/about" className="rounded-2xl bg-violet-600
            px-6 py-4 font-bold text-white shadow-lg shadow-violet-200
            transition hover:-translate-y-1 hover:bg-violet-700">
            Explore More →
          </Link>

          <Link to="/contact" className="rounded-2xl border
            border-violet-200 bg-white px-6 py-4 font-bold
            text-violet-700 transition hover:bg-violet-50">
            Say Hello
          </Link>
        </div>
      </div>

      <div className="rounded-[2.5rem] border border-white
        bg-white p-6 shadow-2xl shadow-violet-200/60">
        <div className="grid h-64 place-items-center rounded-3xl
          bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-400
          text-center text-white">
          <div>
            <div className="text-7xl">✦</div>
            <h3 className="mt-4 text-2xl font-black">
              Your Digital Space
            </h3>
            <p className="mt-2 text-sm text-white/80">
              Explore. Connect. Grow.
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {["Home", "About", "Contact"].map((name, index) => (
            <div key={name} className="rounded-2xl bg-violet-50 p-4">
              <p className="text-xl font-black text-violet-600">
                0{index + 1}
              </p>
              <p className="mt-1 text-xs text-slate-500">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
