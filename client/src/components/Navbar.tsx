import { NavLink } from "react-router-dom";

const linkBase = "text-sm font-medium transition-colors hover:text-white";

const linkActive = "text-white";
const linkInactive = "text-zinc-300";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <NavLink to="/" className="text-sm font-semibold tracking-tight text-white">
          Arman Levanti
        </NavLink>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Resume
          </NavLink>

          <a
            href="https://github.com/stefano-lev"
            target="_blank"
            rel="noreferrer"
            className={`${linkBase} ${linkInactive}`}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arman-levanti-b780a73a6/"
            target="_blank"
            rel="noreferrer"
            className={`${linkBase} ${linkInactive}`}
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
