import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import useBairroSelect from "../../hooks/use-bairro-select";
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
  const { data: pessoas, isLoading: isLoadingPessoas, error: pessoasError } = usePessoaAssistidaSelect()
  const { data: bairros, isLoading: isLoadingBairros, error: bairrosError } = useBairroSelect()

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    watch,
    setValue
  } = useForm({ resolver: zodResolver(formSchema) });

  function submitChamado(values: FormSchema) {
    console.log(values);
  }

  useEffect(() => console.log({ form: getValues() }, [getValues]))


  const pessoasObserver = watch("pessoaAssistida")
  const bairrosObserver = watch("bairro")

  return (
    <form
      className="size-full flex flex-col gap-4"
      onSubmit={handleSubmit(submitChamado)}
    >
      <div className="w-full grid grid-cols-3 gap-3">
        <div className="grid gap-2 col-span-2">
          <Label>Pessoa Assistida</Label>
          {isLoadingPessoas && !pessoas && <Skeleton className="w-[100px]" />}
          {pessoasError && !pessoas && <p className="text-destructive font-semibold">{pessoasError.message}</p>}
          {pessoas &&
            <Select
              options={pessoas.dados.map((pessoa) => { return { value: pessoa.descricao, label: pessoa.descricao } })}
              value={pessoasObserver ?? pessoas.dados[0].descricao}
              onSelect={(value) => setValue("pessoaAssistida", String(value))}
              {...register("pessoaAssistida")}
            />
          }
          <FormError errMessage={errors.pessoaAssistida?.message} />
        </div>


        <div className="grid gap-2 col-span-2">
          <Label>Bairro</Label>
          {isLoadingBairros && !bairros && <Skeleton className="w-[100px]" />}
          {bairrosError && !bairros && <p className="text-destructive font-semibold">{bairrosError.message}</p>}
          {bairros &&
            <Select
              options={bairros.dados.map((bairro) => { return { value: bairro.descricao, label: bairro.descricao } })}
              value={bairrosObserver ?? bairros.dados[0].descricao}
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
      <Button type="submit">Enviar</Button>
    </form>
  );
}
