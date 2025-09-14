var btnTurmas = document.querySelector('#btn-turmas');
btnTurmas === null || btnTurmas === void 0 ? void 0 : btnTurmas.addEventListener('click', renderTurmas);
var btnAula = document.querySelector('#btn-aula');
btnAula.addEventListener('click', renderAula);
var btnUpload = document.querySelector('#btn-upload');
btnUpload.addEventListener('click', renderUpload);
var btnUser = document.querySelector('#btn-usuario');
btnUser.addEventListener('click', function () {
});
var areaConteudo = document.querySelector('#conteudo');
function attConteudoarea(html) {
    if (areaConteudo) {
        areaConteudo.innerHTML = html;
    }
    ;
}
;
function renderTurmas() {
    var html = "\n    <h2 class=\"text-2xl font-bold mb-6 text-gray-800\">Cadastro de Turmas e Alunos</h2>\n\n<form class=\"space-y-6 bg-white p-6 rounded-xl shadow-md\">\n  <!-- Nome da Turma -->\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Nome da Turma</label>\n    <input \n      type=\"text\" \n      placeholder=\"Ex: 3\u00BA Ano A\" \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\"\n    />\n  </div>\n\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Nome do Aluno</label>\n    <input \n      type=\"text\" \n      placeholder=\"Digite o nome do aluno\" \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\"\n    />\n  </div>\n\n  <div class=\"flex justify-end\">\n    <button \n      type=\"submit\" \n      class=\"bg-blue-600 text-white px-6 py-2 rounded-lg font-medium \n             hover:bg-blue-700 transition duration-200 shadow-sm\"\n    >\n      Salvar\n    </button>\n  </div>\n</form>\n\n  ";
    attConteudoarea(html);
}
;
function renderAula() {
    var html = "\n        <h2 class=\"text-2xl font-bold mb-6 text-gray-800\">Registro da Aula</h2>\n\n<form action=\"\" class=\"space-y-6 bg-white p-6 rounded-xl shadow-md\">\n  <!-- Anota\u00E7\u00F5es -->\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Anota\u00E7\u00F5es</label>\n    <textarea \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-none h-28\" \n      placeholder=\"Escreva suas anota\u00E7\u00F5es aqui...\"\n    ></textarea>\n  </div>\n\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Turma</label>\n    <input \n      type=\"text\" \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\" \n      placeholder=\"Digite sua turma\"\n    >\n  </div>\n\n  <div>\n    <label class=\"block text-sm font-medium text-gray-700 mb-2\">Data</label>\n    <input \n      type=\"date\" \n      class=\"border border-gray-300 p-3 w-full rounded-lg text-sm \n             focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none\"\n    >\n  </div>\n\n  <div class=\"flex justify-end\">\n    <button \n      type=\"submit\" \n      class=\"bg-blue-600 text-white px-6 py-2 rounded-lg font-medium \n             hover:bg-blue-700 transition duration-200 shadow-sm\"\n    >\n      Enviar\n    </button>\n  </div>\n</form>\n\n    ";
    attConteudoarea(html);
}
;
function renderUpload() {
    var html = "\n    \n    \n    ";
    attConteudoarea(html);
}
