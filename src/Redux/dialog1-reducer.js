const UPDATE_NEW_MESSAGE_BODY1 = 'UPDATE-NEW-MESSAGE-BODY1';
const SEND_MESSAGE1 = 'SEND-MESSAGE1';

let initialState = {
  dialogs1: [
    { id: 1, name: 'Thomas' },
    { id: 2, name: 'Arthur' },
    { id: 3, name: 'Thomas' },
    { id: 4, name: 'Arthur' },
    { id: 5, name: 'Thomas' },
    { id: 6, name: 'Arthur' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: "I'm ready" },
    { id: 4, message: 'Fine' },
    { id: 5, message: '10 am' },
  ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY1:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE1:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE1 })
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY1,
  body: body
})

export default dialogsReducer;