const btnTurmas = document.querySelector('#btn-turmas') as HTMLButtonElement;
btnTurmas?.addEventListener('click', renderTurmas);

const btnAula = document.querySelector('#btn-aula') as HTMLButtonElement;
btnAula?.addEventListener('click', renderAula);

const btnUpload = document.querySelector('#btn-upload') as HTMLButtonElement;
btnUpload?.addEventListener('click', renderUpload);

const btnUser = document.querySelector('#btn-usuario') as HTMLButtonElement;
btnUser?.addEventListener('click', renderUsuarios);

const areaConteudo = document.querySelector('#conteudo') as HTMLDivElement;

function attConteudoarea(html: string) {
  if (areaConteudo) {
    areaConteudo.innerHTML = html;
  }
}

// ---------- Renderizações ----------
function renderAula() {
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

function renderTurmas() {
  const html = `
    <div class="container mx-auto p-6">
      <div class="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Cadastro de Turmas e Alunos</h2>

        <form class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nome da Turma</label>
            <input 
              type="text" 
              placeholder="Ex: 3º Ano A" 
              class="border border-gray-300 p-3 w-full rounded-lg text-sm 
                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nome do Aluno</label>
            <input 
              type="text" 
              placeholder="Digite o nome do aluno" 
              class="border border-gray-300 p-3 w-full rounded-lg text-sm 
                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
            />
          </div>

          <div class="flex justify-end">
            <button 
              type="submit" 
              class="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium 
                    hover:bg-blue-700 transition duration-200 shadow-sm"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
  attConteudoarea(html);
}

function renderUpload() {
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

function renderUsuarios() {
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
