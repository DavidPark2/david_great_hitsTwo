const card = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: action.id,
        cardTitle: action.cardTitle,
        modal: false
      }
    case 'TOGGLE_MODAL':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        modal: !state.modal
      }
    case 'EDIT_CARD_MODAL':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        cardTitle: title,
        cardText: text
      }
    default:
      return state
  }
}

const cards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        card(undefined, action)
      ]
    case 'TOGGLE_MODAL':
      return state.map(t =>
        card(t, action)
      )
    case 'EDIT_CARD_MODAL':
      return state.map(t =>
        card(t, action)
      )
    default:
      return state
  }
}

export default cards