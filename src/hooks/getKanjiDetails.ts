import axios from 'axios';

const PUBLIC_KANJI_RAPIDAPI_URL = import.meta.env.VITE_PUBLIC_KANJI_RAPIDAPI_URL;

export async function getKanjiDetails(kanji: string) {
  try {
    const res = await axios.get(`${PUBLIC_KANJI_RAPIDAPI_URL}/${kanji}`, {
      headers: {
        'x-rapidapi-key': `${import.meta.env.VITE_RAPIDAPI_KEY}`,
        'x-rapidapi-host': `${import.meta.env.VITE_RAPIDAPI_HOST}`,
      },
    });

    return res.data;
  } catch (error) {
    console.error('Error fetching kanji details:', error);
    return null;
  }
}
