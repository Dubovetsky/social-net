const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Peaky Blinders is a British period crime drama television series created by Steven Knight. Set in Birmingham, England, the series follows the exploits of the Shelby crime family in the direct aftermath of the First World War. The fictional family is loosely based on a real 19th-century urban youth gang of the same name, who were active in the city from the 1890s to the early twentieth century.', likesCount: 2 },
    { id: 2, message: 'Peaky Blinders is a Roma-origin gangster family epic set in Birmingham, England, in 1919, several months after the end of the First World War in November 1918. The story centres on the Peaky Blinders gang and their ambitious and highly cunning boss Tommy Shelby (Cillian Murphy). The gang comes to the attention of Major Chester Campbell (Sam Neill), a Detective Chief Inspector in the Royal Irish Constabulary (R.I.C.) sent over by Winston Churchill from Belfast, where he had been sent to clean up the city of the Irish Republican Army (I.R.A.), Communists, gangs and common criminals.[4][5] Winston Churchill (played by Andy Nyman in Series 1 and Richard McCabe in Series 2) charged him with suppressing disorder and uprising in Birmingham and recovering a stolen cache of arms meant to be shipped to Libya.[6][7] The first series concludes on 3 December 1919 – "Black Star Day", the event where the Peaky Blinders plan to take over Billy Kimbers betting pitches at the Worcester Races.', likesCount: 12 },
    { id: 3, message: "Birmingham Press Club is a press club based in the English city of Birmingham. Established in 1865, just six years after Concordia Press Club in Vienna, became the second oldest organisation of its type in the world. The club hosts a number of prestigious events, including the annual Midlands Media Awards. Members include print journalists from newspapers and magazines, as well as those from radio and television from around the Midlands, while several prominent figures have been inducted as honorary members, including journalists Ludovic Kennedy and Michael Parkinson, as well as Earl Spencer, the brother of Diana, Princess of Wales, and former British Prime Minister Margaret Thatcher.", likesCount: 4 },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer;