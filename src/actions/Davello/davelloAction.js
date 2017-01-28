export const addCard = (cardTitle) => ({
  type: ADD_CARD,
  id: uuid.v4(),
  cardTitle
})

export const toggleModal = (id) => ({
  type: TOGGLE_MODAL,
  id
})

export const editCardModal = (id, title, text) => ({
  type: EDIT_CARD_MODAL,
  id,
  title,
  text
})

//TODO: add uuid!!!!!!!!!!!!!!
//TODO: add list after cards are working!!!!