export const addCard = (cardTitle) => ({
  type: ADD_CARD,
  id: uuid.v4(),
  cardTitle
})

export const addList = (listTitle) => ({
  type: ADD_LIST,
  id: uuid.v4(),
  listTitle
})

export const activateModal = (cardId, listId) => ({
  type: ACTIVATE_MODAL,
  cardId,
  listId
})

export const editCardModal = (cardId, listId, title, text) => ({
  type: EDIT_CARD_MODAL,
  cardId,
  listId,
  title,
  text
})

//TODO: add uuid!!!!!!!!!!!!!!