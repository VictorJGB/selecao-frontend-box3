import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import Button from "../button";

const formSchema = z.object({
  email: z.email().min(1),
  password: z.string().min(3),
});

type LoginSchema = z.infer<typeof formSchema>;

export default function LoginForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
  })

  function submitLogin(values: LoginSchema) {
    console.log(values)
  }

  return (
    <div className="size-full grid grid-rows-4 grid-cols-1 gap-4 items-center justify-center">
      {/* header */}
      <div>
        <h1>Login</h1>
        <h3>Preencha as informações e acesse nosso portal</h3>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(submitLogin)}>
        <div>
          <label>Email</label>
          <input
            className="border-1 border-primary rounded-md"
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            className="border-1 border-primary rounded-md"
            type="password"
            {...register("password")}
          />
        </div>

        <Button className="w-full" type="submit">Acessar</Button>
      </form>
    </div>
  )
}