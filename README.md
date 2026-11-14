# Atlas corporal

Atlas corporal de Douglas Siqueira. O questionário ilustrado tem 30 perguntas e 20 revistas em PDF. A página abre diretamente pelo `index.html`. [Acesso ao questionário](https://atlas-corporal.netlify.app/#teste-1)

Uso pessoal e intransferível. É proibido copiar, encaminhar ou redistribuir este material sem autorização de Douglas Siqueira.

## Usar o teste

Responda a cinco perguntas sobre cada região do corpo, marcando uma alternativa por pergunta. Você pode voltar e trocar uma resposta. Após as 30 escolhas, o site mostra a contagem e o percentual de cada traço no total, a contagem por região e os relatórios compatíveis com as primeiras posições. Em caso de empate, mostra os pares possíveis. Se todas as respostas corresponderem ao mesmo traço, o resultado terá apenas um primário.

As respostas permanecem na memória da página. Fechar ou recarregar o navegador apaga o preenchimento. Na tela de resultado, use **Imprimir resultado** para guardar uma cópia individual.

## Publicar no Netlify

Descompacte o ZIP do site. Abra o [Netlify Drop](https://app.netlify.com/drop) e arraste a pasta que contém o arquivo `index.html`. O questionário e os relatórios são estáticos e dispensam instalação. Se preferir usar o HTML avulso, salve-o como `index.html` em uma pasta e arraste essa pasta. O arquivo avulso já contém os desenhos e os 20 PDFs. [Guia de publicação manual do Netlify](https://docs.netlify.com/deploy/create-deploys/#deploy-with-drag-and-drop)

## Publicar a partir do GitHub

1. Descompacte o ZIP do projeto e coloque seu conteúdo na raiz de um repositório do GitHub. Mantenha juntos `index.html`, `assets/` e `relatorios/`.
2. No Netlify, importe o repositório e selecione o branch desejado. O arquivo `netlify.toml` define a raiz como diretório de publicação. Deixe o comando de build vazio. [Documentação do Netlify](https://docs.netlify.com/build/configure-builds/overview/)
3. Para usar a Vercel, importe o repositório, selecione **Other** como framework, a raiz do projeto como diretório e deixe o comando de build vazio. [Documentação da Vercel](https://vercel.com/docs/builds/configure-a-build)
4. Abra a implantação, preencha as seis regiões e abra o PDF do resultado. Os links dos PDFs são relativos e funcionam sob o domínio escolhido.

## Editar

- `assets/perguntas.js` contém as perguntas agrupadas por região. Os índices das alternativas correspondem a Esquizoide, Oral, Psicopata, Masoquista e Rígido, nessa ordem. A interface varia as posições apresentadas na tela, preservando o índice de cada escolha. `assets/dados.js` identifica as regiões e as revistas.
- `assets/pontuacao.js` conta uma ocorrência por resposta e calcula os empates. O HTML, o Excel e o modelo Google usam o mesmo critério.
- `assets/atlas.js` implementa a navegação, as fichas, a biblioteca e o resultado. `assets/atlas.css` controla tipografia, cores e impressão.
- Os PDFs em `relatorios/` e suas capas em `assets/capas/` usam o mesmo nome no formato `primario-secundario`.

## Referência de leitura

As seis regiões e as descrições observacionais seguem a apostila *O Corpo Explica*, páginas 100 a 112. As perguntas, imagens, cenas e exercícios das revistas foram criados para esta adaptação didática. Cada resposta tem o mesmo peso e o percentual expressa a frequência daquele traço entre as 30 escolhas. O questionário serve ao estudo da abordagem. Não foi validado como instrumento psicológico.

Na preparação desta edição, a apostila OCE foi a referência acessível. Os oito outros anexos indicados estavam apenas na nuvem do OneDrive.
