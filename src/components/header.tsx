import { ShieldAlert } from "lucide-react";
import { NavLink } from "react-router-dom";
import useLocalStorage from "../hooks/use-local-storage";
import Button from "./button";

export default function Header() {
  const { removeKey } = useLocalStorage('AUTH_TOKEN')

  return (
    <header className="w-full h-24 bg-base-100 flex items-center justify-between px-20 shadow-sm">
      <div
        className=" text-primary text-xl flex items-center justify-center gap-1"
      >
        <h1 className="font-bold ">Guardia Maria</h1>
        <ShieldAlert />
      </div>

      <nav className="hidden lg:flex">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <NavLink
              to={"/chamados?currentPage=1&pageSize=10"}
              className="hover:text-primary transition-colors"
            >
              Chamados
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/atendimentos"}
              className="hover:text-primary transition-colors"
            >
              Atendimentos
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} onClick={removeKey}>
              <Button variant="primary">Logout</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
