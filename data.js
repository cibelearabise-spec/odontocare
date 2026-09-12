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

// Base de dados de exemplo (poderia vir de uma API/Firebase real no futuro)
const DOCTORS = [
  { id: 1, name: 'Dra. Emma Wilson', specialty: 'Ortodontia', place: 'Clínica Sorriso Perfeito' },
  { id: 2, name: 'Dr. Marcus Lee', specialty: 'Endodontia', place: 'Central Odonto' },
  { id: 3, name: 'Dra. Sofia Rossi', specialty: 'Implantodontia', place: 'Implant Center' },
  { id: 4, name: 'Dr. Bruno Alves', specialty: 'Periodontia', place: 'Clínica GengivaSaudável' },
  { id: 5, name: 'Dra. Helena Cruz', specialty: 'Odontopediatria', place: 'Kids Dental' },
  { id: 6, name: 'Dr. Daniel Kim', specialty: 'Cirurgia e Traumatologia Buco-Maxilo-Facial', place: 'Hospital Odontológico Central' },
  { id: 7, name: 'Dra. Larissa Nunes', specialty: 'Dentística', place: 'Studio Dental' },
  { id: 8, name: 'Dr. Rafael Costa', specialty: 'Harmonização Orofacial', place: 'Estética Facial Odonto' },
  { id: 9, name: 'Dra. Camila Dias', specialty: 'Prótese', place: 'Prótese & Cia' },
  { id: 10, name: 'Dr. André Farias', specialty: 'Estomatologia', place: 'Diagnóstico Bucal SP' },
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
