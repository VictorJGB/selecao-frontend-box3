import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { toast } from "react-toastify";

import useChamadoPorId from "../../hooks/use-chamado-por-id";
import formatDateToPTBR from "../../utils/format-date";
import { ArrowLeft } from "lucide-react";
import Badge from "../../components/badge";
import Button from "../../components/button";
import InfoChamadoSkeleton from "../../components/skeletons/info-chamado-skeleton";

export default function InfoChamadoPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useChamadoPorId(id ?? "");

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error, data]);

  return (
    <div className="size-full flex flex-col items-center justify-start gap-6">
      <h1 className="text-xl lg:text-3xl font-bold text-primary-foreground">
        Informações do chamado
      </h1>
      {isLoading && !data && <InfoChamadoSkeleton />}

      {error && !data && (
        <p className="font-medium text-destructive">{error.message}</p>
      )}

      {data && (
        <div className="w-full lg:w-4/5 rounded-2xl py-6 px-4 bg-base-100 border border-primary">
          {/* header */}
          <div className="w-full flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between border-b border-neutral/30 py-2">
            <div className="w-full md:w-auto flex gap-2 justify-between">
              <h3 className="text-neutral font-semibold text-lg">
                Chamado Nº {data.id}
              </h3>
              <Badge
                variant={
                  data.status.value.toLowerCase() === "finalizado"
                    ? "success"
                    : data.status.value.toLowerCase() === "rejeitado"
                    ? "destructive"
                    : "warning"
                }
              >
                {data.status.label}
              </Badge>
            </div>
            <span className="text-sm md:text-base text-neutral/40 font-medium">
              Alterado em {formatDateToPTBR(data.dataUltimaAlteracao)} por{" "}
              {data.usuarioUltimaAlteracao}
            </span>
          </div>
          {/* content */}
          <div className="py-2 size-full flex flex-col items-center justify-center gap-4">
            {/* address */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* createdAt */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">
                  Data de cadastro
                </span>
                <span className="text-base lg:text-lg capitalize">
                  {formatDateToPTBR(data.dataCadastro)}
                </span>
              </div>
              {/* user */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">
                  Criado por
                </span>
                <span className="text-base lg:text-lg capitalize">
                  {data.usuarioCadastro}
                </span>
              </div>
              {/* answered date */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">
                  Data de resposta
                </span>
                <span className="text-base lg:text-lg capitalize">
                  {formatDateToPTBR(data.dataRespondido)}
                </span>
              </div>
              {/* address */}
              <div className="flex flex-col items-start justify-start gap-1 col-span-2">
                <span className="text-base text-neutral/80 font-bold">
                  Endereço do chamado
                </span>
                <span className="text-base lg:text-lg capitalize">{`${
                  data.rua
                }, ${data.numero ? data.numero : "S/N"}, ${data.bairro}, ${
                  data.cidade
                } - ${data.estado}`}</span>
              </div>
              {/* CEP */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">CEP</span>
                <span className="text-base lg:text-lg capitalize">
                  {data.cep}
                </span>
              </div>
            </div>
            <div className="w-full h-px bg-neutral/30" />
            {/* assisted person */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* name */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">
                  Pessoa Assistida
                </span>
                <span className="text-base lg:text-lg capitalize">
                  {data.pessoaAssistida.nome}
                </span>
              </div>
              {/* CPF */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">CPF</span>
                <span className="text-base lg:text-lg capitalize">
                  {data.pessoaAssistida.cpf}
                </span>
              </div>
              {/* email */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">
                  E-mail
                </span>
                <span className="text-base lg:text-lg capitalize">
                  {data.pessoaAssistida.email}
                </span>
              </div>
              {/* telefone */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">
                  telefone
                </span>
                <span className="text-base lg:text-lg capitalize">
                  {data.pessoaAssistida.telefone}
                </span>
              </div>
              {/* address */}
              <div className="flex flex-col items-start justify-start gap-1 col-span-2">
                <span className="text-base text-neutral/80 font-bold">
                  Endereço
                </span>
                <span className="text-base lg:text-lg capitalize">{`${data.pessoaAssistida.rua}, ${data.pessoaAssistida.bairro}, ${data.pessoaAssistida.cidade} - ${data.pessoaAssistida.estado}`}</span>
              </div>
              {/* CEP */}
              <div className="flex flex-col items-start justify-start gap-1 col-span-2">
                <span className="text-base text-neutral/80 font-bold">CEP</span>
                <span className="text-base lg:text-lg capitalize">
                  {data.cep}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Link to={"/chamados"}>
        <Button variant="outline">
          <ArrowLeft className="size-4" />
          Retornar
        </Button>
      </Link>
    </div>
  );
}
