import { attConteudoarea } from "./renderTs";

export function renderUsuarios() {
  const html = `
    <div class="container mx-auto p-6">
      <div class="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <div class="flex justify-center gap-4 mb-8">
          <a href="#">
            <button 
              class="h-12 w-40 rounded-xl bg-black text-xl text-white font-semibold border hover:bg-blue-500 transition">
              Aluno
            </button>
          </a>
          <a href="#">
            <button 
              class="h-12 w-40 rounded-xl bg-black text-xl text-white font-semibold border hover:bg-blue-500 transition">
              Professor
            </button>
          </a>
        </div>

        <form action="" class="flex flex-col items-center gap-6">
          <input 
            type="email" 
            placeholder="Digite seu email" 
            class="h-12 w-80 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >

          <input 
            type="password" 
            placeholder="Digite sua senha" 
            class="h-12 w-80 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >

          <input 
            type="password" 
            placeholder="Confirme sua senha" 
            class="h-12 w-80 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >

          <button 
            type="submit" 
            class="h-12 w-80 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  `;
  attConteudoarea(html);
};