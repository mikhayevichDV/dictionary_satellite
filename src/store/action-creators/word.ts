import { DataActionTypes, IQuery, WordAction } from "../../types/word";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchWord = (
  word: string
): ((dispatch: Dispatch<WordAction>) => Promise<void>) => {
  return async (dispatch: Dispatch<WordAction>): Promise<void> => {
    try {
      dispatch({ type: DataActionTypes.FETCH_DATA });
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      dispatch({
        type: DataActionTypes.FETCH_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: DataActionTypes.FETCH_DATA_ERROR,
        payload: "Произошла ошибка при загрузке",
      });
    }
  };
};

export const searchQueryAction = (payload: string): IQuery => ({
  type: DataActionTypes.SEARCH_QUERY,
  payload,
});
