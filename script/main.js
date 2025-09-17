"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderUsuarios_1 = require("./types/renderUsuarios");
var renderTurmas_1 = require("./types/renderTurmas");
var renderUpload_1 = require("./types/renderUpload");
var renderAula_1 = require("./types/renderAula");
document.addEventListener("DOMContentLoaded", function () {
    var btnTurmas = document.querySelector('#btn-turmas');
    var btnAula = document.querySelector('#btn-aula');
    var btnUpload = document.querySelector('#btn-upload');
    var btnUser = document.querySelector('#btn-usuario');
    btnTurmas === null || btnTurmas === void 0 ? void 0 : btnTurmas.addEventListener('click', renderTurmas_1.renderTurmas);
    btnAula === null || btnAula === void 0 ? void 0 : btnAula.addEventListener('click', renderAula_1.renderAula);
    btnUpload === null || btnUpload === void 0 ? void 0 : btnUpload.addEventListener('click', renderUpload_1.renderUpload);
    btnUser === null || btnUser === void 0 ? void 0 : btnUser.addEventListener('click', renderUsuarios_1.renderUsuarios);
});
