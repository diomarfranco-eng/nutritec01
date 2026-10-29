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
          "Hidrate e dissolva a gelatina.",
          "Bata manga, maracujá e leite de coco.",
          "Incorpore a gelatina e bata mais 20 segundos.",
          "Distribua em potinhos e leve à geladeira por 2 horas.",
          "Sirva gelado."
        ],
        tips: [
          "Use potinhos coloridos para valorizar a cor amarela.",
          "Deixe a criança ajudar a servir nos potinhos.",
          "Ofereça uma colherinha sem pressão."
        ]
      },
      {
        id: 2,
        name: "Purê de Abóbora ou Batata-doce",
        img: "https://images.unsplash.com/photo-1546549039-49b1be6b0e11?w=600&h=400&fit=crop",
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
          "Descasque e corte em cubos.",
          "Cozinhe até ficar bem macio.",
          "Amasse ou processe até ficar liso.",
          "Adicione azeite ou leite de coco e sal.",
          "Sirva morninho."
        ],
        tips: [
          "Chame de nuvem laranja.",
          "Ofereça ao lado de alimento já aceito.",
          "Textura ideal para quem rejeita pedaços."
        ]
      },
      {
        id: 3,
        name: "Purê de Abacate com Banana",
        img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=400&fit=crop",
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
          "Retire a polpa do abacate.",
          "Amasse com a banana até ficar cremoso.",
          "Acrescente limão e canela se desejar.",
          "Sirva na hora."
        ],
        tips: [
          "Comece com mais banana e aumente o abacate aos poucos.",
          "Deixe a criança amassar com o garfo.",
          "Ótimo como lanche da tarde."
        ]
      },
      {
        id: 4,
        name: "Creme de Espinafre ou Couve",
        img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop",
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
          "Cozinhe a batata até amaciar.",
          "Refogue o verde no azeite com alho.",
          "Bata tudo até ficar cremoso.",
          "Ajuste o sal e a consistência.",
          "Sirva morninho."
        ],
        tips: [
          "Chame de creme do Hulk.",
          "Comece com pouco verde e mais batata.",
          "Sirva em tigela colorida."
        ]
      },
      {
        id: 5,
        name: "Smoothie Colorido",
        img: "https://images.unsplash.com/photo-1623065422902-30a2d94b4c1e?w=600&h=400&fit=crop",
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
          "Coloque tudo no liquidificador.",
          "Bata até ficar cremoso.",
          "Ajuste o líquido se precisar.",
          "Sirva na hora com canudo."
        ],
        tips: [
          "Deixe a criança escolher as frutas.",
          "Chame de poção colorida.",
          "Textura líquida facilita a experimentação."
        ]
      },
      {
        id: 6,
        name: "Creme de Cenoura",
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
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
          "Corte e cozinhe as cenouras até amaciarem.",
          "Bata com um pouco do líquido.",
          "Adicione azeite, sal e cúrcuma.",
          "Aqueça 2 minutos e sirva."
        ],
        tips: [
          "A cor laranja chama atenção positiva.",
          "Ofereça em xícara pequena.",
          "Celebre qualquer degustação."
        ]
      },
      {
        id: 7,
        name: "Creme Simples de Morango",
        img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=400&fit=crop",
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
          "Lave e retire o cabinho dos morangos.",
          "Bata com o líquido até cremoso.",
          "Adoce se desejar.",
          "Sirva na hora."
        ],
        tips: [
          "Use potinhos transparentes.",
          "Pode chamar de iogurte de morango caseiro.",
          "Deixe a criança colocar os morangos no liquidificador."
        ]
      },
      {
        id: 8,
        name: "Panqueca de Batata-doce",
        img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
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
          "Faça o gel de linhaça e reserve 5 minutos.",
          "Misture todos os ingredientes.",
          "Asse em frigideira antiaderente 2 a 3 min de cada lado.",
          "Sirva mornas."
        ],
        tips: [
          "Formato familiar e convidativo.",
          "Use cortadores divertidos.",
          "Deixe a criança misturar a massa."
        ]
      },
      {
        id: 9,
        name: "Nhoque de Batata ou Batata-doce",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop",
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
          "Amasse a batata morna e deixe esfriar um pouco.",
          "Incorpore a farinha até não grudar.",
          "Faça rolinhos e corte os nhoques.",
          "Cozinhe em água fervente até subirem.",
          "Escorra e regue com azeite."
        ],
        tips: [
          "Formato de bolinha facilita o manuseio.",
          "Envolva a criança no corte.",
          "Sirva poucos no prato."
        ]
      },
      {
        id: 10,
        name: "Muffins de Banana e Cacau",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop",
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
          "Pré-aqueça o forno a 180°C.",
          "Misture os úmidos e depois os secos.",
          "Distribua nas forminhas.",
          "Asse 18 a 22 minutos.",
          "Deixe esfriar um pouco."
        ],
        tips: [
          "Formato de bolinho atrai crianças.",
          "Deixe colocar a massa nas forminhas.",
          "Sirva como lanche sem pressão."
        ]
      },
      {
        id: 11,
        name: "Panqueca de Banana e Aveia sem Glúten",
        img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&h=400&fit=crop",
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
          "Receita de 2 ingredientes.",
          "Corte em tiras para facilitar.",
          "Ofereça sem cobertura primeiro."
        ]
      },
      {
        id: 12,
        name: "Purê de Ervilha com Abacate",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop",
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
          "Chame de purê verde do dinossauro.",
          "Comece com quantidades pequenas.",
          "A cremosidade do abacate suaviza o sabor."
        ]
      },
      {
        id: 13,
        name: "Biscoito Salgado de Grão-de-bico",
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
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
          "Crocância agrada quem gosta de textura seca.",
          "Use cortadores divertidos.",
          "Ofereça como torradinha especial."
        ]
      },
      {
        id: 14,
        name: "Cookies de Banana e Aveia sem Glúten",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
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
          "Amassar banana é atividade divertida.",
          "Guarde em pote por até 3 dias.",
          "Ofereça no lanche da tarde."
        ]
      },
      {
        id: 15,
        name: "Chips de Batata-doce ou Abóbora",
        img: "https://images.unsplash.com/photo-1623238913973-21e14585d43b?w=600&h=400&fit=crop",
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
          "Corte em fatias bem finas.",
          "Misture com azeite e temperos.",
          "Disponha em camada única.",
          "Asse a 190°C por 20 a 28 minutos virando na metade.",
          "Deixe esfriar para ficar crocante."
        ],
        tips: [
          "Formato de salgadinho facilita aceitação.",
          "Deixe a criança espalhar as fatias.",
          "Ofereça em potinho como petisco."
        ]
      },
      {
        id: 16,
        name: "Sopa Creme de Legumes",
        img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=400&fit=crop",
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
          "Refogue o alho no azeite.",
          "Adicione os legumes picados e a água.",
          "Cozinhe até ficarem macios.",
          "Bata até ficar creme.",
          "Ajuste o sal e sirva."
        ],
        tips: [
          "Textura uniforme reduz rejeição sensorial.",
          "Sirva em xícara colorida.",
          "Pode congelar em porções."
        ]
      },
      {
        id: 17,
        name: "Iogurte de Coco Caseiro com Frutas",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
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
          "Deixe a criança escolher as frutas de cima.",
          "Aparência de sobremesa ajuda.",
          "Ótimo café da manhã ou lanche."
        ]
      },
      {
        id: 18,
        name: "Hummus de Grão-de-bico",
        img: "https://images.unsplash.com/photo-1560806887-1e4cd0b2108f?w=600&h=400&fit=crop",
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
          "Combine com palitos de cenoura.",
          "Deixe a criança molhar o legume na pasta.",
          "Sem pressão para comer o legume inteiro."
        ]
      },
      {
        id: 19,
        name: "Purê de Maçã e Cenoura",
        img: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600&h=400&fit=crop",
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
          "Sabor doce natural facilita aceitação.",
          "Sirva morninho ou frio.",
          "Pode ir na lancheira em potinho."
        ]
      },
      {
        id: 20,
        name: "Mingau de Aveia sem Glúten",
        img: "https://images.unsplash.com/photo-1587248720327-8eb725de89e6?w=600&h=400&fit=crop",
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
          "Consistência pode ser mais rala no início.",
          "Deixe decorar com fruta por cima.",
          "Rotina de café da manhã ajuda na aceitação."
        ]
      },
      {
        id: 21,
        name: "Bolinho de Chuva Assado de Banana",
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop",
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
          "Formato clássico de lanche escolar.",
          "Assado é mais leve que frito.",
          "Ofereça morno."
        ]
      },
      {
        id: 22,
        name: "Tortinha de Legumes na Airfryer ou Forno",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
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
          "Porção individual reduz pressão.",
          "Deixe a criança escolher o recheio.",
          "Bom para levar na lancheira."
        ]
      },
      {
        id: 23,
        name: "Arrozinho Colorido com Legumes Picados",
        img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop",
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
          "Separe as cores em ilhas no prato.",
          "Deixe a criança montar o prato colorido.",
          "Não force misturar se preferir separado."
        ]
      },
      {
        id: 24,
        name: "Wrap de Alface com Frango Desfiado",
        img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=400&fit=crop",
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
          "Textura do frango bem desfiado é mais aceita.",
          "A criança pode montar o próprio wrap.",
          "Comece com pouco recheio."
        ]
      },
      {
        id: 25,
        name: "Polenta Mole de Milho",
        img: "https://images.unsplash.com/photo-1555939596-1922bf9947ba?w=600&h=400&fit=crop",
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
          "Consistência bem mole no início.",
          "Sirva em tigela funda.",
          "Pode acompanhar legumes amassados."
        ]
      },
      {
        id: 26,
        name: "Geleia Caseira de Frutas sem Açúcar",
        img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=400&fit=crop",
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
          "Use em cima de alimentos já aceitos.",
          "Sabor doce ajuda a ponte alimentar.",
          "Porção pequena no pão ou tapioca."
        ]
      },
      {
        id: 27,
        name: "Tapioca com Recheio Creme de Fruta",
        img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&h=400&fit=crop",
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
          "Textura elástica pode ser novidade: apresente aos poucos.",
          "Recheio doce familiar ajuda.",
          "Corte em tiras para pegar com a mão."
        ]
      },
      {
        id: 28,
        name: "Croquete Assado de Batata e Legumes",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop",
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
          "Formato de salgadinho é atrativo.",
          "Assado em vez de frito.",
          "Deixe a criança modelar."
        ]
      },
      {
        id: 29,
        name: "Picolé Caseiro de Fruta",
        img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop",
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
          "Formato de picolé é lúdico.",
          "Deixe escolher o sabor.",
          "Ótimo no calor sem pressão de refeição."
        ]
      },
      {
        id: 30,
        name: "Suflê de Legumes Leve",
        img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=400&fit=crop",
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
          "Contém ovo: use filtro de alergia se necessário.",
          "A leveza da textura impressiona.",
          "Sirva logo ao sair do forno."
        ]
      },
      {
        id: 31,
        name: "Cuscuz de Milho com Legumes",
        img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
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
          "Textura úmida e macia.",
          "Pode ser comido com a mão em pedaços.",
          "Tradição brasileira familiar para muitas famílias."
        ]
      },
      {
        id: 32,
        name: "Patê de Atum ou Frango Caseiro",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=400&fit=crop",
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
          "Espalhe em alimento já aceito (tapioca, biscoito).",
          "Pode ser ponte para proteínas.",
          "Textura lisa evita pedaços."
        ]
      },
      {
        id: 33,
        name: "Bolinho de Arroz Assado",
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&h=400&fit=crop",
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
          "Crocância externa costuma agradar.",
          "Bom uso de sobra de arroz.",
          "Formato de finger food."
        ]
      },
      {
        id: 34,
        name: "Vitamina de Abacate",
        img: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&h=400&fit=crop",
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
          "Ótima para crianças com baixo apetite.",
          "Canudo grosso ajuda.",
          "Sabor adocicado da banana mascara o abacate."
        ]
      },
      {
        id: 35,
        name: "Purê de Beterraba com Batata",
        img: "https://images.unsplash.com/photo-1564093497595-593b96d7e543?w=600&h=400&fit=crop",
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
          "A cor diferente desperta curiosidade.",
          "Chame de purê de unicórnio ou roxo mágico.",
          "Comece com mais batata que beterraba."
        ]
      },
      {
        id: 36,
        name: "Pão de Queijo Adaptado sem Lactose",
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop",
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
          "Contém ovo: filtre se houver alergia.",
          "Clássico brasileiro facilita aceitação.",
          "Sirva mornos."
        ]
      },
      {
        id: 37,
        name: "Salada de Frutas Macia",
        img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
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
          "Deixe a criança montar o pote de cores.",
          "Sem obrigação de provar todas.",
          "Contato visual e tátil já é progresso."
        ]
      },
      {
        id: 38,
        name: "Bolinho de Espinafre e Batata",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
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
          "Verde em formato de bolinho costuma ir melhor.",
          "Nome divertido ajuda.",
          "Sirva frio ou morno no lanche."
        ]
      },
      {
        id: 39,
        name: "Crepioca Doce de Banana",
        img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop",
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
          "Filtro de ovo se houver alergia.",
          "Preparo rápido para o dia a dia.",
          "Corte em tiras."
        ]
      },
      {
        id: 40,
        name: "Sopa de Feijão Bata no Liquidificador",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
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
          "Textura de creme evita grãos inteiros.",
          "Base familiar para muitas crianças brasileiras.",
          "Congela bem."
        ]
      },
      {
        id: 41,
        name: "Palitos de Cenoura e Pepino com Pastinha",
        img: "https://images.unsplash.com/photo-1504754524776-8f4f46976276?w=600&h=400&fit=crop",
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
          "Brincar de molhar sem obrigação de morder.",
          "Crocância seca é porta de entrada.",
          "Ambiente relaxado ajuda."
        ]
      },
      {
        id: 42,
        name: "Banana Assada com Canela",
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=400&fit=crop",
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
          "Doçura natural aumenta.",
          "Textura bem macia.",
          "Pode acompanhar mingau ou iogurte de coco."
        ]
      },
      {
        id: 43,
        name: "Bolinho de Carne com Legume Escondido",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
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
          "Contém ovo: atenção ao filtro.",
          "Legume fica quase imperceptível.",
          "Formato de bolinho é prático."
        ]
      },
      {
        id: 44,
        name: "Gelatina de Sucos Naturais",
        img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
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
          "Textura gelatinosa é exploração sensorial.",
          "Cores fortes atraem o olhar.",
          "Desenforme em formatos divertidos."
        ]
      },
      {
        id: 45,
        name: "Omelete de Forno em Forminhas",
        img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&h=400&fit=crop",
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
          "Filtro de ovo se necessário.",
          "Formato de bolinho atrai mais que omelete no prato.",
          "Serve frio no lanche."
        ]
      },
      {
        id: 46,
        name: "Purê de Inhame",
        img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop",
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
          "Sabor neutro é porta de entrada.",
          "Consistência pode ser bem lisa.",
          "Base para misturar novos sabores depois."
        ]
      },
      {
        id: 47,
        name: "Barrinha Caseira de Frutas e Aveia",
        img: "https://images.unsplash.com/photo-1505576633757-0ac1084af90f?w=600&h=400&fit=crop",
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
          "Prático para a escola.",
          "Textura macia de cookie.",
          "Sem açúcar refinado."
        ]
      },
      {
        id: 48,
        name: "Sopa de Tomate Caseira",
        img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&h=400&fit=crop",
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
          "Cor vermelha intensa.",
          "Sirva com torradinha sem glúten crocante ao lado.",
          "Temperatura morna costuma ser melhor."
        ]
      },
      {
        id: 49,
        name: "Chips de Couve Assada",
        img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=400&fit=crop",
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
          "Crocância pode conquistar quem rejeita folha crua.",
          "Ofereça como salgadinho.",
          "Faça pouco de cada vez para não murchar."
        ]
      },
      {
        id: 50,
        name: "Bowl de Frutas com Granola sem Glúten",
        img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=600&h=400&fit=crop",
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
          "Disponha as frutas no bowl.",
          "Cubra com granola na hora de servir.",
          "Adicione iogurte de coco se desejar."
        ],
        tips: [
          "A criança pode montar as camadas.",
          "Contraste macio/crocante trabalha aceitação sensorial.",
          "Sem mistura forçada: cada um no seu lugar."
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
