// ========== DATA: 15 RECEITAS ==========
    const recipes = [
      {
        id: 1,
        name: "Mousse de Frutas Amarelas",
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop",
        desc: "Mousse leve e aerada de manga e maracujá com leite de coco. Textura cremosa, sabor tropical e rica em vitaminas A e C.",
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
          "1 manga madura descascada",
          "Polpa de 2 maracujás (ou 1/2 xícara de polpa)",
          "200 ml de leite de coco",
          "1 envelope de gelatina incolor sem sabor",
          "3 colheres de sopa de água para hidratar a gelatina",
          "Adoçante ou mel a gosto (opcional)"
        ],
        steps: [
          "Hidrate a gelatina na água fria conforme a embalagem e dissolva em banho-maria ou micro-ondas.",
          "Bata a manga, a polpa de maracujá e o leite de coco no liquidificador até ficar homogêneo.",
          "Com o liquidificador ligado, despeje a gelatina dissolvida e bata por mais 20 segundos.",
          "Prove e ajuste o doce, se desejar.",
          "Distribua em potinhos e leve à geladeira por cerca de 2 horas até firmar.",
          "Sirva gelado, decorando com pedacinhos de manga ou sementes de maracujá."
        ],
        tips: [
          "Apresente em potinhos transparentes coloridos para valorizar a cor amarela.",
          "Deixe a criança ajudar a colocar a mistura nos potinhos.",
          "Ofereça primeiro uma colherinha sem pressão; a textura cremosa costuma ser bem aceita."
        ]
      },
      {
        id: 2,
        name: "Purê de Abóbora ou Batata-doce",
        img: "https://images.unsplash.com/photo-1546549039-49b1be6b0e11?w=600&h=400&fit=crop",
        desc: "Purê aveludado de abóbora ou batata-doce, com fio de azeite ou leite de coco. Alta em vitamina A e de fácil aceitação.",
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
          "500 g de abóbora cabotiá ou batata-doce",
          "1 colher de sopa de azeite ou 2 colheres de leite de coco",
          "Sal a gosto",
          "Canela em pó (opcional)",
          "Água para cozinhar"
        ],
        steps: [
          "Descasque e corte o legume em cubos médios.",
          "Cozinhe no vapor ou em água até ficar bem macio (20 a 25 minutos).",
          "Escorra bem e amasse com um garfo ou processe até obter purê liso.",
          "Adicione o azeite ou o leite de coco e o sal. Misture bem.",
          "Se quiser, acrescente uma pitada de canela.",
          "Sirva morninho em tigelinhas."
        ],
        tips: [
          "A textura cremosa é ideal para quem ainda rejeita pedaços.",
          "Chame de “nuvem laranja” ou “purê do sol” para tornar lúdico.",
          "Ofereça ao lado de um alimento já aceito, sem forçar a quantidade."
        ]
      },
      {
        id: 3,
        name: "Purê de Abacate com Banana",
        img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=400&fit=crop",
        desc: "Mistura cremosa de abacate e banana, rica em gorduras boas, potássio e vitamina C. Pronta em minutos.",
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
          "Suco de 1/2 limão (opcional, para não escurecer)",
          "Pitada de canela (opcional)"
        ],
        steps: [
          "Corte o abacate, retire o caroço e a polpa.",
          "Amasse o abacate e a banana juntos com um garfo até ficar cremoso.",
          "Se preferir mais liso, bata no processador ou liquidificador.",
          "Acrescente o limão e a canela, se desejar.",
          "Sirva imediatamente."
        ],
        tips: [
          "Ideal como lanche da tarde em potinho colorido.",
          "Deixe a criança amassar a banana com o garfo — envolvimento ajuda na aceitação.",
          "Comece com mais banana (sabor doce) e vá aumentando o abacate aos poucos."
        ]
      },
      {
        id: 4,
        name: "Creme de Espinafre ou Couve",
        img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&h=400&fit=crop",
        desc: "Creme verde suave batido com batata ou mandioquinha. Fonte de ferro e vitaminas A e C, com textura aveludada.",
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
          "2 xícaras de espinafre ou couve picados",
          "2 batatas médias ou 300 g de mandioquinha",
          "1 dente de alho",
          "1 colher de sopa de azeite",
          "Sal a gosto",
          "Leite vegetal (opcional, para mais cremosidade)"
        ],
        steps: [
          "Cozinhe a batata ou mandioquinha até ficar macia. Escorra.",
          "Em uma panela, refogue o alho no azeite e adicione o espinafre/couve até murchar.",
          "Bata tudo no liquidificador ou processador com um pouco da água do cozimento ou leite vegetal.",
          "Ajuste o sal e a consistência até ficar cremoso.",
          "Aqueça novamente se necessário e sirva."
        ],
        tips: [
          "Use um nome divertido como “creme do Hulk” ou “sopinha mágica verde”.",
          "Comece com pouco verde e mais batata; aumente o espinafre gradualmente.",
          "Sirva em tigela colorida com uma colher especial."
        ]
      },
      {
        id: 5,
        name: "Smoothie Colorido",
        img: "https://images.unsplash.com/photo-1623065422902-30a2d94b4c1e?w=600&h=400&fit=crop",
        desc: "Smoothie cremoso de banana, manga e morango ou abacaxi com leite de coco. Colorido, refrescante e rico em vitaminas A e C.",
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
          "1 banana madura",
          "1/2 manga ou 1/2 xícara de abacaxi",
          "4 a 5 morangos (ou mais abacaxi)",
          "150 ml de leite de coco ou água",
          "Gelo a gosto (opcional)"
        ],
        steps: [
          "Coloque todos os ingredientes no liquidificador.",
          "Bata até ficar bem cremoso e homogêneo.",
          "Ajuste a consistência com mais líquido se necessário.",
          "Sirva imediatamente em copos coloridos, com canudo se desejar."
        ],
        tips: [
          "Deixe a criança escolher as frutas e o canudo.",
          "Chame de “poção colorida” ou “suco do arco-íris”.",
          "Ofereça gelado em dias quentes; a textura líquida-cremosa facilita a experimentação."
        ]
      },
      {
        id: 6,
        name: "Creme de Cenoura",
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&h=400&fit=crop",
        desc: "Creme suave de cenoura cozida, opcionalmente com cúrcuma. Altíssimo teor de vitamina A e textura acolhedora.",
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
          "4 cenouras médias",
          "1 batata pequena (opcional, para mais cremosidade)",
          "1 colher de sopa de azeite",
          "Sal a gosto",
          "Pitada de cúrcuma (opcional)",
          "Água ou caldo de legumes"
        ],
        steps: [
          "Descasque e corte as cenouras (e a batata, se usar) em rodelas.",
          "Cozinhe em água ou caldo até ficarem bem macias.",
          "Bata no liquidificador com um pouco do líquido do cozimento até obter creme liso.",
          "Volte à panela, adicione o azeite, o sal e a cúrcuma. Aqueça por 2 minutos.",
          "Sirva morninho."
        ],
        tips: [
          "A cor laranja intensa chama atenção visual positiva.",
          "Ofereça em xícara pequena como “sopa de dedinho”.",
          "Não force; celebre qualquer contato ou degustação."
        ]
      },
      {
        id: 7,
        name: "Creme Simples de Morango",
        img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=400&fit=crop",
        desc: "Creme rápido de morango batido com leite de coco ou água. Doce natural, vermelho vibrante e rico em vitamina C.",
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
          "1 xícara de morangos maduros",
          "100 ml de leite de coco ou água",
          "1 colher de chá de mel ou tâmaras (opcional)"
        ],
        steps: [
          "Lave bem os morangos e retire o cabinho.",
          "Bata no liquidificador com o líquido até ficar cremoso.",
          "Adoce levemente se desejar.",
          "Sirva imediatamente em potinhos ou copinhos."
        ],
        tips: [
          "A cor vermelha é atrativa; use potinhos transparentes.",
          "Pode ser servido como “iogurte de morango caseiro”.",
          "Deixe a criança colocar os morangos no liquidificador (com supervisão)."
        ]
      },
      {
        id: 8,
        name: "Panqueca de Batata-doce",
        img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop",
        desc: "Panquecas macias de batata-doce com farelo de aveia sem glúten e linhaça. Naturais, sem ovo e ricas em vitamina A.",
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
          "1 batata-doce média cozida e amassada (cerca de 1 xícara)",
          "1/2 xícara de farelo de aveia sem glúten",
          "1 colher de sopa de linhaça moída + 3 colheres de água (gel de linhaça)",
          "1/2 colher de chá de fermento em pó",
          "Pitada de canela e sal",
          "Azeite ou óleo para untar a frigideira"
        ],
        steps: [
          "Misture a linhaça com a água e deixe gelificar por 5 minutos.",
          "Em uma tigela, junte a batata-doce amassada, a aveia, o gel de linhaça, o fermento, a canela e o sal.",
          "Misture até formar uma massa homogênea. Se estiver muito firme, adicione um fio de água.",
          "Aqueça uma frigideira antiaderente untada em fogo médio-baixo.",
          "Coloque porções da massa e achate levemente. Cozinhe 2 a 3 minutos de cada lado.",
          "Sirva mornas, sozinhas ou com um pouco de purê de frutas."
        ],
        tips: [
          "Formato de panqueca é familiar e convidativo.",
          "Deixe a criança ajudar a misturar a massa.",
          "Corte em formatos divertidos com cortadores após assar."
        ]
      },
      {
        id: 9,
        name: "Nhoque de Batata ou Batata-doce",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=400&fit=crop",
        desc: "Nhoques macios de batata ou batata-doce com farinha de arroz. Versão sem ovo, suave e fácil de mastigar.",
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
          "500 g de batata ou batata-doce cozida e amassada",
          "1 a 1 e 1/2 xícara de farinha de arroz (ajuste conforme a umidade)",
          "Sal a gosto",
          "Noz-moscada (opcional)",
          "Azeite para finalizar"
        ],
        steps: [
          "Amasse bem a batata ainda morna e deixe esfriar um pouco.",
          "Adicione o sal e vá incorporando a farinha de arroz até formar uma massa que não grude nas mãos.",
          "Faça rolinhos e corte em pedacinhos. Pressione levemente com o garfo, se quiser o formato clássico.",
          "Ferva água com sal e cozinhe os nhoques até subirem à superfície (2 a 3 minutos).",
          "Escorra e regue com um fio de azeite. Sirva com molho leve de tomate ou só temperados."
        ],
        tips: [
          "O formato de “bolinha” é fácil de pegar e explorar.",
          "Envolva a criança na hora de cortar os rolinhos.",
          "Ofereça poucos nhoques no prato, junto com algo já aceito."
        ]
      },
      {
        id: 10,
        name: "Muffins de Banana e Cacau",
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop",
        desc: "Muffins macios de banana com cacau e aveia sem glúten. Doces naturalmente, com fibras e potássio.",
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
          "2 bananas maduras amassadas",
          "1 xícara de farinha de aveia sem glúten",
          "2 colheres de sopa de cacau em pó",
          "1 colher de sopa de chia ou linhaça",
          "1 colher de chá de fermento em pó",
          "1/4 xícara de leite vegetal ou água",
          "1 colher de sopa de óleo de coco ou azeite"
        ],
        steps: [
          "Pré-aqueça o forno a 180°C e unte forminhas de muffin.",
          "Misture as bananas amassadas com o óleo e o líquido.",
          "Acrescente a aveia, o cacau, a chia e o fermento. Misture até incorporar.",
          "Distribua nas forminhas e asse por 18 a 22 minutos, até firmarem.",
          "Deixe esfriar um pouco antes de desenformar."
        ],
        tips: [
          "O formato de bolinho é muito atrativo para crianças.",
          "Deixe a criança colocar a massa nas forminhas.",
          "Sirva como lanche, sem pressão para comer inteiro."
        ]
      },
      {
        id: 11,
        name: "Panqueca de Banana e Aveia sem Glúten",
        img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&h=400&fit=crop",
        desc: "Panquecas simples e macias só com banana e farelo de aveia sem glúten. Rápidas, sem ovo e sem lactose.",
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
          "1 banana madura amassada",
          "1/3 xícara de farelo de aveia sem glúten",
          "1 a 2 colheres de sopa de água (se necessário)",
          "Pitada de canela",
          "Azeite para untar"
        ],
        steps: [
          "Amasse a banana e misture com a aveia e a canela.",
          "Se a massa estiver muito grossa, adicione um pouco de água.",
          "Aqueça a frigideira antiaderente untada em fogo baixo.",
          "Coloque porções pequenas da massa e cozinhe 2 minutos de cada lado.",
          "Sirva mornas."
        ],
        tips: [
          "Receita de 2 ingredientes: perfeita para fazer junto com a criança.",
          "Corte em tiras ou quadradinhos para facilitar o manuseio.",
          "Ofereça sem cobertura primeiro; depois experimente com purê de fruta."
        ]
      },
      {
        id: 12,
        name: "Purê de Ervilha com Abacate",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop",
        desc: "Purê macio e verde de ervilha com abacate. Fonte de ferro e vitamina C, com textura aveludada e sabor suave.",
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
          "1 xícara de ervilhas frescas ou congeladas",
          "1/2 abacate maduro",
          "1 fio de azeite",
          "Sal a gosto",
          "Suco de limão (opcional)"
        ],
        steps: [
          "Cozinhe as ervilhas em água até ficarem macias (cerca de 8 a 10 minutos). Escorra.",
          "Bata as ervilhas com o abacate, o azeite e o sal no processador ou amasse bem com o garfo.",
          "Ajuste a textura com um pouco de água do cozimento se necessário.",
          "Acrescente limão se desejar e sirva."
        ],
        tips: [
          "A combinação suaviza o sabor da ervilha com a cremosidade do abacate.",
          "Apresente como “purê verde do dinossauro”.",
          "Comece com quantidades pequenas no prato."
        ]
      },
      {
        id: 13,
        name: "Biscoito Salgado de Grão-de-bico",
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
        desc: "Biscoitos crocantes de grão-de-bico com polvilho e farinha de arroz. Sem ovo, ricos em ferro e fibras.",
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
          "1 xícara de grão-de-bico cozido e escorrido",
          "1/2 xícara de polvilho doce",
          "1/4 xícara de farinha de arroz",
          "2 colheres de sopa de azeite",
          "Sal e temperos a gosto (orégão, páprica, alho em pó)",
          "2 a 3 colheres de água, se necessário"
        ],
        steps: [
          "Pré-aqueça o forno a 180°C e forre uma forma com papel manteiga.",
          "Processe o grão-de-bico até virar uma pasta.",
          "Misture o polvilho, a farinha de arroz, o azeite, o sal e os temperos.",
          "Amasse até obter uma massa homogênea que não grude. Adicione água aos poucos se precisar.",
          "Abra a massa com o rolo (cerca de 3 mm) e corte em formatos.",
          "Asse por 20 a 25 minutos até dourar e ficar crocante. Deixe esfriar na forma."
        ],
        tips: [
          "A crocância costuma agradar crianças seletivas a texturas secas.",
          "Use cortadores de biscoito em formas divertidas.",
          "Ofereça como “torradinha especial” no lanche."
        ]
      },
      {
        id: 14,
        name: "Cookies de Banana e Aveia sem Glúten",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&h=400&fit=crop",
        desc: "Cookies crocantes por fora e macios por dentro, só com banana e aveia sem glúten. Sem ovo e sem açúcar refinado.",
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
          "2 bananas maduras amassadas",
          "1 e 1/2 xícara de aveia em flocos sem glúten",
          "1 colher de chá de canela",
          "1 colher de chá de essência de baunilha (opcional)",
          "1 colher de sopa de óleo de coco (opcional)"
        ],
        steps: [
          "Pré-aqueça o forno a 180°C e forre uma forma com papel manteiga.",
          "Misture a banana amassada com a aveia, a canela e a baunilha.",
          "Se quiser, adicione o óleo de coco para mais crocância.",
          "Faça bolinhas, achate levemente na forma.",
          "Asse por 12 a 15 minutos até as bordas dourarem. Deixe esfriar para firmar."
        ],
        tips: [
          "Amassar a banana é uma atividade que a criança adora ajudar.",
          "Guarde em pote fechado por até 3 dias.",
          "Ofereça como “biscoito da casa” no lanche da tarde."
        ]
      },
      {
        id: 15,
        name: "Chips de Batata-doce ou Abóbora",
        img: "https://images.unsplash.com/photo-1623238913973-21e14585d43b?w=600&h=400&fit=crop",
        desc: "Chips assados crocantes de batata-doce ou abóbora. Leves, coloridos e ricos em vitamina A — alternativa saudável ao salgadinho.",
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
          "Sal a gosto",
          "Páprica ou orégano (opcional)"
        ],
        steps: [
          "Pré-aqueça o forno a 190°C e forre duas formas com papel manteiga.",
          "Descasque e corte em fatias bem finas (use mandolina se tiver, com cuidado).",
          "Em uma tigela, misture as fatias com o azeite, o sal e o tempero.",
          "Distribua em camada única nas formas, sem sobrepor.",
          "Asse por 20 a 28 minutos, virando na metade, até ficarem crocantes e douradas.",
          "Deixe esfriar na forma — ficam mais crocantes ao esfriar."
        ],
        tips: [
          "A crocância e o formato de “salgadinho” facilitam a aceitação.",
          "Deixe a criança ajudar a colocar as fatias na forma.",
          "Ofereça em potinho como petisco, sem obrigação de comer tudo."
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
