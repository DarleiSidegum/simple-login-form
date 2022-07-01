export function Login() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-center m-auto">
        <div className="p-8 bg-gray-700 border border-gray-500 rounded min-w-[340px]">
          <strong className="text-2xl mb-6 block">Bem Vindo de Volta!</strong>
          <form className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
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
