import { Menu, ShieldAlert, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useLocalStorage from "../hooks/use-local-storage";
import Button from "./button";

export default function Header() {
  const { removeKey } = useLocalStorage("AUTH_TOKEN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  function Logout() {
    removeKey()
    handleLinkClick()
  }

  return (
    <header className="w-full h-20 bg-base-100 flex items-center justify-between px-4 sm:px-8 lg:px-20 shadow-sm relative z-20">
      <div className=" text-primary text-xl flex items-center justify-center gap-1">
        <h1 className="font-bold ">Guardia Maria</h1>
        <ShieldAlert />
      </div>

      {/* Desktop*/}
      <nav className="hidden md:flex items-center gap-4">
        <NavLink
          to={"/chamados"}
          className="hover:text-primary transition-colors"
        >
          Chamados
        </NavLink>
        <NavLink
          to={"/atendimentos"}
          className="hover:text-primary transition-colors"
        >
          Atendimentos
        </NavLink>
        <NavLink to={"/login"} onClick={removeKey}>
          <Button variant="primary">Logout</Button>
        </NavLink>
      </nav>

      {/* Mobile Menu*/}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 bg-black/50 z-10 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Nav */}
      <nav
        className={`absolute top-20 left-0 w-full bg-base-100 shadow-md md:hidden z-20 transition-all duration-300 ease-in-out ${isMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          <li>
            <NavLink
              to={"/chamados"}
              className="hover:text-primary transition-colors text-lg"
              onClick={handleLinkClick}
            >
              Chamados
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/atendimentos"}
              className="hover:text-primary transition-colors text-lg"
              onClick={handleLinkClick}
            >
              Atendimentos
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} onClick={Logout}>
              <Button variant="primary">Logout</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
