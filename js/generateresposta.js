// Função para remover acentos e normalizar a string
function removeAcentos(str) {
    const map = {
        'á': 'a', 'ã': 'a', 'à': 'a', 'ä': 'a', 'â': 'a',
        'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
        'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
        'ó': 'o', 'õ': 'o', 'ò': 'o', 'ö': 'o', 'ô': 'o',
        'ú': 'u', 'ù': 'u', 'ü': 'u', 'û': 'u',
        'ç': 'c', 'Á': 'a', 'Ã': 'a', 'À': 'a', 'Ä': 'a', 'Â': 'a',
        'É': 'e', 'È': 'e', 'Ê': 'e', 'Ë': 'e',
        'Í': 'i', 'Ì': 'i', 'Î': 'i', 'Ï': 'i',
        'Ó': 'o', 'Õ': 'o', 'Ò': 'o', 'Ö': 'o', 'Ô': 'o',
        'Ú': 'u', 'Ù': 'u', 'Ü': 'u', 'Û': 'u',
        'Ç': 'c'
    };
    
    return str.split('').map(function(c) {
        return map[c] || c;
    }).join('');
}

// Função para remover pontuação da string
function removePunctuation(str) {
    return str.replace(/[^\w\s]/gi, ''); // Remove todos os caracteres não alfanuméricos e espaços
}

// Função para eliminar palavras irrelevantes como artigos e pronomes
function removeStopWords(str) {
    const stopWords = [
        'o', 'a', 'os', 'as', 'um', 'uma', 'uns', 'umas', 'de', 'da', 'do', 'dos', 'das', 'em', 'para', 'com', 'que', 'como', 'qual', 'quais', 'onde', 'quando', 'quem', 'a', 'e', 'é', 'não', 'se', 'isso', 'essa', 'isto', 'isso', 'essa'
    ];
    
    return str.split(' ').filter(word => !stopWords.includes(word)).join(' ');
}


