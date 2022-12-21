import { IMeanings, IPhonetics, ILicense } from "./wordProps";

export interface WordState {
  searchQuery: string;
  data: IData[];
  loading: boolean;
  error: null | string;
}

export enum DataActionTypes {
  FETCH_DATA = "FETCH_DATA",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
  SEARCH_QUERY = "SEARCH_QUERY",
}

export interface IQuery {
  type: DataActionTypes.SEARCH_QUERY;
  payload: string;
}

export interface IData {
  word: string;
  phonetic: string;
  phonetics: IPhonetics[];
  license: ILicense;
  meanings: IMeanings[];
}

interface FetchDataAction {
  type: DataActionTypes.FETCH_DATA;
}

interface FetchDataSuccessAction {
  type: DataActionTypes.FETCH_DATA_SUCCESS;
  payload: IData[];
}

interface FetchDataErrorAction {
  type: DataActionTypes.FETCH_DATA_ERROR;
  payload: string;
}

export type WordAction =
  | FetchDataAction
  | FetchDataSuccessAction
  | FetchDataErrorAction
  | IQuery;
