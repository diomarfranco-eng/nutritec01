// ========== DATA: 50 RECEITAS ==========
    const recipes = [
      {
        id: 1,
        name: "Mousse de Frutas Amarelas",
        img: "https://i.pinimg.com/1200x/6d/d9/a0/6dd9a0e67c6d8d758872b25d3f0dc21d.jpg",
        desc: "Mousse leve de manga e maracujá com leite de coco. Textura cremosa e rica em vitaminas A e C.",
        texture: ["cremoso"],
        color: ["amarelo"],
        nutrients: ["vitamina-a", "vitamina-c"],
        allergens: [],
        prepTime: 15,
        cookTime: 10,
        totalTime: 145,
        servings: "6 porções",
        difficulty: "Fácil",
        ingredients: [
          "1 manga madura",
          "Polpa de 2 maracujás",
          "200 ml de leite de coco",
          "1 envelope de gelatina incolor",
          "3 colheres de sopa de água",
          "Adoçante a gosto (opcional)"
        ],
        steps: [
          "Separe todos os ingredientes na bancada — o ursinho chef organiza tudo antes de começar!",
          "Hidrate a gelatina na água fria por 2 minutos e dissolva em banho-maria ou micro-ondas até ficar líquida e sem gruminhos.",
          "No liquidificador, bata a manga, a polpa de maracujá e o leite de coco até ficar bem homogêneo e cremoso.",
          "Com o liquidificador ligado em velocidade baixa, despeje a gelatina dissolvida em fio e bata por mais 20 segundos.",
          "Prove e, se quiser, adoce levemente. Distribua em potinhos individuais.",
          "Leve à geladeira por cerca de 2 horas até firmar. Sirva gelado, decorando com um pedacinho de manga."
        ],
        tips: [
          "O ursinho recomenda potinhos transparentes e coloridos para a criança ver a cor amarela alegre.",
          "Convide a criança a ajudar a colocar a mousse nos potinhos — participar aumenta a curiosidade.",
          "Ofereça só uma colherinha no começo, sem pressão. Qualquer experimentação já é vitória!"
        ]
      },
      {
        id: 2,
        name: "Purê de Abóbora ou Batata-doce",
        img: "https://i.pinimg.com/1200x/4e/9b/3c/4e9b3cc4ff934614f39607179f0c8830.jpg",
        desc: "Purê aveludado de abóbora ou batata-doce com azeite ou leite de coco. Alta em vitamina A.",
        texture: ["cremoso"],
        color: ["laranja"],
        nutrients: ["vitamina-a"],
        allergens: [],
        prepTime: 10,
        cookTime: 25,
        totalTime: 35,
        servings: "4 porções",
        difficulty: "Muito fácil",
        ingredients: [
          "500 g de abóbora ou batata-doce",
          "1 colher de sopa de azeite ou leite de coco",
          "Sal a gosto",
          "Canela (opcional)"
        ],
        steps: [
          "Lave, descasque e corte a abóbora ou batata-doce em cubos médios do mesmo tamanho para cozinhar por igual.",
          "Cozinhe no vapor ou em água fervente até furar facilmente com o garfo (cerca de 20 a 25 minutos).",
          "Escorra bem a água e amasse ainda morninho com um garfo ou processe até ficar bem lisinho.",
          "Adicione o azeite ou o leite de coco e o sal. Misture até incorporar.",
          "Se gostar, polvilhe uma pitadinha de canela. Sirva em tigelinhas, morninho."
        ],
        tips: [
          "O ursinho chama esse purê de “nuvem laranja” — use o nome para deixar a hora da refeição mais divertida.",
          "Coloque uma colher pequena ao lado de um alimento que a criança já aceita.",
          "A textura cremosa é perfeita para quem ainda não curte pedacinhos no prato."
        ]
      },
      {
        id: 3,
        name: "Purê de Abacate com Banana",
        img: "https://i.pinimg.com/736x/45/6e/c2/456ec22181945ab5435cd95f6f459f8b.jpg",
        desc: "Mistura cremosa de abacate e banana, rica em gorduras boas e vitamina C.",
        texture: ["cremoso"],
        color: ["verde", "amarelo"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 5,
        cookTime: 0,
        totalTime: 5,
        servings: "2 porções",
        difficulty: "Muito fácil",
        ingredients: [
          "1 abacate maduro",
          "1 banana madura",
          "Suco de meio limão (opcional)",
          "Canela (opcional)"
        ],
        steps: [
          "Escolha abacate e banana bem maduros (macios ao toque).",
          "Corte o abacate, retire o caroço e a polpa com uma colher.",
          "Amasse a banana e o abacate juntos com um garfo até ficar cremoso. Se preferir mais liso, use o processador.",
          "Pingue umas gotas de limão para não escurecer e, se quiser, uma pitada de canela.",
          "Sirva na hora em potinho individual."
        ],
        tips: [
          "O ursinho sugere começar com mais banana (doce) e ir aumentando o abacate aos poucos.",
          "Deixe a criança amassar com o garfo — a mão na massa ajuda a aceitar o novo sabor.",
          "Ótimo lanche da tarde: sirva com uma colher especial “do chef ursinho”."
        ]
      },
      {
        id: 4,
        name: "Creme de Espinafre ou Couve",
        img: "https://i.pinimg.com/736x/bc/34/15/bc3415d5048e702b96d5a4cbf583860d.jpg",
        desc: "Creme verde suave com batata ou mandioquinha. Fonte de ferro e vitaminas A e C.",
        texture: ["cremoso"],
        color: ["verde"],
        nutrients: ["ferro", "vitamina-a", "vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 20,
        totalTime: 30,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "2 xícaras de espinafre ou couve",
          "2 batatas ou 300 g de mandioquinha",
          "1 dente de alho",
          "1 colher de sopa de azeite",
          "Sal a gosto"
        ],
        steps: [
          "Descasque e corte as batatas (ou mandioquinha) e cozinhe até ficarem bem macias.",
          "Em uma panela, aqueça o azeite e refogue o alho. Acrescente o espinafre ou a couve e cozinhe até murchar.",
          "Junte o legume verde às batatas e bata no liquidificador ou processador até virar um creme liso.",
          "Se estiver muito grosso, adicione um pouco da água do cozimento. Ajuste o sal.",
          "Aqueça novamente se precisar e sirva morninho em tigelas pequenas."
        ],
        tips: [
          "O ursinho batizou de “creme do Hulk”: a cor verde vira brincadeira, não obrigação.",
          "No começo, use mais batata e pouco verde; aumente o espinafre conforme a criança aceitar.",
          "Sirva em tigela colorida com uma colherzinha divertida."
        ]
      },
      {
        id: 5,
        name: "Smoothie Colorido",
        img: "https://i.pinimg.com/736x/47/b9/2c/47b92c9c7b51a70d0fd1298346480b0e.jpg",
        desc: "Smoothie de banana, manga e morango ou abacaxi com leite de coco. Rico em vitaminas A e C.",
        texture: ["cremoso"],
        color: ["amarelo", "laranja", "vermelho"],
        nutrients: ["vitamina-a", "vitamina-c"],
        allergens: [],
        prepTime: 5,
        cookTime: 0,
        totalTime: 5,
        servings: "2 copos",
        difficulty: "Muito fácil",
        ingredients: [
          "1 banana",
          "Meia manga ou abacaxi",
          "4 a 5 morangos",
          "150 ml de leite de coco ou água"
        ],
        steps: [
          "Lave as frutas e retire cascas e cabinhos quando necessário.",
          "Coloque a banana, a manga (ou abacaxi), os morangos e o leite de coco (ou água) no liquidificador.",
          "Bata em velocidade alta até ficar bem cremoso e sem pedaços.",
          "Se estiver muito grosso, acrescente um pouco mais de líquido e bata de novo.",
          "Sirva imediatamente em copos coloridos, com canudo se a criança gostar."
        ],
        tips: [
          "O ursinho chama de “poção colorida do arco-íris” — deixe a criança escolher as frutas da vez.",
          "A textura líquida-cremosa facilita provar sem mastigar muito.",
          "Um canudo divertido transforma o momento em brincadeira."
        ]
      },
      {
        id: 6,
        name: "Creme de Cenoura",
        img: "https://i.pinimg.com/736x/ed/d9/98/edd998a6f15777e2118fef2831ea49d2.jpg",
        desc: "Creme suave de cenoura, opcionalmente com cúrcuma. Alto teor de vitamina A.",
        texture: ["cremoso"],
        color: ["laranja"],
        nutrients: ["vitamina-a"],
        allergens: [],
        prepTime: 10,
        cookTime: 20,
        totalTime: 30,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "4 cenouras",
          "1 batata pequena (opcional)",
          "1 colher de sopa de azeite",
          "Sal a gosto",
          "Cúrcuma (opcional)"
        ],
        steps: [
          "Lave, descasque e corte as cenouras (e a batata, se usar) em rodelas.",
          "Cozinhe em água ou caldo de legumes até ficarem bem macias.",
          "Bata no liquidificador com um pouco do líquido do cozimento até obter um creme liso.",
          "Volte à panela, adicione azeite, sal e a cúrcuma (se usar). Aqueça por 2 minutos mexendo.",
          "Sirva morninho em xícaras ou tigelinhas."
        ],
        tips: [
          "O ursinho ama a cor laranja intensa: apresente como “sopa do sol”.",
          "Porções pequeninas em xícara reduzem a pressão na hora de experimentar.",
          "Celebre qualquer gole ou colherada — o ursinho comemora junto!"
        ]
      },
      {
        id: 7,
        name: "Creme Simples de Morango",
        img: "https://i.pinimg.com/1200x/ef/c7/aa/efc7aafbaf2a33407a8387a3f25ed140.jpg",
        desc: "Creme rápido de morango com leite de coco. Vermelho vibrante e rico em vitamina C.",
        texture: ["cremoso"],
        color: ["vermelho"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 5,
        cookTime: 0,
        totalTime: 5,
        servings: "2 porções",
        difficulty: "Muito fácil",
        ingredients: [
          "1 xícara de morangos",
          "100 ml de leite de coco ou água",
          "Mel ou tâmara (opcional)"
        ],
        steps: [
          "Lave bem os morangos e retire os cabinhos.",
          "Coloque no liquidificador com o leite de coco ou a água.",
          "Bata até ficar cremoso e uniforme.",
          "Prove e adoce levemente com mel ou tâmara, se desejar.",
          "Sirva na hora em potinhos ou copinhos."
        ],
        tips: [
          "O ursinho gosta de potinhos transparentes para mostrar o vermelho vibrante.",
          "Chame de “iogurte de morango do chef” para soar especial.",
          "Deixe a criança colocar os morangos no liquidificador (com supervisão)."
        ]
      },
      {
        id: 8,
        name: "Panqueca de Batata-doce",
        img: "https://i.pinimg.com/736x/ba/1e/20/ba1e20830fa6b06a3b02574c39f7220f.jpg",
        desc: "Panquecas macias de batata-doce com aveia sem glúten e linhaça. Sem ovo e ricas em vitamina A.",
        texture: ["macio"],
        color: ["laranja"],
        nutrients: ["vitamina-a"],
        allergens: [],
        prepTime: 15,
        cookTime: 15,
        totalTime: 30,
        servings: "6 a 8 panquecas",
        difficulty: "Fácil",
        ingredients: [
          "1 xícara de batata-doce amassada",
          "Meia xícara de farelo de aveia sem glúten",
          "1 colher de sopa de linhaça + 3 de água",
          "Meia colher de chá de fermento",
          "Canela e sal",
          "Azeite para untar"
        ],
        steps: [
          "Misture a linhaça moída com 3 colheres de água e reserve 5 minutos até formar um gel.",
          "Em uma tigela, junte a batata-doce bem amassada, a aveia sem glúten, o gel de linhaça, o fermento, a canela e o sal.",
          "Mexa até formar uma massa homogênea. Se estiver muito firme, adicione um fio de água.",
          "Aqueça uma frigideira antiaderente com um fio de azeite em fogo médio-baixo.",
          "Coloque porções da massa, achate levemente e asse 2 a 3 minutos de cada lado até dourar.",
          "Sirva mornas, sozinhas ou com um pouco de purê de fruta."
        ],
        tips: [
          "O ursinho chef adora panqueca: use cortadores de estrela ou coração depois de assar.",
          "Deixe a criança ajudar a misturar a massa — as mãos na receita aumentam o interesse.",
          "Comece com meia panqueca no prato; sempre dá para repetir se quiser mais."
        ]
      },
      {
        id: 9,
        name: "Nhoque de Batata ou Batata-doce",
        img: "https://i.pinimg.com/1200x/de/e8/80/dee88061a2ee70acf7fb68785851ddff.jpg",
        desc: "Nhoques macios com farinha de arroz. Versão sem ovo, suave e fácil de mastigar.",
        texture: ["macio"],
        color: ["amarelo", "laranja"],
        nutrients: ["vitamina-a"],
        allergens: [],
        prepTime: 25,
        cookTime: 10,
        totalTime: 35,
        servings: "4 porções",
        difficulty: "Média",
        ingredients: [
          "500 g de batata ou batata-doce amassada",
          "1 a 1,5 xícara de farinha de arroz",
          "Sal a gosto",
          "Azeite para finalizar"
        ],
        steps: [
          "Amasse a batata ou batata-doce ainda morna até ficar bem lisa e deixe esfriar um pouco.",
          "Adicione o sal e vá incorporando a farinha de arroz até a massa não grudar nas mãos.",
          "Divida a massa, faça rolinhos finos e corte em pedacinhos do tamanho de uma mordida.",
          "Se quiser o formato clássico, pressione levemente cada nhoque com o garfo.",
          "Ferva água com sal e cozinhe os nhoques até subirem à superfície (2 a 3 minutos).",
          "Escorra com cuidado, regue com um fio de azeite e sirva."
        ],
        tips: [
          "O ursinho recomenda poucos nhoques no prato para não assustar quem está conhecendo o alimento.",
          "Cortar os rolinhos juntos vira uma brincadeira de cozinha.",
          "Sirva só com azeite no começo; molhos novos entram depois, com calma."
        ]
      },
      {
        id: 10,
        name: "Muffins de Banana e Cacau",
        img: "https://i.pinimg.com/1200x/0a/8b/e2/0a8be24e212240247574150af942d47b.jpg",
        desc: "Muffins macios de banana com cacau e aveia sem glúten. Doces naturalmente.",
        texture: ["macio"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 20,
        totalTime: 30,
        servings: "8 a 10 muffins",
        difficulty: "Fácil",
        ingredients: [
          "2 bananas amassadas",
          "1 xícara de farinha de aveia sem glúten",
          "2 colheres de sopa de cacau",
          "1 colher de sopa de chia",
          "1 colher de chá de fermento",
          "1/4 xícara de leite vegetal",
          "1 colher de sopa de óleo"
        ],
        steps: [
          "Pré-aqueça o forno a 180°C e unte forminhas de muffin (ou use forminhas de papel).",
          "Amasse bem as bananas e misture com o óleo e o leite vegetal.",
          "Acrescente a farinha de aveia sem glúten, o cacau, a chia e o fermento. Mexa só até incorporar.",
          "Distribua a massa nas forminhas, enchendo até cerca de 3/4 da altura.",
          "Asse por 18 a 22 minutos, até firmarem ao toque. Deixe esfriar um pouco antes de desenformar."
        ],
        tips: [
          "O ursinho diz que bolinho no formato de muffin costuma ser mais aceito do que fatia de bolo.",
          "Deixe a criança colocar a massa nas forminhas com uma colher.",
          "Ofereça no lanche, sem cobrança de “comer tudinho”."
        ]
      },
      {
        id: 11,
        name: "Panqueca de Banana e Aveia sem Glúten",
        img: "https://i.pinimg.com/736x/ba/1e/20/ba1e20830fa6b06a3b02574c39f7220f.jpg",
        desc: "Panquecas simples só com banana e aveia sem glúten. Sem ovo e sem lactose.",
        texture: ["macio"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 5,
        cookTime: 10,
        totalTime: 15,
        servings: "4 a 6 panquecas",
        difficulty: "Muito fácil",
        ingredients: [
          "1 banana amassada",
          "1/3 xícara de farelo de aveia sem glúten",
          "Água se necessário",
          "Canela",
          "Azeite para untar"
        ],
        steps: [
          "Misture banana, aveia e canela.",
          "Asse em frigideira em fogo baixo.",
          "2 minutos de cada lado.",
          "Sirva mornas."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Receita de 2 ingredientes.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 12,
        name: "Purê de Ervilha com Abacate",
        img: "https://i.pinimg.com/1200x/9b/8f/6b/9b8f6be47f1e7721e12ee66ea694af03.jpg",
        desc: "Purê macio de ervilha com abacate. Fonte de ferro e vitamina C.",
        texture: ["macio", "cremoso"],
        color: ["verde"],
        nutrients: ["ferro", "vitamina-c"],
        allergens: [],
        prepTime: 5,
        cookTime: 10,
        totalTime: 15,
        servings: "3 porções",
        difficulty: "Muito fácil",
        ingredients: [
          "1 xícara de ervilhas",
          "Meio abacate",
          "Fio de azeite",
          "Sal a gosto"
        ],
        steps: [
          "Cozinhe as ervilhas até macias.",
          "Bata com abacate, azeite e sal.",
          "Ajuste a textura com água do cozimento.",
          "Sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Chame de purê verde do dinossauro.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 13,
        name: "Biscoito Salgado de Grão-de-bico",
        img: "https://i.pinimg.com/1200x/68/ca/74/68ca74959d37c74095ebc38a7489a2c5.jpg",
        desc: "Biscoitos crocantes de grão-de-bico com polvilho e farinha de arroz. Sem ovo, ricos em ferro.",
        texture: ["crocante"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 15,
        cookTime: 25,
        totalTime: 40,
        servings: "20 biscoitos",
        difficulty: "Fácil",
        ingredients: [
          "1 xícara de grão-de-bico cozido",
          "Meia xícara de polvilho doce",
          "1/4 xícara de farinha de arroz",
          "2 colheres de sopa de azeite",
          "Sal e temperos"
        ],
        steps: [
          "Processe o grão-de-bico.",
          "Misture os secos e o azeite.",
          "Abra a massa e corte formatos.",
          "Asse a 180°C por 20 a 25 minutos.",
          "Deixe esfriar na forma."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Crocância agrada quem gosta de textura seca.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 14,
        name: "Cookies de Banana e Aveia sem Glúten",
        img: "https://i.pinimg.com/1200x/0a/8b/e2/0a8be24e212240247574150af942d47b.jpg",
        desc: "Cookies crocantes por fora e macios por dentro, sem ovo e sem açúcar refinado.",
        texture: ["crocante", "macio"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 15,
        totalTime: 25,
        servings: "10 a 12 cookies",
        difficulty: "Fácil",
        ingredients: [
          "2 bananas amassadas",
          "1,5 xícara de aveia sem glúten",
          "Canela",
          "Baunilha (opcional)",
          "Óleo de coco (opcional)"
        ],
        steps: [
          "Misture tudo.",
          "Faça bolinhas e achate na forma.",
          "Asse a 180°C por 12 a 15 minutos.",
          "Deixe esfriar para firmar."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Amassar banana é atividade divertida.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 15,
        name: "Chips de Batata-doce ou Abóbora",
        img: "https://i.pinimg.com/236x/8c/00/d0/8c00d01b2915f2fd481bcaa2bb1a72b7.jpg",
        desc: "Chips assados crocantes de batata-doce ou abóbora. Alternativa saudável ao salgadinho.",
        texture: ["crocante"],
        color: ["laranja"],
        nutrients: ["vitamina-a"],
        allergens: [],
        prepTime: 15,
        cookTime: 25,
        totalTime: 40,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "1 batata-doce grande ou 400 g de abóbora",
          "1 a 2 colheres de sopa de azeite",
          "Sal",
          "Páprica ou orégano (opcional)"
        ],
        steps: [
          "Pré-aqueça o forno a 190°C e forre as formas com papel manteiga.",
          "Descasque e corte a batata-doce ou a abóbora em fatias bem finas e uniformes.",
          "Em uma tigela, misture as fatias com azeite, sal e o tempero escolhido.",
          "Espalhe em camada única nas formas, sem sobrepor as fatias.",
          "Asse por 20 a 28 minutos, virando na metade do tempo, até ficarem crocantes e douradas.",
          "Deixe esfriar na forma — ficam mais crocantes depois de frios."
        ],
        tips: [
          "O ursinho trata os chips como “salgadinho especial da casa”.",
          "A crocância costuma agradar quem prefere texturas secas.",
          "Sirva em potinho pequeno, como petisco, sem pressão de refeição formal."
        ]
      },
      {
        id: 16,
        name: "Sopa Creme de Legumes",
        img: "https://i.pinimg.com/736x/9e/35/92/9e35926b9dddaaaf2533c58fac5ae565.jpg",
        desc: "Sopa cremosa de cenoura, batata e abobrinha. Suave, nutritiva e fácil de engolir.",
        texture: ["cremoso"],
        color: ["laranja", "amarelo"],
        nutrients: ["vitamina-a", "vitamina-c"],
        allergens: [],
        prepTime: 15,
        cookTime: 25,
        totalTime: 40,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "2 cenouras",
          "2 batatas",
          "1 abobrinha",
          "1 dente de alho",
          "Azeite e sal",
          "Água ou caldo de legumes"
        ],
        steps: [
          "Lave e pique a cenoura, a batata e a abobrinha em pedaços parecidos.",
          "Refogue o alho no azeite, acrescente os legumes e cubra com água ou caldo.",
          "Cozinhe até todos os legumes ficarem bem macios.",
          "Bata no liquidificador até virar um creme liso e homogêneo.",
          "Volte à panela, ajuste o sal e sirva morninho."
        ],
        tips: [
          "O ursinho gosta de servir em xícara colorida — parece um lanche aconchegante.",
          "A textura 100% cremosa evita surpresas de pedaços no meio.",
          "Dá para congelar em potinhos e ter sempre uma opção pronta."
        ]
      },
      {
        id: 17,
        name: "Iogurte de Coco Caseiro com Frutas",
        img: "https://i.pinimg.com/1200x/a9/45/ee/a945ee99d88fad2e45540f719af72015.jpg",
        desc: "Base cremosa de leite de coco gelificado com frutas frescas. Sem lactose.",
        texture: ["cremoso"],
        color: ["amarelo", "vermelho"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 5,
        totalTime: 135,
        servings: "4 potinhos",
        difficulty: "Fácil",
        ingredients: [
          "400 ml de leite de coco",
          "1 envelope de gelatina incolor",
          "Frutas picadas (morango, manga, banana)",
          "Mel a gosto (opcional)"
        ],
        steps: [
          "Dissolva a gelatina e misture ao leite de coco.",
          "Distribua nos potinhos e leve à geladeira.",
          "Após firmar, cubra com frutas.",
          "Sirva gelado."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Deixe a criança escolher as frutas de cima.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 18,
        name: "Hummus de Grão-de-bico",
        img: "https://i.pinimg.com/1200x/af/2e/72/af2e725fcebacf462f7656af84937c67.jpg",
        desc: "Pasta cremosa de grão-de-bico com azeite e limão. Rica em ferro e fibras.",
        texture: ["cremoso"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 0,
        totalTime: 10,
        servings: "6 porções",
        difficulty: "Muito fácil",
        ingredients: [
          "1 xícara de grão-de-bico cozido",
          "2 colheres de sopa de azeite",
          "Suco de meio limão",
          "Alho a gosto",
          "Sal",
          "Água para ajustar"
        ],
        steps: [
          "Bata todos os ingredientes no processador.",
          "Ajuste a água até ficar cremoso.",
          "Prove o sal.",
          "Sirva com palitos de legumes ou torradas sem glúten."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Combine com palitos de cenoura.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 19,
        name: "Purê de Maçã e Cenoura",
        img: "https://i.pinimg.com/1200x/02/27/a8/0227a843e2041595706c2a31c51c0de7.jpg",
        desc: "Purê adocicado naturalmente de maçã e cenoura. Vitamina A e C em textura macia.",
        texture: ["cremoso", "macio"],
        color: ["laranja", "amarelo"],
        nutrients: ["vitamina-a", "vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 15,
        totalTime: 25,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "2 maçãs",
          "2 cenouras",
          "Canela",
          "Água"
        ],
        steps: [
          "Descasque e pique maçãs e cenouras.",
          "Cozinhe com pouca água até amaciar.",
          "Amasse ou bata até purê.",
          "Adicione canela e sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Sabor doce natural facilita aceitação.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 20,
        name: "Mingau de Aveia sem Glúten",
        img: "https://i.pinimg.com/1200x/73/92/ca/7392ca5d17687a328cfec96e3453c334.jpg",
        desc: "Mingau cremoso de aveia sem glúten com banana ou frutas. Café da manhã reconfortante.",
        texture: ["cremoso"],
        color: ["amarelo"],
        nutrients: ["ferro", "calcio"],
        allergens: [],
        prepTime: 5,
        cookTime: 10,
        totalTime: 15,
        servings: "2 porções",
        difficulty: "Muito fácil",
        ingredients: [
          "1/2 xícara de aveia sem glúten",
          "1,5 xícara de leite vegetal",
          "1 banana amassada",
          "Canela"
        ],
        steps: [
          "Aqueça o leite vegetal.",
          "Adicione a aveia e mexa até engrossar.",
          "Incorpore a banana e a canela.",
          "Sirva morninho."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Consistência pode ser mais rala no início.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 21,
        name: "Bolinho de Chuva Assado de Banana",
        img: "https://i.pinimg.com/736x/e8/7d/e4/e87de4a1d42455780c35de1b720a3e23.jpg",
        desc: "Versão assada e sem glúten do bolinho de chuva, com banana. Macio e aromático.",
        texture: ["macio"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 20,
        totalTime: 30,
        servings: "12 bolinhos",
        difficulty: "Fácil",
        ingredients: [
          "2 bananas",
          "1 xícara de farinha de arroz ou aveia sem glúten",
          "1 colher de chá de fermento",
          "Canela",
          "Óleo para untar"
        ],
        steps: [
          "Amasse as bananas e misture o restante.",
          "Faça bolinhas e coloque em forma untada.",
          "Asse a 180°C por 18 a 20 minutos.",
          "Polvilhe canela se desejar."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Formato clássico de lanche escolar.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 22,
        name: "Tortinha de Legumes na Airfryer ou Forno",
        img: "https://i.pinimg.com/1200x/07/bd/1a/07bd1adc1c00a0e968ef615a1ad1d65e.jpg",
        desc: "Mini tortinhas com massa de batata e recheio de legumes. Macias e coloridas.",
        texture: ["macio"],
        color: ["laranja", "verde", "amarelo"],
        nutrients: ["vitamina-a", "vitamina-c"],
        allergens: [],
        prepTime: 20,
        cookTime: 20,
        totalTime: 40,
        servings: "6 tortinhas",
        difficulty: "Média",
        ingredients: [
          "3 batatas cozidas amassadas",
          "Cenoura e abobrinha raladas",
          "Sal e temperos",
          "Azeite"
        ],
        steps: [
          "Misture a batata com sal e forme base nas forminhas.",
          "Refogue os legumes e recheie.",
          "Leve ao forno ou airfryer até dourar.",
          "Sirva mornas."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Porção individual reduz pressão.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 23,
        name: "Arrozinho Colorido com Legumes Picados",
        img: "https://i.pinimg.com/1200x/d2/eb/4a/d2eb4a34177a8caab7e99cb4a469e808.jpg",
        desc: "Arroz soltinho com leguminhos bem picados. Cores e texturas suaves no mesmo prato.",
        texture: ["macio", "fibroso"],
        color: ["verde", "laranja", "amarelo", "vermelho"],
        nutrients: ["vitamina-a", "vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 20,
        totalTime: 30,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "1 xícara de arroz",
          "Cenoura, milho, ervilha e pimentão picados finos",
          "Alho e azeite",
          "Sal"
        ],
        steps: [
          "Refogue o alho e a cenoura.",
          "Adicione o arroz e a água.",
          "Nos últimos minutos, misture os outros legumes.",
          "Solte com garfo e sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Separe as cores em ilhas no prato.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 24,
        name: "Wrap de Alface com Frango Desfiado",
        img: "https://i.pinimg.com/1200x/f4/9b/aa/f49baa29d61a9ae41fbf37744abcc3e4.jpg",
        desc: "Folhas de alface como wrap, recheadas com frango bem desfiado e macio. Sem glúten.",
        texture: ["macio", "fibroso"],
        color: ["verde"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 15,
        cookTime: 20,
        totalTime: 35,
        servings: "4 wraps",
        difficulty: "Fácil",
        ingredients: [
          "Folhas grandes de alface lisa",
          "Peito de frango desfiado",
          "Azeite, alho e sal",
          "Cenoura ralada (opcional)"
        ],
        steps: [
          "Cozinhe e desfie o frango bem fino.",
          "Tempere com azeite e alho.",
          "Coloque nas folhas de alface.",
          "Enrole e sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Textura do frango bem desfiado é mais aceita.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 25,
        name: "Polenta Mole de Milho",
        img: "https://i.pinimg.com/1200x/2b/62/5b/2b625b50a2be4cadf5be272cbac1a91a.jpg",
        desc: "Polenta cremosa e mole, servida quente. Conforto e cálcio quando feita com leite vegetal enriquecido.",
        texture: ["cremoso", "macio"],
        color: ["amarelo"],
        nutrients: ["calcio"],
        allergens: [],
        prepTime: 5,
        cookTime: 20,
        totalTime: 25,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "1 xícara de fubá",
          "4 xícaras de água ou leite vegetal",
          "Sal",
          "Azeite"
        ],
        steps: [
          "Ferva o líquido com sal.",
          "Chove o fubá mexendo sempre.",
          "Cozinhe em fogo baixo até engrossar e ficar macia.",
          "Finalize com azeite."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Consistência bem mole no início.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 26,
        name: "Geleia Caseira de Frutas sem Açúcar",
        img: "https://i.pinimg.com/1200x/3a/e6/83/3ae683d8f4bd2d1dbc41b254a399a352.jpg",
        desc: "Geleia espessa de morango ou manga só com fruta. Para espalhar em tapioca ou biscoito sem glúten.",
        texture: ["cremoso"],
        color: ["vermelho", "amarelo"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 5,
        cookTime: 20,
        totalTime: 25,
        servings: "1 pote",
        difficulty: "Fácil",
        ingredients: [
          "2 xícaras de fruta picada",
          "Suco de limão",
          "Chia (opcional, para engrossar)"
        ],
        steps: [
          "Cozinhe a fruta com limão em fogo baixo.",
          "Amasse e cozinhe até engrossar.",
          "Adicione chia se quiser mais firme.",
          "Esfrie e guarde na geladeira."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Use em cima de alimentos já aceitos.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 27,
        name: "Tapioca com Recheio Creme de Fruta",
        img: "https://i.pinimg.com/736x/1c/8a/78/1c8a7888cdd84c5f43f928cfeb6a5207.jpg",
        desc: "Tapioca fina recheada com creme de banana ou morango. Sem glúten e sem ovo.",
        texture: ["macio"],
        color: ["amarelo", "vermelho"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 5,
        cookTime: 5,
        totalTime: 10,
        servings: "2 unidades",
        difficulty: "Muito fácil",
        ingredients: [
          "4 colheres de sopa de goma de tapioca hidratada",
          "1 banana ou morangos amassados",
          "Pitada de sal"
        ],
        steps: [
          "Espalhe a goma na frigideira antiaderente.",
          "Quando firmar, recheie com a fruta amassada.",
          "Dobre e sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Textura elástica pode ser novidade: apresente aos poucos.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 28,
        name: "Croquete Assado de Batata e Legumes",
        img: "https://i.pinimg.com/736x/f2/9b/7d/f29b7d66c8f9fca399ae3453c0c0ad27.jpg",
        desc: "Croquetes assados, crocantes por fora e macios por dentro, com legumes escondidos.",
        texture: ["crocante", "macio"],
        color: ["amarelo", "laranja"],
        nutrients: ["vitamina-a", "ferro"],
        allergens: [],
        prepTime: 20,
        cookTime: 25,
        totalTime: 45,
        servings: "12 unidades",
        difficulty: "Fácil",
        ingredients: [
          "3 batatas cozidas",
          "Cenoura e abobrinha raladas e escorridas",
          "Farinha de arroz para empanar",
          "Sal e temperos",
          "Azeite"
        ],
        steps: [
          "Amasse a batata e misture os legumes.",
          "Modele croquetes e passe na farinha de arroz.",
          "Regue azeite e asse a 200°C até dourar.",
          "Sirva quentes."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Formato de salgadinho é atrativo.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 29,
        name: "Picolé Caseiro de Fruta",
        img: "https://i.pinimg.com/736x/c8/c1/58/c8c158d59b4c568068ef670284ffdbc9.jpg",
        desc: "Picolés de fruta batida com água ou leite de coco. Refrescantes e sem aditivos.",
        texture: ["cremoso"],
        color: ["vermelho", "amarelo", "laranja"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 0,
        totalTime: 250,
        servings: "6 picolés",
        difficulty: "Muito fácil",
        ingredients: [
          "2 xícaras de fruta (morango, manga, abacaxi)",
          "1/2 xícara de água ou leite de coco"
        ],
        steps: [
          "Bata a fruta com o líquido.",
          "Despeje em forminhas de picolé.",
          "Congele por 4 horas ou até firmar.",
          "Desenforme e sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Formato de picolé é lúdico.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 30,
        name: "Suflê de Legumes Leve",
        img: "https://i.pinimg.com/1200x/24/1e/d8/241ed84a2e504bfc25981b9e2ec5e86c.jpg",
        desc: "Suflê leve de cenoura ou espinafre, aerado e macio. Apresentação especial.",
        texture: ["macio"],
        color: ["laranja", "verde"],
        nutrients: ["vitamina-a", "ferro"],
        allergens: ["ovo"],
        prepTime: 15,
        cookTime: 25,
        totalTime: 40,
        servings: "4 porções",
        difficulty: "Média",
        ingredients: [
          "2 ovos",
          "1 xícara de legume cozido e amassado",
          "2 colheres de sopa de farinha de arroz",
          "Sal"
        ],
        steps: [
          "Separe claras e gemas.",
          "Misture gemas com o legume e a farinha.",
          "Bata as claras em neve e incorpore.",
          "Asse a 180°C em forminhas até crescer e dourar."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Contém ovo: use filtro de alergia se necessário.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 31,
        name: "Cuscuz de Milho com Legumes",
        img: "https://i.pinimg.com/236x/c9/57/8b/c9578b43c02dddaf92557fcefed4121b.jpg",
        desc: "Cuscuz nordestino macio com milho e legumes. Sem glúten e muito versátil.",
        texture: ["macio"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 15,
        totalTime: 25,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "2 xícaras de flocão de milho",
          "Água para umedecer",
          "Milho, ervilha e cenoura",
          "Sal e azeite"
        ],
        steps: [
          "Umedeça o flocão com água e sal.",
          "Coloque no cuscuzeiro com os legumes.",
          "Cozinhe no vapor até firmar.",
          "Desenforme e regue azeite."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Textura úmida e macia.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 32,
        name: "Patê de Atum ou Frango Caseiro",
        img: "https://i.pinimg.com/736x/fd/9b/26/fd9b266c9df3746a446e2d8a58a12577.jpg",
        desc: "Patê cremoso de atum ou frango com batata. Para espalhar em torradas sem glúten.",
        texture: ["cremoso"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 15,
        totalTime: 25,
        servings: "6 porções",
        difficulty: "Fácil",
        ingredients: [
          "1 lata de atum em água ou 1 xícara de frango desfiado",
          "1 batata cozida",
          "Azeite",
          "Sal e temperos suaves"
        ],
        steps: [
          "Amasse a batata.",
          "Misture o atum ou frango e o azeite.",
          "Ajuste temperos até cremoso.",
          "Sirva frio."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Espalhe em alimento já aceito (tapioca, biscoito).",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 33,
        name: "Bolinho de Arroz Assado",
        img: "https://i.pinimg.com/736x/4c/ab/81/4cab81e5559756c1be2df373d3873068.jpg",
        desc: "Bolinhos de arroz sobrado assados, crocantes por fora. Aproveitamento e textura interessante.",
        texture: ["crocante", "macio"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 15,
        cookTime: 25,
        totalTime: 40,
        servings: "12 bolinhos",
        difficulty: "Fácil",
        ingredients: [
          "2 xícaras de arroz cozido",
          "2 colheres de sopa de farinha de arroz",
          "Cenoura ralada",
          "Sal e temperos",
          "Azeite"
        ],
        steps: [
          "Misture o arroz com a farinha e a cenoura.",
          "Modele bolinhos.",
          "Pincele azeite e asse a 200°C até dourar.",
          "Sirva quentes."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Crocância externa costuma agradar.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 34,
        name: "Vitamina de Abacate",
        img: "https://i.pinimg.com/736x/89/7a/bd/897abd0c3773868845a2314d706649ae.jpg",
        desc: "Vitamina cremosa de abacate com leite vegetal e banana. Calórica e nutritiva de forma suave.",
        texture: ["cremoso"],
        color: ["verde"],
        nutrients: ["vitamina-c", "calcio"],
        allergens: [],
        prepTime: 5,
        cookTime: 0,
        totalTime: 5,
        servings: "2 copos",
        difficulty: "Muito fácil",
        ingredients: [
          "1 abacate",
          "1 banana",
          "200 ml de leite vegetal",
          "Mel (opcional)"
        ],
        steps: [
          "Bata tudo no liquidificador.",
          "Ajuste a espessura.",
          "Sirva gelado."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Ótima para crianças com baixo apetite.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 35,
        name: "Purê de Beterraba com Batata",
        img: "https://i.pinimg.com/736x/3f/4b/14/3f4b14aa2c031064bfc9e15018d08441.jpg",
        desc: "Purê roxo-avermelhado de beterraba e batata. Visual impactante e rico em nutrientes.",
        texture: ["cremoso"],
        color: ["vermelho"],
        nutrients: ["ferro", "vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 25,
        totalTime: 35,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "2 beterrabas",
          "2 batatas",
          "Azeite",
          "Sal"
        ],
        steps: [
          "Cozinhe beterraba e batata até macias.",
          "Amasse ou processe juntas.",
          "Adicione azeite e sal.",
          "Sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "A cor diferente desperta curiosidade.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 36,
        name: "Pão de Queijo Adaptado sem Lactose",
        img: "https://i.pinimg.com/736x/b4/9c/ce/b49cce28bf377431545d20b06bb28a42.jpg",
        desc: "Pão de queijo com polvilho e queijo vegetal ou sem queijo. Crocante por fora e macio por dentro.",
        texture: ["crocante", "macio"],
        color: ["amarelo"],
        nutrients: ["calcio"],
        allergens: ["ovo"],
        prepTime: 15,
        cookTime: 30,
        totalTime: 45,
        servings: "20 unidades",
        difficulty: "Fácil",
        ingredients: [
          "2 xícaras de polvilho azedo",
          "1 xícara de polvilho doce",
          "1/2 xícara de óleo",
          "1 xícara de água quente",
          "1 ovo",
          "Sal",
          "Queijo vegetal (opcional)"
        ],
        steps: [
          "Escalde os polvilhos com água e óleo.",
          "Espere esfriar, adicione ovo e sal.",
          "Modele e asse a 180°C por 25 a 30 minutos."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Contém ovo: filtre se houver alergia.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 37,
        name: "Salada de Frutas Macia",
        img: "https://i.pinimg.com/736x/1d/67/15/1d67157bace0cf3e50a4fcaab3bc76ca.jpg",
        desc: "Frutas maduras cortadas em cubos pequenos ou amassadas. Exploração de cores e sabores.",
        texture: ["macio"],
        color: ["vermelho", "amarelo", "verde", "laranja"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 0,
        totalTime: 10,
        servings: "4 porções",
        difficulty: "Muito fácil",
        ingredients: [
          "Banana, mamão, manga, morango",
          "Suco de laranja (opcional)"
        ],
        steps: [
          "Escolha frutas bem maduras.",
          "Corte em cubos pequenos ou amasse parcialmente.",
          "Regue suco de laranja se desejar.",
          "Sirva fresca."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Deixe a criança montar o pote de cores.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 38,
        name: "Bolinho de Espinafre e Batata",
        img: "https://i.pinimg.com/236x/52/25/bd/5225bd20fe6ffdfd4bb879fd9f2e80eb.jpg",
        desc: "Bolinhos assados verdes e macios. Ferro escondido em formato amigável.",
        texture: ["macio"],
        color: ["verde"],
        nutrients: ["ferro", "vitamina-a"],
        allergens: [],
        prepTime: 15,
        cookTime: 25,
        totalTime: 40,
        servings: "12 bolinhos",
        difficulty: "Fácil",
        ingredients: [
          "2 batatas amassadas",
          "1 xícara de espinafre refogado e picado",
          "2 colheres de farinha de arroz",
          "Sal",
          "Azeite"
        ],
        steps: [
          "Misture batata, espinafre e farinha.",
          "Modele bolinhos.",
          "Asse a 200°C até dourar levemente.",
          "Sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Verde em formato de bolinho costuma ir melhor.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 39,
        name: "Crepioca Doce de Banana",
        img: "https://i.pinimg.com/1200x/5e/76/62/5e7662079237bd90c8f61da73b69f518.jpg",
        desc: "Crepioca fina de tapioca e ovo com banana. Rápida e versátil (contém ovo).",
        texture: ["macio"],
        color: ["amarelo"],
        nutrients: ["ferro", "calcio"],
        allergens: ["ovo"],
        prepTime: 5,
        cookTime: 5,
        totalTime: 10,
        servings: "1 a 2 unidades",
        difficulty: "Muito fácil",
        ingredients: [
          "2 colheres de goma de tapioca",
          "1 ovo",
          "1 banana amassada",
          "Canela"
        ],
        steps: [
          "Misture tapioca e ovo.",
          "Despeje na frigideira antiaderente.",
          "Recheie com banana e canela.",
          "Dobre e sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Filtro de ovo se houver alergia.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 40,
        name: "Sopa de Feijão Bata no Liquidificador",
        img: "https://i.pinimg.com/1200x/b5/04/2a/b5042ac0c9a9cdef0c4ab5a5f6b77186.jpg",
        desc: "Feijão batido até virar creme, com leguminhos. Ferro em textura cremosa.",
        texture: ["cremoso"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 30,
        totalTime: 40,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "2 xícaras de feijão cozido com caldo",
          "Cenoura e batata",
          "Alho e azeite",
          "Sal"
        ],
        steps: [
          "Cozinhe cenoura e batata no caldo do feijão.",
          "Bata tudo até creme.",
          "Ajuste sal e azeite.",
          "Sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Textura de creme evita grãos inteiros.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 41,
        name: "Palitos de Cenoura e Pepino com Pastinha",
        img: "https://i.pinimg.com/736x/c7/a3/53/c7a35353758550236c971592286184e1.jpg",
        desc: "Legumes em palitos crocantes com pastinha cremosa de grão-de-bico ou abacate.",
        texture: ["crocante", "cremoso"],
        color: ["laranja", "verde"],
        nutrients: ["vitamina-a", "vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 0,
        totalTime: 10,
        servings: "2 porções",
        difficulty: "Muito fácil",
        ingredients: [
          "Cenoura e pepino em palitos",
          "Pastinha de grão-de-bico ou abacate",
          "Sal e limão"
        ],
        steps: [
          "Corte os legumes em palitos finos.",
          "Prepare a pastinha.",
          "Sirva lado a lado."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Brincar de molhar sem obrigação de morder.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 42,
        name: "Banana Assada com Canela",
        img: "https://i.pinimg.com/736x/d8/43/3d/d8433d52f11b044c501c6adfe7f7d60a.jpg",
        desc: "Banana assada até ficar macia e caramelizada naturalmente. Sobremesa simples.",
        texture: ["macio"],
        color: ["amarelo"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 5,
        cookTime: 15,
        totalTime: 20,
        servings: "2 porções",
        difficulty: "Muito fácil",
        ingredients: [
          "2 bananas",
          "Canela",
          "Fio de azeite ou óleo de coco (opcional)"
        ],
        steps: [
          "Corte as bananas ao meio no sentido do comprimento.",
          "Polvilhe canela.",
          "Asse a 180°C por 12 a 15 minutos.",
          "Sirva morna."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Doçura natural aumenta.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 43,
        name: "Bolinho de Carne com Legume Escondido",
        img: "https://i.pinimg.com/1200x/56/13/18/5613183a09679ce8954d9c0c217a4f8d.jpg",
        desc: "Almôndegas assadas com abobrinha ou cenoura ralada na massa. Proteína e ferro.",
        texture: ["macio"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: ["ovo"],
        prepTime: 15,
        cookTime: 20,
        totalTime: 35,
        servings: "12 bolinhos",
        difficulty: "Fácil",
        ingredients: [
          "300 g de carne moída",
          "1 abobrinha ralada escorrida",
          "1 ovo",
          "Farinha de arroz",
          "Sal e temperos"
        ],
        steps: [
          "Misture carne, legume, ovo e farinha.",
          "Modele bolinhos.",
          "Asse a 180°C por 18 a 20 minutos.",
          "Sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Contém ovo: atenção ao filtro.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 44,
        name: "Gelatina de Sucos Naturais",
        img: "https://i.pinimg.com/736x/ff/73/e1/ff73e1b387492c7df2bf7c090d86664b.jpg",
        desc: "Gelatina feita com suco natural de fruta. Textura tremente e cores vivas.",
        texture: ["cremoso", "macio"],
        color: ["vermelho", "amarelo", "laranja"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 5,
        totalTime: 140,
        servings: "6 porções",
        difficulty: "Fácil",
        ingredients: [
          "2 xícaras de suco natural de fruta",
          "1 envelope de gelatina incolor",
          "Água para hidratar"
        ],
        steps: [
          "Hidrate e dissolva a gelatina.",
          "Misture ao suco morno.",
          "Distribua em forminhas.",
          "Leve à geladeira até firmar."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Textura gelatinosa é exploração sensorial.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 45,
        name: "Omelete de Forno em Forminhas",
        img: "https://i.pinimg.com/1200x/31/84/ff/3184ff71e213f687107090186d1f37ea.jpg",
        desc: "Mini omeletes assados com espinafre ou cenoura. Porções individuais (contém ovo).",
        texture: ["macio"],
        color: ["verde", "amarelo"],
        nutrients: ["ferro", "vitamina-a", "calcio"],
        allergens: ["ovo"],
        prepTime: 10,
        cookTime: 18,
        totalTime: 28,
        servings: "6 a 8 unidades",
        difficulty: "Fácil",
        ingredients: [
          "4 ovos",
          "Espinafre ou cenoura ralada",
          "Sal",
          "Azeite para untar"
        ],
        steps: [
          "Bata os ovos com sal e o legume.",
          "Distribua em forminhas untadas.",
          "Asse a 180°C por 15 a 18 minutos.",
          "Desenforme e sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Filtro de ovo se necessário.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 46,
        name: "Purê de Inhame",
        img: "https://i.pinimg.com/236x/bf/79/24/bf79240f97ce27d4585eea0e19a3604a.jpg",
        desc: "Purê neutro e muito cremoso de inhame. Base suave para quem tem muita seletividade.",
        texture: ["cremoso"],
        color: ["amarelo"],
        nutrients: ["vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 25,
        totalTime: 35,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "500 g de inhame",
          "Azeite",
          "Sal",
          "Leite vegetal (opcional)"
        ],
        steps: [
          "Cozinhe o inhame até muito macio.",
          "Amasse bem.",
          "Adicione azeite, sal e líquido se quiser mais cremoso.",
          "Sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Sabor neutro é porta de entrada.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 47,
        name: "Barrinha Caseira de Frutas e Aveia",
        img: "https://i.pinimg.com/236x/08/93/9b/08939b588ea7cc5cc7af7d5f0b8fa53d.jpg",
        desc: "Barrinhas macias de aveia sem glúten, banana e frutas secas. Lanche portátil.",
        texture: ["macio"],
        color: ["amarelo"],
        nutrients: ["ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 20,
        totalTime: 30,
        servings: "8 barrinhas",
        difficulty: "Fácil",
        ingredients: [
          "2 bananas",
          "1,5 xícara de aveia sem glúten",
          "Frutas secas picadas (opcional)",
          "Canela"
        ],
        steps: [
          "Misture tudo.",
          "Amasse em forma forrada.",
          "Asse a 180°C por 18 a 20 minutos.",
          "Corte em barrinhas ao esfriar."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Prático para a escola.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 48,
        name: "Sopa de Tomate Caseira",
        img: "https://i.pinimg.com/736x/d7/0e/56/d70e569714b7adfbc75fa102c7438f7d.jpg",
        desc: "Sopa cremosa de tomate com cenoura. Vermelha, aconchegante e com vitamina C e A.",
        texture: ["cremoso"],
        color: ["vermelho", "laranja"],
        nutrients: ["vitamina-a", "vitamina-c"],
        allergens: [],
        prepTime: 10,
        cookTime: 25,
        totalTime: 35,
        servings: "4 porções",
        difficulty: "Fácil",
        ingredients: [
          "4 tomates",
          "1 cenoura",
          "Alho e cebola",
          "Azeite e sal",
          "Manjericão (opcional)"
        ],
        steps: [
          "Refogue alho e cebola.",
          "Adicione tomate e cenoura picados.",
          "Cozinhe até amaciar e bata.",
          "Ajuste sal e sirva."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Cor vermelha intensa.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 49,
        name: "Chips de Couve Assada",
        img: "https://i.pinimg.com/1200x/05/75/1a/05751a153d96b216e9bf77faeddf0b2a.jpg",
        desc: "Folhas de couve assadas até ficarem crocantes. Petisco verde surpreendente.",
        texture: ["crocante", "fibroso"],
        color: ["verde"],
        nutrients: ["vitamina-a", "vitamina-c", "ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 15,
        totalTime: 25,
        servings: "2 a 3 porções",
        difficulty: "Fácil",
        ingredients: [
          "Maço de couve",
          "Azeite",
          "Sal"
        ],
        steps: [
          "Lave e seque bem as folhas.",
          "Rasgue em pedaços, misture azeite e sal.",
          "Asse a 180°C por 10 a 15 minutos até crocante.",
          "Não deixe queimar."
        ],
        tips: [
          "O ursinho chef sugere oferecer em porção pequena, sem pressão para terminar o prato.",
          "Crocância pode conquistar quem rejeita folha crua.",
          "Deixe a criança explorar com os sentidos (ver, cheirar, tocar) antes de provar."
        ]
      },
      {
        id: 50,
        name: "Bowl de Frutas com Granola sem Glúten",
        img: "https://i.pinimg.com/736x/53/e8/9a/53e89ae93ae79b6b87dcdce4daa65c60.jpg",
        desc: "Frutas macias no fundo com granola crocante por cima. Dois contrastes de textura no mesmo prato.",
        texture: ["macio", "crocante"],
        color: ["vermelho", "amarelo", "verde"],
        nutrients: ["vitamina-c", "ferro"],
        allergens: [],
        prepTime: 10,
        cookTime: 0,
        totalTime: 10,
        servings: "2 bowls",
        difficulty: "Muito fácil",
        ingredients: [
          "Banana, morango, manga picados",
          "Granola sem glúten",
          "Iogurte de coco (opcional)"
        ],
        steps: [
          "Lave e corte as frutas maduras em pedaços pequenos e fáceis de pegar.",
          "Disponha as frutas no fundo do bowl, separando por cores se quiser.",
          "Na hora de servir, polvilhe a granola sem glúten por cima.",
          "Se desejar, adicione uma colher de iogurte de coco ao lado ou por cima.",
          "Sirva na hora para a granola continuar crocante."
        ],
        tips: [
          "O ursinho adora quando a criança monta as “camadas do tesouro” no bowl.",
          "O contraste macio (fruta) e crocante (granola) trabalha a aceitação sensorial.",
          "Não misture à força: cada alimento pode ficar no seu cantinho do prato."
        ]
      }
    ];

    // ========== STATE ==========
    let activeFilters = {
      texture: new Set(),
      color: new Set(),
      nutrient: new Set(),
      allergy: new Set()
    };

    // ========== RENDER CARDS ==========
    function renderRecipes() {
      const grid = document.getElementById('recipesGrid');
      const empty = document.getElementById('emptyState');
      const countEl = document.getElementById('resultsCount');

      const filtered = recipes.filter(recipe => {
        if (activeFilters.texture.size > 0) {
          const has = recipe.texture.some(t => activeFilters.texture.has(t));
          if (!has) return false;
        }
        if (activeFilters.color.size > 0) {
          const has = recipe.color.some(c => activeFilters.color.has(c));
          if (!has) return false;
        }
        if (activeFilters.nutrient.size > 0) {
          const has = recipe.nutrients.some(n => activeFilters.nutrient.has(n));
          if (!has) return false;
        }
        if (activeFilters.allergy.size > 0) {
          const hasAllergen = recipe.allergens.some(a => activeFilters.allergy.has(a));
          if (hasAllergen) return false;
        }
        return true;
      });

      countEl.textContent = `Mostrando ${filtered.length} receita${filtered.length !== 1 ? 's' : ''}`;

      if (filtered.length === 0) {
        grid.innerHTML = '';
        empty.classList.add('show');
        return;
      }
      empty.classList.remove('show');

      grid.innerHTML = filtered.map(r => `
        <article class="recipe-card" data-id="${r.id}" onclick="openModal(${r.id})">
          <div class="recipe-img" style="background-image:url('${r.img}')">
            <div class="recipe-tags">
              ${r.texture.map(t => `<span class="tag">${capitalize(t)}</span>`).join('')}
            </div>
          </div>
          <div class="recipe-body">
            <h3>${r.name}</h3>
            <div class="recipe-meta">
              <span>⏱️ ${r.totalTime} min</span>
              <span>👥 ${r.servings}</span>
              <span>📊 ${r.difficulty}</span>
            </div>
            <p class="recipe-desc">${r.desc}</p>
            <div class="recipe-footer">
              <span style="font-size:0.78rem;color:var(--muted)">${r.nutrients.map(n => nutrientLabel(n)).join(' · ')}</span>
              <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();openModal(${r.id})">Ver receita</button>
            </div>
          </div>
        </article>
      `).join('');
    }

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function nutrientLabel(n) {
      const map = {
        'vitamina-a': 'Vit. A',
        'vitamina-c': 'Vit. C',
        'ferro': 'Ferro',
        'calcio': 'Cálcio'
      };
      return map[n] || n;
    }

    function allergenLabel(a) {
      const map = {
        gluten: 'Glúten',
        lactose: 'Lactose',
        ovo: 'Ovo'
      };
      return map[a] || a;
    }

    // ========== FILTERS ==========
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const group = chip.closest('.filter-options').dataset.filter;
        const value = chip.dataset.value;

        if (chip.classList.contains('active')) {
          chip.classList.remove('active');
          activeFilters[group].delete(value);
        } else {
          chip.classList.add('active');
          activeFilters[group].add(value);
        }
        renderRecipes();
      });
    });

    document.getElementById('clearFilters').addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      activeFilters = {
        texture: new Set(),
        color: new Set(),
        nutrient: new Set(),
        allergy: new Set()
      };
      renderRecipes();
    });

    // ========== MODAL ==========
    function openModal(id) {
      const recipe = recipes.find(r => r.id === id);
      if (!recipe) return;

      document.getElementById('modalImg').style.backgroundImage = `url('${recipe.img}')`;

      const content = document.getElementById('modalContent');
      content.innerHTML = `
        <h2>${recipe.name}</h2>
        <div class="modal-tags">
          ${recipe.texture.map(t => `<span class="modal-tag">${capitalize(t)}</span>`).join('')}
          ${recipe.color.map(c => `<span class="modal-tag">${capitalize(c)}</span>`).join('')}
          ${recipe.nutrients.map(n => `<span class="modal-tag">${nutrientLabel(n)}</span>`).join('')}
          ${recipe.allergens.map(a => `<span class="modal-tag allergy">Contém ${allergenLabel(a)}</span>`).join('')}
          ${recipe.allergens.length === 0 ? '<span class="modal-tag">Sem alérgenos comuns</span>' : ''}
        </div>

        <div class="info-grid">
          <div class="info-box">
            <div class="label">⏱️ Preparo</div>
            <div class="value">${recipe.prepTime} min</div>
          </div>
          <div class="info-box">
            <div class="label">🔥 Cozimento</div>
            <div class="value">${recipe.cookTime} min</div>
          </div>
          <div class="info-box">
            <div class="label">⏳ Total</div>
            <div class="value">${recipe.totalTime} min</div>
          </div>
          <div class="info-box">
            <div class="label">👥 Porções</div>
            <div class="value">${recipe.servings}</div>
          </div>
          <div class="info-box">
            <div class="label">📊 Dificuldade</div>
            <div class="value">${recipe.difficulty}</div>
          </div>
        </div>

        <div class="modal-section">
          <h3>🥗 Ingredientes</h3>
          <ul class="ingredients-list">
            ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-section">
          <h3>👨‍🍳 Modo de Preparo</h3>
          <ol class="steps-list">
            ${recipe.steps.map(s => `<li>${s}</li>`).join('')}
          </ol>
        </div>

        <div class="modal-section">
          <h3>💡 Guia de Abordagem para Pais</h3>
          <div class="tips-box">
            ${recipe.tips.map(t => `<p>• ${t}</p>`).join('')}
          </div>
        </div>

        <div class="feedback-section">
          <h3>📝 Registrar Feedback da Criança</h3>
          <p style="font-size:0.88rem;color:var(--muted);margin-bottom:0.7rem;">Como a criança reagiu a esta receita?</p>
          <div class="feedback-btns" id="fbBtns-${recipe.id}">
            <button class="fb-btn" data-value="aceitou" onclick="selectFeedback(${recipe.id}, 'aceitou', this)">✅ Aceitou</button>
            <button class="fb-btn" data-value="experimentou" onclick="selectFeedback(${recipe.id}, 'experimentou', this)">👅 Experimentou</button>
            <button class="fb-btn" data-value="recusou" onclick="selectFeedback(${recipe.id}, 'recusou', this)">❌ Recusou</button>
            <button class="fb-btn" data-value="tocou" onclick="selectFeedback(${recipe.id}, 'tocou', this)">👆 Só tocou/cheirou</button>
          </div>
          <textarea class="feedback-note" id="fbNote-${recipe.id}" placeholder="Observações (opcional): o que gostou, o que rejeitou, contexto..."></textarea>
          <button class="btn btn-primary btn-sm" onclick="saveFeedback(${recipe.id})">Salvar registro</button>
          <div class="feedback-saved" id="fbSaved-${recipe.id}">✓ Feedback salvo com sucesso!</div>
        </div>
      `;

      const saved = JSON.parse(localStorage.getItem('nutritec_feedback') || '{}');
      if (saved[recipe.id]) {
        const fb = saved[recipe.id];
        document.querySelectorAll(`#fbBtns-${recipe.id} .fb-btn`).forEach(btn => {
          if (btn.dataset.value === fb.response) btn.classList.add('selected');
        });
        document.getElementById(`fbNote-${recipe.id}`).value = fb.note || '';
      }

      document.getElementById('modalOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      document.getElementById('modalOverlay').classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target === document.getElementById('modalOverlay')) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // ========== FEEDBACK ==========
    let currentFeedback = {};

    function selectFeedback(id, value, btn) {
      document.querySelectorAll(`#fbBtns-${id} .fb-btn`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      currentFeedback[id] = value;
    }

    function saveFeedback(id) {
      const response = currentFeedback[id] || document.querySelector(`#fbBtns-${id} .fb-btn.selected`)?.dataset.value;
      const note = document.getElementById(`fbNote-${id}`).value;

      if (!response) {
        alert('Selecione a reação da criança antes de salvar.');
        return;
      }

      const saved = JSON.parse(localStorage.getItem('nutritec_feedback') || '{}');
      saved[id] = {
        response,
        note,
        date: new Date().toISOString()
      };
      localStorage.setItem('nutritec_feedback', JSON.stringify(saved));

      const msg = document.getElementById(`fbSaved-${id}`);
      msg.style.display = 'block';
      setTimeout(() => { msg.style.display = 'none'; }, 3000);
    }

    // ========== MENU MOBILE ==========
    document.getElementById('menuToggle').addEventListener('click', () => {
      document.getElementById('mainNav').classList.toggle('open');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.getElementById('mainNav').classList.remove('open');
        }
      });
    });

    // Init
    renderRecipes();
