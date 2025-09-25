import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import Badge from "../../components/badge"
import useChamadoPorId from "../../hooks/use-chamado-por-id"
import formatDateToPTBR from "../../utils/format-date"

export default function InfoChamadoPage() {
  const { id } = useParams()
  const { data, error, isLoading } = useChamadoPorId(id ?? "")

  useEffect(() => {
    if (error) toast.error(error.message)
  }, [error, data])

  return (
    <div className="size-full flex flex-col items-center justify-start gap-6">
      <h1 className="text-xl lg:text-3xl font-bold text-primary-foreground">Informações do chamado</h1>
      {isLoading && !data && <p className="animate-pulse text-neutral/50 font-medium">Carregando...</p>}

      {error && !data && <p className="font-medium text-destructive">{error.message}</p>}

      {data &&
        <div className="w-4/5 rounded-lg py-6 px-4 bg-base-100 border border-primary">
          {/* header */}
          <div className="w-full flex items-center justify-between border-b border-neutral/30 py-2">
            <div className="flex gap-2">
              <h3 className="text-neutral font-semibold text-lg">Chamado Nº {data.id}</h3>
              <Badge variant={
                data.status.value.toLowerCase() === "finalizado" ? "success"
                  : data.status.value.toLowerCase() === "rejeitado" ? "destructive"
                    : "warning"
              }>{data.status.label}</Badge>
            </div>
            <span className="text-neutral/40 font-medium">Alterado em {formatDateToPTBR(data.dataUltimaAlteracao)}</span>
          </div>
          {/* content */}
          <div className="py-2 size-full flex flex-col items-center justify-center gap-4">
            {/* address */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* address */}
              <div className="flex flex-col items-start justify-start gap-1 col-span-3">
                <span className="text-base text-neutral/80 font-bold">Endereço</span>
                <span className="text-lg capitalize">{`${data.rua}, ${data.numero ? data.numero : "S/N"}, ${data.bairro}, ${data.cidade} - ${data.estado}`}</span>
              </div>
              {/* CEP */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">CEP</span>
                <span className="text-lg capitalize">{data.cep}</span>
              </div>
            </div>
            <hr className="w-full h-px bg-neutral/30" />
            {/* assisted person */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* name */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">Pessoa Assistida</span>
                <span className="text-lg capitalize">{data.pessoaAssistida.nome}</span>
              </div>
              {/* CPF */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">CPF</span>
                <span className="text-lg capitalize">{data.pessoaAssistida.cpf}</span>
              </div>
              {/* email */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">E-mail</span>
                <span className="text-lg capitalize">{data.pessoaAssistida.email}</span>
              </div>
              {/* telefone */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-base text-neutral/80 font-bold">telefone</span>
                <span className="text-lg capitalize">{data.pessoaAssistida.telefone}</span>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )

}