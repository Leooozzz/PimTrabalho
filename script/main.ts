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

function renderTurmas() {

  const html = `
    <div class="container mx-auto p-6">
      <div class="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Cadastro de Turmas e Alunos</h2>

        <form id="submitTurmas" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nome da Turma</label>
            <input 
              id="nome-turma"
              type="text" 
              placeholder="Ex: 3º Ano A" 
              class="border border-gray-300 p-3 w-full rounded-lg text-sm 
                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Nome do Aluno</label>
            <input 
              id="nome-aluno"
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

  const turmas: { nome: string; alunos: string[] }[] = [];

  function turmaValidation(){
  const turmasSubmit=document.querySelector('#submitTurmas') as HTMLFormElement;
  turmasSubmit.addEventListener('submit',(event)=>{
    event.preventDefault();
  const nomeTurmaInput=document.querySelector('#nome-turma') as HTMLInputElement;
  const nomeAlunoInput=document.querySelector('#nome-aluno') as HTMLInputElement;
    if(nomeTurmaInput.value.trim()==='' || nomeAlunoInput.value.trim()===''){
      alert("Preencha todos os campos")
      return;
    }
  const nomeTurma=nomeTurmaInput.value.trim();
  const nomeAluno=nomeAlunoInput.value.trim();
  const turmaExistente = turmas.find(turmas => turmas.nome === nomeTurma);

    if (turmaExistente) {
      turmaExistente.alunos.push(nomeAluno);
    } else {
      turmas.push({ nome: nomeTurma, alunos: [nomeAluno] });
      alert("Aluno cadastrado com sucesso");
      nomeTurmaInput.value='';
      nomeAlunoInput.value='';
    }
  }
  )}
turmaValidation();

};

function renderAula() {
  const html = `
    <div class="container mx-auto p-6">
      <div class="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Registro da Aula</h2>

        <form action="" id="submitAula" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Anotações</label>
            <textarea 
            id="textareainput"
              class="border border-gray-300 p-3 w-full rounded-lg text-sm 
                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none h-28" 
              placeholder="Escreva suas anotações aqui..."
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Turma</label>
            <input 
            id="turmainput"
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
              id="datainput"
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

  const aulas: { turma: string; anotacoes: string; data: string }[] = [];
  function aulaValidacao(){
    const aulaSubmit=document.querySelector('#submitAula') as HTMLFormElement;
    aulaSubmit.addEventListener('submit',(event)=>{
      event.preventDefault();
      const textareainput=document.querySelector('#textareainput')as HTMLTextAreaElement;
      const turmainput=document.querySelector('#turmainput')as HTMLInputElement;
      const datainput=document.querySelector('#datainput')as HTMLInputElement;
      if(textareainput.value.trim()==='' ||turmainput.value.trim()===''||datainput.value.trim()===''){
        alert("Preencha todos os Campos");
        return;
      }else{
        const novaAula = {
            turma: turmainput.value.trim(),
            anotacoes: textareainput.value.trim(),
            data: datainput.value
              };

              aulas.push(novaAula);
              alert("Aula registrada com sucesso!");

              textareainput.value = '';
              turmainput.value = '';
              datainput.value = '';
      }
    })
  }
  aulaValidacao();
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
            <button data-user="aluno"
              class="h-12 w-40 rounded-xl bg-black text-xl text-white font-semibold border hover:bg-blue-500 transition">
              Aluno
            </button>
          </a>
          <a href="#">
            <button data-user="professor" 
              class="h-12 w-40 rounded-xl bg-black text-xl text-white font-semibold border hover:bg-blue-500 transition">
              Professor
            </button>
          </a>
        </div>

        <form id="formLogin" class="flex flex-col items-center gap-6">
          <input 
            type="email" 
            id="emailUser"
            placeholder="Digite seu email" 
            class="h-12 w-80 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >

          <input 
            type="password" 
            id="passwordUser" 
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
            Login
          </button>
        </form>

        <div id="user-feedback" class="text-center text-blue-600 font-semibold mt-4"></div>
      </div>
    </div>
  `;
  attConteudoarea(html);

  let tipoUsuario: 'aluno' | 'professor' | null = null;


  const botoesDatauser = document.querySelectorAll('[data-user]');
  botoesDatauser.forEach(botao => {
    botao.addEventListener('click', () => {
      const tipo = botao.getAttribute('data-user');
      tipoUsuario = tipo === 'aluno' || tipo === 'professor' ? tipo : null;

      const feedback = document.getElementById('user-feedback');
      if (feedback && tipoUsuario) {
        feedback.innerText = `Você escolheu: ${tipoUsuario.charAt(0).toUpperCase() + tipoUsuario.slice(1)}`;
        feedback.classList.remove("text-red-600");
        feedback.classList.add("text-blue-600");
      }

      console.log(`Usuário selecionado: ${tipoUsuario}`);
    });
  });

 
  const formLogin = document.querySelector('#formLogin') as HTMLFormElement;

  formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailUser = document.querySelector('#emailUser') as HTMLInputElement;
    const passwordUser = document.querySelector('#passwordUser') as HTMLInputElement; 
    let valoremailUser = emailUser.value.trim(); 
    let valorpasswordUser = passwordUser.value.trim(); 

    validation(valoremailUser, valorpasswordUser);
  });

  function validation(valoremailUser: string, valorpasswordUser: string) {
    const feedback = document.getElementById('user-feedback');
    if (valoremailUser === "admin@escola.com" && valorpasswordUser === "123456" && tipoUsuario === "professor") {
      renderPainelProfessor();
    } else {
      if (feedback) {
        feedback.innerText = "Email, senha ou tipo de usuário incorretos.";
        feedback.classList.remove("text-blue-600");
        feedback.classList.add("text-red-600");
      }
    }
  }


  function renderPainelProfessor() {
    const html = `
      <div class="container mx-auto p-6">
        <div class="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Bem-vindo, Professor!</h2>
          <p class="text-gray-600 mb-6">Escolha uma das opções abaixo para começar:</p>

          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button id="btn-turmas" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Cadastro de turmas e alunos
            </button>
            <button id="btn-aula" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Registro de aula
            </button>
            <button id="btn-upload" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Upload de atividades
            </button>
          </div>
        </div>
      </div>
    `;
    attConteudoarea(html);

    const btnTurmas = document.querySelector('#btn-turmas') as HTMLButtonElement;
    btnTurmas?.addEventListener('click', renderTurmas);

    const btnAula = document.querySelector('#btn-aula') as HTMLButtonElement;
    btnAula?.addEventListener('click', renderAula);

    const btnUpload = document.querySelector('#btn-upload') as HTMLButtonElement;
    btnUpload?.addEventListener('click', renderUpload);
  }
}
