import axios from "axios";

export const FETCH_TOILETS = 'toilets/FETCH_TOILETS';
export const FETCH_TOILETS_SUCCESS = 'toilets/FETCH_TOILETS_SUCCESS';

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOILETS:
      return {
        ...state
      };

    case FETCH_TOILETS_SUCCESS:
      return {
        ...state,
        list: action.payload
      };

    default:
      return state;
  }
};

export const fetchToilets = () => {
  return dispatch => {
    dispatch({
      type: FETCH_TOILETS
    });
    
    // GET data from server or file.
    return axios.get("/static/data.json").then((response)=>{
      dispatch({
        type: FETCH_TOILETS_SUCCESS,
        payload: response.data
      });
    });

  };
};