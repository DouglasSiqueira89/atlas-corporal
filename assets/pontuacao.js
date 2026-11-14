"use strict";
const atlasTracos = [
  {nome:"Esquizoide", slug:"esquizoide", cor:"#556f82"},
  {nome:"Oral", slug:"oral", cor:"#ac563d"},
  {nome:"Psicopata", slug:"psicopata", cor:"#926c28"},
  {nome:"Masoquista", slug:"masoquista", cor:"#44776b"},
  {nome:"Rígido", slug:"rigido", cor:"#765a77"}
];
function respostaValida(opcao) {
  return Number.isInteger(opcao) && opcao >= 0 && opcao < atlasTracos.length;
}
function calcularAtlas(respostas) {
  if (!Array.isArray(respostas) || respostas.length !== atlasRegioes.length ||
      Array.from(respostas).some(opcao => !respostaValida(opcao))) return null;
  const totais = atlasTracos.map(() => 0);
  for (const opcao of respostas) totais[opcao] += 1;
  const ordem = atlasTracos.map((traco, i) => i).sort((a,b) => totais[b] - totais[a]);
  const primeiros = ordem.filter(i => totais[i] === totais[ordem[0]]);
  const proximos = ordem.filter(i => totais[i] > 0 && !primeiros.includes(i));
  const segundos = primeiros.length > 1 ? primeiros : proximos.filter(i => totais[i] === totais[proximos[0]]);
  const pares = primeiros.flatMap(a => segundos.filter(b => b !== a).map(b => [a,b]));
  return {totais, ordem, primeiros, segundos, pares};
}