// Função para gerar a resposta com base na entrada do usuário
function generateResponse(userInput) {
    // Normalizar a entrada do usuário (remover acentos, pontuação, e transformar em minúsculas)
    let normalizedInput = removeAcentos(removePunctuation(userInput)).toLowerCase().trim();

    // Elimina palavras irrelevantes (stop words)
    normalizedInput = removeStopWords(normalizedInput);

    // Lista de palavras-chave e respostas associadas
    const responses = {
        'educação financeira': [
            'A educação financeira é fundamental para o controle do seu dinheiro. Podemos te ajudar a aprender mais sobre isso.',
            'Educação financeira ajuda a melhorar a gestão das finanças pessoais. Temos cursos específicos sobre isso.',
            'Investir em educação financeira é investir no seu futuro. Quer saber mais?'
        ],
        'despesas fixas': [
            'Despesas fixas são aquelas que ocorrem todo mês de forma previsível, como aluguel, contas de serviços e seguros. Já as despesas variáveis são aquelas que podem mudar de mês para mês, como alimentação, lazer e transporte. Controlar essas despesas é essencial para equilibrar o orçamento familiar.'
        ],
        'o que é despesas fixas': [
            'Despesas fixas são aquelas que ocorrem todo mês de forma previsível, como aluguel, contas de serviços e seguros. Já as despesas variáveis são aquelas que podem mudar de mês para mês, como alimentação, lazer e transporte. Controlar essas despesas é essencial para equilibrar o orçamento familiar.'
        ],
        'o que são despesas fixas': [
            'Despesas fixas são aquelas que ocorrem todo mês de forma previsível, como aluguel, contas de serviços e seguros. Já as despesas variáveis são aquelas que podem mudar de mês para mês, como alimentação, lazer e transporte. Controlar essas despesas é essencial para equilibrar o orçamento familiar.'
        ],
        'despesas variáveis': [
            'Despesas variáveis são aquelas que podem mudar de mês para mês, como alimentação, lazer e transporte. Controlar essas despesas é essencial para equilibrar o orçamento familiar e garantir que você tenha uma visão clara sobre onde está gastando mais.'
        ],
        'o que são despesas variáveis': [
            'Despesas variáveis são aquelas que podem mudar de mês para mês, como alimentação, lazer e transporte. Controlar essas despesas é essencial para equilibrar o orçamento familiar e garantir que você tenha uma visão clara sobre onde está gastando mais.'
        ],
        'criar um orçamento familiar': [
            'Criar um orçamento familiar simples e eficiente envolve listar todas as fontes de receita da família e todas as despesas. É importante separar as despesas fixas das variáveis e ajustar os gastos para que o total de despesas não ultrapasse a receita. Isso ajuda a evitar surpresas financeiras no final do mês.'
        ],
        'como criar um orçamento familiar': [
            'Criar um orçamento familiar simples e eficiente envolve listar todas as fontes de receita da família e todas as despesas. É importante separar as despesas fixas das variáveis e ajustar os gastos para que o total de despesas não ultrapasse a receita. Isso ajuda a evitar surpresas financeiras no final do mês.'
        ],
        'controle de despesas': [
            'O controle de despesas é essencial para manter as finanças da família em ordem. Isso envolve acompanhar todos os gastos mensais, identificar onde o dinheiro está sendo consumido e ajustar os hábitos de consumo para garantir que as finanças estejam equilibradas.'
        ],
        'o que é um controle de despesas': [
            'O controle de despesas é essencial para manter as finanças da família em ordem. Isso envolve acompanhar todos os gastos mensais, identificar onde o dinheiro está sendo consumido e ajustar os hábitos de consumo para garantir que as finanças estejam equilibradas.'
        ],
        'priorizar gastos': [
            'Priorizar gastos significa decidir onde gastar primeiro, com base nas necessidades mais urgentes. Por exemplo, é essencial pagar primeiro as despesas fixas, como aluguel e contas, e só depois gastar com itens não essenciais, como lazer e compras. Isso ajuda a evitar endividamento e a garantir que a família tenha uma vida financeira saudável.'
        ],
        'como priorizar gastos': [
            'Priorizar gastos significa decidir onde gastar primeiro, com base nas necessidades mais urgentes. Por exemplo, é essencial pagar primeiro as despesas fixas, como aluguel e contas, e só depois gastar com itens não essenciais, como lazer e compras. Isso ajuda a evitar endividamento e a garantir que a família tenha uma vida financeira saudável.'
        ],
        'poupança familiar': [
            'A poupança familiar é uma parte do orçamento destinada a economizar para objetivos futuros, como uma viagem, a compra de uma casa ou a aposentadoria. Para garantir uma poupança eficiente, é importante definir um valor mensal a ser poupado e separá-lo logo após o recebimento da receita.'
        ],
        'o que é a poupança familiar': [
            'A poupança familiar é uma parte do orçamento destinada a economizar para objetivos futuros, como uma viagem, a compra de uma casa ou a aposentadoria. Para garantir uma poupança eficiente, é importante definir um valor mensal a ser poupado e separá-lo logo após o recebimento da receita.'
        ],
        'metas de curto e longo prazo': [
            'As metas de curto prazo são aquelas que você pretende alcançar em até um ano, como uma viagem ou a compra de um carro. Já as metas de longo prazo são aquelas que têm um horizonte maior, como a compra da casa própria ou a aposentadoria. Ambas devem ser consideradas no planejamento financeiro familiar.'
        ],
        'investimentos familiares': [
            'Investir é uma maneira de fazer o dinheiro trabalhar para você. Existem diferentes tipos de investimentos, como poupanças, ações, fundos imobiliários e previdência privada. O ideal é diversificar os investimentos para proteger a família contra riscos financeiros e garantir o crescimento do patrimônio.'
        ],
        'como fazer investimentos familiares': [
            'Investir é uma maneira de fazer o dinheiro trabalhar para você. Existem diferentes tipos de investimentos, como poupanças, ações, fundos imobiliários e previdência privada. O ideal é diversificar os investimentos para proteger a família contra riscos financeiros e garantir o crescimento do patrimônio.'
        ],
        'juros compostos': [
            'Os juros compostos são uma forma de fazer seu dinheiro crescer ao longo do tempo. Ao investir, os juros ganhos sobre o valor investido são adicionados ao montante original, e os juros seguintes incidem sobre esse novo valor, acelerando a construção de riqueza ao longo do tempo.'
        ],
        'o que são juros compostos': [
            'Os juros compostos são uma forma de fazer seu dinheiro crescer ao longo do tempo. Ao investir, os juros ganhos sobre o valor investido são adicionados ao montante original, e os juros seguintes incidem sobre esse novo valor, acelerando a construção de riqueza ao longo do tempo.'
        ],
        'diversificação de investimentos': [
            'A diversificação de investimentos é uma estratégia para reduzir riscos, espalhando o dinheiro por diferentes tipos de ativos. Isso ajuda a proteger o patrimônio da família contra flutuações do mercado e a alcançar um crescimento financeiro mais estável.'
        ],
        'acompanhar investimentos': [
            'Acompanhar e ajustar seus investimentos de forma eficiente envolve revisar regularmente o desempenho de seus ativos e realizar mudanças quando necessário, com base em mudanças de mercado ou em novos objetivos financeiros. Isso ajuda a otimizar os resultados ao longo do tempo.'
        ],
        'reserva de emergencia': [
            'Uma reserva de emergência é um fundo destinado a cobrir imprevistos, como desemprego, problemas de saúde ou reparos inesperados. Esse fundo deve ser suficiente para cobrir de 3 a 6 meses de despesas essenciais da família, oferecendo segurança financeira em situações de emergência.'
        ],'financas pessoais': [
            'Finanças pessoais são o conjunto de ações e decisões relacionadas à gestão do seu dinheiro, incluindo receitas, despesas, investimentos e planejamento para o futuro. O bom gerenciamento de finanças pessoais é essencial para alcançar estabilidade financeira.'
        ],
        'objetivos financeiros': [
            'Estabelecer objetivos financeiros claros é uma das primeiras etapas no planejamento financeiro. Eles podem incluir a quitação de dívidas, a criação de um fundo de emergência ou o planejamento da aposentadoria. Definir esses objetivos ajuda a manter o foco e a disciplina nos gastos e investimentos.'
        ],
        'planejamento financeiro': [
            'O planejamento financeiro é o processo de organizar suas finanças para atingir metas de curto, médio e longo prazo. Ele envolve avaliar sua situação financeira atual, definir objetivos financeiros e criar um plano de ação para alcançá-los.'
        ],
        'metas financeiras': [
            'Metas financeiras são objetivos específicos que você deseja alcançar com seu dinheiro, como comprar uma casa, pagar uma dívida ou economizar para a aposentadoria. Essas metas devem ser claras, mensuráveis, alcançáveis, relevantes e ter um prazo definido.'
        ],
        'prioridades financeiras': [
            'Estabelecer prioridades financeiras envolve decidir o que é mais importante para você alcançar no curto e longo prazo. Isso pode incluir pagar dívidas de juros altos, criar uma reserva de emergência ou economizar para a educação dos filhos. Saber o que é prioridade ajuda a manter o foco no que realmente importa.'
        ],
        'controle de gastos': [
            'Controlar os gastos é um passo fundamental para alcançar seus objetivos financeiros. Isso envolve monitorar suas receitas e despesas, evitar gastos desnecessários e tomar decisões financeiras mais conscientes. Ferramentas como orçamentos e aplicativos de controle de despesas podem ajudar nesse processo.'
        ],
        'orçamento pessoal': [
            'O orçamento pessoal é uma ferramenta que ajuda a planejar e controlar suas receitas e despesas. Com um orçamento bem estruturado, é possível entender para onde o dinheiro está indo, identificar desperdícios e ajustar os gastos de acordo com suas prioridades e objetivos.'
        ],
        'regra 50/30/20': [
            'A regra 50/30/20 é uma estratégia simples de distribuição do seu orçamento. Ela sugere que 50% da sua renda seja destinada a necessidades essenciais (como moradia e alimentação), 30% a desejos e 20% a poupança e investimentos. Seguir essa regra ajuda a manter as finanças equilibradas e aumentar a capacidade de poupança.'
        ],
        'ferramentas de orçamento': [
            'Existem diversas ferramentas e aplicativos para controlar o orçamento pessoal, como planilhas do Excel, apps de finanças como Mint e YNAB (You Need A Budget), e até ferramentas do banco. Essas ferramentas permitem que você visualize sua situação financeira, acompanhe seus gastos e organize suas finanças com mais eficiência.'
        ],
        'monitoramento de orçamento': [
            'Monitorar o seu orçamento regularmente é essencial para garantir que você está atingindo seus objetivos financeiros. Isso envolve revisar seus gastos, ajustar seu orçamento quando necessário e procurar áreas onde você pode economizar para aumentar sua poupança ou investir mais.'
        ],
        'como investir': [
            'Investir é o processo de alocar seu dinheiro em diferentes ativos para gerar retorno ao longo do tempo. Existem diversas formas de investimento, como ações, renda fixa, fundos imobiliários e criptomoedas. Antes de começar, é importante entender seu perfil de investidor e definir seus objetivos financeiros.'
        ],
        'renda fixa': [
            'Investimentos em renda fixa são opções mais conservadoras, onde você empresta seu dinheiro a uma instituição (como um banco) e recebe uma rentabilidade fixa ao longo do tempo. Exemplos de investimentos em renda fixa incluem CDBs, Tesouro Direto e LCI/LCA.'
        ],
        'ações': [
            'Investir em ações significa comprar uma parte de uma empresa. Esse tipo de investimento tem um risco maior, mas também pode oferecer uma rentabilidade maior no longo prazo. O ideal é diversificar os investimentos e escolher ações de empresas sólidas e com bom potencial de crescimento.'
        ],
        'juros compostos': [
            'Os juros compostos são o processo de calcular juros sobre juros. Isso significa que o valor investido gera retorno que também gera retorno. Ao longo do tempo, o efeito dos juros compostos pode acelerar significativamente o crescimento do seu investimento.'
        ],
        'diversificação de investimentos': [
            'A diversificação de investimentos é uma estratégia para reduzir o risco, distribuindo seu dinheiro entre diferentes tipos de ativos (ações, renda fixa, fundos imobiliários, etc.). Isso protege seu portfólio contra a volatilidade do mercado e aumenta suas chances de alcançar seus objetivos financeiros.'
        ],
        'avaliar investimentos': [
            'Avaliar e escolher os melhores investimentos depende de fatores como seu perfil de risco, seus objetivos financeiros e o prazo para alcançar esses objetivos. É importante considerar a rentabilidade, liquidez e segurança de cada investimento antes de tomar uma decisão.'
        ],
        'despesas variáveis': [
            'Despesas variáveis são aquelas que podem mudar de mês para mês, como alimentação, lazer, transporte e utilidades. Controlá-las de forma eficaz é fundamental para não ultrapassar o orçamento e garantir que você está gastando de forma consciente.'
        ],
        'despesas fixas': [
            'Despesas fixas são aquelas que ocorrem de forma previsível e regular, como aluguel, contas de serviços públicos, seguros e empréstimos. Embora você não possa reduzi-las facilmente, é importante incluí-las no seu orçamento para garantir que você possa pagá-las no final do mês.'
        ],
        'controle de orçamento': [
            'O controle de orçamento é uma prática contínua que envolve acompanhar seus ganhos e gastos, identificar onde está ocorrendo desperdício e ajustar sua estratégia financeira conforme necessário. Isso permite que você se mantenha no caminho certo em direção aos seus objetivos financeiros.'
        ],'teorias de investimentos': [
            'As teorias de investimentos ajudam a entender como os investidores podem tomar decisões informadas sobre alocação de ativos, levando em consideração risco e retorno. Uma das mais conhecidas é a Teoria Moderna do Portfólio, que defende a diversificação para reduzir o risco global.'
        ],
        'análise fundamentalista': [
            'A análise fundamentalista avalia o valor intrínseco de um ativo, como ações, estudando os fundamentos da empresa, como lucros, receitas e balanços financeiros. O objetivo é identificar ativos subvalorizados ou sobrevalorizados no mercado.'
        ],
        'análise técnica': [
            'A análise técnica estuda o comportamento do preço de um ativo no mercado, utilizando gráficos e indicadores para prever a direção futura dos preços. Essa abordagem é focada no histórico de preço e volume, sem considerar os fundamentos do ativo.'
        ],
        'modelos de precificação de ativos': [
            'Os modelos de precificação de ativos são utilizados para determinar o valor justo de um ativo. Um exemplo clássico é o Modelo de Precificação de Ativos de Capital (CAPM), que avalia a relação entre risco e retorno esperado de um ativo.'
        ],
        'estratégias de crescimento no longo prazo': [
            'As estratégias de crescimento no longo prazo focam no aumento gradual do valor do portfólio, geralmente por meio de investimentos em ações de empresas com alto potencial de crescimento, como startups ou setores emergentes.'
        ],
        'diversificação de portfólio': [
            'Diversificação de portfólio é uma estratégia de investimento que envolve distribuir os investimentos em diferentes tipos de ativos (ações, títulos, imóveis, etc.) para reduzir o risco. A ideia é que a performance negativa de um ativo seja compensada pelo desempenho positivo de outro.'
        ],
        'alocação de ativos': [
            'A alocação de ativos envolve distribuir o capital investido entre diferentes classes de ativos, como ações, renda fixa e imóveis, de acordo com o perfil de risco e os objetivos financeiros do investidor.'
        ],
        'gestão de riscos no investimento': [
            'Gestão de riscos no investimento é o processo de identificar, avaliar e controlar os riscos associados aos investimentos. Isso inclui a diversificação, o uso de hedge, e a análise dos riscos de mercado, liquidez, e crédito.'
        ],
        'estratégias de hedge': [
            'Estratégias de hedge são usadas para proteger o portfólio contra perdas. Exemplos incluem o uso de derivativos, como opções e futuros, para compensar os riscos de mercado ou de preço dos ativos no portfólio.'
        ],
        'monitoramento de riscos e ajustes': [
            'Monitorar riscos e realizar ajustes no portfólio é fundamental para garantir que os investimentos continuem alinhados com os objetivos financeiros. Isso envolve revisar regularmente a alocação de ativos e os riscos do mercado, e fazer alterações quando necessário.'
        ],
        'investimentos alternativos': [
            'Investimentos alternativos são opções não tradicionais de investimento, como imóveis, commodities, criptomoedas, e arte. Esses ativos podem oferecer uma correlação baixa com os mercados financeiros tradicionais, ajudando na diversificação.'
        ],
        'fundos hedge e private equity': [
            'Fundos hedge e private equity são tipos de fundos de investimento que buscam retornos elevados por meio de estratégias de investimento mais arriscadas e especializadas, como alavancagem, arbitragem e investimentos em empresas não listadas.'
        ],
        'ações de risco e derivativos': [
            'Ações de risco são aquelas de empresas com alto potencial de crescimento, mas também com grande volatilidade. Derivativos, como opções e futuros, são instrumentos financeiros usados para especular ou proteger-se contra flutuações no preço de ativos.'
        ],
        'proteção de patrimônio familiar': [
            'Proteção de patrimônio familiar envolve estratégias financeiras para preservar e crescer o patrimônio de uma família ao longo do tempo, como seguros, testamentos e planejamento sucessório. O objetivo é garantir que o patrimônio seja protegido de riscos inesperados.'
        ],
        'planejamento sucessório e tributação': [
            'Planejamento sucessório é o processo de organizar a transferência de bens e ativos de uma pessoa para seus herdeiros, minimizando a carga tributária e evitando disputas legais. A tributação deve ser considerada para reduzir os impostos sobre heranças e doações.'
        ], 'teorias de investimentos': [
            'As teorias de investimentos incluem a Teoria Moderna de Portfólio, que sugere que os investidores podem reduzir o risco através da diversificação, e a Hipótese dos Mercados Eficientes, que afirma que os preços de mercado refletem todas as informações disponíveis.'
        ],
        'análise fundamentalista': [
            'A análise fundamentalista é uma abordagem para avaliar ativos com base nos fundamentos financeiros de uma empresa, como lucros, balanços e perspectivas de crescimento. O objetivo é identificar se um ativo está subvalorizado ou sobrevalorizado no mercado.'
        ],
        'análise técnica': [
            'A análise técnica envolve o estudo de gráficos e indicadores de preços para prever movimentos futuros de mercado. Ela foca na ação do preço e no volume, sem considerar os fundamentos de uma empresa ou ativo.'
        ],
        'modelos de precificação de ativos': [
            'Os modelos de precificação de ativos, como o Modelo de Precificação de Ativos de Capital (CAPM), são usados para calcular o retorno esperado de um ativo com base no risco associado. Eles ajudam a determinar o valor justo de um ativo no mercado.'
        ],
        'estratégias de crescimento no longo prazo': [
            'Estratégias de crescimento no longo prazo envolvem investir em ativos que têm potencial para gerar crescimento sustentável ao longo do tempo. Isso pode incluir ações de empresas em expansão, como startups, ou investimentos em setores emergentes com altas taxas de crescimento.'
        ],
        'diversificação de portfólio': [
            'A diversificação de portfólio é uma estratégia de mitigação de risco que envolve distribuir investimentos entre diferentes tipos de ativos (ações, títulos, imóveis, etc.) para reduzir a volatilidade e o risco global do portfólio.'
        ],
        'alocação de ativos': [
            'A alocação de ativos é o processo de distribuir investimentos entre diferentes classes de ativos, como ações, renda fixa e imóveis. A alocação de ativos deve ser ajustada de acordo com os objetivos financeiros, o horizonte de tempo e o apetite ao risco do investidor.'
        ],
        'gestão de riscos no investimento': [
            'Gestão de riscos no investimento envolve a identificação, avaliação e mitigação dos riscos associados a um portfólio de investimentos. Estratégias incluem a diversificação, o uso de derivativos e o monitoramento contínuo das condições de mercado.'
        ],
        'estratégias de hedge': [
            'As estratégias de hedge são utilizadas para proteger os investimentos contra riscos de mercado, como a volatilidade dos preços. Isso pode ser feito através do uso de derivativos, como opções e futuros, para compensar potenciais perdas em outras partes do portfólio.'
        ],
        'monitoramento de riscos e ajustes': [
            'O monitoramento de riscos e ajustes no portfólio é um processo contínuo de revisão e adaptação do portfólio conforme as condições do mercado e os objetivos financeiros mudam. Ajustes podem incluir a rebalança de ativos ou a adoção de novos instrumentos de hedge.'
        ],
        'investimentos alternativos': [
            'Investimentos alternativos são ativos que não se enquadram nas categorias tradicionais de ações, títulos ou imóveis. Exemplos incluem commodities, criptomoedas, arte e fundos de hedge. Eles podem oferecer diversificação e proteção contra a volatilidade dos mercados financeiros tradicionais.'
        ],
        'fundos hedge e private equity': [
            'Fundos hedge e private equity são tipos de fundos de investimento que buscam altos retornos através de estratégias mais arriscadas e especializadas, como alavancagem, investimentos em empresas privadas ou em mercados emergentes, e estratégias de arbitragem.'
        ],
        'ações de risco e derivativos': [
            'Ações de risco são aquelas de empresas em setores emergentes ou com alto potencial de crescimento, mas com maior volatilidade. Derivativos, como opções e futuros, são instrumentos financeiros usados para especulação ou proteção contra flutuações de preço.'
        ],
        'proteção de patrimônio familiar': [
            'A proteção de patrimônio familiar envolve estratégias para preservar e aumentar o valor do patrimônio de uma família, como seguros, planejamento sucessório, e a criação de um fundo de emergência. O objetivo é proteger os bens contra imprevistos e garantir a segurança financeira a longo prazo.'
        ],
        'planejamento sucessório e tributação': [
            'O planejamento sucessório envolve a organização da transferência de bens e ativos para os herdeiros, minimizando impostos e evitando disputas familiares. A tributação deve ser cuidadosamente planejada para reduzir os impostos sobre heranças e doações.'
        ],     'o que são investimentos': [
            'Investimentos são aplicações de recursos com o objetivo de gerar retorno financeiro. A importância de investir está em maximizar o patrimônio, garantir segurança financeira no futuro e aproveitar oportunidades de crescimento no mercado.'
        ],
        'tipos de investimentos': [
            'Os investimentos podem ser classificados em duas grandes categorias: Renda Fixa e Renda Variável. Renda Fixa inclui investimentos como CDBs, Tesouro Direto e Debêntures, que oferecem rentabilidade predefinida. Já a Renda Variável inclui ações e fundos imobiliários, que têm rentabilidade sujeita às flutuações do mercado.'
        ],
        'perfil de investidor': [
            'O perfil de investidor define sua tolerância ao risco. Existem três perfis principais: conservador, moderado e arrojado. É importante avaliar seu perfil para escolher os investimentos mais adequados e alinhar com seus objetivos financeiros.'
        ],
        'relação risco e retorno': [
            'A relação entre risco e retorno é fundamental no investimento. Quanto maior o risco de um investimento, maior o retorno potencial. Os investidores precisam equilibrar sua aversão ao risco com suas expectativas de retorno, sempre alinhando isso com seus objetivos e horizonte de tempo.'
        ],
        'escolher estratégia de investimentos para a família': [
            'Escolher uma estratégia de investimentos para a família envolve considerar o perfil de risco de cada membro da família, o objetivo de longo prazo e o montante a ser investido. A diversificação de ativos e a escolha de investimentos que atendem às necessidades futuras de cada membro são essenciais.'
        ],
        'diversificação de portfólio': [
            'Diversificação de portfólio é uma técnica que visa reduzir o risco de um portfólio ao distribuir os investimentos entre diferentes ativos. Isso pode incluir ações, renda fixa, fundos imobiliários e outros tipos de ativos, ajudando a proteger o portfólio contra a volatilidade de mercado.'
        ],
        'alocação de ativos': [
            'A alocação de ativos envolve distribuir o capital disponível entre diferentes classes de investimentos, como ações, títulos, imóveis e outros. A alocação de ativos deve ser feita com base no perfil de risco e nos objetivos financeiros de longo prazo.'
        ],
        'rebalanceamento de investimentos': [
            'O rebalanceamento de investimentos é o processo de ajustar a alocação de ativos do portfólio para garantir que ele continue alinhado com os objetivos e tolerância ao risco do investidor. Isso pode envolver a compra ou venda de ativos para manter a proporção adequada entre os tipos de investimento.'
        ],
        'estratégia de investimento para diferentes perfis de família': [
            'Cada perfil de família pode ter uma estratégia diferente. Famílias mais conservadoras podem optar por uma maior alocação em renda fixa, enquanto famílias mais arrojadas podem escolher maior exposição a ações e fundos de investimento. O importante é definir claramente os objetivos e revisar regularmente a estratégia.'
        ],
        'monitoramento de investimentos': [
            'Monitorar os investimentos é essencial para acompanhar o desempenho e garantir que o portfólio esteja cumprindo seus objetivos. Isso envolve a análise de retornos, a revisão do risco e a reavaliação de objetivos financeiros ao longo do tempo.'
        ],
        'carteira de investimentos para longo prazo': [
            'Construir uma carteira de investimentos para o longo prazo envolve a escolha de ativos que têm potencial de crescimento estável ao longo do tempo. A diversificação entre ações, fundos imobiliários e outros ativos pode ajudar a reduzir o risco e maximizar os retornos ao longo dos anos.'
        ],
        'juros compostos': [
            'Os juros compostos são a chave para o crescimento do patrimônio no longo prazo. Eles permitem que os rendimentos gerados por um investimento sejam reinvestidos e gerem novos rendimentos, o que acelera o crescimento do capital ao longo do tempo.'
        ],
        'fundos imobiliários, ações e tesouro direto': [
            'Esses três tipos de investimento são populares para quem busca retorno no longo prazo. Fundos imobiliários geram renda passiva, ações oferecem potencial de valorização e dividendos, e o Tesouro Direto é uma opção segura de renda fixa com retornos consistentes.'
        ],
        'gerenciar riscos do portfólio': [
            'Proteger seu portfólio envolve a gestão ativa de riscos, como a diversificação de ativos, o uso de derivativos e o rebalanceamento regular. A ideia é minimizar a exposição a perdas enquanto aproveita as oportunidades de crescimento.'
        ],
        'flexibilidade e revisão periódica de investimentos': [
            'A flexibilidade no portfólio é importante, pois as condições de mercado e os objetivos financeiros mudam com o tempo. Revisar periodicamente os investimentos permite ajustar a estratégia conforme necessário e garantir que o portfólio continue a atender aos objetivos de longo prazo.'
        ],'fundamentos do planejamento orçamentário de longo prazo': [
            'O planejamento orçamentário de longo prazo envolve a definição de metas financeiras, a alocação de recursos para despesas futuras e a criação de um orçamento que possa suportar os objetivos financeiros da família ao longo dos anos. É essencial para garantir que os recursos sejam usados de maneira eficiente e que o futuro financeiro da família seja seguro.'
        ],
        'análise profunda da situação financeira familiar': [
            'Uma análise profunda da situação financeira familiar inclui examinar as fontes de renda, despesas, ativos e passivos. Isso ajuda a entender a saúde financeira da família e a identificar áreas que necessitam de ajustes, como redução de gastos, aumento da poupança ou investimentos mais rentáveis.'
        ],
        'estratégias avançadas para classificação e priorização de despesas': [
            'As estratégias avançadas para classificação e priorização de despesas envolvem o uso de ferramentas de planejamento financeiro para distinguir entre despesas essenciais e não essenciais. Isso permite alocar recursos de maneira eficiente, minimizando gastos desnecessários e focando nas prioridades da família.'
        ],
        'otimização de fluxos de caixa': [
            'A otimização dos fluxos de caixa envolve analisar a entrada e saída de recursos financeiros da família, buscando formas de aumentar a receita ou reduzir custos. Uma gestão eficiente dos fluxos de caixa pode maximizar o uso dos recursos e ajudar a evitar déficits financeiros no futuro.'
        ],
        'tecnologias e ferramentas de planejamento financeiro': [
            'Existem diversas tecnologias e ferramentas de planejamento financeiro disponíveis, incluindo softwares como o Mint, YNAB (You Need a Budget), e ferramentas de consultoria financeira online. Esses recursos ajudam na criação e monitoramento de orçamentos, na gestão de investimentos e na análise de gastos.'
        ],
        'controle de despesas variáveis e fixas': [
            'O controle de despesas fixas e variáveis envolve acompanhar rigorosamente os gastos mensais, separando as despesas essenciais (fixas) das variáveis. Isso permite ter uma visão clara do que pode ser ajustado, oferecendo maior controle financeiro e possibilitando a realização de cortes eficientes.'
        ],
        'estratégias de redução de despesas': [
            'Estratégias de redução de despesas incluem o planejamento fiscal, como o uso de deduções e isenções fiscais, e a implementação de cortes eficientes em áreas não essenciais. Isso pode envolver negociar contratos, reduzir o consumo de energia e reavaliar compras recorrentes.'
        ],
        'gestão de riscos financeiros no orçamento familiar': [
            'A gestão de riscos financeiros no orçamento familiar envolve a identificação de riscos que podem afetar a saúde financeira, como perdas de emprego ou emergências médicas, e a criação de um plano para mitigá-los. Isso pode incluir a criação de um fundo de emergência e a diversificação de fontes de renda.'
        ],
        'análise de custos oportunos': [
            'A análise de custos oportunos é o processo de avaliar as prioridades econômicas da família e ajustar os investimentos e despesas de acordo com as mudanças nas condições financeiras ou de mercado. A reavaliação periódica das prioridades ajuda a manter o orçamento alinhado com os objetivos financeiros.'
        ],
        'sustentabilidade financeira a longo prazo': [
            'A sustentabilidade financeira a longo prazo envolve garantir que as despesas futuras possam ser cobertas com os recursos disponíveis, sem comprometer a qualidade de vida. Isso inclui a criação de um portfólio de investimentos robusto, o controle de dívidas e a construção de uma reserva financeira suficiente.'
        ],
        'estratégias de poupança avançada': [
            'As estratégias avançadas de poupança envolvem a diversificação dos investimentos, o uso de contas de poupança com alta rentabilidade, e a aplicação de juros compostos para maximizar os retornos. Além disso, é importante ter uma estratégia de aportes regulares para acelerar o crescimento do patrimônio.'
        ],
        'planejamento de aposentadoria': [
            'O planejamento de aposentadoria envolve a projeção de quanto dinheiro será necessário para sustentar o estilo de vida desejado após a aposentadoria. Modelos de projeção podem incluir a análise de despesas futuras, a escolha de veículos de investimento como previdência privada e a estimativa do valor necessário para garantir uma aposentadoria confortável.'
        ],
        'gestão de portfólio e alocação de ativos': [
            'A gestão de portfólio envolve a seleção e monitoramento de investimentos para atingir os objetivos financeiros a longo prazo. A alocação de ativos é uma estratégia usada para distribuir os investimentos entre diferentes classes de ativos, como ações, renda fixa e imóveis, para balancear risco e retorno.'
        ],
        'fundos imobiliários, criptomoedas e investimentos alternativos': [
            'Investimentos complexos, como fundos imobiliários, criptomoedas e outros ativos alternativos, oferecem uma maneira de diversificar os investimentos e potencializar os retornos. Fundos imobiliários geram renda passiva, enquanto criptomoedas e ativos alternativos podem ter grande volatilidade, mas também altos retornos.'
        ],
        'hedge e proteção de ativos': [
            'Hedge é uma estratégia utilizada para proteger o portfólio contra perdas financeiras em cenários econômicos voláteis. Isso pode incluir o uso de derivativos, como opções e futuros, ou a diversificação dos investimentos para reduzir o risco de exposição a um único mercado ou ativo.'
        ],
        'financas pessoais': [
            'Finanças pessoais envolvem o controle da sua renda, despesas e investimentos. Podemos te ensinar como gerenciar melhor sua vida financeira.',
            'O planejamento financeiro é essencial para alcançar a estabilidade. Gostaria de aprender como organizar suas finanças pessoais?',
            'Finanças pessoais bem organizadas são fundamentais para uma vida sem preocupações financeiras. Podemos ajudar a planejar isso!'
        ],
        'objetivos financeiros': [
            'Definir metas financeiras claras é o primeiro passo para alcançar seus sonhos financeiros. Quer aprender a estabelecer suas metas?',
            'Ter objetivos financeiros bem definidos pode acelerar sua jornada rumo à liberdade financeira. Já pensou nos seus objetivos de longo prazo?',
            'Objetivos financeiros são essenciais para manter o foco. Posso te ajudar a definir os seus de forma eficaz!'
        ],
        'planejamento financeiro': [
            'O planejamento financeiro é o caminho para a liberdade financeira. Vamos aprender a fazer um planejamento estratégico para o seu futuro?',
            'Criar um planejamento financeiro é essencial para alcançar seus objetivos. Quer saber como começar a planejar suas finanças?',
            'Você sabia que o planejamento financeiro pode ajudar a alcançar a liberdade financeira mais rapidamente? Vamos aprender juntos!'
        ],
        'orçamento pessoal': [
            'Elaborar um orçamento pessoal é o primeiro passo para tomar o controle das suas finanças. Podemos te ajudar a criar o seu!',
            'Você já sabe o que é um orçamento pessoal? Ele é a chave para controlar seus gastos e alcançar seus objetivos financeiros!',
            'Criar um orçamento eficiente é essencial para a saúde financeira. Posso te ensinar a organizar as suas finanças com um orçamento detalhado!'
        ],
        'regra 50/30/20': [
            'A Regra 50/30/20 ajuda a distribuir sua renda de forma equilibrada. 50% para necessidades, 30% para desejos e 20% para poupança e investimentos.',
            'A Regra 50/30/20 é uma ótima maneira de organizar suas finanças. Gostaria de saber como aplicar essa técnica no seu orçamento?',
            'Você já usa a Regra 50/30/20 para dividir seu orçamento? Ela pode te ajudar a controlar suas finanças de forma equilibrada!'
        ],
        'ferramentas de orçamento': [
            'Existem diversas ferramentas e apps que podem te ajudar a organizar seu orçamento. Quer saber mais sobre os melhores disponíveis?',
            'A tecnologia pode te ajudar a controlar melhor suas finanças. Existem muitos aplicativos para criar orçamentos. Vamos explorar alguns?',
            'Com as ferramentas certas, controlar seu orçamento fica mais fácil. Posso te mostrar algumas opções que vão te ajudar a ter tudo sob controle!'
        ],
        'poupança': [
            'Poupar é fundamental para garantir a sua segurança financeira. Tem alguma meta de poupança ou gostaria de aprender a criar uma?',
            'Você sabe quanto precisa poupar para alcançar seus objetivos? Vamos definir uma meta de poupança para você!',
            'Poupar dinheiro é o primeiro passo para garantir um futuro tranquilo. Quer aprender as melhores estratégias para poupar?'
        ],
        'investimentos': [
            'Investir é uma excelente maneira de aumentar seu patrimônio ao longo do tempo. Podemos começar com o básico dos investimentos?',
            'Existem muitos tipos de investimentos, como renda fixa e ações. Qual deles você gostaria de aprender mais?',
            'Investimentos bem feitos podem transformar sua vida financeira. Vamos explorar as opções que mais se encaixam no seu perfil?'
        ],
        'renda fixa': [
            'Investimentos em renda fixa são mais seguros, pois oferecem uma rentabilidade previsível. Você gostaria de saber mais sobre esses tipos de investimento?',
            'Renda fixa é uma boa opção para quem busca segurança e rentabilidade estável. Gostaria de explorar como investir nesse tipo de ativo?',
            'Investir em renda fixa é uma das formas mais seguras de começar a investir. Quer saber como escolher os melhores produtos de renda fixa?'
        ],
        'ações': [
            'Investir em ações pode oferecer grandes retornos, mas também envolve riscos. Vamos aprender a investir em ações com segurança?',
            'Você sabia que as ações são uma das formas mais populares de investimento? Quer aprender a como selecionar boas ações para investir?',
            'Investir em ações exige conhecimento e análise do mercado. Podemos explorar as melhores estratégias para você começar a investir em ações!'
        ],
        'juros compostos': [
            'Os juros compostos podem multiplicar seus investimentos ao longo do tempo. Quer entender como isso funciona e como usá-los a seu favor?',
            'O poder dos juros compostos pode ser a chave para construir riqueza. Quer saber como começar a investir para aproveitar essa vantagem?',
            'Os juros compostos são essenciais para fazer seu dinheiro crescer. Quer aprender a aplicar essa estratégia nos seus investimentos?'
        ],
        'investimentos': [
            'Investir é uma das formas mais eficazes de aumentar seu patrimônio. Podemos te ensinar como começar!',
            'Existem diversas formas de investimento, dependendo do seu perfil. Quer saber mais sobre investimentos?',
            'Investimentos são uma boa forma de alcançar seus objetivos financeiros. Podemos te ajudar a entender melhor!'
        ],
        'orçamento familiar': [
            'Um bom orçamento familiar é a base para controlar suas finanças e alcançar seus objetivos. Temos cursos sobre isso.',
            'Quer aprender a organizar o orçamento da sua casa? Temos materiais e cursos que podem te ajudar.',
            'Com um bom orçamento, você consegue controlar suas finanças e economizar mais. Podemos te ajudar a criar o seu!'
        ],
        'financas pessoais': [
            'Finanças pessoais envolvem o controle de sua renda, despesas e investimentos. Podemos te ensinar como gerenciar melhor sua vida financeira.',
            'A base das finanças pessoais é o planejamento. Quer saber como fazer um planejamento financeiro eficiente?',
            'Quer aprender a controlar suas finanças pessoais? Temos cursos que ensinam as melhores práticas.'
        ],
        'porcoins': [
            'A PORCOINS é nossa plataforma dedicada ao ensino de finanças e investimentos. Acesse nosso site para mais informações.',
            'Na PORCOINS, você encontra cursos, materiais e consultorias para te ajudar a alcançar seus objetivos financeiros.'
        ],
        'consultoria': [
            'Oferecemos consultorias financeiras para te ajudar a investir e alcançar seus objetivos financeiros.',
            'Nossa consultoria financeira é personalizada. Entre em contato para saber mais!'
        ],
        'cursos': [
            'Temos cursos sobre finanças pessoais, investimentos e muito mais! Quer saber mais sobre algum curso específico?',
            'Nossos cursos são projetados para te ajudar a melhorar sua gestão financeira e alcançar seus objetivos.'
        ],
        'contato': [
            'Você pode entrar em contato conosco pelo email [contato@porcoins.com](mailto:contato@porcoins.com) ou pelo telefone (11) 1234-5678.',
            'Para entrar em contato conosco, basta acessar a página de contato no nosso site.'
        ],
        'certificado': [
            'Após concluir nossos cursos, você recebe um certificado de conclusão! Quer saber mais?',
            'Sim, todos os nossos cursos oferecem certificados. Acesse a página do curso para mais informações.'
        ],
        'renda passiva': [
            'A renda passiva é uma forma de ganhar dinheiro sem precisar trabalhar ativamente. Quer aprender a investir para gerar renda passiva?',
            'Existem várias formas de criar fontes de renda passiva. Nosso curso de investimentos pode te ensinar como.'
        ],
        'criptomoedas': [
            'Criptomoedas são moedas digitais que utilizam criptografia. Quer aprender mais sobre investimentos em criptomoedas?',
            'Nós temos um curso específico sobre como investir em criptomoedas. Quer saber mais sobre ele?'
        ],
        'erro': [
            'Desculpe, não entendi sua mensagem. Pode tentar novamente?',
            'Não consegui entender sua pergunta. Você pode reformular?',
            'Eu não entendi sua solicitação, pode tentar de outra forma?'
        ]
    };

    // Verifica se existe uma resposta para a mensagem
    if (responses[normalizedInput]) {
        // Escolhe uma resposta aleatória do array de respostas
        return responses[normalizedInput][Math.floor(Math.random() * responses[normalizedInput].length)];
    } else {
        // Resposta padrão em caso de erro
        return responses['erro'][Math.floor(Math.random() * responses['erro'].length)];
    }
}

// Função para enviar mensagem
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;  // Evita enviar mensagens vazias

    addMessage(userInput, 'user');
    document.getElementById('user-input').value = '';  // Limpa o campo de entrada

    // Responder com base no conteúdo da entrada
    const botResponse = generateResponse(userInput);
    setTimeout(() => addMessage(botResponse, 'bot'), 500); // Resposta do bot com pequeno atraso
}

// Função para adicionar a mensagem ao chat
function addMessage(message, sender) {
    const chatBox = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Mantém o chat rolado para a última mensagem
}

// Função para adicionar botões de opção no chat
function addOptionButton(opcaotexto) {
    const chatBox = document.getElementById('messages');
    const optionElement = document.createElement('div');
    optionElement.className = 'option-button';
    optionElement.textContent = opcaotexto;
    optionElement.addEventListener('click', () => handleOptionClick(opcaotexto)); // Define o evento de clique para a opção
    chatBox.appendChild(optionElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Mantém o chat rolado para a última mensagem
}

// Adiciona o evento de tecla Enter para enviar mensagem
document.getElementById('user-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});