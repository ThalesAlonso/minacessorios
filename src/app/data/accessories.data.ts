import { Accessory, FeatureHighlight } from '../models/accessory';

export const HERO_ACCESSORIES: Accessory[] = [
  {
    name: 'Laço Aurora Boreal',
    price: 69.9,
    description: 'Cetim duplo com acabamento brilhante e pin personalizado. Limitado a 50 unidades.',
    badge: 'Nova cor',
    category: 'lace',
    image: 'assets/illustrations/laco-aurora.svg',
    highlight: 'brilho',
    tags: ['Hipoalergênico', 'Feito à mão', 'Infantil e adulto']
  },
  {
    name: 'Tiara Jardim Rosé',
    price: 84.5,
    description: 'Base flexível, conforto extremo e flores de organza com micro pérolas.',
    badge: 'Coleção Rosé',
    category: 'tiara',
    image: 'assets/illustrations/tiara-rose.svg',
    highlight: 'delicadeza',
    tags: ['Ultra leve', 'Não marca o cabelo', 'Acabamento premium']
  },
  {
    name: 'Kit Mini Charming',
    price: 59.9,
    description: 'Trio de laços pequenos em tons blush, ideal para combinar com diferentes looks.',
    badge: 'Kit 3 peças',
    category: 'kit',
    image: 'assets/illustrations/kit-mini.svg',
    highlight: 'kit',
    tags: ['Tecido macio', 'Clipe com silicone', 'Para todas as idades']
  }
];

export const NEW_ARRIVALS: Accessory[] = [
  {
    name: 'Laço Classic Nude',
    price: 54.9,
    description: 'Camadas suaves em gorgurão italiano, perfeito para o dia a dia.',
    category: 'lace',
    image: 'assets/illustrations/laco-nude.svg',
    colors: ['#fce3e8', '#f5d1d9', '#f7b9c6'],
    tags: ['Clássico', 'Casual', 'Feito à mão']
  },
  {
    name: 'Laço Noite Estrelada',
    price: 74.9,
    description: 'Toque cintilante com cristais sutis e fecho hipoalergênico.',
    category: 'lace',
    image: 'assets/illustrations/laco-noite.svg',
    colors: ['#1f1426', '#2f2238', '#5b4b78'],
    tags: ['Cristais', 'Ocasiões especiais', 'Não escorrega']
  },
  {
    name: 'Scrunchie Seda Blush',
    price: 42.5,
    description: 'Protege o cabelo com tecido macio de seda vegana e elástico reforçado.',
    category: 'scrunchie',
    image: 'assets/illustrations/scrunchie.svg',
    colors: ['#f7c3d6', '#fbe2ec', '#fbb7d6'],
    tags: ['Seda vegana', 'Sem marcas', 'Uso noturno']
  },
  {
    name: 'Tiara Velvet Moon',
    price: 79.9,
    description: 'Veludo importado com brilho perolado e base ergonômica ultraleve.',
    category: 'tiara',
    image: 'assets/illustrations/tiara-velvet.svg',
    colors: ['#2c1f35', '#b88acb', '#f0e5f7'],
    tags: ['Veludo', 'Conforto', 'Premium']
  },
  {
    name: 'Hairpin Pérola Solar',
    price: 38.0,
    description: 'Mix de micro pérolas e dourado para um toque minimalista.',
    category: 'hairpin',
    image: 'assets/illustrations/hairpin.svg',
    colors: ['#f3d4cf', '#fdf4e6', '#fbe9da'],
    tags: ['Minimalista', 'Anti ferrugem', 'Dourado']
  },
  {
    name: 'Laço Garden Bloom',
    price: 64.5,
    description: 'Estampa exclusiva floral com laço estruturado e brilho suave.',
    category: 'lace',
    image: 'assets/illustrations/laco-garden.svg',
    colors: ['#f6d9d4', '#f3b6a5', '#f8d8b4'],
    tags: ['Estampa autoral', 'Coleção cápsula', 'Limitado']
  }
];

export const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
  {
    title: 'Pagamento seguro com PayPal',
    description: 'Estrutura pronta para integrar checkout, carrinho e preferências de entrega com PayPal.',
    icon: '🛍️',
    accent: '#f35b92'
  },
  {
    title: 'Materiais hipoalergênicos',
    description: 'Fitas, elásticos e presilhas testadas para não marcar nem puxar os fios.',
    icon: '💖',
    accent: '#f59e0b'
  },
  {
    title: 'Envio rápido e rastreável',
    description: 'Separação no mesmo dia em compras até 15h e código de rastreio automático.',
    icon: '🚚',
    accent: '#10b981'
  }
];

export const COLLECTIONS = [
  {
    title: 'Coleção Rosé',
    detail: 'Pontos de luz com pérolas, organza e variações de rosa antigo.',
    badge: 'Elegância',
    accent: '#f35b92'
  },
  {
    title: 'Coleção Garden',
    detail: 'Florais autorais, toques botânicos e texturas naturais.',
    badge: 'Natureza',
    accent: '#34d399'
  },
  {
    title: 'Coleção Glow',
    detail: 'Brilhos sutis para festas e ocasiões especiais, sem pesar.',
    badge: 'Festas',
    accent: '#8b5cf6'
  }
];
