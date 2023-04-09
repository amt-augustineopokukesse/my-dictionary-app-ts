import axios from 'axios';

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export interface Definition {
  word: string;
  phonetic: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  phonetics: {
    text: string;
    audio: string;
    sourceUrl?: string;
    license?: {
      name: string;
      url: string;
    };
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}



export async function getDefinition(word: string): Promise<Definition[]> {
  try {
    const url = `${BASE_URL}/${word}`;
    const response = await axios.get(url);
    return response.data;
  } catch(Error) {
    console.error(Error)
    return Promise.reject(Error);
  }
}
