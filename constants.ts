import { Shield, Plane, AlertTriangle, Users, Globe, Award, FileText, Brain, Briefcase, Search, CheckSquare, HeartPulse, Clock, Navigation, Zap, Droplet, Stethoscope, Factory, TrendingUp, HelpCircle, BookOpen, MonitorPlay, Users2, Leaf, ClipboardCheck, PenTool, Rocket, BarChart3, Laptop, Map, GraduationCap, Building2, FileCheck, QrCode, ScanLine, CheckCircle2, AlertCircle, Package, Truck, Flame, Lock, Siren, UserX, Scan } from 'lucide-react';

export const CONTENT = {
  pt: {
    nav: [
      { label: 'Início', path: '/' },
      {
        label: 'Sobre Nós',
        path: '/about',
        submenu: [
          { label: 'Visão Geral', path: '/about' },
          { label: 'Instrutores', path: '/instructors' }
        ]
      },
      {
        label: 'Serviços',
        path: '/services',
        submenu: [
          { label: 'Visão Geral', path: '/services' },
          { label: 'Treinamentos', path: '/training' }
        ]
      },
      { label: 'Corporativo', path: '/corporate' },
      { label: 'Contato', path: '/contact' },
    ],
    buttons: {
      getStarted: 'COMEÇAR',
      explore: 'Explorar Programas',
      contact: 'Fale Conosco',
      learnMore: 'Saiba Mais',
      requestProposal: 'Orçamento Corporativo',
      viewAll: 'Ver Todos os Cursos',
      details: 'Solicitar Detalhes',
      catalog: 'Baixar Catálogo Corporativo',
      schedule: 'Agendar Reunião',
      syllabus: 'Solicitar Ementa e Preços',
      sendMessage: 'Enviar Mensagem',
      viewProfile: 'Ver Perfil Completo',
      enroll: 'Matricule sua Equipe',
      whatsapp: 'Fale no WhatsApp',
      quoteNow: 'Cotar Treinamento Agora'
    },
    crm_lp: {
      hero: {
        badge: 'Treinamento Obrigatório ANAC',
        title: 'CRM Corporativo de Alta Performance',
        subtitle: 'Eleve o padrão de segurança e eficiência da sua tripulação com o treinamento de CRM da HTC. Metodologia focada na realidade operacional (RBAC 135/121).',
        formTitle: 'Solicite uma Proposta',
        formSubtitle: 'Receba um orçamento personalizado para sua empresa em até 24h.',
        form: {
          name: 'Nome Completo',
          email: 'E-mail Corporativo',
          phone: 'Telefone',
          crewSize: 'Tripulantes',
          company: 'Empresa',
          placeholders: {
            name: 'Seu nome',
            email: 'seu@empresa.com.br',
            phone: '(21) 9999-9999',
            company: 'Nome da empresa aérea'
          },
          privacy: 'Seus dados estão protegidos. Retorno em até 24h úteis.'
        }
      },
      aboutCourse: {
        badge: 'Metodologia Imersiva',
        title: 'Treinamento Focado na Realidade',
        description: 'Nosso treinamento de CRM vai além da teoria. Utilizamos estudos de caso reais e dinâmicas de grupo para simular situações críticas de voo, garantindo que sua tripulação esteja preparada para tomar decisões assertivas sob pressão.',
        stats: [
          { label: 'Aprovação ANAC', value: '100%' },
          { label: 'Exercícios Práticos', value: 'Prática' }
        ],
        image: '/images/crm-classroom.jpg'
      },
      crmSim: {
        badge: 'Treinamento Avançado',
        title: 'CRM-LOS: Simulador Realista',
        description: 'Integre conceitos de CRM diretamente no cockpit. Nossas sessões de Line Oriented Simulation (LOS) permitem que pilotos pratiquem comunicação e gerenciamento de carga de trabalho em cenários de alta fidelidade.',
        image: '/images/crm-simulator.jpg',
        features: ['Cenários Customizados', 'Debriefing Video-Assistido', 'Instrutores de Voo Sêniors']
      },
      painPoints: {
        title: 'Por que sua operação precisa deste treinamento?',
        items: [
          { title: 'Conformidade ANAC', desc: 'Evite multas e não conformidades em auditorias de rampa.' },
          { title: 'Redução de Erros', desc: 'Mitigue o erro humano, principal causa de acidentes aéreos.' },
          { title: 'Cultura Justa', desc: 'Implemente uma mentalidade de reporte e segurança psicológica.' }
        ]
      },
      syllabus: {
        title: 'Conteúdo Programático Homologado',
        subtitle: 'Cobrindo todos os requisitos da grade curricular obrigatória.',
        initial: ['Ameaça e Erro (TEM)', 'Consciência Situacional', 'Tomada de Decisão', 'Comunicação Assertiva', 'Liderança e Trabalho em Equipe', 'Automação e Monitoramento'],
        recurrent: ['Estudos de Caso Recentes', 'Atualização Regulatória', 'Fadiga Humana (RBAC 117)', 'CRM em Single-Pilot (se aplicável)', 'Gerenciamento de Startle Effect']
      },
      whyUs: {
        title: 'Por que a HTC é a escolha de grandes operadores?',
        items: [
          { title: 'Personalização Real', desc: 'Não usamos slides genéricos. Analisamos seu MGO e adaptamos os cases à sua rotina.' },
          { title: 'Instrutores Seniores', desc: 'Aulas ministradas por Comandantes e Gestores com décadas de aviação comercial e offshore.' },
          { title: 'Certificação Ágil', desc: 'Emissão de certificados digitais com QR Code imediatamente após a conclusão.' }
        ]
      },
      cta: {
        title: 'Pronto para elevar o nível da sua tripulação?',
        desc: 'Garanta a melhor data para o seu treinamento. Atendemos em todo o Brasil.'
      }
    },
    dgr_lp: {
      hero: {
        badge: 'Certificação IATA & ANAC',
        title: 'DGR: Transporte Aéreo Seguro e Eficiente',
        subtitle: 'Treinamento especializado em Artigos Perigosos para Expedidores, Agentes de Carga e Operadores Aéreos. Evite multas e retenção de carga.',
        formTitle: 'Cotação para Empresas',
        formSubtitle: 'Capacite sua equipe logística e operacional. Turmas online e presenciais.',
        form: {
          name: 'Nome Completo',
          email: 'E-mail Corporativo',
          phone: 'Telefone',
          studentCount: 'Nº de Alunos',
          company: 'Empresa',
          placeholders: {
            name: 'Seu nome',
            email: 'seu@empresa.com.br',
            phone: '(21) 9999-9999',
            company: 'Empresa de Logística/Aérea'
          },
          privacy: 'Seus dados estão protegidos. Retorno em até 24h úteis.'
        }
      },
      aboutCourse: {
        badge: 'Certificação IATA',
        title: 'Domine o Transporte de Cargas Perigosas',
        description: 'Treinamento completo para garantir que sua operação esteja em conformidade com as rigorosas normas da IATA e ANAC (RBAC 175). Foco prático na identificação, embalagem, etiquetagem e documentação de artigos perigosos.',
        stats: [
          { label: 'Metodologia', value: 'CBTA' },
          { label: 'Instrutores', value: 'IATA Cat. 6' }
        ],
        image: '/images/dgr-classroom.jpg'
      },

      painPoints: {
        title: 'Sua carga está em risco?',
        items: [
          { title: 'Multas Pesadas', desc: 'Declarações incorretas geram multas severas da ANAC e bloqueios em cias aéreas.' },
          { title: 'Carga Retida', desc: 'Erros na embalagem ou etiquetagem causam atrasos críticos na cadeia logística.' },
          { title: 'Segurança Operacional', desc: 'O manuseio incorreto pode causar incêndios a bordo e acidentes fatais.' }
        ]
      },
      syllabus: {
        title: 'Currículo Baseado em Competência (CBTA)',
        subtitle: 'Conformidade total com a última edição do manual IATA DGR e RBAC 175.',
        initial: ['Filosofia Geral e Limitações', 'Classificação (Classes 1 a 9)', 'Lista de Artigos Perigosos', 'Instruções de Embalagem', 'Marcação e Etiquetagem', 'Documentação (DGD/NOTOC)'],
        recurrent: ['Atualizações da Edição IATA Vigente', 'Estudos de Caso de Incidentes', 'Procedimentos de Emergência', 'Baterias de Lítio (Novas Regras)', 'Materiais Radioativos (Opcional)']
      },
      whyUs: {
        title: 'Expertise em Logística Aérea',
        items: [
          { title: 'Instrutores Credenciados', desc: 'Profissionais com certificação IATA Category 6 e vivência em terminais de carga.' },
          { title: 'Foco Prático', desc: 'Exercícios reais de preenchimento de DGD, verificação de checklists e etiquetagem.' },
          { title: 'Certificado Válido', desc: 'Reconhecido por todas as companhias aéreas e auditores da ANAC.' }
        ]
      },
      cta: {
        title: 'Garanta a fluidez da sua logística',
        desc: 'Certifique seus expedidores e conferentes com quem entende de DGR.'
      }
    },
    // Adding AVSEC LP Content
    avsec_lp: {
      hero: {
        badge: 'Proteção da Aviação Civil',
        title: 'AVSEC: Segurança Contra Atos Ilícitos',
        subtitle: 'Treinamento homologado para Tripulantes, Agentes de Aeroporto e Equipes de Solo. Conformidade rigorosa com RBAC 107 e 108.',
        formTitle: 'Orçamento de Treinamento',
        formSubtitle: 'Evite não conformidades em auditorias da ANAC e PF.',
        form: {
          name: 'Nome Completo',
          email: 'E-mail Corporativo',
          phone: 'Telefone',
          studentCount: 'Nº de Alunos',
          company: 'Empresa',
          placeholders: {
            name: 'Seu nome',
            email: 'seu@empresa.com.br',
            phone: '(21) 9999-9999',
            company: 'Operador Aéreo / Aeroporto'
          },
          privacy: 'Seus dados estão protegidos. Retorno em até 24h úteis.'
        }
      },
      aboutCourse: {
        badge: 'Inspeção e Segurança',
        title: 'Formação Completa em AVSEC',
        description: 'Capacite sua equipe para identificar e mitigar ameaças à aviação civil. Nossos cursos seguem rigorosamente os regulamentos da ANAC (RBAC 107/108) e as melhores práticas internacionais para proteção de passageiros, tripulantes e infraestrutura.',
        stats: [
          { label: 'Conformidade', value: 'RBAC 108' },
          { label: 'Metodologia', value: 'Prática' }
        ],
        image: '/images/avsec-classroom.jpg'
      },
      painPoints: {
        title: 'Vulnerabilidades custam caro',
        items: [
          { title: 'Passageiros Indisciplinados', desc: 'Aumento de casos de agressão e desordem a bordo exigem preparo.' },
          { title: 'Auditorias Rigorosas', desc: 'Falhas nos procedimentos de inspeção geram multas e suspensão de COA.' },
          { title: 'Ameaças Emergentes', desc: 'Novos métodos de ocultação exigem atualização constante das equipes.' }
        ]
      },
      syllabus: {
        title: 'Módulos Operacionais e Gerenciais',
        subtitle: 'Atendendo desde o check-in até o cockpit, conforme PNAVSEC.',
        ground: ['Controle de Acesso em Áreas Restritas (ARS)', 'Inspeção de Passageiros e Bagagem (R-X)', 'Proteção de Aeronave Estacionada', 'Verificação de Segurança de Aeronave', 'Entrevista de Segurança'],
        flight: ['Gerenciamento de Pax Indisciplinado', 'Ameaça de Bomba em Voo', 'Procedimentos de Sequestro', 'Defesa Pessoal Básica (Opcional)', 'Varredura de Cabine']
      },
      whyUs: {
        title: 'Segurança é nossa prioridade',
        items: [
          { title: 'Instrutores de Elite', desc: 'Equipe formada por ex-militares e gestores de segurança aeroportuária.' },
          { title: 'Simulações Reais', desc: 'Treinamento prático de varredura e identificação de artefatos simulados.' },
          { title: 'Credenciamento', desc: 'Homologação total junto à ANAC para ministrar cursos AVSEC.' }
        ]
      },
      cta: {
        title: 'Proteja sua operação agora',
        desc: 'Agende o treinamento da sua equipe e garanta a segurança dos seus voos.'
      }
    },
    home: {
      heroSlides: [
        {
          tag: 'Padrões Internacionais de Aviação',
          title: 'Elevando a Segurança & Performance',
          desc: 'Treinamento especializado em aviação (CRM, AVSEC, DGR) para profissionais que exigem excelência. Conformidade, segurança e expertise em um só lugar.'
        },
        {
          tag: 'Fatores Humanos',
          title: 'CRM: Cultura & Segurança',
          desc: 'Programas de CRM adaptados à cultura e aos SOPs da sua empresa. Formamos tripulações resilientes e padronizadas.'
        },
        {
          tag: 'Proteção da Aviação Civil',
          title: 'AVSEC: Conformidade Total',
          desc: 'Treinamento homologado para operadores aéreos e aeroportos. Garantia de aprovação em auditorias da ANAC.'
        },
        {
          tag: 'Artigos Perigosos',
          title: 'DGR: Logística Segura',
          desc: 'Certificação IATA para toda a cadeia logística. Evite multas e garanta a segurança no transporte de cargas especiais.'
        }
      ],
      heroTag: 'Padrões Internacionais de Aviação',
      heroTitle: 'Elevando a Segurança & Performance',
      heroDesc: 'Treinamento especializado em aviação (CRM, AVSEC, DGR) para profissionais que exigem excelência. Conformidade, segurança e expertise em um só lugar.',
      whyChoose: 'Por que escolher a HTC',
      excellence: 'Excelência em Cada Detalhe',
      programsTitle: 'Programas de Treinamento',
      trust: 'Padrões de Conformidade Confiáveis',
      certificationsLabel: 'Certificações',
      ctaTitle: 'Sua operação precisa de treinamento padronizado?',
      ctaDesc: 'Desenvolvemos cronogramas que não impactam sua escala. Fale com nossos especialistas sobre contratos corporativos.',
      stats: [
        { value: '20+', label: 'Anos de Mercado' },
        { value: '15k+', label: 'Profissionais Treinados' },
        { value: '500+', label: 'Empresas Atendidas' },
        { value: '100%', label: 'Aprovação em Auditorias' }
      ]
    },
    // ... rest of content remains same until English section
    features: [
      {
        title: 'Foco no Operador',
        description: 'Conteúdo adaptado aos SOPs e manuais da sua empresa (Customização).',
        icon: Briefcase
      },
      {
        title: 'Instrutores Seniores',
        description: 'Profissionais com vivência em grandes companhias aéreas e gestão.',
        icon: Users
      },
      {
        title: 'Flexibilidade Logística',
        description: 'Treinamentos In-Company ou Online para otimizar a escala da tripulação.',
        icon: Map
      },
      {
        title: 'Conformidade Garantida',
        description: 'Cursos desenhados para atender auditorias IOSA, ISAGO e ANAC.',
        icon: Award
      }
    ],
    services_page: {
      title: 'Portfólio de Serviços',
      subtitle: 'Do treinamento regulatório à certificação operacional. Fornecemos soluções de ponta a ponta para a indústria da aviação.',
      sectionTitle: 'Nossos Serviços',
      operationalTitle: 'Treinamentos Operacionais',
      consultingTitle: 'Consultoria e Assessoria',
      includes: 'O que está incluído:',
      tailoredTitle: 'Soluções Sob Medida',
      tailoredDesc1: 'Entendemos que cada operação aérea possui desafios únicos. Seja você uma grande companhia aérea, um operador de táxi aéreo regional ou um gestor aeroportuário, nossos serviços são moldados para sua realidade.',
      tailoredDesc2: 'Nossa equipe atua como uma extensão do seu departamento de segurança e qualidade, garantindo não apenas a conformidade com a ANAC, mas a eficiência operacional.',
      tailoredBoxTitle: '100% Personalizável',
      tailoredBoxDesc: 'Currículo adaptado aos seus SOPs e cultura da empresa.',
      catalogTitle: 'Não encontrou o que procura?',
      catalogDesc: 'Nosso portfólio evolui constantemente para atender novas resoluções da ANAC e ICAO.'
    },
    services_list: [
      {
        id: 'crm-full',
        title: 'CRM - Corporate Resource Management',
        description: 'Treinamento completo para competência interpessoal na cabine e cockpit.',
        icon: Users,
        features: ['CRM Inicial & Recorrente', 'CRM Corporativo', 'CRM Single Pilot', 'Curso de Instrutor de CRM']
      },
      {
        id: 'avsec-full',
        title: 'AVSEC - Segurança da Aviação',
        description: 'Treinamento de segurança contra atos de interferência ilícita.',
        icon: Shield,
        features: ['AVSEC para Tripulantes', 'AVSEC Atendimento em Solo', 'Avaliação de Ameaça', 'Conscientização (Airport Security)']
      },
      {
        id: 'dgr-full',
        title: 'DGR - Artigos Perigosos',
        description: 'Treinamento compatível com IATA/ICAO para manuseio de materiais perigosos.',
        icon: AlertTriangle,
        features: ['Categorias 1-17 (IATA)', 'Materiais Radioativos', 'Expedidores e Embaladores', 'Conscientização de Rampa']
      },
      {
        id: 'sms-sgso',
        title: 'SGSO / Treinamento SMS',
        description: 'Educação em Sistemas de Gerenciamento da Segurança Operacional para todos os níveis.',
        icon: CheckSquare,
        features: ['Introdução ao SGSO', 'Curso de Gestor de Segurança', 'Gerenciamento de Risco', 'Investigação de Ocorrências']
      },
      {
        id: 'fatigue',
        title: 'Gerenciamento de Fadiga',
        description: 'Gerenciamento da fadiga humana em operações 24/7 (RBAC 117).',
        icon: Clock,
        features: ['Conscientização sobre Fadiga', 'Implementação de FRMS', 'Estratégias de Escala', 'Performance Humana']
      },
      {
        id: 'emergency',
        title: 'Emergência e Sobrevivência',
        description: 'Treinamento prático e teórico para situações de emergência.',
        icon: Zap,
        features: ['Sobrevivência na Selva/Mar', 'Combate ao Fogo', 'Procedimentos de Evacuação', 'Exercícios de Amerissagem']
      },
      {
        id: 'first-aid',
        title: 'Primeiros Socorros e Saúde',
        description: 'Treinamento de resposta médica para emergências em voo e solo.',
        icon: HeartPulse,
        features: ['Primeiros Socorros a Bordo', 'Uso de RCP e DEA', 'Doenças Tropicais', 'Saúde do Passageiro']
      },
      {
        id: 'tech-ops',
        title: 'Ops Técnicas Especiais',
        description: 'Cursos avançados de navegação técnica e segurança operacional.',
        icon: Navigation,
        features: ['PBN (Navegação Baseada em Performance)', 'Operações RVSM', 'Conscientização ALAR / CFIT', 'Operações de Inverno / De-icing']
      },
      {
        id: 'certification',
        title: 'Certificação Operacional',
        description: 'Suporte completo para obtenção e manutenção de Certificados de Operador Aéreo (COA).',
        icon: Award,
        features: ['Certificação RBAC 135 / 121', 'Processos CHETA', 'Inclusão de Aeronaves', 'Especificações Operativas (OpSpecs)']
      },
      {
        id: 'manuals',
        title: 'Engenharia de Manuais',
        description: 'Desenvolvimento e revisão de manuais operacionais obrigatórios.',
        icon: FileText,
        features: ['MGM (Manutenção Geral)', 'MGO (Operações Gerais)', 'Piera / PAE', 'Programas de Segurança (PSO)']
      },
      {
        id: 'audits-quality',
        title: 'Auditorias e Garantia de Qualidade',
        description: 'Auditorias internas e preparatórias para padrões internacionais.',
        icon: Search,
        features: ['Análise de Gap IOSA / ISAGO', 'Auditorias Internas de Segurança', 'Auditorias de Fornecedores', 'Configuração de Controle de Qualidade']
      },
      {
        id: 'psychology-selection',
        title: 'Psicologia e Seleção',
        description: 'Serviços de fatores humanos para gestão de pessoal.',
        icon: Brain,
        features: ['Recrutamento e Seleção de Pilotos', 'Avaliação Psicológica', 'Suporte em Fatores Humanos', 'Clima Organizacional']
      }
    ],
    training_page: {
      title: 'Programas de Treinamento',
      subtitle: 'Qualificação técnica e comportamental para suas equipes de voo e solo.',
      targetAudience: 'Público Alvo',
      bannerTitle: 'Precisa treinar uma equipe inteira?',
      bannerDesc: 'Oferecemos condições especiais para turmas fechadas e contratos corporativos anuais.',
      btnCorporate: 'Ver Soluções Corporativas',
      methodology: {
        title: 'Nossa Metodologia',
        subtitle: 'Focada na retenção do conhecimento e aplicação prática nos procedimentos da sua empresa.',
        items: [
          {
            title: 'Andragogia Aplicada',
            desc: 'Foco na aprendizagem de adultos, valorizando a experiência prévia dos tripulantes.',
            icon: Users2
          },
          {
            title: 'Foco nos seus SOPs',
            desc: 'Integramos os Procedimentos Operacionais Padrão da sua empresa ao conteúdo programático.',
            icon: FileText
          },
          {
            title: 'Material Atualizado',
            desc: 'Conteúdo constantemente revisado de acordo com os últimos RBACs e emendas da ICAO.',
            icon: BookOpen
          }
        ]
      },
      differentials: {
        title: 'Padrão Corporativo de Excelência',
        subtitle: 'Segurança jurídica e operacional para a sua empresa. Entregamos mais do que cursos; entregamos conformidade.',
        items: [
          {
            title: 'Homologação ANAC',
            desc: 'Todo o conteúdo programático é rigorosamente auditado e está em conformidade com RBACs e IS vigentes.',
            icon: Shield
          },
          {
            title: 'Rastreabilidade Total',
            desc: 'Certificados digitais com QR Code único, permitindo validação instantânea em auditorias de rampa.',
            icon: ScanLine
          },
          {
            title: 'Gestão de Turmas',
            desc: 'Relatórios gerenciais de frequência e desempenho técnico da sua tripulação.',
            icon: BarChart3
          },
          {
            title: 'Foco Operacional',
            desc: 'Instrutores ativos no mercado que trazem a realidade da operação para a sala de aula.',
            icon: Plane
          }
        ]
      }
    },
    courses_list: [
      {
        id: 'crm',
        title: 'CRM - Crew Resource Management',
        category: 'CRM',
        description: 'Fundamental para a segurança de voo. Focamos não apenas na teoria, mas na aplicação dos conceitos de CRM dentro da cultura organizacional da sua empresa.',
        audience: 'Pilotos, Comissários, Despachantes, Mecânicos',
        icon: Users,
        delivery: ['Presencial', 'Híbrido', 'In-Company'],
        duration: '16h (Inicial) / 8h (Recorrente)',
        certification: 'Homologado ANAC',
        requirements: 'Vínculo com operador aéreo',
        syllabus: ['Consciência Situacional', 'Processo Decisório', 'Comunicação e Assertividade', 'Gerenciamento de Ameaça e Erro (TEM)', 'Automação e Monitoramento', 'Liderança e Trabalho em Equipe']
      },
      {
        id: 'avsec',
        title: 'AVSEC - Segurança da Aviação',
        category: 'AVSEC',
        description: 'Garanta que sua equipe de solo e voo esteja apta a prevenir atos de interferência ilícita. Treinamento rigoroso e atualizado com as normas da Polícia Federal e ANAC.',
        audience: 'Tripulantes, Agentes de Aeroporto, Segurança',
        icon: Shield,
        delivery: ['Online', 'Presencial', 'In-Company'],
        duration: 'Varia por Módulo (4h a 40h)',
        certification: 'Conforme RBAC 107 / 108',
        requirements: 'Verificação de Antecedentes Criminais',
        syllabus: ['Atos de Interferência Ilícita', 'Controle de Acesso', 'Inspeção de Pax e Bagagem', 'Proteção de Aeronave', 'Resposta a Emergência de Segurança', 'Cultura de Segurança']
      },
      {
        id: 'dgr',
        title: 'DGR - Artigos Perigosos',
        category: 'DGR',
        description: 'Essencial para operadores que transportam carga. Capacitamos expedidores e tripulantes a identificar riscos ocultos e manusear cargas especiais com segurança.',
        audience: 'Expedidores, Pilotos, Comissários, Rampa',
        icon: AlertTriangle,
        delivery: ['Online', 'Presencial', 'Híbrido'],
        duration: 'Inicial: 24h a 40h / Recorrente: 16h',
        certification: 'IATA C-BTA / ANAC RBAC 175',
        requirements: 'Sem pré-requisitos específicos',
        syllabus: ['Classificação de Artigos Perigosos (Classes 1-9)', 'Limitações e Proibições', 'Instruções de Embalagem', 'Marcação e Etiquetagem', 'Documentação (DGD/NOTOC)', 'Procedimentos de Emergência']
      },
      {
        id: 'safety-culture',
        title: 'SGSO e Cultura de Segurança',
        category: 'Gestão',
        description: 'Curso para gestores. Ensina a transformar dados de relatórios em ações preventivas, protegendo o CNPJ da empresa e a vida dos passageiros.',
        audience: 'Gestores, Oficiais de Segurança, Diretores',
        icon: Globe,
        delivery: ['Presencial', 'Híbrido'],
        duration: '24 Horas',
        certification: 'Certificado Corporativo',
        requirements: 'Experiência prévia em aviação recomendada',
        syllabus: ['Política e Objetivos de Segurança', 'Gerenciamento de Risco', 'Garantia da Segurança', 'Promoção da Segurança', 'Relatos e Cultura Justa', 'Investigação de Ocorrências (Básico)']
      },
      {
        id: 'qsms',
        title: 'Treinamento QSMS (Qualidade, Saúde, Meio Ambiente e Segurança)',
        category: 'Gestão',
        description: 'Integração de Qualidade e Segurança. Ideal para empresas que buscam certificações ISO ou melhoria em seus processos internos de auditoria.',
        audience: 'Gestores, Técnicos de Segurança, Equipes de Qualidade',
        icon: Factory,
        delivery: ['Presencial', 'Híbrido', 'In-Company'],
        duration: 'Personalizado',
        certification: 'SGI / Certificação Corporativa',
        requirements: 'Sem pré-requisitos específicos',
        syllabus: ['Gestão da Qualidade (ISO 9001)', 'Segurança Ocupacional (ISO 45001)', 'Gestão Ambiental (ISO 14001)', 'Saúde Ocupacional', 'Auditorias Internas SGI', 'Planejamento e Implementação']
      }
    ],
    // ... rest of pages
    about_page: {
      title: 'Sobre a HTC Training',
      subtitle: 'Tradição e excelência desde 2004.',
      introTitle: 'Conheça a HTC',
      introText: 'A HTC TRAINING AND BUSINESS está no mercado desde março de 2004. Desde então tem prestado serviços para inúmeras empresas do sistema de aviação civil, óleo e gás, sistema financeiro, indústria alimentícia e saúde. A HTC é composta de profissionais multidisciplinares especialistas em várias áreas do mercado.',
      clientsText: 'Atendemos grandes nomes como ERA Helicopters, BRISTOW Helicopters, CHC Helicopters, HELIBARRA Táxi Aéreo, SAFRAN Helicopters, Petrobras, Equinor, Maersk, White Martins, Transocean, Norskan, Banco do Brasil, Losango, Grupo BRF e Hospital Evandro Freire.',
      clientsList: [
        'Petrobras', 'Bristow', 'CHC Helicopters', 'Helibarra',
        'Safran', 'Equinor', 'Maersk', 'Banco do Brasil',
        'ERA Helicopters', 'White Martins', 'Transocean',
        'Norskan', 'Losango', 'Grupo BRF', 'Hosp. Evandro Freire', 'Aeróleo'
      ],
      clientsTitle: 'Empresas que Confiam na HTC',
      expertiseTitle: 'Expertise Multidisciplinar',
      expertiseText: 'Possuímos ampla experiência em gestão empresarial, gestão de contratos, alocação de mão-de-obra, consultoria, assessoria, auditoria e treinamentos especiais (gerenciamento do erro humano, de ameaças organizacionais, etc) para elevar o nível de proficiência dos seus clientes.',
      sectors: [
        { label: 'Aviação Civil', icon: Plane },
        { label: 'Óleo e Gás', icon: Droplet },
        { label: 'Saúde', icon: Stethoscope },
        { label: 'Indústria', icon: Factory },
        { label: 'Financeiro', icon: TrendingUp },
      ],
      casesTitle: 'Resultados Comprovados',
      cases: [
        {
          title: 'Logística Offshore',
          desc: 'Gestão de apoio logístico de transporte aéreo de seis aeroportos offshore Petrobras. Aproximadamente 5.000 voos e 100.000 passageiros transportados ao mês durante três anos.'
        },
        {
          title: 'Segurança (SMS)',
          desc: 'Contribuição com a White Martins fornecendo mão de obra especializada em segurança do trabalho (SMS) para as suas plantas de produção.'
        },
        {
          title: 'Performance Executiva',
          desc: 'Elevação do nível de produtividade de dezenas de executivos da BBSeguros / Banco do Brasil através da metodologia de coaching executivo e de equipe.'
        }
      ],
      aviationTitle: 'Liderança na Aviação Civil',
      aviationText: 'Na aviação civil, temos treinado inúmeras instituições públicas e privadas, com sucesso e de forma continuada: gestores, pilotos, comissários, mecânicos e apoio aéreo em Gerenciamento de Fatores Humanos através da metodologia Crew and Corporate Resource Management (CRM), assim como treinamentos em Transporte de Artigos Perigosos, sobrevivência na selva e no mar.',
      auditText: 'Auditamos durante alguns anos com sucesso o laboratório químico E&P – SERV/ US-AP/LF de fluídos da Petrobras em Macaé/RJ.',
      certificationsTitle: 'Certificações e Parcerias',
      certificationsList: ['Cadastro CRC da Petrobras', 'Cadastro do SICAF', 'Parceria Internacional (2020) para treinamentos especializados (Offshore, Security, Helicopter Refueling)'],
      missionTitle: 'Nossa Missão',
      missionDesc: 'Fornecer treinamento de aviação de alto nível que capacite profissionais a operar com segurança, eficiência e confiança.',
      visionTitle: 'Nossa Visão',
      visionDesc: 'Ser a referência global em treinamento e consultoria em aviação, reconhecida pela inovação e integridade.',
      valuesTitle: 'Nossos Valores',
      valuesDesc: 'Segurança acima de tudo, integridade inegociável, melhoria contínua e parceria com o cliente.',
      cultureTitle: 'Uma Cultura de Segurança',
      cultureDesc: 'Na HTC, segurança não é apenas um módulo que ensinamos — é a base de tudo o que fazemos. Ajudamos organizações a construir culturas de segurança resilientes.',
    },
    // ... rest of sections
    corporate_page: {
      title: 'Soluções Corporativas',
      subtitle: 'Parceria estratégica para elevar os padrões de segurança, reduzir custos operacionais e garantir a conformidade da sua empresa.',
      deliveryTitle: 'Flexibilidade de Entrega',
      deliverySubtitle: 'Adaptamos nossa logística para não impactar a sua escala.',
      deliveryMethods: [
        {
          title: 'Treinamento In-Company',
          desc: 'Nossos instrutores vão até sua base operacional. Ideal para grandes turmas e padronização com SOPs locais.',
          icon: Map
        },
        {
          title: 'Plataforma EAD / Live',
          desc: 'Aulas síncronas ou gravadas para tripulantes em trânsito. Reduza custos com diárias e deslocamento (Must Ride).',
          icon: Laptop
        },
        {
          title: 'Centro de Treinamento HTC',
          desc: 'Instalações próprias no Rio de Janeiro para imersões práticas e workshops executivos.',
          icon: Building2
        }
      ],
      cards: [
        {
          title: 'Integração de SOPs',
          desc: 'Não entregamos cursos de prateleira. Adaptamos o material (CRM, AVSEC) aos manuais e cultura da sua empresa.',
          list: ['• Análise do MGO/MGSO', '• Estudos de Caso Reais', '• Alinhamento Cultural']
        },
        {
          title: 'Gestão de Conformidade',
          desc: 'Apoiamos seu departamento de treinamento no controle de vencimentos e matriz de qualificação.',
          list: ['• Preparação Auditoria ANAC', '• Relatórios de Presença', '• Certificação Rápida']
        },
        {
          title: 'Consultoria Estratégica',
          desc: 'Além do treinamento, oferecemos diagnóstico de segurança e auditorias de qualidade.',
          list: ['• Auditorias de Fornecedores', '• Engenharia de Manuais', '• Avaliação de Risco']
        }
      ],
      processTitle: 'Como Trabalhamos',
      processSubtitle: 'Uma abordagem consultiva para garantir ROI no treinamento.',
      process: [
        { title: 'Diagnóstico', desc: 'Entendemos suas dores: multas, incidentes ou requisitos de auditoria.', icon: ClipboardCheck },
        { title: 'Customização', desc: 'Inserimos seus procedimentos e cases no material didático.', icon: PenTool },
        { title: 'Execução Flexível', desc: 'Aulas na sua base ou online, conforme a disponibilidade da escala.', icon: Rocket },
        { title: 'Relatório Final', desc: 'Feedback detalhado sobre o desempenho e pontos de atenção da equipe.', icon: BarChart3 },
      ],
      benefitsTitle: 'Vantagens da Parceria Corporativa',
      benefits: [
        { title: 'Redução de Passivo', desc: 'Instrutores homologados garantem validade jurídica e técnica dos certificados.' },
        { title: 'Foco no Core Business', desc: 'Deixe a gestão de currículo conosco e foque na operação aérea.' },
        { title: 'Economia de Escala', desc: 'Valores competitivos para contratos anuais e grandes volumes de alunos.' },
        { title: 'Padronização', desc: 'Garanta que todos os colaboradores recebam a mesma qualidade de instrução.' }
      ],
      partnerTitle: 'Vamos otimizar seu treinamento?',
      partnerDesc: 'Agende uma reunião com nossos consultores corporativos e descubra como podemos reduzir seus custos de treinamento mantendo a excelência.'
    },
    // ...
    contact_page: {
      title: 'Fale Conosco',
      subtitle: 'Canais exclusivos para atendimento corporativo e individual.',
      touchTitle: 'Entre em Contato',
      touchDesc: 'Seja para certificar um piloto individual ou fechar um contrato de treinamento para toda sua empresa aérea, estamos prontos.',
      headquarters: 'Sede Administrativa',
      phone: 'Telefone / WhatsApp',
      email: 'E-mail',
      hours: 'Seg-Sex, 09h - 18h',
      formTitle: 'Envie uma Mensagem',
      labels: {
        name: 'Nome do Responsável',
        email: 'E-mail Corporativo',
        phone: 'Telefone',
        company: 'Empresa',
        topic: 'Assunto',
        message: 'Mensagem',
        topics: ['Orçamento Corporativo (B2B)', 'Dúvida sobre Curso', 'Parceria Comercial', 'Consultoria', 'Outros']
      },
      placeholders: {
        name: 'João Silva',
        email: 'joao@empresa.com.br',
        phone: '+55 (21) 99999-9999',
        company: 'Nome da Empresa ou Aeroporto',
        message: 'Como podemos ajudar?'
      },
      alert: 'Obrigado. Recebemos sua solicitação sobre',
      faqTitle: 'Perguntas Frequentes',
      faqs: [
        {
          q: 'A HTC realiza treinamentos "In-Company"?',
          a: 'Sim. Deslocamos nossos instrutores até sua base operacional em qualquer lugar do Brasil ou exterior, reduzindo custos de deslocamento da sua tripulação.'
        },
        {
          q: 'Os cursos podem ser adaptados aos SOPs da minha empresa?',
          a: 'Com certeza. Para contratos corporativos, solicitamos seus manuais (MGO/MGSO) para alinhar o conteúdo à sua realidade operacional, aumentando a efetividade do treinamento.'
        },
        {
          q: 'Vocês atendem auditorias da ANAC/IOSA?',
          a: 'Sim. Todo nosso material didático e registros de treinamento são mantidos em conformidade com os RBACs vigentes, prontos para inspeção de auditores.'
        },
        {
          q: 'Existe opção de faturamento para empresas?',
          a: 'Sim, trabalhamos com faturamento via nota fiscal para PJ, com prazos negociáveis mediante aprovação de cadastro.'
        },
        {
          q: 'Qual a capacidade de atendimento simultâneo?',
          a: 'Possuímos equipe robusta de instrutores para atender múltiplas turmas simultâneas, seja presencialmente ou via nossa plataforma LMS dedicada.'
        }
      ]
    },
    // ...
    footer: {
      desc: 'Provedor líder de treinamento corporativo e consultoria em aviação. Focados em reduzir riscos e garantir a conformidade regulatória de operadores aéreos.',
      quickLinks: 'Links Rápidos',
      corePrograms: 'Programas Corporativos',
      contactUs: 'Contato',
      rights: 'Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      location: 'Rio de Janeiro, Brasil\nAtendendo Clientes Internacionais'
    },
    // ...
    instructors_page: {
      title: 'Nossa Equipe de Instrutores',
      subtitle: 'Aprenda com os melhores profissionais da indústria, com décadas de experiência prática e acadêmica.',
      list: [
        {
          name: 'Irio Vaz',
          role: 'Diretor Administrativo na HTC',
          avatar: '/images/irio-vaz.png',
          email: 'irio.vayz@htc-brasil.com.br',
          qualifications: [
            'Gerente de Negócios',
            'Gerente de Companhia Aérea, Aeroporto, Logística e Transporte',
            'Registro CFA/ CRA-RJ 03-01396',
            'SMS/Gerente de Segurança Operacional /GSO ANAC',
            'AVSEC/ Operador Aéreo de Segurança e Gerente Aeroportuário /ANAC',
            'Membro SAR-005 DECEA',
            'Especialista em Emergência Geral / Segurança de Cabine',
            'Especialista em Fatores Humanos',
            'Especialista em Corporate Resource Management / CRM /ANAC',
            'Instrutor CRM-LOS',
            'Especialista em Gestão de Pessoas',
            'Analista Comportamental DISC',
            'Professor Universitário de MBA',
            'Mestrado em Direção de Recursos Humanos /IESLA/UCES',
            'Coach de Sistema de Gerenciamento de Resistência da Tripulação / por USCG/EUA',
            'Membro do IHST - International Helicopter Safety Team',
            'SGQ ABNT NBR ISO 9001: 2015/3334/13135-1',
            'Auditor ABNT NBR ISO 19001'
          ]
        }
      ]
    },
    privacy_page: {
      title: 'Política de Privacidade',
      subtitle: 'Última atualização: Janeiro de 2026',
      sections: [
        {
          heading: 'Introdução',
          content: 'A HTC Training and Business valoriza a sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nossos serviços de treinamento e consultoria em aviação.'
        },
        {
          heading: 'Coleta de Informações',
          content: 'Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e empresa, ao solicitar propostas, inscrever-se em cursos ou entrar em contato conosco. Para fins de certificação (ANAC), podemos solicitar dados adicionais conforme exigido pela regulamentação.'
        },
        {
          heading: 'Uso das Informações',
          content: 'Utilizamos seus dados para: fornecer e administrar treinamentos; emitir certificados em conformidade com normas regulatórias; responder a consultas; e melhorar nossos serviços. Não vendemos suas informações para terceiros.'
        },
        {
          heading: 'Segurança de Dados',
          content: 'Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração ou destruição, seguindo as melhores práticas do setor.'
        },
        {
          heading: 'Seus Direitos',
          content: 'Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais, salvo quando a manutenção dos dados for exigida por lei ou regulamentação aeronáutica (ex: registros de treinamento obrigatórios).'
        },
        {
          heading: 'Contato',
          content: 'Se tiver dúvidas sobre esta política, entre em contato conosco através do e-mail: training@htc-brasil.com.br'
        }
      ]
    },
    terms_page: {
      title: 'Termos de Serviço',
      subtitle: 'Última atualização: Janeiro de 2026',
      sections: [
        {
          heading: '1. Aceitação dos Termos',
          content: 'Ao acessar e utilizar o site e os serviços da HTC Training and Business, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.'
        },
        {
          heading: '2. Serviços Oferecidos',
          content: 'A HTC oferece cursos de treinamento em aviação (CRM, AVSEC, DGR, etc.) e serviços de consultoria. Nos reservamos o direito de modificar, suspender ou descontinuar qualquer aspecto dos nossos serviços a qualquer momento.'
        },
        {
          heading: '3. Propriedade Intelectual',
          content: 'Todo o conteúdo, materiais de treinamento, logotipos, textos e gráficos presentes neste site e em nossos cursos são de propriedade exclusiva da HTC Training and Business ou de seus licenciadores e são protegidos pelas leis de direitos autorais e propriedade intelectual.'
        },
        {
          heading: '4. Matrículas e Pagamentos',
          content: 'A inscrição em cursos está sujeita à disponibilidade de vagas. Os pagamentos devem ser efetuados conforme as condições estipuladas no momento da matrícula. Políticas de cancelamento e reembolso específicas aplicam-se a cada modalidade de curso.'
        },
        {
          heading: '5. Limitação de Responsabilidade',
          content: 'Embora nos esforcemos para fornecer informações precisas e atualizadas em nossos treinamentos, a HTC não se responsabiliza por danos diretos, indiretos ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços ou materiais.'
        },
        {
          heading: '6. Legislação Aplicável',
          content: 'Estes termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos tribunais da cidade de São Paulo, SP.'
        }
      ]
    }
  },

  // ENGLISH TRANSLATIONS
  en: {
    crm_lp: {
      hero: {
        badge: 'Mandatory ANAC Training',
        title: 'High Performance Corporate CRM',
        subtitle: 'Elevate your crew safety and efficiency standards with HTC CRM training. Methodology focused on operational reality (RBAC 135/121).',
        formTitle: 'Request a Proposal',
        formSubtitle: 'Get a customized quote for your company within 24h.',
        form: {
          name: 'Full Name',
          email: 'Corporate Email',
          phone: 'Phone',
          crewSize: 'Crew Members',
          company: 'Company',
          placeholders: {
            name: 'Your Name',
            email: 'you@company.com',
            phone: '+1 (555) 000-0000',
            company: 'Airline Company Name'
          },
          privacy: 'Your data is secure. Response within 24 business hours.'
        }
      },
      aboutCourse: {
        badge: 'Immersive Methodology',
        title: 'Reality-Focused Training',
        description: 'Our CRM training goes beyond theory. We use real case studies and group dynamics to simulate critical flight situations, ensuring your crew is prepared to make assertive decisions under pressure.',
        stats: [
          { label: 'ANAC Approval', value: '100%' },
          { label: 'Practical Exercises', value: 'Hands-on' }
        ],
        image: '/images/crm-classroom.jpg'
      },
      crmSim: {
        badge: 'Advanced Training',
        title: 'CRM-LOS: Realistic Simulation',
        description: 'Integrate CRM concepts directly into the cockpit. Our Line Oriented Simulation (LOS) sessions allow pilots to practice communication and workload management in high-fidelity scenarios.',
        image: '/images/crm-simulator.jpg',
        features: ['Customized Scenarios', 'Video-Assisted Debriefing', 'Senior Flight Instructors']
      },
      painPoints: {
        title: 'Why your operation needs this training?',
        items: [
          { title: 'ANAC Compliance', desc: 'Avoid fines and non-conformities in ramp audits.' },
          { title: 'Error Reduction', desc: 'Mitigate human error, the leading cause of aviation accidents.' },
          { title: 'Just Culture', desc: 'Implement a mindset of reporting and psychological safety.' }
        ]
      },
      syllabus: {
        title: 'Approved Syllabus Content',
        subtitle: 'Covering all requirements of the mandatory curriculum.',
        initial: ['Threat & Error Mgmt (TEM)', 'Situational Awareness', 'Decision Making', 'Assertive Communication', 'Leadership & Teamwork', 'Automation & Monitoring'],
        recurrent: ['Recent Case Studies', 'Regulatory Update', 'Human Fatigue (RBAC 117)', 'Single-Pilot CRM (if applicable)', 'Startle Effect Management']
      },
      whyUs: {
        title: 'Why do major operators choose HTC?',
        items: [
          { title: 'Real Customization', desc: 'No generic slides. We analyze your OM and adapt cases to your routine.' },
          { title: 'Senior Instructors', desc: 'Classes taught by Captains and Managers with decades of commercial and offshore aviation.' },
          { title: 'Agile Certification', desc: 'Digital certificates with QR Code issued immediately upon completion.' }
        ]
      },
      cta: {
        title: 'Ready to upgrade your crew?',
        desc: 'Secure the best date for your training. Serving all of Brazil and International.'
      }
    },
    dgr_lp: {
      hero: {
        badge: 'IATA & ANAC Certification',
        title: 'DGR: Safe & Efficient Air Transport',
        subtitle: 'Specialized Dangerous Goods training for Shippers, Freight Forwarders, and Air Operators. Avoid fines and cargo holds.',
        formTitle: 'Corporate Quote',
        formSubtitle: 'Empower your logistics and operational team. Online and In-person classes.',
        form: {
          name: 'Full Name',
          email: 'Corporate Email',
          phone: 'Phone',
          studentCount: 'Number of Students',
          company: 'Company',
          placeholders: {
            name: 'Your Name',
            email: 'you@company.com',
            phone: '+1 (555) 000-0000',
            company: 'Logistics/Airline Company'
          },
          privacy: 'Your data is secure. Response within 24 business hours.'
        }
      },
      aboutCourse: {
        badge: 'IATA Certification',
        title: 'Master Dangerous Goods Transport',
        description: 'Complete training to ensure your operation complies with strict IATA and ANAC (RBAC 175) regulations. Practical focus on identification, packing, labeling, and documentation of dangerous goods.',
        stats: [
          { label: 'Methodology', value: 'CBTA' },
          { label: 'Instructors', value: 'IATA Cat. 6' }
        ],
        image: '/images/dgr-classroom.jpg'
      },
      painPoints: {
        title: 'Is your cargo at risk?',
        items: [
          { title: 'Heavy Fines', desc: 'Incorrect declarations lead to severe fines from ANAC and blocks by airlines.' },
          { title: 'Held Cargo', desc: 'Errors in packing or labeling cause critical delays in the supply chain.' },
          { title: 'Operational Safety', desc: 'Incorrect handling can cause inflight fires and fatal accidents.' }
        ]
      },
      syllabus: {
        title: 'Competency-Based Training (CBTA)',
        subtitle: 'Full compliance with the latest edition of IATA DGR and RBAC 175.',
        initial: ['General Philosophy & Limitations', 'Classification (Classes 1-9)', 'Dangerous Goods List', 'Packing Instructions', 'Marking & Labelling', 'Documentation (DGD/NOTOC)'],
        recurrent: ['Current IATA Edition Updates', 'Incident Case Studies', 'Emergency Procedures', 'Lithium Batteries (New Rules)', 'Radioactive Materials (Optional)']
      },
      whyUs: {
        title: 'Air Logistics Expertise',
        items: [
          { title: 'Accredited Instructors', desc: 'Professionals with IATA Category 6 certification and experience in cargo terminals.' },
          { title: 'Practical Focus', desc: 'Real exercises on DGD completion, checklist verification, and labeling.' },
          { title: 'Valid Certificate', desc: 'Recognized by all airlines and ANAC auditors.' }
        ]
      },
      cta: {
        title: 'Ensure your logistics flow',
        desc: 'Certify your shippers and checkers with DGR experts.'
      }
    },
    // Adding AVSEC LP Content English
    avsec_lp: {
      hero: {
        badge: 'Civil Aviation Security',
        title: 'AVSEC: Security Against Unlawful Acts',
        subtitle: 'Approved training for Aircrew, Airport Agents, and Ground Staff. Strict compliance with RBAC 107 and 108.',
        formTitle: 'Training Quote',
        formSubtitle: 'Avoid non-compliance in ANAC and Federal Police audits.',
        form: {
          name: 'Full Name',
          email: 'Corporate Email',
          phone: 'Phone',
          studentCount: 'Number of Students',
          company: 'Company',
          placeholders: {
            name: 'Your Name',
            email: 'you@company.com',
            phone: '+1 (555) 000-0000',
            company: 'Airline / Airport'
          },
          privacy: 'Your data is secure. Response within 24 business hours.'
        }
      },
      aboutCourse: {
        badge: 'Inspection & Security',
        title: 'Complete AVSEC Training',
        description: 'Empower your team to identify and mitigate threats to civil aviation. Our courses strictly follow ANAC regulations (RBAC 107/108) and international best practices for protecting passengers, crew, and infrastructure.',
        stats: [
          { label: 'Compliance', value: 'RBAC 108' },
          { label: 'Methodology', value: 'Hands-on' }
        ],
        image: '/images/avsec-classroom.jpg'
      },
      painPoints: {
        title: 'Vulnerabilities are costly',
        items: [
          { title: 'Unruly Passengers', desc: 'Increasing cases of aggression and disorder onboard require preparation.' },
          { title: 'Rigorous Audits', desc: 'Failures in screening procedures lead to fines and AOC suspension.' },
          { title: 'Emerging Threats', desc: 'New concealment methods require constant team updates.' }
        ]
      },
      syllabus: {
        title: 'Operational and Management Modules',
        subtitle: 'Covering from check-in to cockpit, according to PNAVSEC.',
        ground: ['Access Control in Restricted Areas (SRA)', 'Pax and Baggage Screening (X-Ray)', 'Parked Aircraft Protection', 'Aircraft Security Check', 'Security Interview'],
        flight: ['Unruly Passenger Management', 'Bomb Threat in Flight', 'Hijacking Procedures', 'Basic Self-Defense (Optional)', 'Cabin Search']
      },
      whyUs: {
        title: 'Security is our priority',
        items: [
          { title: 'Elite Instructors', desc: 'Team formed by former military and airport security managers.' },
          { title: 'Real Simulations', desc: 'Practical training in searching and identifying simulated explosive devices.' },
          { title: 'Accreditation', desc: 'Full certification with ANAC to conduct AVSEC courses.' }
        ]
      },
      cta: {
        title: 'Protect your operation now',
        desc: 'Schedule your team training and ensure the safety of your flights.'
      }
    },
    // ... rest of English translations
    nav: [
      { label: 'Home', path: '/' },
      {
        label: 'About Us',
        path: '/about',
        submenu: [
          { label: 'Overview', path: '/about' },
          { label: 'Our Team', path: '/instructors' }
        ]
      },
      {
        label: 'Services',
        path: '/services',
        submenu: [
          { label: 'Overview', path: '/services' },
          { label: 'Training Programs', path: '/training' }
        ]
      },
      { label: 'Corporate', path: '/corporate' },
      { label: 'Contact', path: '/contact' },
    ],
    buttons: {
      getStarted: 'GET STARTED',
      explore: 'Explore Programs',
      contact: 'Contact Us',
      learnMore: 'Learn More',
      requestProposal: 'Corporate Quote',
      viewAll: 'View All Courses',
      details: 'Request Details',
      catalog: 'Download Corporate Catalog',
      schedule: 'Schedule Meeting',
      syllabus: 'Request Syllabus & Pricing',
      sendMessage: 'Send Message',
      viewProfile: 'View Full Profile',
      enroll: 'Enroll Team',
      whatsapp: 'Chat on WhatsApp',
      quoteNow: 'Get Quote Now'
    },
    // ...
    home: {
      heroSlides: [
        {
          tag: 'International Aviation Standards',
          title: 'Elevating Safety & Performance',
          desc: 'Specialized aviation training in CRM, AVSEC, and DGR for professionals who demand excellence. Compliance, safety, and expertise in one place.'
        },
        {
          tag: 'Human Factors',
          title: 'CRM: Culture & Safety',
          desc: 'CRM programs adapted to your company\'s culture and SOPs. Building resilient and standardized crews.'
        },
        {
          tag: 'Civil Aviation Security',
          title: 'AVSEC: Total Compliance',
          desc: 'Approved training for air operators and airports. Guaranteeing approval in ANAC audits.'
        },
        {
          tag: 'Dangerous Goods',
          title: 'DGR: Safe Logistics',
          desc: 'IATA certification for the entire logistics chain. Avoid fines and ensure safety in special cargo transport.'
        }
      ],
      heroTag: 'International Aviation Standards',
      heroTitle: 'Elevating Safety & Performance',
      heroDesc: 'Specialized aviation training in CRM, AVSEC, and DGR for professionals who demand excellence. Compliance, safety, and expertise in one place.',
      whyChoose: 'Why Choose HTC',
      excellence: 'Excellence in Every Detail',
      programsTitle: 'Training Programs',
      trust: 'Trusted Compliance Standards',
      certificationsLabel: 'Certifications',
      ctaTitle: 'Does your operation need standardized training?',
      ctaDesc: 'We develop schedules that do not impact your roster. Talk to our experts about corporate contracts.',
      stats: [
        { value: '20+', label: 'Years in Market' },
        { value: '15k+', label: 'Professionals Trained' },
        { value: '500+', label: 'Companies Served' },
        { value: '100%', label: 'Audit Approval' }
      ]
    },
    // ...
    features: [
      {
        title: 'Operator Focused',
        description: 'Content adapted to your company\'s SOPs and manuals (Customization).',
        icon: Briefcase
      },
      {
        title: 'Senior Instructors',
        description: 'Professionals with experience in major airlines and management.',
        icon: Users
      },
      {
        title: 'Logistic Flexibility',
        description: 'In-Company or Online training to optimize crew scheduling.',
        icon: Map
      },
      {
        title: 'Guaranteed Compliance',
        description: 'Courses designed to meet IOSA, ISAGO, and ANAC audits.',
        icon: Award
      }
    ],
    services_page: {
      title: 'Service Portfolio',
      subtitle: 'From regulatory training to operational certification. We provide end-to-end solutions for the aviation industry.',
      sectionTitle: 'Our Services',
      operationalTitle: 'Operational Training',
      consultingTitle: 'Consulting & Advisory',
      includes: 'What is included:',
      tailoredTitle: 'Tailored Solutions',
      tailoredDesc1: 'Every aviation operation is unique. Whether you are a commercial airline, an air taxi operator, or an airport administrator, our services are customized to fit your regulatory environment and operational scale.',
      tailoredDesc2: 'From initial certification to daily safety management, HTC acts as an extension of your team.',
      tailoredBoxTitle: '100% Customizable',
      tailoredBoxDesc: 'Curriculum adapted to your SOPs and company culture.',
      catalogTitle: 'Don\'t see what you\'re looking for?',
      catalogDesc: 'Our portfolio is constantly evolving to meet new ANAC and ICAO resolutions.'
    },
    services_list: [
      {
        id: 'crm-full',
        title: 'CRM - Corporate Resource Management',
        description: 'Complete training for interpersonal competence in the cockpit and cabin.',
        icon: Users,
        features: ['CRM Initial & Recurrent', 'CRM Corporate', 'CRM Single Pilot', 'CRM Instructor Course']
      },
      {
        id: 'avsec-full',
        title: 'AVSEC - Aviation Security',
        description: 'Security training against acts of unlawful interference.',
        icon: Shield,
        features: ['AVSEC for Aircrew', 'AVSEC Ground Staff', 'Threat Assessment', 'Airport Security Awareness']
      },
      {
        id: 'dgr-full',
        title: 'DGR - Dangerous Goods',
        description: 'IATA/ICAO compliant training for handling hazardous materials.',
        icon: AlertTriangle,
        features: ['Categories 1-17 (IATA)', 'Radioactive Materials', 'Shippers & Packers', 'Ramp Personnel Awareness']
      },
      {
        id: 'sms-sgso',
        title: 'SGSO / SMS Training',
        description: 'Safety Management System education for all organizational levels.',
        icon: CheckSquare,
        features: ['Introduction to SMS', 'Safety Manager Course', 'Risk Management', 'Investigation of Occurrences']
      },
      {
        id: 'fatigue',
        title: 'Fatigue Risk Management',
        description: 'Managing human fatigue in 24/7 aviation operations (RBAC 117).',
        icon: Clock,
        features: ['Fatigue Awareness', 'FRMS Implementation', 'Scheduling Strategies', 'Human Performance']
      },
      {
        id: 'emergency',
        title: 'Emergency & Survival',
        description: 'Practical and theoretical training for emergency situations.',
        icon: Zap,
        features: ['Jungle/Sea Survival', 'Fire Fighting', 'Evacuation Procedures', 'Ditching Drills']
      },
      {
        id: 'first-aid',
        title: 'First Aid & Health',
        description: 'Medical response training for inflight and ground emergencies.',
        icon: HeartPulse,
        features: ['Inflight First Aid', 'CPR & AED Usage', 'Tropical Diseases', 'Passenger Health Care']
      },
      {
        id: 'tech-ops',
        title: 'Special Technical Ops',
        description: 'Advanced technical navigation and operational safety courses.',
        icon: Navigation,
        features: ['PBN (Performance Based Nav)', 'RVSM Operations', 'ALAR / CFIT Awareness', 'Winter Ops / De-icing']
      },
      // --- CONSULTING ---
      {
        id: 'certification',
        title: 'Operational Certification',
        description: 'Full support for obtaining and maintaining Air Operator Certificates (AOC).',
        icon: Award,
        features: ['RBAC 135 / 121 Certification', 'CHETA Processes', 'Aircraft Inclusion', 'Operational Specs (OpSpecs)']
      },
      {
        id: 'manuals',
        title: 'Manual Engineering',
        description: 'Development and revision of mandatory operational manuals.',
        icon: FileText,
        features: ['MGM (General Maintenance)', 'MGO (General Operations)', 'Piera / PAE', 'Security Programs (PSO)']
      },
      {
        id: 'audits-quality',
        title: 'Audits & Quality Assurance',
        description: 'Internal and preparatory audits for international standards.',
        icon: Search,
        features: ['IOSA / ISAGO Gap Analysis', 'Internal Safety Audits', 'Vendor Audits', 'Quality Control Setup']
      },
      {
        id: 'psychology-selection',
        title: 'Psychology & Selection',
        description: 'Human factor services for personnel management.',
        icon: Brain,
        features: ['Pilot Recruitment & Selection', 'Psychological Evaluation', 'Human Factors Support', 'Organizational Climate']
      }
    ],
    training_page: {
      title: 'Training Programs',
      subtitle: 'Technical and behavioral qualification for your flight and ground teams.',
      targetAudience: 'Target Audience',
      bannerTitle: 'Need to train a whole team?',
      bannerDesc: 'We offer special conditions for closed groups and annual corporate contracts.',
      btnCorporate: 'View Corporate Solutions',
      methodology: {
        title: 'Our Methodology',
        subtitle: 'Focused on knowledge retention and practical application in your company\'s procedures.',
        items: [
          {
            title: 'Applied Andragogy',
            desc: 'Focus on adult learning, valuing the prior experience of crew members.',
            icon: Users2
          },
          {
            title: 'Focus on your SOPs',
            desc: 'We integrate your company\'s Standard Operating Procedures into the syllabus.',
            icon: FileText
          },
          {
            title: 'Updated Material',
            desc: 'Content constantly revised according to the latest RBAC and ICAO amendments.',
            icon: BookOpen
          }
        ]
      },
      differentials: {
        title: 'Corporate Standard of Excellence',
        subtitle: 'Legal and operational safety for your company. We deliver more than courses; we deliver compliance.',
        items: [
          {
            title: 'Regulatory Compliance',
            desc: 'All curriculum is strictly audited and compliant with current RBACs and IS.',
            icon: Shield
          },
          {
            title: 'Total Traceability',
            desc: 'Digital certificates with unique QR Code, allowing instant validation during ramp audits.',
            icon: ScanLine
          },
          {
            title: 'Class Management',
            desc: 'Management reports on attendance and technical performance of your crew.',
            icon: BarChart3
          },
          {
            title: 'Operational Focus',
            desc: 'Instructors active in the market who bring operational reality to the classroom.',
            icon: Plane
          }
        ]
      }
    },
    courses_list: [
      {
        id: 'crm',
        title: 'CRM - Crew Resource Management',
        category: 'CRM',
        description: 'Fundamental for flight safety. We focus not only on theory but on applying CRM concepts within your company\'s organizational culture.',
        audience: 'Pilotos, Cabin Crew, Dispatchers, Mechanics',
        icon: Users,
        delivery: ['In-Person', 'Hybrid', 'In-Company'],
        duration: '16h (Initial) / 8h (Recurrent)',
        certification: 'ANAC Approved',
        requirements: 'Affiliation with air operator',
        syllabus: ['Situational Awareness', 'Decision Making Process', 'Communication & Assertiveness', 'Threat & Error Management (TEM)', 'Automation & Monitoring', 'Leadership & Teamwork']
      },
      {
        id: 'avsec',
        title: 'AVSEC - Aviation Security',
        category: 'AVSEC',
        description: 'Ensure your ground and flight team is able to prevent acts of unlawful interference. Rigorous and updated training with Federal Police and ANAC regulations.',
        audience: 'Aircrew, Airport Agents, Security Staff',
        icon: Shield,
        delivery: ['Online', 'In-Person', 'In-Company'],
        duration: 'Varies by Module (4h to 40h)',
        certification: 'In accordance with RBAC 107 / 108',
        requirements: 'Criminal Background Check',
        syllabus: ['Acts of Unlawful Interference', 'Access Control', 'Pax & Baggage Screening', 'Aircraft Protection', 'Security Emergency Response', 'Security Culture']
      },
      {
        id: 'dgr',
        title: 'DGR - Dangerous Goods Regulations',
        category: 'DGR',
        description: 'Essential for cargo operators. We enable shippers and crew to identify hidden risks and handle special cargo safely.',
        audience: 'Shippers, Pilots, Cabin Crew, Ramp',
        icon: AlertTriangle,
        delivery: ['Online', 'In-Person', 'Hybrid'],
        duration: 'Initial: 24h to 40h / Recurrent: 16h',
        certification: 'IATA C-BTA / ANAC RBAC 175',
        requirements: 'No specific prerequisites',
        syllabus: ['Dangerous Goods Classification (Classes 1-9)', 'Limitations & Prohibitions', 'Packing Instructions', 'Marking & Labelling', 'Documentation (DGD/NOTOC)', 'Emergency Procedures']
      },
      {
        id: 'safety-culture',
        title: 'SMS & Safety Culture',
        category: 'Management',
        description: 'Course for managers. Teaches how to transform data from reports into preventive actions, protecting the company\'s liabilities and passengers\' lives.',
        audience: 'Managers, Safety Officers, Directors',
        icon: Globe,
        delivery: ['In-Person', 'Hybrid'],
        duration: '24 Hours',
        certification: 'Corporate Certificate',
        requirements: 'Previous aviation experience recommended',
        syllabus: ['Safety Policy & Objectives', 'Risk Management (Hazard ID)', 'Safety Assurance', 'Safety Promotion', 'Reporting & Just Culture', 'Occurrence Investigation (Basic)']
      },
      {
        id: 'qsms',
        title: 'QHSE Training (Quality, Health, Safety, Environment)',
        category: 'Management',
        description: 'Integration of Quality and Safety. Ideal for companies seeking ISO certifications or improvement in their internal audit processes.',
        audience: 'Managers, Safety Technicians, Quality Teams',
        icon: Factory,
        delivery: ['In-Person', 'Hybrid', 'In-Company'],
        duration: 'Customized',
        certification: 'IMS / Corporate Certification',
        requirements: 'No specific prerequisites',
        syllabus: ['Quality Management (ISO 9001)', 'Occupational Safety (ISO 45001)', 'Environmental Mgmt (ISO 14001)', 'Occupational Health', 'Internal IMS Audits', 'Planning and Implementation']
      }
    ],
    // ...
    instructors_page: {
      title: 'Our Instructor Team',
      subtitle: 'Learn from the best industry professionals with decades of practical and academic experience.',
      list: [
        {
          name: 'Irio Vaz',
          role: 'Instrutor Sênior',
          bio: 'Especialista em Performance Humana e CRM com mais de 25 anos de experiência na aviação comercial e corporativa.',
          avatar: '/images/irio-vaz.png',
          email: 'irio.vayz@htc-brasil.com.br',
          qualifications: [
            'Business Manager',
            'Airline, Airport, Logistics and Transport Manager',
            'CFA/ CRA-RJ Register 03-01396',
            'SMS/Safety Air Manager /GSO Anac',
            'AVSEC/ Security Air Operator and Airport Manager /Anac',
            'SAR-005 Member DECEA',
            'General Emergency Specialist / Cabin Safety',
            'Human Factors Specialist',
            'Corporate Resource Management/ CRM Specialist /Anac',
            'CRM-LOS Instructor',
            'People Management Specialist',
            'DISC Behavioral Analyst',
            'MBA University Professor',
            'Mastering in Human Resources Direction /IESLA/UCES',
            'Crew Endurance Management System Coach / by USCG/USA',
            'Member of IHST - International Helicopter Safety Team',
            'SGQ ABNT NBR ISO 9001: 2015/3334/13135-1',
            'ABNT NBR ISO 19001 Auditor'
          ]
        }
      ]
    },
    // ...
    about_page: {
      title: 'About HTC Training',
      subtitle: 'Tradition and excellence since 2004.',
      introTitle: 'Meet HTC',
      introText: 'HTC TRAINING AND BUSINESS has been in the market since March 2004. Since then, it has provided services to numerous companies in the civil aviation system, oil and gas, financial system, food industry, and health. HTC is composed of multidisciplinary professionals specialized in various areas of the market.',
      clientsText: 'We serve major names such as ERA Helicopters, BRISTOW Helicopters, CHC Helicopters, HELIBARRA Air Taxi, SAFRAN Helicopters, Petrobras, Equinor, Maersk, White Martins, Transocean, Norskan, Banco do Brasil, Losango, BRF Group, and Evandro Freire Hospital.',
      clientsList: [
        'Petrobras', 'Bristow', 'CHC Helicopters', 'Helibarra',
        'Safran', 'Equinor', 'Maersk', 'Banco do Brasil',
        'ERA Helicopters', 'White Martins', 'Transocean',
        'Norskan', 'Losango', 'Grupo BRF', 'Hosp. Evandro Freire', 'Aeróleo'
      ],
      clientsTitle: 'Companies Trusting HTC',
      expertiseTitle: 'Multidisciplinary Expertise',
      expertiseText: 'We have extensive experience in business management, contract management, manpower allocation, consulting, advisory, auditing, and special training (human error management, organizational threats, etc.) to raise the proficiency level of your clients.',
      sectors: [
        { label: 'Civil Aviation', icon: Plane },
        { label: 'Oil & Gas', icon: Droplet },
        { label: 'Health', icon: Stethoscope },
        { label: 'Industry', icon: Factory },
        { label: 'Financial', icon: TrendingUp },
      ],
      casesTitle: 'Proven Results',
      cases: [
        {
          title: 'Offshore Logistics',
          desc: 'Management of air transport logistical support for six Petrobras offshore airports. Approximately 5,000 flights and 100,000 passengers transported per month for three years.'
        },
        {
          title: 'Safety (SMS)',
          desc: 'Contribution to White Martins providing specialized labor in occupational safety (SMS) for its production plants.'
        },
        {
          title: 'Executive Performance',
          desc: 'Raising the productivity level of dozens of executives at BBSeguros / Banco do Brasil through executive and team coaching methodology.'
        }
      ],
      aviationTitle: 'Leadership in Civil Aviation',
      aviationText: 'In civil aviation, we have successfully and continuously trained numerous public and private institutions: managers, pilots, flight attendants, mechanics, and air support in Human Factors Management through the Crew and Corporate Resource Management (CRM) methodology, as well as training in Dangerous Goods Transport, jungle and sea survival.',
      auditText: 'We successfully audited the E&P – SERV/ US-AP/LF chemical laboratory of Petrobras fluids in Macaé/RJ for several years.',
      certificationsTitle: 'Certifications and Partnerships',
      certificationsList: ['Petrobras CRC Registration', 'SICAF Registration', 'International Partnership (2020) for specialized training (Offshore, Security, Helicopter Refueling)'],
      missionTitle: 'Our Mission',
      missionDesc: 'To provide high-level aviation training that empowers professionals to operate with safety, efficiency, and confidence.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the global reference in aviation training and consulting, recognized for innovation and integrity.',
      valuesTitle: 'Our Values',
      valuesDesc: 'Safety above all, non-negotiable integrity, continuous improvement, and partnership with the client.',
      cultureTitle: 'A Safety Culture',
      cultureDesc: 'At HTC, safety is not just a module we teach — it is the foundation of everything we do. We help organizations build resilient safety cultures.',
    },
    corporate_page: {
      title: 'Corporate Solutions',
      subtitle: 'Strategic partnership to raise safety standards, reduce operational costs, and ensure your company compliance.',
      deliveryTitle: 'Delivery Flexibility',
      deliverySubtitle: 'We adapt our logistics so as not to impact your schedule.',
      deliveryMethods: [
        {
          title: 'In-Company Training',
          desc: 'Our instructors go to your operational base. Ideal for large groups and standardization with local SOPs.',
          icon: Map
        },
        {
          title: 'LMS Platform / Live',
          desc: 'Synchronous or recorded classes for crew members in transit. Reduce costs with daily allowances and travel (Must Ride).',
          icon: Laptop
        },
        {
          title: 'HTC Training Center',
          desc: 'Own facilities in Rio de Janeiro for practical immersions and executive workshops.',
          icon: Building2
        }
      ],
      cards: [
        {
          title: 'SOP Integration',
          desc: 'We do not deliver off-the-shelf courses. We adapt the material (CRM, AVSEC) to your manuals and company culture.',
          list: ['• OM/SMS Manual Analysis', '• Real Case Studies', '• Cultural Alignment']
        },
        {
          title: 'Compliance Management',
          desc: 'We support your training department in expiration control and qualification matrix.',
          list: ['• ANAC Audit Preparation', '• Attendance Reports', '• Fast Certification']
        },
        {
          title: 'Strategic Consulting',
          desc: 'Beyond training, we offer safety diagnosis and quality audits.',
          list: ['• Supplier Audits', '• Manual Engineering', '• Risk Assessment']
        }
      ],
      processTitle: 'How We Work',
      processSubtitle: 'A consultative approach to ensure ROI in training.',
      process: [
        { title: 'Diagnosis', desc: 'We understand your pains: fines, incidents, or audit requirements.', icon: ClipboardCheck },
        { title: 'Customization', desc: 'We insert your procedures and cases into the teaching material.', icon: PenTool },
        { title: 'Flexible Execution', desc: 'Classes at your base or online, according to schedule availability.', icon: Rocket },
        { title: 'Final Report', desc: 'Detailed feedback on the team performance and attention points.', icon: BarChart3 },
      ],
      benefitsTitle: 'Corporate Partnership Advantages',
      benefits: [
        { title: 'Liability Reduction', desc: 'Approved instructors guarantee legal and technical validity of certificates.' },
        { title: 'Focus on Core Business', desc: 'Leave curriculum management to us and focus on air operation.' },
        { title: 'Economy of Scale', desc: 'Competitive values for annual contracts and large volumes of students.' },
        { title: 'Standardization', desc: 'Ensure all employees receive the same quality of instruction.' }
      ],
      partnerTitle: 'Let\'s optimize your training?',
      partnerDesc: 'Schedule a meeting with our corporate consultants and discover how we can reduce your training costs while maintaining excellence.'
    },
    contact_page: {
      title: 'Contact Us',
      subtitle: 'Exclusive channels for corporate and individual service.',
      touchTitle: 'Get in Touch',
      touchDesc: 'Whether to certify an individual pilot or close a training contract for your entire airline, we are ready.',
      headquarters: 'Administrative Headquarters',
      phone: 'Phone / WhatsApp',
      email: 'E-mail',
      hours: 'Mon-Fri, 09am - 06pm',
      formTitle: 'Send a Message',
      labels: {
        name: 'Name',
        email: 'Corporate E-mail',
        phone: 'Phone',
        company: 'Company',
        topic: 'Subject',
        message: 'Message',
        topics: ['Corporate Quote (B2B)', 'Course Question', 'Commercial Partnership', 'Consulting', 'Others']
      },
      placeholders: {
        name: 'John Doe',
        email: 'john@company.com',
        phone: '+55 (21) 99999-9999',
        company: 'Company Name or Airport',
        message: 'How can we help?'
      },
      alert: 'Thank you. We received your request about',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'Does HTC conduct "In-Company" training?',
          a: 'Yes. We deploy our instructors to your operational base anywhere in Brazil or abroad, reducing travel costs for your crew.'
        },
        {
          q: 'Can courses be adapted to my company\'s SOPs?',
          a: 'Absolutely. For corporate contracts, we request your manuals (OM/SMS) to align the content with your operational reality, increasing training effectiveness.'
        },
        {
          q: 'Do you meet ANAC/IOSA audits?',
          a: 'Yes. All our teaching material and training records are maintained in compliance with current RBACs, ready for inspection by auditors.'
        },
        {
          q: 'Is there an option for corporate billing?',
          a: 'Yes, we work with corporate invoicing, with negotiable terms upon registration approval.'
        },
        {
          q: 'What is the simultaneous service capacity?',
          a: 'We have a robust team of instructors to serve multiple classes simultaneously, whether in person or via our dedicated LMS platform.'
        }
      ]
    },
    footer: {
      desc: 'Premier aviation training and consulting provider. Dedicated to safety, compliance, and excellence in the global aviation industry.',
      quickLinks: 'Quick Links',
      corePrograms: 'Core Programs',
      contactUs: 'Contact Us',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      location: 'Rio de Janeiro, Brasil\nServing International Clients'
    },
    privacy_page: {
      title: 'Privacy Policy',
      subtitle: 'Last Updated: January 2026',
      sections: [
        {
          heading: 'Introduction',
          content: 'HTC Training and Business values your privacy. This policy describes how we collect, use, and protect your personal information when using our aviation training and consulting services.'
        },
        {
          heading: 'Information Collection',
          content: 'We collect information you provide directly to us, such as name, email, phone, and company, when requesting proposals, enrolling in courses, or contacting us. For certification purposes (ANAC), we may request additional data as required by regulations.'
        },
        {
          heading: 'Use of Information',
          content: 'We use your data to: provide and administer training; issue certificates in compliance with regulatory standards; respond to inquiries; and improve our services. We do not sell your information to third parties.'
        },
        {
          heading: 'Data Security',
          content: 'We implement appropriate technical and organizational security measures to protect your data against unauthorized access, alteration, or destruction, following industry best practices.'
        },
        {
          heading: 'Your Rights',
          content: 'You have the right to access, correct, or request the deletion of your personal data, except where data retention is required by aviation law or regulation (e.g., mandatory training records).'
        },
        {
          heading: 'Contact',
          content: 'If you have questions about this policy, please contact us via email: training@htc-brasil.com.br'
        }
      ]
    },
    terms_page: {
      title: 'Terms of Service',
      subtitle: 'Last Updated: January 2026',
      sections: [
        {
          heading: '1. Acceptance of Terms',
          content: 'By accessing and using the HTC Training and Business website and services, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree with any part of these terms, you must not use our services.'
        },
        {
          heading: '2. Services Offered',
          content: 'HTC offers aviation training courses (CRM, AVSEC, DGR, etc.) and consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.'
        },
        {
          heading: '3. Propriedade Intelectual',
          content: 'All content, training materials, logos, text, and graphics present on this site and in our courses are the exclusive property of HTC Training and Business or its licensors and are protected by copyright and intellectual property laws.'
        },
        {
          heading: '4. Enrollment and Payments',
          content: 'Course enrollment is subject to availability. Payments must be made according to the conditions stipulated at the time of registration. Specific cancellation and refund policies apply to each course modality.'
        },
        {
          heading: '5. Limitation of Liability',
          content: 'While we strive to provide accurate and up-to-date information in our training, HTC is not liable for direct, indirect, or consequential damages resulting from the use or inability to use our services or materials.'
        },
        {
          heading: '6. Governing Law',
          content: 'These terms are governed by and construed in accordance with the laws of the Federative Republic of Brazil. Any dispute arising from these terms will be submitted to the exclusive jurisdiction of the courts of São Paulo, SP.'
        }
      ]
    }
  }
};