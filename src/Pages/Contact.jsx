
import { Link } from "react-router-dom";

const contacts = [
  {
    icon: "📧",
    label: "Email",
    value: "jb1416@gmail.com",
    color: "bg-violet-50",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "www.JB.example",
    color: "bg-fuchsia-50",
  },
  {
    icon: "💬",
    label: "Availability",
    value: "Always happy to connect",
    color: "bg-indigo-50",
  },
];

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl py-14 md:py-20">
      <div className="rounded-[2rem] border border-white bg-white
        p-7 shadow-xl shadow-violet-100 sm:p-12">
        <div className="mx-auto grid h-16 w-16 place-items-center
          rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500
          text-3xl text-white">
          ✉
        </div>

        <h2 className="mt-6 text-center text-4xl font-black text-slate-800">
          Let's connect!
        </h2>

        <p className="mt-4 text-center leading-7 text-slate-500">
          Have a question or an idea? Find our sample contact details below.
        </p>

        <div className="mt-10 space-y-4">
          {contacts.map((contact) => (
            <div key={contact.label}
              className={`flex items-center gap-4 rounded-2xl
                p-5 ${contact.color}`}>
              <span className="text-2xl">{contact.icon}</span>
              <div>
                <p className="text-sm text-slate-500">{contact.label}</p>
                <p className="break-all font-bold text-slate-800">
                  {contact.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/" className="mt-8 block rounded-2xl bg-violet-600
          px-6 py-4 text-center font-bold text-white transition
          hover:bg-violet-700">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
