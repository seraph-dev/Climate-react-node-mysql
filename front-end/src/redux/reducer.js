import ActionType from "./action.type";

const initialState = {
  city: {},
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SETTING_CITY:
      return { ...state, city: action.payload };
    default:
      return state;
  }
};

export default Reducer;
