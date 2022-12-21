export interface IPhonetics {
  text: string;
  audio?: string;
}

export interface IMeanings {
  partOfSpeech: string;
  definitions: IDefinitions[];
  synonyms: string[];
  antonyms: string[];
}

interface IDefinitions {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface ILicense {
  name: string;
  url: string;
}