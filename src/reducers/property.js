
import { GET_LEADS, GET_LEAD, DELETE_LEAD, ADD_LEAD, CLEAR_LEADS } from '../actions/types.js';

const initialState = {
  property: [],
  property_detail: [],
  sharable_items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        property: action.payload,
      };
    case GET_LEAD:
        return {
            ...state,
            property_detail: action.payload,
            sharable_items: action.payload.sharableItems,
        };
    // case DELETE_LEAD:
    //   return {
    //     ...state,
    //     leads: state.leads.filter((lead) => lead.id !== action.payload),
    //   };
    // case ADD_LEAD:
    //   return {
    //     ...state,
    //     leads: [...state.leads, action.payload],
    //   };
    // case CLEAR_LEADS:
    //   return {
    //     ...state,
    //     leads: [],
    //   };
    default:
      return state;
  }
}