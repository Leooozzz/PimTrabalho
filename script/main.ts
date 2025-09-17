import { renderUsuarios } from "./types/renderUsuarios";
import { renderTurmas } from "./types/renderTurmas";
import { renderUpload } from "./types/renderUpload";
import { renderAula } from "./types/renderAula";

document.addEventListener("DOMContentLoaded", () => {
  const btnTurmas = document.querySelector('#btn-turmas') as HTMLButtonElement;
  const btnAula = document.querySelector('#btn-aula') as HTMLButtonElement;
  const btnUpload = document.querySelector('#btn-upload') as HTMLButtonElement;
  const btnUser = document.querySelector('#btn-usuario') as HTMLButtonElement;

  btnTurmas?.addEventListener('click', renderTurmas);
  btnAula?.addEventListener('click', renderAula);
  btnUpload?.addEventListener('click', renderUpload);
  btnUser?.addEventListener('click', renderUsuarios);
});
