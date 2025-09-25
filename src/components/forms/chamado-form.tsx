import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import Label from "../label";
import Input from "../input";
import Button from "../button";

const formSchema = z.object({
  pessoaAssistida: z.string({ error: "Pessoa Assistida é obrigatório" }).min(1),
  bairro: z.string({ error: "Bairro é obrigatório" }).min(1),
  rua: z.string({ error: "Rua é obrigatória" }).min(1),
  numero: z.string({ error: "Número é obrigatório" }).min(1),
  cep: z.string({ error: "CEP é obrigatório" }).min(1),
  cidade: z.string({ error: "Cidade é obrigatório" }).min(1),
  estado: z.string({ error: "Estado é obrigatório" }).min(1),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ChamadoForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(formSchema) });

  function submitChamado(values: FormSchema) {
    console.log(values);
  }

  return (
    <form
      className="size-full flex flex-col gap-4"
      onSubmit={handleSubmit(submitChamado)}
    >
      <div className="w-full grid grid-cols-3 gap-3">
        <div className="grid gap-2 col-span-2">
          <Label>Pessoa Assistida</Label>
          <Input
            placeholder="Pessoa assistida"
            {...register("pessoaAssistida")}
          />
        </div>

        <div className="grid gap-2">
          <Label>Bairro</Label>
          <Input placeholder="Bairro" {...register("bairro")} />
        </div>

        <div className="grid gap-2">
          <Label>Rua</Label>
          <Input placeholder="Rua" {...register("rua")} />
        </div>

        <div className="grid gap-2">
          <Label>Número</Label>
          <Input placeholder="Número" {...register("numero")} />
        </div>

        <div className="grid gap-2">
          <Label>CEP</Label>
          <Input placeholder="CEP" {...register("cep")} />
        </div>

        <div className="grid gap-2">
          <Label>Cidade</Label>
          <Input placeholder="Cidade" {...register("cidade")} />
        </div>

        <div className="grid gap-2">
          <Label>Estado</Label>
          <Input placeholder="Estado" {...register("estado")} />
        </div>
      </div>
      <Button type="submit">Enviar</Button>
    </form>
  );
}
