import { DataActionTypes, WordAction, WordState } from "../../types/word";

const initialState: WordState = {
  searchQuery: "",
  data: [],
  loading: false,
  error: null,
};

export const wordReducer = (
  state = initialState,
  action: WordAction
): WordState => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA:
      return { ...state, loading: true, error: null };
    case DataActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case DataActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DataActionTypes.SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    default:
      return state;
  }
};
