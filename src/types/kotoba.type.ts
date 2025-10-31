export interface Kotoba {
  id: string;
  hiragana: string;
  katakana?: string;
  kanji?: string;
  meaning: string;
  type: string;
  source: string;
  chapter?: string;
}

export type KotobaType = 'kk' | 'ks' | 'kb';

export type KotobaSource = 'irodori1' | 'irodori2';
