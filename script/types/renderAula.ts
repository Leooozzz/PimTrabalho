import { attConteudoarea } from "./renderTs";
export function renderAula() {
  const html = `
    <div class="container mx-auto p-6">
      <div class="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Registro da Aula</h2>

        <form action="" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Anotações</label>
            <textarea 
              class="border border-gray-300 p-3 w-full rounded-lg text-sm 
                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none h-28" 
              placeholder="Escreva suas anotações aqui..."
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Turma</label>
            <input 
              type="text" 
              class="border border-gray-300 p-3 w-full rounded-lg text-sm 
                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none" 
              placeholder="Digite sua turma"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Data</label>
            <input 
              type="date" 
              class="border border-gray-300 p-3 w-full rounded-lg text-sm 
                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
            >
          </div>

          <div class="flex justify-end">
            <button 
              type="submit" 
              class="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium 
                    hover:bg-blue-700 transition duration-200 shadow-sm"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
  attConteudoarea(html);
}
