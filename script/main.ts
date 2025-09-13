const btnTurmas = document.querySelector('#btn-turmas') as HTMLButtonElement;

btnTurmas?.addEventListener('click', () => {
  
});

const btnAula=document.querySelector('#btn-aula') as HTMLButtonElement;
btnAula.addEventListener('click',()=>{
    
});

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