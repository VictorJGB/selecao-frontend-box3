import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Label from "../label";
import FormError from "./form-error";

const formSchema = z.object({
  email: z.email({ error: "Digite um email válido" }).min(1),
  password: z.string().min(8, { error: "No mínimo 8 caracteres" }),
});

type LoginSchema = z.infer<typeof formSchema>;

export default function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: zodResolver(formSchema),
  })

  function submitLogin(values: LoginSchema) {
    console.log(values)
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
        onSubmit={handleSubmit(submitLogin)}
        className="w-full grid grid-rows-3 grid-cols-1 gap-4 items-center justify-start"
      >
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            {...register("email")}
          />
          <FormError errMessage={errors.email?.message} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Senha</Label>
          <div className="w-full flex items-center justify-between relative">
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              {...register("password")}
            />
            {isPasswordVisible && <Eye className="absolute size-4 right-3 cursor-pointer text-primary" onClick={togglePasswordVisibility} />}
            {!isPasswordVisible && <EyeClosed className="absolute size-4 right-3 cursor-pointer text-primary" onClick={togglePasswordVisibility} />}
          </div>
          <FormError errMessage={errors.password?.message} />
        </div>

        <Button className="w-full" type="submit">Acessar</Button>
      </form>
    </div>
  )
}