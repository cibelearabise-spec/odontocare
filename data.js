// Especialidades odontológicas exibidas no app, cada uma com um emoji
// que remete ao tipo de tratamento (mantém consistência com a versão do app).
const SPECIALTIES = [
  {
    key: 'Ortodontia',
    emoji: '😬',
    bg: '#FBEAE6',
    description: 'Corrige a posição dos dentes e dos ossos maxilares mal posicionados.',
  },
  {
    key: 'Endodontia',
    emoji: '🦷',
    bg: '#F3ECFB',
    description: 'Trata a polpa e o canal radicular do dente.',
  },
  {
    key: 'Implantodontia',
    emoji: '🔩',
    bg: '#FBEAE6',
    description: 'Substitui dentes perdidos por implantes.',
  },
  {
    key: 'Periodontia',
    emoji: '🩸',
    bg: '#F3ECFB',
    description: 'Cuida da saúde da gengiva e dos tecidos de sustentação do dente.',
  },
  {
    key: 'Odontopediatria',
    emoji: '👶',
    bg: '#FBEAE6',
    description: 'Odontologia voltada para crianças.',
  },
  {
    key: 'Cirurgia e Traumatologia Buco-Maxilo-Facial',
    emoji: '✂️',
    bg: '#F3ECFB',
    description: 'Cirurgias na boca, face e mandíbula.',
  },
  {
    key: 'Dentística',
    emoji: '🎨',
    bg: '#FBEAE6',
    description: 'Restaurações estéticas e funcionais dos dentes.',
  },
  {
    key: 'Harmonização Orofacial',
    emoji: '✨',
    bg: '#F3ECFB',
    description: 'Procedimentos estéticos faciais.',
  },
  {
    key: 'Prótese',
    emoji: '🦴',
    bg: '#FBEAE6',
    description: 'Próteses dentárias fixas ou removíveis.',
  },
  {
    key: 'Estomatologia',
    emoji: '🔬',
    bg: '#F3ECFB',
    description: 'Diagnóstico de doenças da boca.',
  },
];

function initials(name) {
  return name
    .replace('Dr. ', '')
    .replace('Dra. ', '')
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function specialtyInfo(key) {
  return SPECIALTIES.find((s) => s.key === key);
}
