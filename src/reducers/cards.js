export const cards = (state = [], action) => {
  switch  (action.type) {
    case 'ADD_ALL':
      return [...state, ...action.cards]
    default:
      return state
  }
}