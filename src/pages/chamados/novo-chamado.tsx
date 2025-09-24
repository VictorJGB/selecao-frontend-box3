import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NovoChamadoPage() {
  return (
    <div>
      <h1>Novo chamado</h1>
      <Link to={"/chamados"} className="flex items-center justify-center gap-2 text-primary">
        <ArrowLeft className="size-4" />
        Voltar para listagem
      </Link>
    </div>
  )
}