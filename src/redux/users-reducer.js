const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      nickName: "Dimario",
      location: { city: "Novosibirsk", country: "Russia" },
      status: "I`m cocoboy!",
      ava: 'https://im0-tub-ru.yandex.net/i?id=e7056df606729eda3e71de935fc9ceaa&n=13'
    },
    {
        id: 2,
        followed: false,
        nickName: "Hotwing",
        location: { city: "Atlanta", country: "USA" },
        status: "I`m cowboy!",
        ava: 'https://im0-tub-ru.yandex.net/i?id=f06e9a49382aad64dc77352aca0697e0&n=13'
    },
    {
      id: 3,
      followed: false,
      nickName: "Fedor",
      location: {city: "Kiev", country: "Ukrane"},
      status: "I`m busy",
      ava: 'https://i.pinimg.com/originals/56/13/48/5613485bf0c2f745866fd957a3ffe29a.jpg'
    },
    {
      id: 4,
      followed: true,
      nickName: "Isamuil",
      location: {city: "Istambul", country: "Turcey"},
      status: "I`m osman",
      ava: 'https://im0-tub-ru.yandex.net/i?id=6cecb7042c475c596b995fe3297fc493&n=13'
    }
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return { ...state,
        users: state.users.map ( u => {
          if (u.id === action.id){
            return {...u, followed: true}
          }
          return u;
        })
      };
    case UNFOLLOW:
      return { ...state,
        users: state.users.map ( u => {
          if (u.id === action.id){
            return {...u, followed: false}
          }
          return u;
        })
      };
    default:
      return state;
  }
};

export const followAC = (id) => ({ type: FOLLOW, id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, id });

export default usersReducer;
