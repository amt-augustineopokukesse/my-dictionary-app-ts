import axios from 'axios';

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export interface Definition {
  word: string;
  phonetics: { text: string; audio: string }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
    }[];
  }[];
}

export async function getDefinition(word: string): Promise<Definition[]> {
  const url = `${BASE_URL}/${word}`;
  const response = await axios.get(url);
  return response.data;
}
