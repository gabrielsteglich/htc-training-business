export type Language = 'pt' | 'en' | 'es';

export const LOCALES: Record<Language, string> = { pt: 'pt-BR', en: 'en-US', es: 'es' };

interface UiText {
  language: string; openMenu: string; closeMenu: string; whatsapp: string;
  since: string; history: string; years: string; experience: string; students: string;
  topRated: string; aviationTraining: string; corporateTrust: string; leadership: string;
  b2b: string; support: string; headquarters: string; processing: string; sending: string;
  messageSent: string; requestSent: string; sendError: string; errors: Record<number, string>;
  anac: string; iata: string; pf: string; icao: string; international: string; accredited: string;
  certified: string; fidelity: string; initial: string; recurrent: string; ground: string; flight: string;
  experts: string; qualifications: string; transparency: string; portfolio: string; legal: string;
  professional: string; prerequisites: string; syllabus: string; coursePage: string; difference: string;
  soldOut: string; imagesDisclaimer: string; menu: string; avsec: string; safety: string;
  linkedin: string; expertise: string; isCompliant: string; online: string; icaoAnnex: string;
  errorTitle: string; errorDescription: string; retry: string; notFound: string; notFoundDescription: string;
  backHome: string; error404: string;
  goToSlide: string;
  welcome: string; fullMotion: string; crmCorporate: string;
  images: { runway: string; instructor: string; partner: string; connections: string; sky: string; headquarters: string; meeting: string; corporateTraining: string; wing: string; cockpit: string; cargo: string; security: string; hangar: string };
}

