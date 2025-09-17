const areaConteudo = document.querySelector('#conteudo') as HTMLDivElement;

export function attConteudoarea(html: string) {
  if (areaConteudo) {
    areaConteudo.innerHTML = html;
  }
}
