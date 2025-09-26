import { Link } from "react-router-dom";
import Button from "../components/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 text-center px-4">
      <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-4">Página não encontrada</p>
      <p className="text-base-content mt-2 mb-8 max-w-md">
        Desculpe, a página que você está procurando não existe, foi removida ou está temporariamente indisponível.
      </p>
      <Link to="/chamados">
        <Button variant="primary">Voltar para a página inicial</Button>
      </Link>
    </div>
  );
}
