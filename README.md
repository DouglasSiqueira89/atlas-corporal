# Atlas corporal

Teste ilustrado de observação em português. O site abre diretamente pelo `index.html`. O projeto usa HTML, CSS e JavaScript estáticos, com imagens e 20 revistas em PDF incluídas.

## Usar o teste

Marque uma das cinco alternativas ilustradas em cada região. Você pode voltar e trocar uma resposta. Depois da sexta escolha, o site apresenta o total e o percentual dos cinco traços e abre acesso direto aos relatórios compatíveis. Em caso de empate, mostra os pares possíveis. Se as seis respostas corresponderem ao mesmo traço, o resultado terá apenas um primário. A biblioteca permite consultar as 20 revistas a qualquer momento.

As respostas permanecem na memória da página. Fechar ou recarregar o navegador apaga o preenchimento. Na tela de resultado, use **Imprimir resultado** para guardar uma cópia individual.

## Publicar no Netlify

Descompacte o ZIP do site. Abra o [Netlify Drop](https://app.netlify.com/drop) e arraste a pasta que contém o arquivo `index.html`. O questionário e os relatórios são estáticos e dispensam instalação. Se preferir usar o HTML avulso, salve-o como `index.html` em uma pasta e arraste essa pasta. O arquivo avulso já contém os desenhos e os 20 PDFs. [Guia de publicação manual do Netlify](https://docs.netlify.com/deploy/create-deploys/#deploy-with-drag-and-drop)

## Publicar a partir do GitHub

1. Descompacte o ZIP do projeto e coloque seu conteúdo na raiz de um repositório do GitHub. Mantenha juntos `index.html`, `assets/` e `relatorios/`.
2. No Netlify, importe o repositório e selecione o branch desejado. O arquivo `netlify.toml` define a raiz como diretório de publicação. Deixe o comando de build vazio. [Documentação do Netlify](https://docs.netlify.com/build/configure-builds/overview/)
3. Para usar a Vercel, importe o repositório, selecione **Other** como framework, a raiz do projeto como diretório e deixe o comando de build vazio. [Documentação da Vercel](https://vercel.com/docs/builds/configure-a-build)
4. Abra a implantação, preencha as seis regiões e abra o PDF do resultado. Os links dos PDFs são relativos e funcionam sob o domínio escolhido.

## Editar

- `assets/dados.js` contém os textos das perguntas e os títulos das revistas. As colunas das opções seguem a ordem Esquizoide, Oral, Psicopata, Masoquista e Rígido.
- `assets/pontuacao.js` conta uma ocorrência por resposta e calcula os empates. O HTML, o Excel e o modelo Google usam o mesmo critério.
- `assets/atlas.js` implementa a navegação, as fichas, a biblioteca e o resultado. `assets/atlas.css` controla tipografia, cores e impressão.
- Os PDFs em `relatorios/` e suas capas em `assets/capas/` usam o mesmo nome no formato `primario-secundario`.

## Referência de leitura

As seis regiões e as descrições observacionais seguem a apostila *O Corpo Explica*, páginas 100 a 112. As perguntas, imagens, cenas e exercícios das revistas foram criados para esta adaptação didática. Cada resposta tem o mesmo peso e o percentual expressa a frequência daquele traço entre as seis escolhas. O formato do corpo por si só não determina personalidade ou diagnóstico.

Na preparação desta edição, a apostila OCE foi a referência acessível. Os oito outros anexos indicados estavam apenas na nuvem do OneDrive.
