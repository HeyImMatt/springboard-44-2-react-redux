const INITIAL_STATE = { memes: [], deadMemes: [] };

export default function rootReducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case "ADD_MEME":
      return {...state, memes: [...state.memes, payload]}
    default:
      return state;
  }
}