import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import ChamadoForm from "../../components/forms/chamado-form";

export default function NovoChamadoPage() {
  return (
    <div className="size-full flex flex-col py-4 items-center justify-center gap-4">
      <h1 className="text-xl md:text-3xl text-primary-foreground font-semibold">
        Cadastro de chamado
      </h1>

      <div className="w-full md:w-3/5 flex flex-col bg-base-100 items-center justify-center border-2 border-primary rounded-2xl p-4">
        <ChamadoForm />
      </div>
      <Link to={"/chamados"}>
        <Button variant="outline" className="">
          <ArrowLeft className="size-4" />
          Retornar
        </Button>
      </Link>
    </div>
  );
}
