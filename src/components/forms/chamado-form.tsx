import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import z from "zod";
import useBairroSelect from "../../hooks/use-bairro-select";
import useCadastroChamado from "../../hooks/use-cadastro-chamado";
import usePessoaAssistida from "../../hooks/use-pessoa-assistida";
import usePessoaAssistidaSelect from "../../hooks/use-pessoa-assistida-select";
import Button from "../button";
import Input from "../input";
import Label from "../label";
import Select from "../select";
import { Skeleton } from "../skeleton";
import FormError from "./form-error";

const formSchema = z.object({
  pessoaAssistida: z.string({ error: "Pessoa Assistida é obrigatório" }).min(1, { error: "No mínimo 1 caractere" }),
  bairro: z.string({ error: "Bairro é obrigatório" }).min(1, { error: "No mínimo 1 caractere" }),
  rua: z.string({ error: "Rua é obrigatória" }).min(1, { error: "No mínimo 1 caractere" }),
  numero: z.string({ error: "Número é obrigatório" }).min(1, { error: "No mínimo 1 caractere" }),
  cep: z.string({ error: "CEP é obrigatório" }).min(1, { error: "No mínimo 1 caractere" }).max(8, { error: "No máximo 8 caracteres" }),
  cidade: z.string({ error: "Cidade é obrigatório" }).min(1, { error: "No mínimo 1 caractere" }),
  estado: z.string({ error: "Estado é obrigatório" }).min(1, { error: "No mínimo 1 caractere" }),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ChamadoForm() {
  const navigate = useNavigate()

  const { data: pessoas, isLoading: isLoadingPessoas, error: pessoasError } = usePessoaAssistidaSelect()
  const { data: bairros, isLoading: isLoadingBairros, error: bairrosError } = useBairroSelect()
  const { isLoading, submitCadastro, updateLoading: updateCadastroLoading } = useCadastroChamado()
  const { isLoading: isLoadingPessoa, fetch, updateLoading: updatePessoaLoading } = usePessoaAssistida()

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue
  } = useForm({ resolver: zodResolver(formSchema) });

  const pessoasObserver = watch("pessoaAssistida")
  const bairrosObserver = watch("bairro")

  async function submitChamado(values: FormSchema) {
    updatePessoaLoading(true)


    await fetch(pessoasObserver.split(" ")[0])
      .then(async (data) => {
        updatePessoaLoading(false)
        updateCadastroLoading(true)
        const formData = {
          ...values,
          pessoaAssistidaId: String(data.data.dados.id) ?? "",
          pessoaAssistida: {
            ...data.data.dados
          },
          latitude: "-1",
          longitude: "-1"
        }

        await submitCadastro(formData)
          .then(() => {
            toast.success("Chamado cadastrado com sucesso")
            navigate("/chamados")
          })
          .catch((e) => {
            if (e instanceof AxiosError) toast.error(e.response?.data.mensagem ?? e.message)
          })
      })
      .catch((e) => { if (e instanceof AxiosError) toast.error(e.response?.data.mensagem ?? e.message) })
      .finally(() => { updateCadastroLoading(false); updatePessoaLoading(false) })

  }

  return (
    <form
      className="size-full flex flex-col gap-4"
      onSubmit={handleSubmit(submitChamado)}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="grid gap-2 col-span-1 md:col-span-2">
          <Label>Pessoa Assistida</Label>
          {isLoadingPessoas && !pessoas && <Skeleton className="w-full" />}
          {pessoasError && !pessoas && <p className="text-destructive font-semibold">{pessoasError.message}</p>}
          {pessoas &&
            <Select
              options={pessoas.dados.map((pessoa) => { return { value: pessoa.descricao, label: pessoa.descricao } })}
              placeholder="Escolhe uma pessoa"
              value={pessoasObserver ?? ""}
              onSelect={(value) => setValue("pessoaAssistida", String(value))}
              {...register("pessoaAssistida")}
            />
          }
          <FormError errMessage={errors.pessoaAssistida?.message} />
        </div>


        <div className="grid gap-2 col-span-1 md:col-span-2">
          <Label>Bairro</Label>
          {isLoadingBairros && !bairros && <Skeleton className="w-full" />}
          {bairrosError && !bairros && <p className="text-destructive font-semibold">{bairrosError.message}</p>}
          {bairros &&
            <Select
              options={bairros.dados.map((bairro) => { return { value: bairro.descricao, label: bairro.descricao } })}
              placeholder="Escolhe um bairro"
              value={bairrosObserver ?? ""}
              onSelect={(value) => setValue("bairro", String(value))}
              {...register("bairro")}
            />
          }
          <FormError errMessage={errors.bairro?.message} />
        </div>

        <div className="grid gap-2">
          <Label>Rua</Label>
          <Input placeholder="Rua" {...register("rua")} />
          <FormError errMessage={errors.rua?.message} />
        </div>

        <div className="grid gap-2">
          <Label>Número</Label>
          <Input placeholder="Número" {...register("numero")} />
          <FormError errMessage={errors.numero?.message} />
        </div>

        <div className="grid gap-2">
          <Label>CEP</Label>
          <Input type="text" placeholder="CEP" {...register("cep")} min={1} max={8} />
          <FormError errMessage={errors.cep?.message} />
        </div>

        <div className="grid gap-2">
          <Label>Cidade</Label>
          <Input placeholder="Cidade" {...register("cidade")} />
          <FormError errMessage={errors.cidade?.message} />
        </div>

        <div className="grid gap-2">
          <Label>Estado</Label>
          <Input placeholder="Estado" {...register("estado")} />
          <FormError errMessage={errors.estado?.message} />
        </div>
      </div>
      <Button type="submit" disabled={isLoadingPessoa || isLoading}>
        {isLoadingPessoa && !isLoading && "Verificando pessoa..."}
        {isLoading && !isLoadingPessoa && "Cadastrando chamado..."}
        {!isLoading && !isLoadingPessoa && "Cadastrar"}
      </Button>
    </form>
  );
}
