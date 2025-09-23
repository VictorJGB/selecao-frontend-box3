import { ShieldAlert } from "lucide-react";
import LoginForm from "../../components/forms/login-form";

export default function LoginPage() {
  return (
    <div className="bg-zinc-200 flex items-center justify-center h-screen w-full">
      <div className="bg-base-100 w-[90%] lg:size-3/4 max-h-[800px] rounded-lg shadow-md flex items-center justify-center overflow-hidden">
        {/* image container */}
        <div className="w-1/2 h-full hidden bg-primary text-neutral-foreground lg:flex items-center justify-center flex-col gap-4">
          <ShieldAlert className="size-30 text-inherit" />
          <h1 className="text-inherit font-bold text-5xl">Guardia Maria</h1>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 h-full flex items-center justify-center p-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
