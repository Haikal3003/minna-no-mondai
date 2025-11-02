import axios from 'axios';

const PUBLIC_API_KANJI_URL = 'https://kanjiapi.dev/v1/kanji';

export async function getKanjis(jlpt_level: string = '5'): Promise<string[]> {
  try {
    const res = await axios.get(`${PUBLIC_API_KANJI_URL}/jlpt-${jlpt_level.toLowerCase()}`);
    return res.data;
  } catch (error) {
    console.error(`Failed to fetch kanji for JLPT level ${jlpt_level}:`, error);
    return [];
  }
}
