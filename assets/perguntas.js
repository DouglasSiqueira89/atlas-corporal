"use strict";

const atlasPerguntas = [
  [
    {
      "question": "Vendo seu rosto de frente, qual forma resume melhor o contorno da cabeça?",
      "options": [
        "Comprida, com a testa em destaque.",
        "Arredondada, com curvas nas bochechas.",
        "Larga no alto e estreita no queixo.",
        "Quadrangular, com laterais quase retas.",
        "Com proporções semelhantes entre testa, meio do rosto e queixo."
      ]
    },
    {
      "question": "Da testa até a região dos olhos, qual detalhe se destaca?",
      "options": [
        "A testa se projeta e as têmporas se estreitam.",
        "A curva da testa continua no arredondado das bochechas.",
        "Essa é a faixa mais larga do rosto.",
        "As linhas da testa e das laterais formam cantos.",
        "A altura da testa se parece com a do terço médio do rosto."
      ]
    },
    {
      "question": "Seguindo o contorno das bochechas para baixo, que linha você traçaria?",
      "options": [
        "Uma linha comprida que destaca a altura do rosto.",
        "Um arco em volta da parte mais cheia da bochecha.",
        "Uma diagonal que vai ficando cada vez mais perto do queixo.",
        "Uma linha quase vertical que vira no ângulo da mandíbula.",
        "Uma linha que marca a maçã do rosto e depois delineia a mandíbula."
      ]
    },
    {
      "question": "Ao comparar queixo e mandíbula, qual descrição mais se aproxima do que você vê?",
      "options": [
        "O trecho inferior acompanha o formato comprido da cabeça.",
        "O queixo termina em curva, como as bochechas.",
        "O queixo forma a ponta mais estreita do rosto.",
        "As duas laterais da mandíbula dão um aspecto quadrado à base.",
        "A borda da mandíbula é nítida e o queixo acompanha a proporção do rosto."
      ]
    },
    {
      "question": "Com o rosto ligeiramente virado, qual detalhe fica mais evidente?",
      "options": [
        "A projeção da testa em relação ao restante do perfil.",
        "O volume arredondado da bochecha.",
        "O contraste entre a parte superior ampla e a ponta do queixo.",
        "O ângulo entre a lateral do rosto e a base do maxilar.",
        "O desenho da maçã do rosto e da linha da mandíbula."
      ]
    }
  ],
  [
    {
      "question": "Ao olhar de frente, qual característica chama sua atenção primeiro?",
      "options": [
        "A abertura grande, com pálpebras de contorno visível.",
        "A abertura pequena e a borda inferior um pouco caída.",
        "O olhar se mantém dirigido ao mesmo ponto.",
        "A pálpebra superior parece pesada sobre o olho.",
        "O canto externo se eleva e dá forma ao contorno."
      ]
    },
    {
      "question": "Ao observar os olhos por alguns segundos no espelho, o que você percebe com mais clareza?",
      "options": [
        "Consigo acompanhar a borda das pálpebras em torno da abertura ampla.",
        "A pálpebra ou a linha inferior desce suavemente.",
        "Percebo principalmente a continuidade do olhar em uma direção.",
        "As sobrancelhas se aproximam na região entre os olhos.",
        "As linhas das pálpebras se encontram em uma ponta voltada para cima."
      ]
    },
    {
      "question": "O que mais se destaca na faixa entre as sobrancelhas e os olhos?",
      "options": [
        "A dobra superior desenha um arco visível sobre o olho.",
        "A pálpebra acompanha a abertura pequena e sua linha descendente.",
        "Minha atenção vai para o olhar mantido de frente.",
        "Vejo a aproximação das sobrancelhas junto à pálpebra superior baixa.",
        "O traçado da pálpebra superior se prolonga até o canto externo."
      ]
    },
    {
      "question": "Ao passar para a região logo abaixo dos olhos, qual detalhe você nota mais?",
      "options": [
        "Um sulco marcado abaixo de uma abertura ampla.",
        "A linha da pálpebra inferior faz uma curva para baixo.",
        "Ainda se destaca o ponto para onde o olhar está dirigido.",
        "Há um volume visível logo abaixo da pálpebra inferior.",
        "A borda inferior converge para o canto de fora, que fica mais alto."
      ]
    },
    {
      "question": "Se fosse esboçar seus olhos, por onde começaria?",
      "options": [
        "Pelos arcos que envolvem a íris e mostram a abertura do olho.",
        "Pela curva descendente em torno de uma abertura menor.",
        "Pela posição da íris para representar a direção sustentada do olhar.",
        "Pela proximidade das sobrancelhas e a sobreposição da pálpebra superior.",
        "Pela linha alongada que termina no canto externo elevado."
      ]
    }
  ],
  [
    {
      "question": "Com a boca em repouso, como os lábios aparecem?",
      "options": [
        "Finos, com pouca superfície visível.",
        "Cheios, de bordas arredondadas.",
        "Um lado tem desenho diferente do outro.",
        "Próximos e comprimidos numa linha.",
        "De volume moderado, com bordas bem definidas."
      ]
    },
    {
      "question": "Ao seguir a linha de encontro entre os lábios, que trajeto você vê?",
      "options": [
        "Uma linha discreta entre faixas estreitas.",
        "Uma linha curva entre duas partes volumosas.",
        "O trajeto muda de inclinação de um lado para o outro.",
        "Uma faixa fechada, com trechos quase retos.",
        "Uma divisão nítida entre os contornos superior e inferior."
      ]
    },
    {
      "question": "O que acontece nos cantos da sua boca quando começa a sorrir?",
      "options": [
        "Chamam pouca atenção junto ao contorno fino dos lábios.",
        "O sorriso se abre e deixa boa parte dos dentes visível.",
        "Um canto sobe mais que o outro.",
        "Um dos lábios continua com um trecho reto ao sorrir.",
        "Os dois cantos acompanham o desenho bem delineado dos lábios."
      ]
    },
    {
      "question": "Se você desenhasse só a borda externa dos lábios, qual detalhe marcaria?",
      "options": [
        "A pequena distância entre as bordas de cima e de baixo.",
        "As curvas que dão volume à boca e podem formar um leve bico.",
        "A diferença entre os comprimentos ou alturas dos dois lados.",
        "O vinco que pode descer de um canto em direção ao queixo.",
        "Os limites precisos que separam os lábios da pele ao redor."
      ]
    },
    {
      "question": "Ao voltar do sorriso à posição de repouso, o que mais se percebe?",
      "options": [
        "A boca volta a parecer uma faixa fina no rosto.",
        "Os lábios podem ficar levemente entreabertos, com abertura arredondada.",
        "A diferença de desenho entre os dois lados continua visível.",
        "Os lábios se encostam e a linha da boca se comprime.",
        "As curvas de cada lábio continuam fáceis de distinguir."
      ]
    }
  ],
  [
    {
      "question": "Olhando seu tronco de frente, qual desenho geral é o mais parecido?",
      "options": [
        "Longo e estreito, com alguns ângulos salientes.",
        "Arredondado desde os ombros até as laterais.",
        "Triangular, com os ombros formando a base mais larga.",
        "Compacto, de contorno próximo de um retângulo.",
        "Com cintura marcada e curvas acima e abaixo dela."
      ]
    },
    {
      "question": "Com os braços soltos, qual detalhe você percebe nos ombros?",
      "options": [
        "As extremidades dos ombros formam ângulos visíveis.",
        "A linha do ombro desce em curva até o braço.",
        "A distância entre os ombros supera a largura do início do quadril.",
        "Um ombro pode ficar mais alto que o outro.",
        "O contorno do ombro deixa perceber o desenho da musculatura."
      ]
    },
    {
      "question": "Seguindo a lateral do tronco em direção à cintura, o que acontece?",
      "options": [
        "O traço é longo e estreito e muda de direção em ângulos.",
        "A lateral mantém um traçado arredondado.",
        "Uma diagonal converge para uma cintura que fica próxima ao quadril.",
        "A largura varia pouco e a lateral parece reta.",
        "A lateral entra na cintura e volta a se abrir em direção ao quadril."
      ]
    },
    {
      "question": "De lado, em sua postura habitual, que aspecto aparece com mais clareza?",
      "options": [
        "Os ombros se projetam para a frente em relação ao tronco alongado.",
        "Os ombros arredondados descem e pode surgir uma concavidade no peito.",
        "A parte superior do tronco tende a se inclinar para a frente.",
        "A região de encontro das costas com o pescoço tem um relevo visível.",
        "O tronco se mantém ereto e a curva das costas aparece de perfil."
      ]
    },
    {
      "question": "Ao observar as costas, qual linha serviria de referência para o seu desenho?",
      "options": [
        "As saliências dos ombros sobre uma silhueta comprida.",
        "A curva que continua do ombro para o braço.",
        "As duas diagonais que partem dos ombros e se aproximam para baixo.",
        "A faixa relativamente plana entre as escápulas.",
        "Os limites dos músculos desenhados ao longo das costas."
      ]
    }
  ],
  [
    {
      "question": "Em pé, como se desenham as laterais do seu quadril?",
      "options": [
        "São estreitas, com um recuo visível junto ao osso da bacia.",
        "Formam curvas mais cheias perto da base.",
        "Começam mais afastadas e convergem em direção às coxas.",
        "Descem quase retas, formando dois lados de um quadrado.",
        "Fazem curvas arredondadas que acompanham o restante da silhueta."
      ]
    },
    {
      "question": "Se dividir a região do quadril em metade superior e inferior, onde percebe mais volume?",
      "options": [
        "Há pouco volume nas duas metades, com os ossos mais aparentes.",
        "A metade de baixo concentra o arredondado.",
        "A metade de cima é visivelmente mais larga.",
        "As duas metades têm largura próxima e limites retos.",
        "O volume se distribui numa curva arredondada com a base elevada."
      ]
    },
    {
      "question": "O que você percebe no perfil da região dos glúteos?",
      "options": [
        "Pouca projeção, deixando o perfil quase reto.",
        "A parte de baixo da curva se projeta mais.",
        "Há pouco relevo atrás, mesmo com a parte de cima do quadril mais larga.",
        "O contorno parece compacto e fechado.",
        "A curva se projeta para trás e sobe, com limite bem desenhado."
      ]
    },
    {
      "question": "Na passagem entre quadril e coxas, qual detalhe mais se destaca?",
      "options": [
        "O quadril é estreito e pode haver espaço entre o alto das coxas.",
        "O volume arredondado aparece logo acima do início das coxas.",
        "O contorno afunila ao se aproximar da coxa.",
        "A lateral reta prossegue até o fim da região dos glúteos.",
        "Uma curva arredondada delimita os glúteos antes da coxa."
      ]
    },
    {
      "question": "Ao comparar quadril e tronco na mesma imagem, qual relação você vê?",
      "options": [
        "A bacia chama atenção pelo contorno estreito e pelas saliências ósseas.",
        "As curvas do quadril ficam mais cheias na parte inferior da silhueta.",
        "O tronco parece largo em relação ao quadril que vai se estreitando.",
        "O quadril parece um bloco de laterais paralelas sob o tronco.",
        "A largura do quadril acompanha as proporções do restante do corpo."
      ]
    }
  ],
  [
    {
      "question": "Olhando suas pernas por inteiro, qual proporção mais se destaca?",
      "options": [
        "O comprimento em relação à pequena largura.",
        "As formas arredondadas, às vezes em pernas mais curtas.",
        "As coxas concentram mais largura que a parte de baixo.",
        "A largura se mantém parecida da coxa à panturrilha.",
        "Os volumes musculares aparecem desenhados e proporcionais."
      ]
    },
    {
      "question": "Em pé, com as pernas na posição habitual, o que se destaca perto dos joelhos?",
      "options": [
        "A articulação se sobressai entre duas porções estreitas.",
        "Os joelhos tendem a se aproximar um do outro.",
        "O joelho marca a transição entre coxa larga e panturrilha mais fina.",
        "Os joelhos e os pés podem apontar um pouco para fora.",
        "O desenho do músculo da coxa é visível junto ao joelho."
      ]
    },
    {
      "question": "Da coxa até a panturrilha, como muda a largura da perna?",
      "options": [
        "Permanece estreita, com mudança de contorno nas articulações.",
        "As curvas de cima e de baixo são arredondadas.",
        "Diminui bastante depois do joelho.",
        "A panturrilha volta a ter largura semelhante à da coxa.",
        "Os contornos da coxa e da panturrilha variam com o relevo dos músculos."
      ]
    },
    {
      "question": "Ao se apoiar naturalmente nos dois pés, o que percebe na posição das pernas?",
      "options": [
        "Pode haver espaço entre as pernas, com os joelhos bem marcados.",
        "As pernas fazem uma linha para dentro na altura dos joelhos.",
        "Os pés tendem a ficar afastados, sob coxas mais largas.",
        "As pernas ficam próximas, por vezes com os pés voltados para fora.",
        "Mesmo em repouso, permanece visível o desenho muscular das pernas."
      ]
    },
    {
      "question": "Observando as pernas de lado, que detalhe você registraria primeiro?",
      "options": [
        "A linha longa e fina, às vezes com o joelho estendido para trás.",
        "O volume arredondado que acompanha o comprimento da perna.",
        "A diferença de espessura entre a parte alta da coxa e a perna abaixo do joelho.",
        "O perfil de espessura uniforme, com pouco relevo muscular aparente.",
        "As curvas distintas que os músculos desenham na coxa e na panturrilha."
      ]
    }
  ]
];
