const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT ="SET_USERS_COUNT";

let initialState = {
  users: [],
  pageSize: 10,
  usersCount: 20,
  currentPage: 1
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
      case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
      case SET_USERS_COUNT:
        return {
          ...state,
          usersCount: action.count
        }
    default:
      return state;
  }
};

export const followAC = (id) => ({ type: FOLLOW, id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, id });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setUsersCountAC = (count) => ({type:SET_USERS_COUNT, count})

export default usersReducer;
