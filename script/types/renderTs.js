"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attConteudoarea = attConteudoarea;
var areaConteudo = document.querySelector('#conteudo');
function attConteudoarea(html) {
    if (areaConteudo) {
        areaConteudo.innerHTML = html;
    }
}
