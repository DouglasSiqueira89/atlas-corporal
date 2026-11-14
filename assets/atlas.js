"use strict";
const el = id => document.getElementById(id);
const respostas = atlasItens.map(() => null);
let etapa = 0;
let filtro = -1;
const figura = i => '<img src="assets/regiao-'+i+'.svg" alt="" width="100" height="100">';
function destino(i) {
  const {regiao, numero} = atlasItens[i];
  return "#teste-"+(regiao+1)+(numero ? "-"+(numero+1) : "");
}
function inicioDaRegiao(regiao) {
  return atlasItens.findIndex(item => item.regiao === regiao);
}
function proximaDaRegiao(regiao) {
  const primeira = inicioDaRegiao(regiao);
  const pendente = atlasItens.findIndex((item, i) =>
    item.regiao === regiao && !respostaValida(respostas[i]));
  return pendente < 0 ? primeira : pendente;
}
function montarIndice() {
  el("indice").innerHTML = atlasRegioes.map((r,i) =>
    '<a class="region-link" href="#teste-'+(i+1)+'">'+figura(i)+'<span>'+r.name+'</span></a>').join("");
}
function irEtapa(i) {
  location.hash = destino(i);
}
function desenharTeste() {
  const item = atlasItens[etapa];
  const regiao = atlasRegioes[item.regiao];
  const primeira = inicioDaRegiao(item.regiao);
  const bloco = atlasPerguntas[item.regiao];
  el("quiz").innerHTML = '<div class="intro"><p class="kicker">Pergunta '+(etapa+1)+' de '+atlasItens.length+'</p>'+
    '<h1>'+regiao.name+'</h1><progress class="quiz-progress" id="barra-progresso" max="'+respostas.length+'" value="0" aria-label="Perguntas respondidas"></progress></div><nav class="tracker" aria-label="Regiões do teste">'+atlasRegioes.map((r,i)=>
    '<button type="button" class="step-btn" data-regiao="'+i+'" '+(i===item.regiao?'aria-current="step"':'')+'>'+r.name+' <span class="region-count"></span></button>').join("")+
    '</nav><div class="q-layout"><aside class="q-aside">'+figura(item.regiao)+'<h2 id="pergunta">'+item.question+'</h2>'+
    '<p>Marque a descrição que mais se aproxima do que você observa.</p>'+
    '<nav class="within-region" aria-label="Perguntas sobre '+regiao.name+'">'+bloco.map((_,j)=>
      '<button data-pergunta="'+(primeira+j)+'" type="button" aria-label="Pergunta '+(j+1)+' de '+regiao.name+'" '+(j===item.numero?'aria-current="step"':'')+'>'+(j+1)+'</button>').join("")+'</nav></aside>'+
    '<div class="q-panel"><div class="q-status"><span>Escolha uma opção</span><b id="progresso" aria-live="polite"></b></div>'+
    '<fieldset class="q-options" aria-labelledby="pergunta">'+
    item.options.map((_,posicao)=>{
      const i = (posicao + item.numero) % item.options.length;
      return '<label class="q-row">'+desenhoOpcao(item.regiao,i)+'<span>'+item.options[i]+'</span>'+
        '<input id="p'+i+'" data-op="'+i+'" name="pergunta-'+etapa+'" type="radio" value="'+i+'"'+(respostas[etapa]===i?' checked':'')+'></label>';
    }).join("")+'</fieldset>'+
    '<div class="q-controls"><button class="link-btn" id="voltar" type="button">← '+(etapa===0?'Início':'Anterior')+'</button>'+
    '<button id="avancar" class="btn" type="button">'+(etapa===respostas.length-1?'Ver resultado':'Próxima pergunta')+' →</button></div></div></div>';
  el("quiz").querySelectorAll("[data-regiao]").forEach(b=>b.onclick=()=>irEtapa(proximaDaRegiao(Number(b.dataset.regiao))));
  el("quiz").querySelectorAll("[data-pergunta]").forEach(b=>b.onclick=()=>irEtapa(Number(b.dataset.pergunta)));
  el("quiz").querySelectorAll("[data-op]").forEach(input=>input.onchange=()=>{
    respostas[etapa] = Number(input.value);
    atualizarProgresso();
  });
  el("voltar").onclick=()=>etapa===0 ? location.hash="inicio" : irEtapa(etapa-1);
  el("avancar").onclick=()=>{
    if (!respostaValida(respostas[etapa])) return;
    if (respostas.every(respostaValida)) location.hash="resultado";
    else if (etapa<respostas.length-1) irEtapa(etapa+1);
    else irEtapa(respostas.findIndex(r=>!respostaValida(r)));
  };
  atualizarProgresso();
}
function atualizarProgresso() {
  const preenchidas = respostas.filter(respostaValida).length;
  el("barra-progresso").value = preenchidas;
  el("progresso").textContent = preenchidas+" de "+respostas.length+" respondidas";
  el("quiz").querySelectorAll("[data-regiao]").forEach((botao,i)=>{
    const primeira = inicioDaRegiao(i);
    const n = atlasPerguntas[i].length;
    const marcadas = respostas.slice(primeira, primeira+n).filter(respostaValida).length;
    botao.querySelector(".region-count").textContent = marcadas+"/"+n;
  });
  el("quiz").querySelectorAll("[data-pergunta]").forEach(botao=>{
    const marcado = respostaValida(respostas[Number(botao.dataset.pergunta)]);
    botao.classList.toggle("answered",marcado);
    botao.title = marcado ? "Respondida" : "Em aberto";
  });
  el("avancar").disabled = !respostaValida(respostas[etapa]);
  if (preenchidas===respostas.length) el("avancar").textContent="Ver resultado →";
  else if (etapa===respostas.length-1 && respostaValida(respostas[etapa])) {
    const falta=respostas.findIndex(r=>!respostaValida(r));
    el("avancar").textContent="Ir à pergunta "+(falta+1)+" →";
  }
  el("start").firstChild.textContent=preenchidas===respostas.length?"Ver meu resultado ":preenchidas?"Continuar o teste ":"Começar o teste ";
  el("start").hash=preenchidas===respostas.length?"resultado":destino(respostas.findIndex(r=>!respostaValida(r)));
}
function card(a,b) {
  const pri=atlasTracos[a], sec=atlasTracos[b], slug=pri.slug+"-"+sec.slug;
  return '<a class="card" style="--accent:'+pri.cor+'" href="relatorios/'+slug+'.pdf" target="_blank" rel="noopener">'+
    '<img class="cover" src="assets/capas/'+slug+'.webp" alt="" loading="lazy">'+
    '<div class="card-copy"><span class="tag">'+pri.nome+' + '+sec.nome+'</span><h3>'+atlasTitulos[slug]+'</h3>'+
    '<span class="open">Abrir revista em PDF ↗</span></div></a>';
}
function desenharBiblioteca() {
  el("filtros").innerHTML=["Todos",...atlasTracos.map(t=>t.nome)].map((s,i)=>
    '<button type="button" aria-pressed="'+(i-1===filtro)+'" data-filtro="'+(i-1)+'">'+s+'</button>').join("");
  const pares=atlasTracos.flatMap((t,a)=>atlasTracos.flatMap((u,b)=>a!==b&&(filtro<0||a===filtro)?[card(a,b)]:[]));
  el("catalogo").innerHTML=pares.join("");
  el("filtros").querySelectorAll("button").forEach(b=>b.onclick=()=>{
    filtro=Number(b.dataset.filtro);desenharBiblioteca();el("filtros").querySelector('[aria-pressed="true"]').focus();
  });
}
function desenharResultado() {
  const r=calcularAtlas(respostas);
  if (!r) {
    const falta=respostas.findIndex(v=>!respostaValida(v));
    el("result").innerHTML='<div class="intro"><p class="kicker">Resultado</p><h1>Complete as seis regiões</h1>'+
      '<p class="lead">Marque uma alternativa em cada pergunta para ver o resultado e abrir os relatórios.</p></div>'+
      '<a class="btn" href="'+destino(falta)+'">Ir à pergunta '+(falta+1)+' →</a>';return;
  }
  const nomes=indices=>indices.map(i=>atlasTracos[i].nome).join(" · ");
  let linha="Traço primário", titulo=nomes(r.primeiros);
  let descricao=r.segundos.length ? "Traço secundário · "+nomes(r.segundos) : "Todas as respostas correspondem a este traço. O resultado tem apenas um primário.";
  if (r.primeiros.length>1) {linha="Empate no primeiro lugar";descricao="As primeiras posições têm a mesma pontuação. Abaixo estão os relatórios de todas as ordens compatíveis.";}
  else if (r.segundos.length>1) descricao="Empate na segunda posição entre "+nomes(r.segundos)+". Consulte as combinações abaixo.";
  const distribuicao = r.ordem.map(i=>'<div class="score" style="--accent:'+atlasTracos[i].cor+'"><div class="between"><strong>'+atlasTracos[i].nome+'</strong>'+
    '<span>'+r.totais[i]+' de '+respostas.length+' · '+(r.totais[i]/respostas.length).toLocaleString("pt-BR",{style:"percent",maximumFractionDigits:1})+'</span></div>'+
    '<div class="bar"><i style="width:'+(r.totais[i]*100/respostas.length)+'%"></i></div></div>').join("");
  el("result").innerHTML='<div class="intro"><p class="kicker">Resultado · '+respostas.length+' respostas</p><h1>Sua <em>combinação</em></h1></div>'+
    '<div class="r-layout"><div class="r-summary"><span class="tag">'+linha+'</span><h2>'+titulo+'</h2><p>'+descricao+'</p>'+
    '<p>Os percentuais mostram quantas das suas escolhas correspondem a cada traço do atlas. O formato do corpo por si só não determina personalidade ou diagnóstico.</p></div>'+
    '<div class="r-panel">'+distribuicao+'</div></div>'+
    (r.pares.length?'<h2 class="subhead">'+(r.pares.length===1?'Relatório da combinação':'Relatórios compatíveis')+'</h2><div class="catalog">'+r.pares.map(([a,b])=>card(a,b)).join("")+'</div>':'')+
    '<details class="revisions"><summary>Ver a contagem por região</summary><div class="table-wrap"><table><thead><tr><th>Região</th>'+
    atlasTracos.map(t=>'<th scope="col">'+t.nome+'</th>').join("")+'</tr></thead><tbody>'+
    r.porRegiao.map((valores,i)=>'<tr><th scope="row">'+atlasRegioes[i].name+'</th>'+valores.map(v=>'<td>'+v+'</td>').join("")+'</tr>').join("")+'</tbody></table></div></details>'+
    '<details class="revisions"><summary>Conferir as '+respostas.length+' respostas</summary><div class="table-wrap"><table><thead><tr><th>Região</th><th>Pergunta</th><th>Descrição escolhida</th><th>Traço no atlas</th></tr></thead><tbody>'+
    respostas.map((v,i)=>{const item=atlasItens[i];return '<tr><th scope="row">'+atlasRegioes[item.regiao].name+'</th><td><a href="'+destino(i)+'">'+item.question+'</a></td><td>'+item.options[v]+'</td><td>'+atlasTracos[v].nome+'</td></tr>'}).join("")+'</tbody></table></div></details>'+
    '<div class="result-actions"><a class="plain" href="#teste-1">Revisar respostas</a><button class="link-btn" id="imprimir">Imprimir resultado</button><button class="link-btn" id="zerar">Iniciar novo teste</button></div>';
  el("imprimir").onclick=()=>window.print();
  el("zerar").onclick=()=>{
    if (!window.confirm("Apagar as respostas atuais e começar um novo teste?")) return;
    respostas.fill(null);irEtapa(0);
  };
}
function navegar() {
  const hash=location.hash.slice(1);
  const parte=/^teste-([1-6])(?:-([1-5]))?$/.exec(hash);
  const dest=parte?"teste":(["teste","biblioteca","resultado","metodo"].includes(hash)?hash:"inicio");
  if (parte) etapa=inicioDaRegiao(Number(parte[1])-1)+Number(parte[2]||1)-1;
  document.querySelectorAll(".view").forEach(s=>s.hidden=s.id!==dest);
  document.querySelectorAll(".mast nav a").forEach(a=>{
    if (a.hash==="#"+dest) a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
  if (dest==="teste") desenharTeste();
  if (dest==="biblioteca") desenharBiblioteca();
  if (dest==="resultado") desenharResultado();
  if(hash) el("conteudo").focus({preventScroll:true});
  window.scrollTo({top:0,behavior:"instant"});
}
montarIndice();
window.addEventListener("hashchange",navegar);
navegar();
