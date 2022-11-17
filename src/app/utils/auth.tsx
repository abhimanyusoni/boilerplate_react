const keys = {
  SESSION: "swatUser",
  TOKEN: "swatToken",
  IS_TOKEN_EXPIRED: "isTokenExpired",
  IS_AUTH: "isAuthenticated",
  USER: "user",
};

export default keys;

export const setSession = (session: any) =>
  localStorage.setItem(keys.SESSION, JSON.stringify(session));

export const getSession = () =>
  JSON.parse(localStorage.getItem(keys.SESSION) || "");

export const removeSession = () => {
  localStorage.removeItem(keys.SESSION);
  localStorage.removeItem(keys.IS_TOKEN_EXPIRED);
};

export const setToken = (token: any) =>
  localStorage.setItem(keys.TOKEN, JSON.stringify(token));

export const getToken = () =>
  JSON.parse(localStorage.getItem(keys.TOKEN) || "");

export const removeToken = () => {
  localStorage.removeItem(keys.TOKEN);
  localStorage.removeItem(keys.IS_TOKEN_EXPIRED);
};

export const setExpiredToken = () =>
  localStorage.setItem(keys.IS_TOKEN_EXPIRED, JSON.stringify(true));

export const getExpiredToken = () =>
  JSON.parse(localStorage.getItem(keys.IS_TOKEN_EXPIRED) || "");

export const setAuth = () => {
  localStorage.setItem(keys.IS_AUTH, JSON.stringify(true));
};

export const getAuth = () => {
  if (localStorage.getItem("isAuthenticated") === null) {
    return localStorage.setItem(keys.IS_AUTH, JSON.stringify(false));
  } else {
    return JSON.parse(localStorage.getItem(keys.IS_AUTH) || "");
  }
};

export const removeAuth = () => localStorage.removeItem(keys.IS_AUTH);

export const setUserId = (userId: string) =>
  localStorage.setItem(keys.USER, JSON.stringify(userId));

export const getUserId = () =>
  JSON.parse(localStorage.getItem(keys.USER) || "");

export const removeUserId = () => localStorage.removeItem(keys.USER);

export const logout = (e: React.SyntheticEvent) => {
  e.preventDefault();
  localStorage.clear();
  sessionStorage.clear();
  setTimeout(() => {
    window.location.reload();
  }, 500);
};
