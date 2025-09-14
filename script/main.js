var btnTurmas = document.querySelector('#btn-turmas');
btnTurmas === null || btnTurmas === void 0 ? void 0 : btnTurmas.addEventListener('click', renderTurmas);
var btnAula = document.querySelector('#btn-aula');
btnAula.addEventListener('click', renderAula);
var btnUpload = document.querySelector('#btn-upload');
btnUpload.addEventListener('click', function () {
});
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
function renderTurmas() {
    var html = "\n    <h2 class=\"text-2xl font-bold mb-4\">Cadastro de Turmas e Alunos</h2>\n    <form class=\"space-y-4\">\n      <input type=\"text\" placeholder=\"Nome da turma\" class=\"border p-2 w-full rounded\" />\n      <input type=\"text\" placeholder=\"Nome do aluno\" class=\"border p-2 w-full rounded\" />\n      <button type=\"submit\" class=\"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\">Salvar</button>\n    </form>\n  ";
    attConteudoarea(html);
}
;
function renderAula() {
    var html = "\n        <h2 class=\"text-2xl font-bold mb-4 \">Registro Aula</h2>\n        <form action=\"\" class=\"space-y-4\">\n          <textarea name=\"\" id=\"\" class=\"border p-2 w-full rounded\" placeholder=\"Anotacoes\"></textarea>\n          <input type=\"text\" class=\"border p-2 w-full rounded \"placeholder=\"Qual sua turma\">\n          <input type=\"date\" class=\"border p-2 rounded\">\n          <button type=\"submit\"class=\"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\">Envio</button>\n        </form>\n    ";
    attConteudoarea(html);
}
