import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";

export function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: any) {
    //mensagem de falha
    await signIn(data);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-center m-auto">
        <div className="p-8 bg-gray-700 border border-gray-500 rounded min-w-[340px]">
          <strong className="text-2xl mb-6 block">Bem Vindo de Volta!</strong>
          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <input
              {...register("email")}
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
            <input
              {...register("password")}
              className="bg-gray-900 rounded px-5 h-14"
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Acessar Plataforma
            </button>
            <p className="text-xs text-gray-200 mx-auto mt-3">
              Ainda não tem uma conta?
            </p>
            <a href="/" className="mx-auto text-sm text-blue-500 uppercase">
              Registre-se
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
