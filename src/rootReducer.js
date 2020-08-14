const INITIAL_STATE = { memes: [], deadMemes: [] };

export default function rootReducer(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case "ADD_MEME":
      return {...state, memes: [...state.memes, payload]}
    case "DELETE_MEME":
      const newMemeArr = [...state.memes]
      newMemeArr.splice(payload, 1)
      return {...state, memes: [...newMemeArr]}
    default:
      return state;
  }
}