export const UI_TEXT: Record<Language, UiText> = {
  pt: {
    language: 'Idioma', openMenu: 'Abrir menu', closeMenu: 'Fechar menu', whatsapp: 'Entrar em contato pelo WhatsApp',
    since: 'Desde 2004', history: 'Nossa História', years: 'Anos', experience: 'Experiência', students: 'Alunos',
    topRated: 'Melhor Avaliado', aviationTraining: 'Treinamento Aviação', corporateTrust: 'Confiança Corporativa', leadership: 'Liderança',
    b2b: 'Soluções B2B', support: 'Atendimento 24/7', headquarters: 'Sede Operacional', processing: 'Processando...', sending: 'Enviando',
    messageSent: 'Mensagem enviada com sucesso!', requestSent: 'Solicitação enviada com sucesso!', sendError: 'Não foi possível enviar a mensagem. Tente novamente.',
    errors: { 400: 'Confira os dados do formulário e tente novamente.', 413: 'A mensagem é muito longa. Reduza o texto e tente novamente.', 415: 'Não foi possível processar o formulário. Atualize a página e tente novamente.', 429: 'Muitas tentativas de envio. Aguarde alguns minutos e tente novamente.', 503: 'O envio está temporariamente indisponível. Entre em contato pelo WhatsApp ou tente novamente mais tarde.' },
    anac: 'ANAC Homologado', iata: 'IATA Credenciado', pf: 'PF Homologado', icao: 'Padrão ICAO', international: 'Validade Internacional', accredited: 'Credenciado',
    certified: 'Certificado', fidelity: 'Alta Fidelidade', initial: 'Inicial', recurrent: 'Recorrente', ground: 'Operações de Solo', flight: 'Segurança em Voo',
    experts: 'Nossos Especialistas', qualifications: 'Qualificações & Certificações', transparency: 'Transparência', portfolio: 'Portfólio Completo', legal: 'Legal',
    professional: 'Qualificação Profissional', prerequisites: 'Pré-req: ', syllabus: 'Conteúdo Programático', coursePage: 'Página do Curso', difference: 'Diferencial HTC',
    soldOut: 'Esgotado', imagesDisclaimer: 'Imagens meramente ilustrativas.', menu: 'Cardápio', avsec: 'AVSEC - Segurança', safety: 'SGSO - Segurança',
    linkedin: 'HTC Training and Business no LinkedIn', expertise: 'Expertise HTC', isCompliant: 'Em conformidade com IS 00-002', online: 'In-Company / Online', icaoAnnex: 'Anexo 17 da ICAO',
    errorTitle: 'Não foi possível carregar esta página', errorDescription: 'Ocorreu um erro inesperado. Tente novamente; se o problema persistir, entre em contato conosco.', retry: 'Tentar novamente',
    notFound: 'Página não encontrada', notFoundDescription: 'O endereço pode ter mudado ou não estar mais disponível.', backHome: 'Voltar para o início', error404: 'Erro 404',
    goToSlide: 'Ir para o slide',
    welcome: 'Seja Bem-Vindo', fullMotion: 'Simulador com movimento completo', crmCorporate: 'CRM - Corporativo',
    images: { runway: 'Pista de aeroporto', instructor: 'Instrutor em sala de aula', partner: 'Logotipo de parceiro', connections: 'Conexões globais', sky: 'Céu', headquarters: 'Sede da HTC', meeting: 'Reunião corporativa', corporateTraining: 'Instrutor conduzindo treinamento corporativo', wing: 'Asa de aeronave', cockpit: 'Tripulação na cabine de comando', cargo: 'Logística de cargas', security: 'Segurança aeroportuária', hangar: 'Hangar' },
  },
  en: {
    language: 'Language', openMenu: 'Open menu', closeMenu: 'Close menu', whatsapp: 'Contact us on WhatsApp',
    since: 'Since 2004', history: 'Our History', years: 'Years', experience: 'Experience', students: 'Students',
    topRated: 'Top Rated', aviationTraining: 'Aviation Training', corporateTrust: 'Corporate Trust', leadership: 'Leadership',
    b2b: 'B2B Solutions', support: '24/7 Support', headquarters: 'Headquarters', processing: 'Processing...', sending: 'Sending',
    messageSent: 'Message sent successfully!', requestSent: 'Request sent successfully!', sendError: 'The message could not be sent. Please try again.',
    errors: { 400: 'Check the form details and try again.', 413: 'The message is too long. Shorten it and try again.', 415: 'The form could not be processed. Refresh the page and try again.', 429: 'Too many requests. Wait a few minutes and try again.', 503: 'Sending is temporarily unavailable. Contact us on WhatsApp or try again later.' },
    anac: 'ANAC Approved', iata: 'IATA Accredited', pf: 'PF Compliant', icao: 'ICAO Standard', international: 'International Validity', accredited: 'Accredited',
    certified: 'Certified', fidelity: 'High Fidelity', initial: 'Initial', recurrent: 'Recurrent', ground: 'Ground Operations', flight: 'In-Flight Security',
    experts: 'Our Experts', qualifications: 'Qualifications & Certifications', transparency: 'Transparency', portfolio: 'Full Portfolio', legal: 'Legal',
    professional: 'Professional Qualification', prerequisites: 'Prereq: ', syllabus: 'Course Syllabus', coursePage: 'View Course Page', difference: 'The HTC Difference',
    soldOut: 'Sold Out', imagesDisclaimer: 'Images are for illustrative purposes only.', menu: 'Menu', avsec: 'AVSEC - Security', safety: 'SGSO - Safety',
    linkedin: 'HTC Training and Business on LinkedIn', expertise: 'HTC Expertise', isCompliant: 'IS 00-002 Compliant', online: 'In-Company / Online', icaoAnnex: 'ICAO Annex 17',
    errorTitle: 'This page could not be loaded', errorDescription: 'An unexpected error occurred. Try again; if the problem persists, please contact us.', retry: 'Try again',
    notFound: 'Page not found', notFoundDescription: 'The address may have changed or may no longer be available.', backHome: 'Back to home', error404: 'Error 404',
    goToSlide: 'Go to slide',
    welcome: 'Welcome', fullMotion: 'Full Motion Simulator', crmCorporate: 'CRM - Corporate',
    images: { runway: 'Airport runway', instructor: 'Instructor in classroom', partner: 'Partner logo', connections: 'Global connections', sky: 'Sky', headquarters: 'HTC headquarters', meeting: 'Corporate meeting', corporateTraining: 'Instructor leading corporate training', wing: 'Aircraft wing', cockpit: 'Cockpit crew', cargo: 'Cargo logistics', security: 'Airport security', hangar: 'Hangar' },
  },
  es: {
    language: 'Idioma', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', whatsapp: 'Contactar por WhatsApp',
    since: 'Desde 2004', history: 'Nuestra historia', years: 'Años', experience: 'Experiencia', students: 'Alumnos',
    topRated: 'Mejor valorado', aviationTraining: 'Capacitación en aviación', corporateTrust: 'Confianza corporativa', leadership: 'Liderazgo',
    b2b: 'Soluciones B2B', support: 'Atención 24/7', headquarters: 'Sede operacional', processing: 'Procesando...', sending: 'Enviando',
    messageSent: '¡Mensaje enviado correctamente!', requestSent: '¡Solicitud enviada correctamente!', sendError: 'No se pudo enviar el mensaje. Inténtelo de nuevo.',
    errors: { 400: 'Revise los datos del formulario e inténtelo de nuevo.', 413: 'El mensaje es demasiado largo. Reduzca el texto e inténtelo de nuevo.', 415: 'No se pudo procesar el formulario. Actualice la página e inténtelo de nuevo.', 429: 'Demasiados intentos de envío. Espere unos minutos e inténtelo de nuevo.', 503: 'El envío no está disponible temporalmente. Contáctenos por WhatsApp o inténtelo más tarde.' },
    anac: 'Homologado ANAC', iata: 'Acreditado IATA', pf: 'Homologado PF', icao: 'Estándar ICAO', international: 'Validez internacional', accredited: 'Acreditado',
    certified: 'Certificado', fidelity: 'Alta fidelidad', initial: 'Inicial', recurrent: 'Recurrente', ground: 'Operaciones en tierra', flight: 'Seguridad en vuelo',
    experts: 'Nuestros especialistas', qualifications: 'Cualificaciones y certificaciones', transparency: 'Transparencia', portfolio: 'Portafolio completo', legal: 'Información legal',
    professional: 'Cualificación profesional', prerequisites: 'Requisitos: ', syllabus: 'Programa del curso', coursePage: 'Página del curso', difference: 'La diferencia HTC',
    soldOut: 'Agotado', imagesDisclaimer: 'Imágenes únicamente ilustrativas.', menu: 'Menú', avsec: 'AVSEC - Seguridad', safety: 'SGSO - Seguridad',
    linkedin: 'HTC Training and Business en LinkedIn', expertise: 'Experiencia HTC', isCompliant: 'Conforme a IS 00-002', online: 'In-Company / En línea', icaoAnnex: 'Anexo 17 de la ICAO',
    errorTitle: 'No se pudo cargar esta página', errorDescription: 'Se produjo un error inesperado. Inténtelo de nuevo; si el problema persiste, póngase en contacto con nosotros.', retry: 'Intentar de nuevo',
    notFound: 'Página no encontrada', notFoundDescription: 'La dirección puede haber cambiado o ya no estar disponible.', backHome: 'Volver al inicio', error404: 'Error 404',
    goToSlide: 'Ir a la diapositiva',
    welcome: 'Bienvenido', fullMotion: 'Simulador de movimiento completo', crmCorporate: 'CRM - Corporativo',
    images: { runway: 'Pista de aeropuerto', instructor: 'Instructor en el aula', partner: 'Logotipo de empresa asociada', connections: 'Conexiones globales', sky: 'Cielo', headquarters: 'Sede de HTC', meeting: 'Reunión corporativa', corporateTraining: 'Instructor impartiendo capacitación corporativa', wing: 'Ala de aeronave', cockpit: 'Tripulación en la cabina de mando', cargo: 'Logística de carga', security: 'Seguridad aeroportuaria', hangar: 'Hangar' },
  },
};
