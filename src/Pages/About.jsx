
const features = [
  {
    icon: "⚡",
    title: "Fast Navigation",
    description: "Move between pages without a full browser reload.",
  },
  {
    icon: "🎨",
    title: "Creative Design",
    description: "Enjoy a soft color palette and modern responsive cards.",
  },
  {
    icon: "🧭",
    title: "Easy to Explore",
    description: "Simple navigation makes every page easy to discover.",
  },
];

export default function About() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="rounded-full bg-fuchsia-50 px-4 py-2
          text-sm font-bold text-fuchsia-600">
          GET TO KNOW US
        </span>

        <h2 className="mt-6 text-4xl font-black text-slate-800 md:text-5xl">
          A little about <span className="text-violet-600">us</span>
        </h2>

      
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="group rounded-3xl
            border border-white bg-white p-7 shadow-lg shadow-violet-100
            transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="grid h-14 w-14 place-items-center
              rounded-2xl bg-violet-50 text-3xl
              group-hover:bg-violet-100">
              {feature.icon}
            </div>

            <h3 className="mt-5 text-lg font-extrabold text-slate-800">
              {feature.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-500">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
