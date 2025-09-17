import { attConteudoarea } from "./renderTs";

export function renderUpload() {
  const html = `
    <div class="container mx-auto p-6">
      <div class="w-full max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Formulário de Envio</h2>

        <form action="">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="col-span-2">
              <label for="uploadArquivo" class="block mb-2 font-medium text-gray-700">Arquivo</label>
              <div class="border border-gray-300 rounded-lg flex items-center">
                <label for="uploadArquivo" class="text-blue-600 font-semibold border-r border-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-50">
                  Escolher
                </label>
                <input type="file" id="uploadArquivo" class="flex-1 px-3 py-2 text-sm text-gray-700" />
              </div>
            </div>

            <div>
              <label for="texto" class="block mb-2 font-medium text-gray-700">Texto</label>
              <input type="text" id="texto" placeholder="Digite algo..." 
                class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>

            <div>
              <label for="turmaSelect" class="block mb-2 font-medium text-gray-700">Escolha sua turma</label>
              <select id="turmaSelect" class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="nenhuma">Nenhuma Selecionada</option>
                <option value="turma1">#Turma1</option>
                <option value="turma2">#Turma2</option>
                <option value="turma3">#Turma3</option>
              </select>
            </div>

            <div>
              <label for="data" class="block mb-2 font-medium text-gray-700">Escolha a data</label>
              <input type="date" id="data" 
                class="border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
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
};