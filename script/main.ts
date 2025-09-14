
const btnTurmas = document.querySelector('#btn-turmas') as HTMLButtonElement;
btnTurmas?.addEventListener('click',renderTurmas);

const btnAula=document.querySelector('#btn-aula') as HTMLButtonElement;
btnAula.addEventListener('click',renderAula);

const btnUpload=document.querySelector('#btn-upload') as HTMLButtonElement;
btnUpload.addEventListener('click',()=>{

});

const btnUser=document.querySelector('#btn-usuario')as HTMLButtonElement;
btnUser.addEventListener('click',()=>{

});


const  areaConteudo=document.querySelector('#conteudo')as HTMLDivElement;
function attConteudoarea(html:string){
   if(areaConteudo){
    areaConteudo.innerHTML= html
};
}

function renderTurmas() {
  const html = `
    <h2 class="text-2xl font-bold mb-4">Cadastro de Turmas e Alunos</h2>
    <form class="space-y-4">
      <input type="text" placeholder="Nome da turma" class="border p-2 w-full rounded" />
      <input type="text" placeholder="Nome do aluno" class="border p-2 w-full rounded" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Salvar</button>
    </form>
  `;
  attConteudoarea(html);
};

function renderAula(){
    const html=`
        <h2 class="text-2xl font-bold mb-4 ">Registro Aula</h2>
        <form action="" class="space-y-4">
          <textarea name="" id="" class="border p-2 w-full rounded" placeholder="Anotacoes"></textarea>
          <input type="text" class="border p-2 w-full rounded "placeholder="Qual sua turma">
          <input type="date" class="border p-2 rounded">
          <button type="submit"class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Envio</button>
        </form>
    `;
    attConteudoarea(html)
}
