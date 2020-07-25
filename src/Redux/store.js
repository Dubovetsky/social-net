import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'hi!', likesCount: 2 },
        { id: 2, message: 'hello!', likesCount: 12 },
        { id: 3, message: "WTF!", likesCount: 4 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Mary' },
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Chan' },
        { id: 5, name: 'Victoria' },
        { id: 6, name: 'Albert' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: "I'm ready" },
        { id: 4, message: 'Hello' },
        { id: 5, message: 'Hello' },
      ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}





window.store = store;

export default store;