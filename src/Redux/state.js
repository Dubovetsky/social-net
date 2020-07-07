  let rerenderEntireTree = () => {

  }
  let state = {
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
      }
  }

  window.state=state;

  export const addPost = () => {
      let newPost = {
          id:5,
          message: state.profilePage.newPostText,
          likesCount:0,
      };
      state.profilePage.posts.push(newPost);
      state.profilePage.newPostText='';
      rerenderEntireTree(state);
  }
  export const updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}
  export default state;