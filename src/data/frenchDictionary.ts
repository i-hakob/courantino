export type FrenchEntry = {
  word: string;
  translation: string;
  pronunciation: string;
};

const ENTRIES: FrenchEntry[] = [
  { word: 'salut', translation: 'hi / bye (informal)', pronunciation: 'sah-LEW' },
  { word: 'bonjour', translation: 'hello / good day', pronunciation: 'bohn-ZHOOR' },
  { word: 'merci', translation: 'thank you', pronunciation: 'mehr-SEE' },
  { word: 'au', translation: "to (part of 'au revoir' = goodbye)", pronunciation: 'oh' },
  { word: 'revoir', translation: "see again (part of 'au revoir' = goodbye)", pronunciation: 'ruh-VWAHR' },
  { word: 'je', translation: 'I', pronunciation: 'zhuh' },
  { word: "m'appelle", translation: "am called (from 'je m'appelle' = my name is)", pronunciation: 'mah-PELL' },
  { word: 'appelle', translation: 'call(s) / is called', pronunciation: 'ah-PELL' },
  { word: "t'appelles", translation: "you are called (from 'tu t'appelles')", pronunciation: 'tah-PELL' },
  { word: "s'appelle", translation: 'he/she is called', pronunciation: 'sah-PELL' },
  { word: 'comment', translation: 'how / what', pronunciation: 'koh-MAHN' },
  { word: 'tu', translation: 'you (informal)', pronunciation: 'tew' },
  { word: 'ça', translation: 'it / that', pronunciation: 'sah' },
  { word: 'va', translation: 'goes / is going', pronunciation: 'vah' },
  { word: 'bien', translation: 'well / good', pronunciation: 'byan' },
  { word: 'mal', translation: 'bad / badly', pronunciation: 'mahl' },
  { word: 'comme', translation: "like / as (from 'comme ci, comme ça' = so-so)", pronunciation: 'kum' },
  { word: 'ci', translation: "here (from 'comme ci, comme ça' = so-so)", pronunciation: 'see' },
  { word: 'enchanté', translation: 'nice to meet you / delighted', pronunciation: 'ahn-shahn-TAY' },
  { word: 'et', translation: 'and', pronunciation: 'ay' },
  { word: 'toi', translation: 'you (emphatic)', pronunciation: 'twah' },
  { word: 'voici', translation: 'here is / here are', pronunciation: 'vwah-SEE' },
  { word: 'ma', translation: 'my (feminine)', pronunciation: 'mah' },
  { word: 'mon', translation: 'my (masculine)', pronunciation: 'mohn' },
  { word: 'mes', translation: 'my (plural)', pronunciation: 'may' },
  { word: 'famille', translation: 'family', pronunciation: 'fah-MEE' },
  { word: 'père', translation: 'father', pronunciation: 'pair' },
  { word: 'mère', translation: 'mother', pronunciation: 'mair' },
  { word: 'frère', translation: 'brother', pronunciation: 'frair' },
  { word: 'sœur', translation: 'sister', pronunciation: 'suhr' },
  { word: 'chat', translation: 'cat', pronunciation: 'shah' },
  { word: 'chien', translation: 'dog', pronunciation: 'shyan' },
  { word: 'livre', translation: 'book', pronunciation: 'LEE-vruh' },
  { word: 'livres', translation: 'books', pronunciation: 'LEE-vruh' },
  { word: 'pomme', translation: 'apple', pronunciation: 'pum' },
  { word: 'pommes', translation: 'apples', pronunciation: 'pum' },
  { word: 'maison', translation: 'house', pronunciation: 'may-ZOHN' },
  { word: 'un', translation: 'a / one (masculine)', pronunciation: 'uhn' },
  { word: 'une', translation: 'a / one (feminine)', pronunciation: 'ewn' },
  { word: 'des', translation: 'some (plural)', pronunciation: 'day' },
  { word: 'la', translation: 'the (feminine)', pronunciation: 'lah' },
  { word: 'le', translation: 'the (masculine)', pronunciation: 'luh' },
  { word: "j'ai", translation: 'I have', pronunciation: 'zhay' },
  { word: 'dans', translation: 'in', pronunciation: 'dahn' },
  { word: 'sur', translation: 'on', pronunciation: 'sewr' },
  { word: 'fille', translation: 'girl', pronunciation: 'FEE-yuh' },
  { word: 'garçon', translation: 'boy', pronunciation: 'gar-SOHN' },
  { word: 'deux', translation: 'two', pronunciation: 'duh' },
  { word: 'trois', translation: 'three', pronunciation: 'trwah' },
  { word: 'quatre', translation: 'four', pronunciation: 'KAH-truh' },
  { word: 'cinq', translation: 'five', pronunciation: 'sank' },
  { word: 'il', translation: 'he', pronunciation: 'eel' },
  { word: 'elle', translation: 'she', pronunciation: 'ell' },
  { word: 'non', translation: 'no', pronunciation: 'noh' },
  { word: 'oui', translation: 'yes', pronunciation: 'wee' },
];

const LOOKUP: Record<string, FrenchEntry> = {};
for (const entry of ENTRIES) {
  LOOKUP[entry.word] = entry;
}

function normalize(word: string): string {
  return word.toLowerCase().replace(/[\u2018\u2019\u02BC]/g, "'");
}

export function cleanWordToken(rawToken: string): string {
  return rawToken.replace(/^[^A-Za-zÀ-ÖØ-öø-ÿŒœ']+|[^A-Za-zÀ-ÖØ-öø-ÿŒœ']+$/g, '');
}

export function lookupFrenchWord(rawToken: string): FrenchEntry | null {
  const cleaned = cleanWordToken(rawToken);
  if (!cleaned) return null;
  const key = normalize(cleaned);
  return LOOKUP[key] ?? null;
}
