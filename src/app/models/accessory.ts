export interface Accessory {
  name: string;
  price: number;
  description: string;
  badge?: string;
  colors?: string[];
  image: string;
  category: 'lace' | 'tiara' | 'kit' | 'hairpin' | 'scrunchie';
  highlight?: string;
  tags?: string[];
}

export interface FeatureHighlight {
  title: string;
  description: string;
  icon: string;
  accent: string;
}
