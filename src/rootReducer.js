const INITIAL_STATE = { memes: [] };

export default function rootReducer(state = INITIAL_STATE.memes, action) {
  const {type, payload} = action;
  switch (type) {
    case "ADD_MEME":
      return [...state, payload]
    default:
      return state;
  }
}