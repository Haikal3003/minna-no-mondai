import axios from 'axios';

export async function getKanjis(jlpt_level: string = '5'): Promise<string[]> {
  try {
    const res = await axios.get(`${import.meta.env.VITE_KANJI_API_URL}/jlpt-${jlpt_level.toLowerCase()}`);
    console.log('API result:', res.data);

    return res.data;
  } catch (error) {
    console.error(`Failed to fetch kanji for JLPT level ${jlpt_level}:`, error);
    return [];
  }
}
