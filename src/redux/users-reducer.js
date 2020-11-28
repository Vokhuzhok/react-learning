import { userApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 10,
  usersCount: 20,
  currentPage: 1,
  isFetching: false
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
      case TOGGLE_IS_FETCHING:
        return {
          ...state,
          isFetching: action.isFetching
        }
    default:
      return state;
  }
};

export const followAccept = (id) => ({ type: FOLLOW, id });
export const unfollowAccept = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage})
export const setUsersCount = (count) => ({ type: SET_USERS_COUNT, count})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching})

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch (setPage(currentPage));
    dispatch (toggleIsFetching (true));
    userApi.getUsers(currentPage, pageSize)
      .then ((data) => {
        dispatch (setUsers(data.items));
        dispatch (setUsersCount(data.totalCount));
        dispatch (toggleIsFetching (false));
    });
  }
}

export const unfollow = (userId) =>{
  return (dispatch) => {
    userApi.fDelete(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch (unfollowAccept(userId));
      }
    })
  }
}

export const follow = (userId) =>{
  return (dispatch) => {
    userApi.fPost(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch (followAccept(userId));
      }
    })
  }
}

export default usersReducer;
