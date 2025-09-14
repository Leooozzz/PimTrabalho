var btnTurmas = document.querySelector('#btn-turmas');
btnTurmas === null || btnTurmas === void 0 ? void 0 : btnTurmas.addEventListener('click', renderTurmas);
var btnAula = document.querySelector('#btn-aula');
btnAula.addEventListener('click', renderAula);
var btnUpload = document.querySelector('#btn-upload');
btnUpload.addEventListener('click', renderUpload);
var btnUser = document.querySelector('#btn-usuario');
btnUser.addEventListener('click', renderUsuarios);
var areaConteudo = document.querySelector('#conteudo');
function attConteudoarea(html) {
    if (areaConteudo) {
        areaConteudo.innerHTML = html;
    }
    ;
}
;
function renderAula() {
    var html = "\n        <h2 class=\"text-2xl font-bold mb-6 text-gray-800\">Registro da Aula</h2>\n\n<form action=\"\" class=\"space-y-6 bg-white p-6 rounded-xl shadow-md\">\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Anota\u00E7\u00F5es</label>\n    <textarea \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none h-28\" \n      placeholder=\"Escreva suas anota\u00E7\u00F5es aqui...\"\n    ></textarea>\n  </div>\n\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Turma</label>\n    <input \n      type=\"text\" \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\" \n      placeholder=\"Digite sua turma\"\n    >\n  </div>\n\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Data</label>\n    <input \n      type=\"date\" \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\"\n    >\n  </div>\n\n  <div class=\"flex justify-end\">\n    <button \n      type=\"submit\" \n      class=\"bg-blue-600 text-white px-6 py-2 rounded-lg font-medium \n             hover:bg-blue-700 transition duration-200 shadow-sm\"\n    >\n      Enviar\n    </button>\n  </div>\n</form>\n\n    ";
    attConteudoarea(html);
}
;
function renderTurmas() {
    var html = "\n    <h2 class=\"text-2xl font-bold mb-6 text-gray-800\">Cadastro de Turmas e Alunos</h2>\n\n<form class=\"space-y-6 bg-white p-6 rounded-xl shadow-md\">\n  <!-- Nome da Turma -->\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Nome da Turma</label>\n    <input \n      type=\"text\" \n      placeholder=\"Ex: 3\u00BA Ano A\" \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\"\n    />\n  </div>\n\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Nome do Aluno</label>\n    <input \n      type=\"text\" \n      placeholder=\"Digite o nome do aluno\" \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\"\n    />\n  </div>\n\n  <div class=\"flex justify-end\">\n    <button \n      type=\"submit\" \n      class=\"bg-blue-600 text-white px-6 py-2 rounded-lg font-medium \n             hover:bg-blue-700 transition duration-200 shadow-sm\"\n    >\n      Salvar\n    </button>\n  </div>\n</form>\n\n  ";
    attConteudoarea(html);
}
;
function renderUpload() {
    var html = "\n      <form action=\"\" class=\"w-full max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl\">\n  <h2 class=\"text-2xl font-bold text-gray-800 mb-6\">Formul\u00E1rio de Envio</h2>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\">\n \n\n    <div class=\"col-span-2 \">\n      <label for=\"uploadArquivo\" class=\"block mb-2 font-medium text-gray-700\">Arquivo</label>\n      <div class=\"border border-gray-300 rounded-lg flex items-center\">\n        <label for=\"uploadArquivo\" class=\"text-blue-600 font-semibold border-r border-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-50\">\n          Escolher\n        </label>\n        <input type=\"file\" id=\"uploadArquivo\" class=\"flex-1 px-3 py-2 text-sm text-gray-700\" />\n      </div>\n    </div>\n\n   \n    <div>\n      <label for=\"texto\" class=\"block mb-2 font-medium text-gray-700\">Texto</label>\n      <input type=\"text\" id=\"texto\" placeholder=\"Digite algo...\" \n        class=\"border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none\" />\n    </div>\n\n    \n    <div>\n      <label for=\"turmaSelect\" class=\"block mb-2 font-medium text-gray-700\">Escolha sua turma</label>\n      <select id=\"turmaSelect\" class=\"border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none\">\n        <option value=\"nenhuma\">Nenhuma Selecionada</option>\n        <option value=\"turma1\">#Turma1</option>\n        <option value=\"turma2\">#Turma2</option>\n        <option value=\"turma3\">#Turma3</option>\n      </select>\n    </div>\n\n  \n    <div>\n      <label for=\"data\" class=\"block mb-2 font-medium text-gray-700\">Escolha a data</label>\n      <input type=\"date\" id=\"data\" \n        class=\"border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none\" />\n    </div>\n  </div>\n\n  \n  <div class=\"mt-8\">\n    <button type=\"submit\" \n      class=\"w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium \n             hover:bg-blue-700 transition duration-200 shadow-md\">\n      Enviar\n    </button>\n  </div>\n</form>\n    ";
    attConteudoarea(html);
}
;
function renderUsuarios() {
}
