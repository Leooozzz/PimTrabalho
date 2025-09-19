var btnTurmas = document.querySelector('#btn-turmas');
btnTurmas === null || btnTurmas === void 0 ? void 0 : btnTurmas.addEventListener('click', renderTurmas);
var btnAula = document.querySelector('#btn-aula');
btnAula === null || btnAula === void 0 ? void 0 : btnAula.addEventListener('click', renderAula);
var btnUpload = document.querySelector('#btn-upload');
btnUpload === null || btnUpload === void 0 ? void 0 : btnUpload.addEventListener('click', renderUpload);
var btnUser = document.querySelector('#btn-usuario');
btnUser === null || btnUser === void 0 ? void 0 : btnUser.addEventListener('click', renderUsuarios);
var areaConteudo = document.querySelector('#conteudo');
function attConteudoarea(html) {
    if (areaConteudo) {
        areaConteudo.innerHTML = html;
    }
}
function renderAula() {
    var html = "\n    <div class=\"container mx-auto p-6\">\n      <div class=\"max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md\">\n        <h2 class=\"text-2xl font-bold mb-6 text-gray-800 text-center\">Registro da Aula</h2>\n\n        <form action=\"\" class=\"space-y-6\">\n          <div>\n            <label class=\"block text-sm font-medium text-gray-700 mb-2\">Anota\u00E7\u00F5es</label>\n            <textarea \n              class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none h-28\" \n              placeholder=\"Escreva suas anota\u00E7\u00F5es aqui...\"\n            ></textarea>\n          </div>\n\n          <div>\n            <label class=\"block text-sm font-medium text-gray-700 mb-2\">Turma</label>\n            <input \n              type=\"text\" \n              class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\" \n              placeholder=\"Digite sua turma\"\n            >\n          </div>\n\n          <div>\n            <label class=\"block text-sm font-medium text-gray-700 mb-2\">Data</label>\n            <input \n              type=\"date\" \n              class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\"\n            >\n          </div>\n\n          <div class=\"flex justify-end\">\n            <button \n              type=\"submit\" \n              class=\"bg-blue-600 text-white px-6 py-2 rounded-lg font-medium \n                    hover:bg-blue-700 transition duration-200 shadow-sm\"\n            >\n              Enviar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  ";
    attConteudoarea(html);
}
function renderTurmas() {
    var html = "\n    <div class=\"container mx-auto p-6\">\n      <div class=\"max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md\">\n        <h2 class=\"text-2xl font-bold mb-6 text-gray-800 text-center\">Cadastro de Turmas e Alunos</h2>\n\n        <form class=\"space-y-6\">\n          <div>\n            <label class=\"block text-sm font-medium text-gray-700 mb-2\">Nome da Turma</label>\n            <input \n              type=\"text\" \n              placeholder=\"Ex: 3\u00BA Ano A\" \n              class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\"\n            />\n          </div>\n\n          <div>\n            <label class=\"block text-sm font-medium text-gray-700 mb-2\">Nome do Aluno</label>\n            <input \n              type=\"text\" \n              placeholder=\"Digite o nome do aluno\" \n              class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n                    focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\"\n            />\n          </div>\n\n          <div class=\"flex justify-end\">\n            <button \n              type=\"submit\" \n              class=\"bg-blue-600 text-white px-6 py-2 rounded-lg font-medium \n                    hover:bg-blue-700 transition duration-200 shadow-sm\"\n            >\n              Salvar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  ";
    attConteudoarea(html);
}
function renderUpload() {
    var html = "\n    <div class=\"container mx-auto p-6\">\n      <div class=\"w-full max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg\">\n        <h2 class=\"text-2xl font-bold text-gray-800 mb-6 text-center\">Formul\u00E1rio de Envio</h2>\n\n        <form action=\"\">\n          <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n            <div class=\"col-span-2\">\n              <label for=\"uploadArquivo\" class=\"block mb-2 font-medium text-gray-700\">Arquivo</label>\n              <div class=\"border border-gray-300 rounded-lg flex items-center\">\n                <label for=\"uploadArquivo\" class=\"text-blue-600 font-semibold border-r border-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-50\">\n                  Escolher\n                </label>\n                <input type=\"file\" id=\"uploadArquivo\" class=\"flex-1 px-3 py-2 text-sm text-gray-700\" />\n              </div>\n            </div>\n\n            <div>\n              <label for=\"texto\" class=\"block mb-2 font-medium text-gray-700\">Texto</label>\n              <input type=\"text\" id=\"texto\" placeholder=\"Digite algo...\" \n                class=\"border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none\" />\n            </div>\n\n            <div>\n              <label for=\"turmaSelect\" class=\"block mb-2 font-medium text-gray-700\">Escolha sua turma</label>\n              <select id=\"turmaSelect\" class=\"border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none\">\n                <option value=\"nenhuma\">Nenhuma Selecionada</option>\n                <option value=\"turma1\">#Turma1</option>\n                <option value=\"turma2\">#Turma2</option>\n                <option value=\"turma3\">#Turma3</option>\n              </select>\n            </div>\n\n            <div>\n              <label for=\"data\" class=\"block mb-2 font-medium text-gray-700\">Escolha a data</label>\n              <input type=\"date\" id=\"data\" \n                class=\"border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none\" />\n            </div>\n          </div>\n\n          <div class=\"flex justify-end\">\n            <button \n              type=\"submit\" \n              class=\"bg-blue-600 text-white px-6 py-2 rounded-lg font-medium \n                    hover:bg-blue-700 transition duration-200 shadow-sm\"\n            >\n              Enviar\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  ";
    attConteudoarea(html);
}
;
function renderUsuarios() {
    var html = "\n    <div class=\"container mx-auto p-6\">\n      <div class=\"max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg\">\n        <div class=\"flex justify-center gap-4 mb-8\">\n          <a href=\"#\">\n            <button data-user=\"aluno\"\n              class=\"h-12 w-40 rounded-xl bg-black text-xl text-white font-semibold border hover:bg-blue-500 transition\">\n              Aluno\n            </button>\n          </a>\n          <a href=\"#\">\n            <button data-user=\"professor\" \n              class=\"h-12 w-40 rounded-xl bg-black text-xl text-white font-semibold border hover:bg-blue-500 transition\">\n              Professor\n            </button>\n          </a>\n        </div>\n\n        <form id=\"formLogin\" class=\"flex flex-col items-center gap-6\">\n          <input \n            type=\"email\" \n            id=\"emailUser\"\n            placeholder=\"Digite seu email\" \n            class=\"h-12 w-80 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500\"\n          >\n\n          <input \n            type=\"password\" \n            id=\"passwordUser\" \n            placeholder=\"Digite sua senha\" \n            class=\"h-12 w-80 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500\"\n          >\n\n          <input \n            type=\"password\" \n            placeholder=\"Confirme sua senha\"\n            class=\"h-12 w-80 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500\"\n          >\n\n          <button \n            type=\"submit\" \n            class=\"h-12 w-80 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition\">\n            Login\n          </button>\n        </form>\n\n        <div id=\"user-feedback\" class=\"text-center text-blue-600 font-semibold mt-4\"></div>\n      </div>\n    </div>\n  ";
    attConteudoarea(html);
    var tipoUsuario = null;
    // Seleção do tipo de usuário
    var botoesDatauser = document.querySelectorAll('[data-user]');
    botoesDatauser.forEach(function (botao) {
        botao.addEventListener('click', function () {
            var tipo = botao.getAttribute('data-user');
            tipoUsuario = tipo === 'aluno' || tipo === 'professor' ? tipo : null;
            var feedback = document.getElementById('user-feedback');
            if (feedback && tipoUsuario) {
                feedback.innerText = "Voc\u00EA escolheu: ".concat(tipoUsuario.charAt(0).toUpperCase() + tipoUsuario.slice(1));
                feedback.classList.remove("text-red-600");
                feedback.classList.add("text-blue-600");
            }
            console.log("Usu\u00E1rio selecionado: ".concat(tipoUsuario));
        });
    });
    // Formulário de login
    var formLogin = document.querySelector('#formLogin');
    formLogin.addEventListener('submit', function (event) {
        event.preventDefault();
        var emailUser = document.querySelector('#emailUser');
        var passwordUser = document.querySelector('#passwordUser');
        var valoremailUser = emailUser.value.trim();
        var valorpasswordUser = passwordUser.value.trim();
        validation(valoremailUser, valorpasswordUser);
    });
    // Função de validação
    function validation(valoremailUser, valorpasswordUser) {
        var feedback = document.getElementById('user-feedback');
        if (valoremailUser === "admin@escola.com" && valorpasswordUser === "123456" && tipoUsuario === "professor") {
            renderPainelProfessor();
        }
        else {
            if (feedback) {
                feedback.innerText = "Email, senha ou tipo de usuário incorretos.";
                feedback.classList.remove("text-blue-600");
                feedback.classList.add("text-red-600");
            }
        }
    }
    // Painel do professor
    function renderPainelProfessor() {
        var html = "\n      <div class=\"container mx-auto p-6\">\n        <div class=\"bg-white p-6 rounded-xl shadow-md text-center\">\n          <h2 class=\"text-2xl font-bold text-gray-800 mb-4\">Bem-vindo, Professor!</h2>\n          <p class=\"text-gray-600 mb-6\">Escolha uma das op\u00E7\u00F5es abaixo para come\u00E7ar:</p>\n\n          <div class=\"flex flex-col sm:flex-row justify-center gap-4\">\n            <button id=\"btn-turmas\" class=\"bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition\">\n              Cadastro de turmas e alunos\n            </button>\n            <button id=\"btn-aula\" class=\"bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition\">\n              Registro de aula\n            </button>\n            <button id=\"btn-upload\" class=\"bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition\">\n              Upload de atividades\n            </button>\n          </div>\n        </div>\n      </div>\n    ";
        attConteudoarea(html);
        // Listeners pós-renderização
        var btnTurmas = document.querySelector('#btn-turmas');
        btnTurmas === null || btnTurmas === void 0 ? void 0 : btnTurmas.addEventListener('click', renderTurmas);
        var btnAula = document.querySelector('#btn-aula');
        btnAula === null || btnAula === void 0 ? void 0 : btnAula.addEventListener('click', renderAula);
        var btnUpload = document.querySelector('#btn-upload');
        btnUpload === null || btnUpload === void 0 ? void 0 : btnUpload.addEventListener('click', renderUpload);
    }
}
