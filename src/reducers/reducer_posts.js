import _ from "lodash";

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

export default function(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_POST:
      return { ...state, [payload.data.id]: payload.data };

    case FETCH_POSTS:
      return _.mapKeys(payload.data, "id");

    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
