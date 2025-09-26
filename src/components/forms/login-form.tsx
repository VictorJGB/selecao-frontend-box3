import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import FormError from "./form-error";

import { Eye, EyeClosed, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import Button from "../button";
import Input from "../input";
import Label from "../label";

import useLogin from "../../hooks/use-login";

const formSchema = z.object({
  email: z.email({ error: "Digite um email válido" }).min(1),
  password: z.string().min(8, { error: "No mínimo 8 caracteres" }),
});

type LoginSchema = z.infer<typeof formSchema>;

export default function LoginForm() {
  const navigate = useNavigate()
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)
  const { isLoading, submitLogin } = useLogin()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  async function Login(values: LoginSchema) {
    await submitLogin(values.email, values.password)
      .then(() => {
        toast.success("Login realizado com sucesso")
        navigate("/chamados")
      })
      .catch((e) => {
        toast.error(e.message)
      })
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev)
  }


  return (
    <div className="size-full flex flex-col gap-6 md:gap-10 items-center justify-center">
      {/* header */}
      <div className="w-full flex flex-col gap-2 items-center lg:items-start justify-center">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold ">Login</h1>
        <h3 className="text-center text-base lg:text-start lg:text-lg text-neutral">Preencha as informações e acesse o nosso portal</h3>
      </div>

      {/* form */}
      <form
        onSubmit={handleSubmit(Login)}
        className="w-full grid grid-rows-3 grid-cols-1 gap-4 items-center justify-start"
      >
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            {...register("email")}
            disabled={isLoading}
          />
          <FormError errMessage={errors.email?.message} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Senha</Label>
          <div className="w-full flex items-center justify-between relative">
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              disabled={isLoading}
              {...register("password")}
            />
            {isPasswordVisible && <Eye className="absolute size-4 right-3 cursor-pointer text-primary" onClick={togglePasswordVisibility} />}
            {!isPasswordVisible && <EyeClosed className="absolute size-4 right-3 cursor-pointer text-primary" onClick={togglePasswordVisibility} />}
          </div>
          <FormError errMessage={errors.password?.message} />
        </div>

        <Button className="w-full" type="submit" disabled={isLoading}>
          {!isLoading ? "Acessar" : "Acessando..."}
          {isLoading && <Loader2 className="ml-2 size-4 animate-spin" />}
        </Button>
      </form>
    </div>
  )
}