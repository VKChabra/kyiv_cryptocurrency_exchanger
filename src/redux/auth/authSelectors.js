export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const getUserToken = state => state.auth.token;

const authSelectors = {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  getUserToken,
};

export default authSelectors;
