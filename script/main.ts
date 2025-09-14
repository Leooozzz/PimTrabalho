
const btnTurmas = document.querySelector('#btn-turmas') as HTMLButtonElement;
btnTurmas?.addEventListener('click',renderTurmas);

const btnAula=document.querySelector('#btn-aula') as HTMLButtonElement;
btnAula.addEventListener('click',renderAula);

const btnUpload=document.querySelector('#btn-upload') as HTMLButtonElement;
btnUpload.addEventListener('click',renderUpload);

const btnUser=document.querySelector('#btn-usuario')as HTMLButtonElement;
btnUser.addEventListener('click',renderUsuarios);
const  areaConteudo=document.querySelector('#conteudo')as HTMLDivElement;
function attConteudoarea(html:string){
   if(areaConteudo){
    areaConteudo.innerHTML= html
};
};

function renderAula(){
    const html=`
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Registro da Aula</h2>

<form action="" class="space-y-6 bg-white p-6 rounded-xl shadow-md">
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

    `;
    attConteudoarea(html)
};

function renderTurmas() {
  const html = `
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Cadastro de Turmas e Alunos</h2>

<form class="space-y-6 bg-white p-6 rounded-xl shadow-md">
  <!-- Nome da Turma -->
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

  `;
  attConteudoarea(html);
};

function renderUpload(){
    const html=`
      <form action="" class="w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
  <h2 class="text-2xl font-bold text-gray-800 mb-6">Formulário de Envio</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 

    <div class="col-span-2 ">
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

  
  <div class="mt-8">
    <button type="submit" 
      class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium 
             hover:bg-blue-700 transition duration-200 shadow-md">
      Enviar
    </button>
  </div>
</form>
    `;
    attConteudoarea(html)
};

function renderUsuarios(){

    




}